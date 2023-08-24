import * as THREE from "../../../node_modules/three/build/three.module"
import * as ZapparThree from "@zappar/zappar-threejs"
import { GLTFLoader } from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { API } from "../../config/api"
const ArComponent=()=>{

  // VARIABLES

  let plane , Videomesh  , canvas

  const {id} = useParams()
  
  // UseStates 
  const [targetImage, targetFileImage] = useState(null)
  const [getButton , setButton] = useState(null)
  const [getText , setText] = useState(null)
  const [getImage , setImage] = useState(null)
  const [getVideo , setVideo] = useState(null)
  const [get3Dmodel , set3Dmodel] = useState(null)
  const [getScene , setScene] = useState(null)
  const [getProject , setProject] = useState(null)
  const [get2D3D, set2D3D] = useState(null);
  const [ThreeDModel, modelState] = useState(null);

  useEffect(()=>{
    axios.get(API.BASE_URL+"get-zpt-file/"+id+'/').then(function(response) {
      targetFileImage(response.data.data)
    })
    .catch(function(error) {console.log(error)})
    axios.get(API.BASE_URL+"scene_data_by_project/"+id+"/")
    .then(function(res){
      console.log(res.data.scenes[0].id);
      getSceneData(res.data.scenes[0].id)
    })
  },[])

console.log(targetImage , "--------------->")


  function getSceneData (sceneID){
    axios.get(API.BASE_URL+"scene_details/"+sceneID+"/")
    .then(function(res){
      setButton(res.data.data[0].button_data)
      setText(res.data.data[0].text_data)
      setImage(res.data.data[0].image_data)
      setVideo(res.data.data[0].video_data)
      set3Dmodel(res.data.data[0].ThreeDmodeldata)
      setScene(res.data.data[0].scene_data)
      setProject(res.data.data[0].project_content_data);
      set2D3D(res.data.data[0].twoD_threeD_data)
    })
  }



  canvas = document.getElementById( 'ar-viewer' );


if (ZapparThree.browserIncompatible()) {
  // The function shows a full-page dialog that informs the user, they're using an unsupported browser
  ZapparThree.browserIncompatibleUI();
  // If the browser is not compatible, we can avoid setting up the rest of the page
  throw new Error('Unsupported browser');
}

const manager = new ZapparThree.LoadingManager();

const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true });
const scene = new THREE.Scene();
document.body.appendChild(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Create a Zappar camera that we'll use instead of a ThreeJS camera
const camera = new ZapparThree.Camera();
ZapparThree.permissionRequestUI().then((granted) => {
  if (granted) camera.start();
  else ZapparThree.permissionDeniedUI();
});
// The Zappar component needs to know our WebGL context, so set it like this:
ZapparThree.glContextSet(renderer.getContext());
scene.background = camera.backgroundTexture;
manager.onError = (url) => console.log(`There was an error loading ${url}`);

//if(targetImage){
  const imageTracker = new ZapparThree.ImageTrackerLoader(manager).load(targetImage);
  const imageTrackerGroup = new ZapparThree.ImageAnchorGroup(camera, imageTracker);

  scene.add(imageTrackerGroup);
//}
const contentGroup = new THREE.Group();





// Create a plane geometry mesh for the background
if(getImage){
  for (let i = 0; i < getImage.length  &&  getImage !== undefined; i++){
    const Images = getImage[i][0].image_url
    const imageLoader = new THREE.TextureLoader()
    const loadedImage = imageLoader.load(Images)
    loadedImage.minFilter = THREE.LinearFilter;
    loadedImage.magFilter = THREE.LinearFilter;
    plane = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,0.1),
      new THREE.MeshBasicMaterial({ map: loadedImage, transparent: true , opacity:1})
    );
    plane.position.set(0.1,0.3,0.1)
    // plane.position.set(Number(getImage[i][0].image_transform.position_x), Number(getImage[i][0].image_transform.position_y), Number(getImage[i][0].image_transform.position_d)+8)
    plane.rotation.x =getImage[i][0].image_transform.Rotation_x
    plane.rotation.y =getImage[i][0].image_transform.Rotation_y
    plane.rotation.z =getImage[i][0].image_transform.Rotation_z
  }
}
// add our content to the tracking group.
if(getVideo){

  for(let i=0; i<getVideo.length && getVideo !== undefined; i++){
   const video = document.createElement('video');
    video.autoplay = true;
    video.crossOrigin="anonymous"
    video.src = getVideo[i][0].video_url

    const Videotexture = new THREE.VideoTexture(video)
    var Videomaterial = [
        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
        new THREE.MeshBasicMaterial({ map:Videotexture , transparent:false }),
        new THREE.MeshBasicMaterial({transparent: false , color :0x3d3d3d }),
]
    Videotexture.minFilter = THREE.LinearFilter;
    Videotexture.magFilter = THREE.LinearFilter;
    Videotexture.format = THREE.RGBAFormat;
    const Videogeometry = new THREE.BoxGeometry(1,1,0.1);
    Videomesh = new THREE.Mesh(Videogeometry, Videomaterial);
    // Videomesh.position.set(Number(getVideo[i][0].video_transform.position_x),Number(getVideo[i][0].video_transform.position_y),Number(getVideo[i][0].video_transform.position_d)-8)
    Videomesh.position.set(0,0,0)
    Videomesh.rotation.x =getVideo[i][0].video_transform.Rotation_x
    Videomesh.rotation.y =getVideo[i][0].video_transform.Rotation_y
    Videomesh.rotation.z =getVideo[i][0].video_transform.Rotation_z
  }
}

if (get3Dmodel){
  for (let i = 0; i < get3Dmodel.length  &&  get3Dmodel !== undefined; i++){
      const gltfContent =get3Dmodel[i][0].file_url
      const loader = new GLTFLoader(manager);
      loader.load(gltfContent, (gltf) => {
        gltf.scene.position.set(0,0,0);
        // gltf.scene.scale.set(1.1, 1.1, 1.1);
        contentGroup.add(gltf.scene)
      }, undefined, () => {
        console.log('An error ocurred loading the GLTF model');
      });
  }
}
contentGroup.add(plane);
contentGroup.add(Videomesh);
// contentGroup.add(ThreeDModel);



imageTrackerGroup.add(contentGroup);

imageTracker.onVisible.bind(() => { scene.visible = true; });
imageTracker.onNotVisible.bind(() => { scene.visible = false; });

function render() {
  camera.updateFrame(renderer);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();
}
export default ArComponent;