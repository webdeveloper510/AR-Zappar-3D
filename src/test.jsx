import * as THREE from '../node_modules/three/build/three.module'
import { useContext, useEffect } from 'react';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { TransformControls} from '../node_modules/three/examples/jsm/controls/TransformControls'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import axios from 'axios';
import { API } from './config/api';
import { useParams } from 'react-router-dom';
import React,{useState ,useRef} from 'react';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import svgHere from '../src/assets/images/svgviewer-output.svg'
import svgHere2 from '../src/assets/images/Mediamodifier-Design.svg'
import { TTFLoader } from '../node_modules/three/examples/jsm/loaders/TTFLoader'
import { FontLoader } from '../node_modules/three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from '../node_modules/three/examples/jsm/geometries/TextGeometry'
import { contextObject } from './components/ContextStore/ContextApi';
import font from '../node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json'
import WebFont from 'webfontloader';
// import {DomEvents} from 'threex.domevents/threex.domevents'



let rendeR=true;

const ModelAr =()=> {
    // UseStates In Initialization State ---------------------------------------------------------------------->
        const canvasRef = useRef(null); // Create a ref for the canvas element
        const [loaded, setLoaded] = React.useState(false);
        const [getWidth , setWidth] = useState(null)
        const [getHeight , setHeight] = useState(null)
        const [getLength , setLength] = useState(null)
        const [textureImage , ImageUploaded] = useState(null)
        const [getButton , setButton] = useState(null)
        const [getText , setText] = useState(null)
        const [getImage , setImage] = useState(null)
        const [getVideo , setVideo] = useState(null)
        const [get3Dmodel , set3Dmodel] = useState(null)
        const [getScene , setScene] = useState(null)
        const [getProject , setProject] = useState(null)
        const [get2D3D, set2D3D] = useState(null);
       
        const formdata = new FormData;
        // const {id} = useParams()
        const ctx=useContext(contextObject);
        const id = ctx.scene_id;
        const PlaneTexture = [svgHere , svgHere2]
        const [selectedElement, setSelectedElement] = useState(null);

    // UseEffect Using ---------------------------------------------------------------------------------------->


        useEffect(() => {
 
            if(!id){
               
                return;
            }
            
    // boxModal Function Startes ------------------------------------------------------------------------------>
    // console.log('useEffectCalled useEffectCalled useEffectCalled');
        const boxModal = () => {

        // Variables ------------------------------------------------------------------------------------------->
            let cameraPersp, cameraOrtho, currentCamera
            let scene, renderer, control, orbit , plane  , Videomesh , Imagesocial , gltf , plane2,mesh
            let selectedModel = null;

            var ModelsArray = []

            init();
            render();
 
        function init() {

            // Initialize The Project View Model---------------------------------------------------------------->
            renderer = new THREE.WebGLRenderer({antialias: true});
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            
            // Camera SetUp For the Project View Model----------------------------------------------------------->
                const aspect = window.innerWidth / window.innerHeight;
                cameraPersp = new THREE.PerspectiveCamera( 75, aspect, 0.11, 1000 );
                cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 3000 );
                currentCamera = cameraPersp;
                currentCamera.position.set(  0 , 0, -500);

            // Creating Scene View ------------------------------------------------------------------------------->

                scene = new THREE.Scene();
                scene.background = new THREE.Color( 0xffffff );


            // Creating Plane For Tracker ------------------------------------------------------------------------->
          

            const textureLoader = new THREE.TextureLoader();
            const texture1 = textureLoader.load(svgHere)
            const geometry = new THREE.BoxGeometry(350, 350 ,8);
            const material = new THREE.MeshBasicMaterial({map : texture1 , side : THREE.DoubleSide , transparent : false})           

            // const material2 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load(svgHere2) , side : THREE.BackSide , transparent : false})           
            const plane = new THREE.Mesh(geometry,material );
            material.needsUpdate = false;
            scene.add(plane);
            // console.log(plane.material)
            plane.position.set(0, 0, 0);
            plane.rotation.y = Math.PI;
            // Adding Light Effects ------------------------------------------------------------------------------->
           

                const light = new THREE.DirectionalLight( 0xffffff, 5 );
                light.position.set( 1, 1, 1 );
                scene.add( light );


            // OrbitControls Addded ------------------------------------------------------------------------------->

                orbit = new OrbitControls( currentCamera, renderer.domElement );
                orbit.update();
                orbit.addEventListener( 'change', render );
                orbit.touches.ONE = THREE.TOUCH.PAN;
                orbit.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;


            // TransFormControls Added ----------------------------------------------------------------------------->

                control = new TransformControls( currentCamera, renderer.domElement );

                        control.addEventListener( 'change', render );

                        control.addEventListener( 'dragging-changed', function ( event ) {

                        orbit.enabled = ! event.value;

                    } );
                scene.add( control );





// Model Data GET for Image Tracking---------------------------------------------------------------->

                    // All Data Get for Image Tracking --------------------------------------------->

                    // console.log(id,'<id from context-----------');
                    // console.log('REQUEST SEND TO GET ALL DATA ');
                    axios.get(API.BASE_URL+"scene_details/"+id+"/")
                    .then((responseProject)=>{
                        // console.log(responseProject,'main response<--------((()))')
                        // if(!rendeR){
                            ctx.setreRender(true);
                            // toast.success("Project Loaded Successfully !!!")
                        // }
                      
                        setButton(responseProject.data.data[0].button_data)
                        setText(responseProject.data.data[0].text_data)
                        setImage(responseProject.data.data[0].image_data)
                        setVideo(responseProject.data.data[0].video_data)
                        set3Dmodel(responseProject.data.data[0].ThreeDmodeldata)
                        setScene(responseProject.data.data[0].scene_data)
                        setProject(responseProject.data.data[0].project_content_data);
                        set2D3D(responseProject.data.data[0].twoD_threeD_data)
                        rendeR=false

                    }).catch ((err)=>{
                        // console.log(err,'THIS IS RESPONSEPROJECT<----------');
                        toast.error("Connecting to Server !")
                    })


                   
                    // Image Handler Function ------------------------------------------------------------------------------------------>
                    // var domEvents = new DomEvents(cameraPersp, renderer.domElement);
                    if (getImage){
                        for (let i = 0; i < getImage.length  &&  getImage !== undefined; i++){
                            const imageId = getImage[i][0].id
                            const imageData = getImage[i][0].image_url
                            const textureLoader = new THREE.TextureLoader()
                            const texturedf = textureLoader.load(imageData)
                            // rendeR=true;
                            // console.log(imageData, 'this is image data this is image data this is image');
                            texturedf.minFilter = THREE.LinearFilter;
                            texturedf.magFilter = THREE.LinearFilter;
                            const geometry = new THREE.BoxGeometry(getImage[i][0].image_transform.width, getImage[i][0].image_transform.height,1)
                            const material = new THREE.MeshBasicMaterial({ map: texturedf, transparent: false })
                            const mesh = new THREE.Mesh(geometry, material);
                            plane.add(mesh);
                            mesh.position.set(Number(getImage[i][0].image_transform.position_x), Number(getImage[i][0].image_transform.position_y), Number(getImage[i][0].image_transform.position_d)+8)
                            mesh.rotation.x =getImage[i][0].image_transform.Rotation_x
                            mesh.rotation.y =getImage[i][0].image_transform.Rotation_y
                            mesh.rotation.z =getImage[i][0].image_transform.Rotation_z
                            mesh.userData.type = 'image';
                            mesh.userData.id = imageId;         
                            // mesh.isDraggable = true;                 
                        }
                    }
                    // else{
                    //     ctx.setreRender((prev)=>!prev);
                    // }
 


                    // Video Handler Function --------------------------------------------------------------------------------->

                    if (getVideo){
                        for (let i = 0; i < getVideo.length  &&  getVideo !== undefined; i++    ){
                            const video = document.createElement('video');
                            video.autoplay = true;
                            video.crossOrigin="anonymous"
                            video.src = getVideo[i][0].video_url
                            const Videotexture = new THREE.VideoTexture(video)
                            var Videomaterial = [
                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                new THREE.MeshBasicMaterial({ transparent: false , color :0x3d3d3d }),
                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                new THREE.MeshBasicMaterial({ map:Videotexture , transparent:false}),
                        ]
                            Videotexture.minFilter = THREE.LinearFilter;
                            Videotexture.magFilter = THREE.LinearFilter;
                            Videotexture.format = THREE.RGBAFormat;
                            const Videogeometry = new THREE.BoxGeometry(80,80,1);
                            Videomesh = new THREE.Mesh(Videogeometry, Videomaterial);
                            scene.add(Videomesh);
                            Videomesh.userData.name="Video Material"
                            // Videomesh.isDraggable = true;
                        }
                    }



                    // 3D MODEL Handler Function ---------------------------------------------------------------------------------------->

                    if (get3Dmodel){
                        for (let i = 0; i < get3Dmodel.length  &&  get3Dmodel !== undefined; i++    ){
                            const gltfContent =get3Dmodel[i][0].file_url
                            const loader = new GLTFLoader();
                            loader.load(gltfContent, (gltf) => {
                                gltf.scene.position.set(1, 2, 0);
                                scene.add(gltf.scene);
                                // gltf.scene.addEventListener('click', () => {
                                //     // Remove transform controls from the previously selected model, if any
                                //     if (selectedModel) {
                                //         control.detach();
                                //     }
                            
                                //     // Set the newly clicked model as the selected model
                                //     selectedModel = gltf.scene;
                            
                                    // Show transform controls for the selected model
                                    // control.attach(selectedModel);
                                // });
                            })
                        }
                    }

                    // Switch Between 2D and 3D controls ------------------------------------------------------------------------------------------------>              

                    if (get2D3D){
                        for (let i = 0; i < get2D3D.length; i++) {
                            if(get2D3D[i].switch_value){
                                orbit.enabled=true
                            }else{
                                orbit.enabled=false
                                control.detach(mesh);
                                // control2.detach(Videomesh);
                            }
                        }
                    }


                    // Create a FontLoader
                        var loader = new FontLoader();

                        var hash;
                        var url = 'https://fonts.gstatic.com/s/cookie/v8/syky-y18lb0tSbf9kgqU.woff'
                        var myJson = {};
                        var hashes = url.slice(url.indexOf('?') + 1).split('&');
                        for (var i = 0; i < hashes.length; i++) {
                            hash = hashes[i].split('=');
                            myJson[hash[0]] = hash[1];
                            // If you want to get in native datatypes
                            // myJson[hash[0]] = JSON.parse(hash[1]); 
                        }
                        // Load the WOFF font file
                        loader.load(myJson, function (font) {

                        // Use the loaded font in your 3D objects
                        var textGeometry = new TextGeometry('Hello Three.js', {
                            font: font,
                            size: 100,
                            height: 100,
                            curveSegments: 120,
                            bevelEnabled: false
                        });

                        var textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
                        var textMesh = new THREE.Mesh(textGeometry, textMaterial);
                        scene.add(textMesh);
                        textMesh.position.set(0,0,20)
                        });

                    
                    // WebFont.load({
                    //     google: {
                    //       families: ["Henny Penny, cursive", "Droid Sans", "Chilanka", "Orbitron", "Sacramento", "Roboto", "Cookie", "Comfortaa", "Philosopher", "Quicksand", "Trocchi", "Advent Pro", "Henny Penny", "Snowburst One", "Wallpoet"],
                    //     },
                    //     active: () => {

                    //     const fontLoader = new FontLoader();
                    //     fontLoader.load('Henny Penny, cursive', (font) => {
                    //       // Create text geometry with the loaded font
                    //       const textgeometry = new TextGeometry('Hello World', {
                    //         font: font,
                    //         size: 10,
                    //         height: 2,
                    //       });
                      
                    //       // Create material with the desired font family
                    //       const textmaterial = new THREE.MeshBasicMaterial();
                      
                    //       // Create text mesh using the geometry and material
                    //       const textMesh = new THREE.Mesh(textgeometry, textmaterial);
                      
                    //       // Add the text mesh to the scene
                    //       scene.add(textMesh);
                      
                    //       // Set the position of the text mesh
                    //       textMesh.position.set(0, 0, -10);
                    //         });
                    //     },
                    // });
                    
                      
                      // Set up camera position
                    //   camera.position.z = 5;                                  
                                        // ADJUSTMENTT FEATURES

                        // var getWidthd = document.getElementById('GetWidth') 
                        // getWidthd.addEventListener("change" , (event) =>{
                        //     setWidth(event.target.value)
                        // })
                        // var getLengthd = document.getElementById('GetLength')
                        // getLengthd.addEventListener("change" , (event) =>{
                        //     setLength(event.target.value)
                        // })
                        // var getHeightd = document.getElementById('GetHeight')
                        // getHeightd.addEventListener("change" , (event) =>{
                        //     setHeight(event.target.value)
                        // })  

                        // // console.log(getWidth,getHeight,getLength)

                        // console.log(getWidth,getHeight,getLength)

                        // const raycaster = new THREE.Raycaster();
                        // const mouse = new THREE.Vector2();
                        
                        // document.addEventListener('mousemove', onMouseMove);

                        // function onMouseMove(event) {
                        //   // Calculate normalized device coordinates (NDC) of the mouse click
                        //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                        //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                        
                        //   // Update the raycaster with the normalized device coordinates
                        //   raycaster.setFromCamera(mouse, cameraPersp);
                        
                        //   // Perform raycasting on the scene to check for intersected objects
                        //   const intersects = raycaster.intersectObjects(scene.children, true);
                        
                        //   // Check if any objects were intersected
                        //   if (intersects.length > 0) {
                        //     const hoveredObject = intersects[0].object;
                        //     const meshName = hoveredObject.userData.name;
                        //     const meshType = hoveredObject.userData.type;
                        //         console.log('Hovered mesh name:', meshName, '---', meshType);
                        //   }
                        // }
                        // function onClick(event) {
                        //     // Calculate normalized device coordinates (NDC) of the mouse click
                        //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                        //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                          
                        //     // Update the raycaster with the normalized device coordinates
                        //     raycaster.setFromCamera(mouse, cameraPersp);
                          
                        //     // Perform raycasting on the scene to check for intersected objects
                        //     const intersects = raycaster.intersectObjects(scene.children, true);
                          
                        //     // Check if any objects were intersected
                        //     if (intersects.length > 0) {
                        //       const clickedObject = intersects[0].object;
                        //       const meshType = clickedObject.userData.type;
                          
                        //       // Check the mesh type to determine if it's a model or image
                        //       if (meshType === 'model') {
                        //         // Attach transform controls to the clicked object
                        //         transformControls.attach(clickedObject);
                        //         transformControls.enabled = true;
                        //       } else if (meshType === 'image') {
                        //         // Attach transform controls to the parent of the clicked object (assuming the parent represents the image)
                        //         transformControls.attach(clickedObject.parent);
                        //         transformControls.enabled = true;
                        //       }
                        //     } else {
                        //       // No object was clicked, deselect and disable transform controls
                        //       transformControls.detach();
                        //       transformControls.enabled = false;
                        //     }
                        //   }
                        
// Example for images
// const images = document.querySelectorAll('.image-element');
// images.forEach((image) => {
//   image.addEventListener('click', () => handleElementClick(image));
// });

// // Example for videos
// const videos = document.querySelectorAll('.video-element');
// videos.forEach((video) => {
//   video.addEventListener('click', () => handleElementClick(video));
// });

// // Example for 3D models
// const models = scene.children.filter((child) => child.userData.type === 'model');
// models.forEach((model) => {
//   model.addEventListener('click', () => handleElementClick(model));
// });
// const handleElementClick = (element) => {
//     setSelectedElement(element);
//     control.attach(element);
//     control.enabled = true;
//   };
// const handleDeselect = () => {
// setSelectedElement(null);
// transformControls.detach();
// transformControls.enabled = false;
// };
   
            
// let draggableObject;
// const clickMouse = new THREE.Vector2();
// const raycaster = new THREE.Raycaster();

// window.addEventListener('click', event => {
//     // If 'holding' object on-click, set container to <undefined> to 'drop’ the object.
//     if (draggableObject) {
//       draggableObject= undefined;
//       return;
//     }
  
//     // If NOT 'holding' object on-click, set container to <object> to 'pick up' the object.
//     clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     clickMouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
//     raycaster.setFromCamera(clickMouse, cameraPersp);
//     const found = raycaster.intersectObjects(scene.children, true);
//     if (found.length && found[0].object.isDraggable) {
//       draggableObject = found[0].object;
//     }
//   });
//   window.addEventListener('mousemove', event => {
//     moveMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     moveMouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
//   });
//   function dragObject() {
//     // If 'holding' an object, move the object
//     if (draggableObject) {
//     const found = raycaster.intersectObjects(scene.children);
//     // `found` is the metadata of the objects, not the objetcs themsevles  
//       if (found.length) {
//         for (let obj3d of found) {
//           if (!obj3d.object.isDraggablee) {
//             draggableObject.position.x = obj3d.point.x;
//             draggableObject.position.z = obj3d.point.z;
//             break;
//           }
//         }
//       }
//     }
//   };


        // Camera , Orbit Controls and Transform Controls extra Features -------------------------------------------------------------->  
                        
        window.addEventListener( 'keyup', function ( event ) {
            switch ( event ) {
                case 16: 
                    control.setTranslationSnap( null );
                    control.setRotationSnap( null );
                    control.setScaleSnap( null );
                    break;
            }
        } );

        // Window Resize Handlers ------------------------------------------------------------------------------------------------------>

        window.addEventListener( 'resize', onWindowResize );
        window.addEventListener( 'keydown', function ( event ) {
            switch ( event.keydown ) {
                case 81: 
                    control.setSpace( control.space === 'local' ? 'world' : 'local' );
                    break;
                case 16: 
                    control.setTranslationSnap( 100 );
                    control.setRotationSnap( THREE.MathUtils.degToRad( 100 ) );
                    control.setScaleSnap( 0.25 );
                    break;
                case 87: 
                    control.setMode( 'translate' );
                    break;
                case 69: 
                    control.setMode( 'rotate' );
                    break;
                case 82: 
                    control.setMode( 'scale' );
                    break;
                case 67: 
                    const position = currentCamera.position.clone();
                    currentCamera = currentCamera.isPerspectiveCamera ? cameraOrtho : cameraPersp;
                    currentCamera.position.copy( position );
                    orbit.object = currentCamera;
                    control.camera = currentCamera;
                    currentCamera.lookAt( orbit.target.x, orbit.target.y, orbit.target.z );
                    onWindowResize();
                    break;
                case 86:
                    const randomFoV = Math.random() + 0.1;
                    const randomZoom = Math.random() + 0.1;
                    cameraPersp.fov = randomFoV * 160;
                    cameraOrtho.bottom = - randomFoV * 500;
                    cameraOrtho.top = randomFoV * 500;
                    cameraPersp.zoom = randomZoom * 5;
                    cameraOrtho.zoom = randomZoom * 5;
                    onWindowResize();
                    break;
                case 187:
                case 107: 
                    control.setSize( control.size + 0.1 );
                    break;
                case 189:
                case 109: 
                    control.setSize( Math.max( control.size - 0.1, 0.1 ) );
                    break;
                case 88: 
                    control.showX = ! control.showX;
                    break;
                case 89: 
                    control.showY = ! control.showY;
                    break;
                case 90: 
                    control.showZ = ! control.showZ;
                    break;
                case 32: 
                    control.enabled = ! control.enabled;
                    break;
                case 27: 
                    control.reset();
                    break;
            }
        } );
        // Declare the function containing the event listener outside of any other functions


        }





        // Window Resize Functions -------------------------------------------------------------------------------------------------------->

                            
        function onWindowResize() {
            const aspect = window.innerWidth / window.innerHeight;
            cameraPersp.aspect = aspect;
            cameraPersp.updateProjectionMatrix();
            cameraOrtho.left = cameraOrtho.bottom * aspect;
            cameraOrtho.right = cameraOrtho.top * aspect;
            cameraOrtho.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            render();
        }

        // Rendering The Function ------------------------------------------------------------------------------------------------------------->


        // const vector = new THREE.Vector2();
        // const rayCaster = new THREE.Raycaster();
        // window.addEventListener('mousemove', onMouseMove, false);

        // function onMouseMove( event ) {

        //     // calculate pointer position in normalized device coordinates
        //     // (-1 to +1) for both components
        
        //     vector.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        //     vector.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        //     rayCaster.setFromCamera( vector, cameraPersp );
        // }
        
        // var intersects = rayCaster.intersectObjects(scene.children);

        // if (intersects.length > 0) {

        //     // console.log(intersects[0].object);
        // }       

        function render() {
            // requestAnimationFrame(render)
            renderer.render( scene, currentCamera );
            // control.update();
        }
    }
    setTimeout(()=>{
        // console.log('inside timeout test js file');
        boxModal()
    }, 100)
    // boxModal()
    // console.log('TEST JS FILE LAST');

        },[rendeR,id,ctx.reRender]);
}
export default ModelAr;