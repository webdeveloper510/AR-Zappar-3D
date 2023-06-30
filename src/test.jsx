import * as THREE from '../node_modules/three/build/three.module'
import { useEffect } from 'react';
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
import { DoubleSide } from 'three';

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
        const {id} = useParams()
        const PlaneTexture = [svgHere , svgHere2]
    // UseEffect Using ---------------------------------------------------------------------------------------->
        useEffect(() => {
 
            

    // boxModal Function Startes ------------------------------------------------------------------------------>
        const boxModal = () => {

        // Variables ------------------------------------------------------------------------------------------->
            let cameraPersp, cameraOrtho, currentCamera
            let scene, renderer, control, orbit , control2 , control3 , control4 , control5 , control6 , plane  , Videomesh , Imagesocial , gltf , plane2,mesh
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
            const geometry = new THREE.BoxGeometry(300, 400 ,8);
            const material = new THREE.MeshBasicMaterial({map : texture1 , side : THREE.DoubleSide , transparent : false})           

            // const material2 = new THREE.MeshBasicMaterial({map : new THREE.TextureLoader().load(svgHere2) , side : THREE.BackSide , transparent : false})           
            const plane = new THREE.Mesh(geometry,material );
            material.needsUpdate = false;
            scene.add(plane);
            console.log(plane.material)
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
                control2 = new TransformControls( currentCamera, renderer.domElement );
                control3 = new TransformControls( currentCamera, renderer.domElement );
                control4 = new TransformControls( currentCamera, renderer.domElement );
                control5 = new TransformControls( currentCamera, renderer.domElement );
                control6 = new TransformControls( currentCamera, renderer.domElement );

                        control.addEventListener( 'change', render );

                        control.addEventListener( 'dragging-changed', function ( event ) {

                        orbit.enabled = ! event.value;

                    } );
                plane.add( control );



                 
    
// Model Data GET for Image Tracking---------------------------------------------------------------->

                    // All Data Get for Image Tracking --------------------------------------------->

                    axios.get(API.BASE_URL+"get_projectdata/"+id+"/")
                    .then((responseProject)=>{
                        if(!rendeR){
                            
                            toast.success("Project Loaded Successfully !!!")
                        }
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
                        toast.error("Connecting to Server !")
                    })


                   
                    // Image Handler Function ------------------------------------------------------------------------------------------>
                    // var domEvents = new DomEvents(cameraPersp, renderer.domElement);
                    if (getImage){
                        for (let i = 0; i < getImage.length  &&  getImage !== undefined; i++    ){
                            const imageId = getImage[i][0].id
                            const imageData = getImage[i][0].image_url
                            const textureLoader = new THREE.TextureLoader()
                            const texturedf = textureLoader.load(imageData)
                            texturedf.minFilter = THREE.LinearFilter;
                            texturedf.magFilter = THREE.LinearFilter;
                            const geometry = new THREE.PlaneGeometry(getImage[i][0].image_transform.width, getImage[i][0].image_transform.height)
                            const material = new THREE.MeshBasicMaterial({ map: texturedf, transparent: false })
                            const mesh = new THREE.Mesh(geometry, material);
                            scene.add(mesh);
                            mesh.position.set(getImage[i][0].image_transform.position_x, getImage[i][0].image_transform.position_y, getImage[i][0].image_transform.position_d)
                            mesh.rotation.x =getImage[i][0].image_transform.Rotation_x
                            mesh.rotation.y =getImage[i][0].image_transform.Rotation_y
                            mesh.rotation.z =getImage[i][0].image_transform.Rotation_z
                            mesh.userData.type = 'image';
                            mesh.userData.id = imageId;                           
                        }
                    }



                    // Video Handler Function ------------------------------------------------------------------------------------------>

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
                                gltf.scene.addEventListener('click', () => {
                                    // Remove transform controls from the previously selected model, if any
                                    if (selectedModel) {
                                        control.detach();
                                    }
                            
                                    // Set the newly clicked model as the selected model
                                    selectedModel = gltf.scene;
                            
                                    // Show transform controls for the selected model
                                    control.attach(selectedModel);
                                });
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
                                control2.detach(Videomesh);
                            }
                        }
                    }

                                                                
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
                        // console.log(getWidth,getHeight,getLength)



            





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

        //     console.log(intersects[0].object);
        // }       

        function render() {

            renderer.render( scene, currentCamera );
        }
    }
    setTimeout(boxModal, 1000)

        },[rendeR ]);      
        return (
            <div >
              <canvas ref={canvasRef}></canvas>
            </div>
          );
}
export default ModelAr;