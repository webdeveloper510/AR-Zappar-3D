import * as THREE from '../node_modules/three/build/three.module'
import { useContext, useEffect } from 'react';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { TransformControls} from '../node_modules/three/examples/jsm/controls/TransformControls'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import axios from 'axios';
import { API } from './config/api';
import React,{useState ,useRef} from 'react';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import svgHere from '../src/assets/images/svgviewer-output.svg'
import svgHere2 from '../src/assets/images/Mediamodifier-Design.svg'
import { contextObject } from './components/ContextStore/ContextApi';
import { CSS3DRenderer, CSS3DObject } from '../node_modules/three/examples/jsm/renderers/CSS3DRenderer'
import { ViewHelper } from '../node_modules/three/examples/jsm/helpers/ViewHelper'
import { useSelector } from 'react-redux';



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
        const ctx=useContext(contextObject);
        const id = ctx.scene_id;
        const PlaneTexture = [svgHere , svgHere2]
        const [selectedElement, setSelectedElement] = useState(null);


        const [text_name , text_nameget] = useState(null)
        const [text_action , text_actionGet] = useState(null)
        const [text_actionID , text_actionIDGet] = useState(null)

        const [alignment , alignmentGet] = useState(null)
        const [link , linkGet] = useState(null)
        const [textFeatureID , textFeatureIDGet] = useState(null)
        const [text_text , text_textget] = useState(null)
        const [text_color , text_colorget] = useState(null)
        const [text_font , text_fontget] = useState(null)
        const [text_size , text_sizeget] = useState(null)

        const [Mirror , MirrorGet] = useState(null)
        const [Rotation_x , Rotation_xGet] = useState(null)
        const [Rotation_y , Rotation_yGet] = useState(null)
        const [Rotation_z , Rotation_zGet] = useState(null)
        const [depth , depthGet] = useState(null)
        const [height , heightGet] = useState(null)
        const [position_d , position_dGet] = useState(null)
        const [position_x , position_xGet] = useState(null)
        const [position_y , position_yGet] = useState(null)
        const [width , widthGet] = useState(null)
        const [transformID , transformIDGet] = useState(null)

        const [delay, delayGet] = useState(null)
        const [duration, durationGet] = useState(null)
        const [transitionheight, transitionheightGet] = useState(null)
        const [transitionID, transitionIDGet] = useState(null)
        const [transition_enter, transition_enterGet] = useState(null)
        const [transition_exit, transition_exitGet] = useState(null)

  const contentImgVdo1=useSelector((state)=>state.sideBarContentReducer.contentImgVdo)
    // UseEffect Using ---------------------------------------------------------------------------------------->

    const IndecatorImages= [
        'data:image/png;base64,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',
        'data:image/png;base64,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',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAABYdJREFUeF7tmjtoFFEUhu+6Ma9NIlhEFIREggjxhYKKrZaiZcAyoqVop2AZMJ2SMqKlYKlYaisqKIgRFEQFwWAKITEb89hknf/GSWY3k92zC5G55/wXttk9Mzvn/N/c85jJ7S+Plx2X2QjkCIBZ7b3jBMC2/gTAuP4EgACwCDTNAGsA0/KzCDQuPwEgAJwD2GaANYBt/dkGGtefABAAzgFMM8AawLT8bAONy08ACADnALYZYA1gW3+2gcb1JwAEgHMA0wywBjAtP9tA4/ITAALAOYBtBlgD2NafbaBx/QkAAeAcwDQDrAFMy8820Lj8BIAAcA5gmwHWALb1ZxtoXH8CQAA4BzDNAGsA0/KzDTQuPwEgAJwD2GaANYBt/dkGGtefABAAzgFMM8AawLT8bAONy08ACADnALYZYA1gW3+2gcb1JwAEgHMA0wywBjAtf0BtYNvD7w6fZtfc7UFXOrSj2cPVHhfMDkAAtobBYABoeT/t8u9nNkRh288Ft/35lP9+pbfNLZ3tTY3U0plet7KrbWuiGPBZgwFgsxgDjM6bH/zPywd7XHH0YMBy/P9LJwD/P+aZ+keTAOQnZlz+S9HlZkuudHiHW+nvdOVCy6bCwD7eYWIjHI/vcQ6kltKpnTXPkSnVExdjCgAUkq2PJ12uWNqgBwScv9yfWif0nHvh7ecv9/kao2Pkk0PqSS4AFP+eVbHTrssMAKgTkqKhXsDKTS24bdEHCyKiXVzeV6iIVQwACsn8xLRD4bncH9kU8hXH46C5Wwf8bhDKMgFA+/hX1/pk0msCEeev9FVs162Pf7j2e99Wt/lI/OLYkVQA8CU6jfnrAxUzheTxSAez94+Hon/4zwLqdQHY7ruHXv+7w/Pu96OTqeJ03Pm81k7+uTZQ0U7GO0A5uuOLY0dT00Ty+JB2AfU7wPZnU67j7mcv+sLFvf6TtrCtd11643/CFg4R4xUDUKvNbHn5y3WOfKz7P1nbGtQDkJwg1hsHr9/pLdFOcaIxAAKdR6gHoHBjwrdrvkCr8zyga/jNWkE48/R0QwAkU01IAyn1AGBbxvYsAiBKAUgFWI0CgLlA4eq71UIyoImkegCaSQGo9GcfrFfyohogkQIWz++OOo3+rKX71OtRD0CyOEML+Cdq4dJWspuotpMAkAStuovIMgnqAUDwu4deRdO/Zd/7zz44ljqyTQ6KqmuFGAD0+JgRVI+Nkf+7ht/6CSNaRewetUbLWQLCBADJVhCDHrSC8bQOOb/93te1OqG6BYRYMQC+RYxeKlmIRsLxtBA7R1s0REINgIVx8OKFPVnSuOa1mAAAEZC8UILx7tzo4Ia7NzkIwk6y2aqVYrJKhBkAIADuVjwMiruCWBQIv3hh96YvkyRrABR3GC3HrSXOgaIRx4d058e+Bw9As3eWfxwc5WzJe4JpRSCOxTmQCkLJ92mxMgtAI+BIuoBGzpclWwIgUIMACIKk2YQAaFZX4BueJ2Ah34cy4RO45U2YAqSRUmpHAJQKK3WLAEgjpdSOACgVVuoWAZBGSqkdAVAqrNQtAiCNlFI7AqBUWKlbBEAaKaV2BECpsFK3CIA0UkrtCIBSYaVuEQBppJTaEQClwkrdIgDSSCm1IwBKhZW6RQCkkVJqRwCUCit1iwBII6XUjgAoFVbqFgGQRkqpHQFQKqzULQIgjZRSOwKgVFipWwRAGimldgRAqbBStwiANFJK7QiAUmGlbhEAaaSU2hEApcJK3SIA0kgptSMASoWVukUApJFSakcAlAordYsASCOl1I4AKBVW6hYBkEZKqR0BUCqs1C0CII2UUjsCoFRYqVsEQBoppXYEQKmwUrcIgDRSSu0IgFJhpW4RAGmklNoRAKXCSt0iANJIKbUjAEqFlbr1FyxpRa4bIyVKAAAAAElFTkSuQmCC',
        'data:image/png;base64,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',
        'data:image/png;base64,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',
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAB2BJREFUeF7tnXlslGUQxh9OBeQ03Ic1IIVwikWEKBBFTTEeaDSo0WgwKhqNREEwkZhojEYkxsgfRk34U4yJhCtymFZBKFWOgCBaVIp4cCsFBMrhDF83+7Xdbbe23Rn7PpM0pLvvfjM7z++db975SNps4OILF0ALNgPNCECw2l/84gQgbP0JQOD6EwACwCYwaAbYAwQtP5vAwOUnAASAc4CwGWAPELb+PAYGrj8BIACcAwTNAHuAoOXnMTBw+QkAAeAcIGwG2AOErT+PgYHrTwAIAOcAQTPAHiBo+XkMDFx+AkAAOAcImwH2AGHrz2Ng4PoTAALAOUDQDLAHCFp+HgMDl58AEADOAcJmgD1A2PrzGBi4/gSAAHAOEDQD7AGClp/HwMDlJwAEgHOAsBlgDxC2/jwGBq4/ASAAnAMEzQB7gKDl5zEwcPkJAAHgHCBsBtgDhK0/j4GB608ACADnAEEz4KIHaNcS0J9M7bz8nbNDpzNdzXU1ZcAFADMGA08OzFyosrNA3vLM13Nl+gwQgCzR8VQuML4b8Np24Lu/suQ0AzfuAFiyD1j5e82Rnz0PFO7P4Ns5WrJ6EtCvHfDIemDDQT+BuQNg/k7g/RI/CWqISFo2A7bdDrSQfwlAiozGe4CmCECO7PyVUgHUCEADAtCpFZBzGXDkDLD3RPLCeZcDQzsB3xwCdvxd3WHftkBuR0A/X1IG/HgM+Odc+r0+qAPQqjmwPXbv7tEGGNUFaC/X2C2f3yl+0l1jYnepatcRgLQZ/q8V4NZewLujgXI5Fo5ZAQwR0eddA3S/NHK16TDwwLqk23xZP3cE0KV15VD0r2cv+RV4VRq0svLqYS67EbiqPfDO98DHe+Qaw4H83vIkLbZUIZy1CVh7IPnis4OAO/sCPQUWLf+p7Iki237mf90DJADQxD70NTA/D+h6STLNq/4AnimOfn9zFHCXiKF2ThT/5ThwVETLld3dQXax2v5TwOMbgF2yo+OWAEArQCeBRyvIKakYuk5hU4HVpDfFlILk5xWUqTlAcxE/ob+uif+99ukbgS8NG9omA4CKp+X4A2kgN8vO15JdKrcFvTXc0Qd4SyqD2pYjERQHY4OkR/sDM4dEu3TbUeDer1IDoK/qDGLuVmC1wFWuaopNlxnGczLLUCv4U2YaImrcHhsQXV+NPUDl3Fz8LX4LOCNJTSQ2xVIs/EnK/q7onXgFUC2myRFrfZUjVtsWUQPWTXbqMSnvE1YCJ1Pc7+cMFXEEBLXZW4DP9ia9JyrACRH/7kJgT6zf0FVtxEfxZKC1QKdrRlUZUhGAVErGXqvLJFB3+Dw5KlYFIF7u4+7GdgUWjote+XC3VIIdqYPpJWW84JbovTWyi5+O7eIEAAekytwgAKWyj8YC18ugR23c58DhWIUhAHUAYJ00UcXSvaezrVKiN1a8H68AL0tZ/qS0+qcevDJq2tRmfAus+C39tYvygc5yj/9Z+oP8L5LrMgHgFWku78+pAHNN5SpBAOoAQF3mAJkAoOIrBGpT10Y9QDpbPBEYLMfDs9IkDl8aNYtqBKAWAev7dn2Pgeo/XQWYJc3XNGnC1B6Wk0KieqSKebkc9wbIcU/P8yOXsQLUV9eMP9+YANzTD3j96iiUFzcDi+W8n8423xY9ltahzpRCApCxgPVd2JgAjOwMLBofRajiKwSpbJgMkT6dEL2zTB5IPS9DnYTxFlBfhWv5fGMCoAMYFVZHwzoxnCzNXXxsnAhtwRhgUo/oN50e6hSxoQDQOcNsOWaq1daINnKqq12+yQyC0vUA+o1HVFQBhUFHtjrI0ZPGcTmz95d7vo5sb+4Z5Wap7P4XYrv/YkWoGAXXdAys6RQwSa694Nro+kXi9yWZM+j08SYB7r0fsi15ZX9BAKBf+b4rgDnDAB0MJUwrQqvYjF5HsnqL0BFx3OoLgE4oV8kwquozCPUxU2DT/wNhZcEAoAnuIzN8HclqRUjM77XjL5GZ/qI9cquITf8aEgC91mh5QvmGPI/QGNROy+hSH0C9LUOtqsBlEwYXAGTzCyd8aQnuKD/7TsrDmSwG0FsA0JFxqQybKh4lZNF7dVfBAmCadUfOCYAjMSxCIQAWWXfkkwA4EsMiFAJgkXVHPgmAIzEsQiEAFll35JMAOBLDIhQCYJF1Rz4JgCMxLEIhABZZd+STADgSwyIUAmCRdUc+CYAjMSxCIQAWWXfkkwA4EsMiFAJgkXVHPgmAIzEsQiEAFll35JMAOBLDIhQCYJF1Rz4JgCMxLEIhABZZd+STADgSwyIUAmCRdUc+CYAjMSxCIQAWWXfkkwA4EsMiFAJgkXVHPgmAIzEsQiEAFll35JMAOBLDIhQCYJF1Rz4JgCMxLEIhABZZd+STADgSwyIUAmCRdUc+CYAjMSxCIQAWWXfkkwA4EsMiFAJgkXVHPgmAIzEsQiEAFll35JMAOBLDIhQCYJF1Rz4JgCMxLEIhABZZd+STADgSwyIUAmCRdUc+CYAjMSxCIQAWWXfkkwA4EsMilH8BJXV6ru94WvYAAAAASUVORK5CYII=',
    ]
        useEffect(() => {
 
            if(!id){
               
                return;
            }
            
    // boxModal Function Startes ------------------------------------------------------------------------------>
        const boxModal = () => {

            
        // Variables ------------------------------------------------------------------------------------------->
            let cameraPersp, cameraOrtho, currentCamera, canvas ,labelRenderer
            let scene, renderer, control, orbit , plane  , Videomesh ,mesh,Indecator , helper, clock ,viewHelper
            let lastRenderTime = 0;
            const frameRate = 60; // Limit the frame rate to 60 FPS

            init();
            render();
 
        function init() {
            canvas = document.getElementById( 'canvas' );
            // Initialize The Project View Model---------------------------------------------------------------->
            // clock
            clock = new THREE.Clock();

            renderer = new THREE.WebGLRenderer({canvas:canvas,antialias: true});
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.useLegacyLights = false;
            document.body.appendChild( renderer.domElement );
            


            // Camera SetUp For the Project View Model----------------------------------------------------------->

            const aspect = window.innerWidth / window.innerHeight;
            cameraPersp = new THREE.PerspectiveCamera( 55, aspect, 0.11, 1000 );
            const camera = new THREE.Camera( 30, aspect, 0.11, 1000 );
            cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 3000 );
            currentCamera = cameraPersp;
            currentCamera.position.set(  0 , 0, -500);


            // Creating Scene View ------------------------------------------------------------------------------->

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xf2f2f2);
            scene.add( new THREE.AmbientLight( 0x222222 ) );

            // Creating Plane For Tracker ------------------------------------------------------------------------->
          

            const textureLoader = new THREE.TextureLoader();
            const texture1 = textureLoader.load(svgHere)
            const geometry = new THREE.BoxGeometry(350, 350 ,8);
            const material = new THREE.MeshBasicMaterial({map : texture1 , side : THREE.DoubleSide , transparent : false})           
            plane = new THREE.Mesh(geometry,material );
            material.needsUpdate = false;
            scene.add(plane);
            plane.position.set(0, 0, 0);
            plane.rotation.y = Math.PI;


            // Threjs Plane Helper for OrbitControler Indecator ------------------------------------------------------->

            // const boxorbitIndictor = new THREE.BoxGeometry(50,50,50);
            // const IndecatorTexture = new THREE.TextureLoader();
            // const IndecatorTextures = IndecatorImages.map(imageUrl => {
            //     const texture = IndecatorTexture.load(imageUrl);
            //     texture.minFilter = THREE.LinearFilter;
            //     texture.magFilter = THREE.LinearFilter;
            //     return texture;
            //   });
            // const materialorbitIndictor = IndecatorTextures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));
            // Indecator = new THREE.Mesh(boxorbitIndictor,materialorbitIndictor)
            // scene.add(Indecator);
            // Indecator.position.set(-300,-200,0 )

            

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

// Helper function================================================================>

                viewHelper = new ViewHelper( currentCamera, renderer.domElement );
                viewHelper.orbit = orbit;
                console.log(viewHelper)
                const div = document.createElement( 'div' );
                div.id = 'viewHelper';
                div.style.position = 'absolute';
                div.style.right = '350px';
                div.style.bottom = 0;
                div.style.height = '128px';
                div.style.width = '128px';
                
                document.body.appendChild( div );
                
                div.addEventListener( 'pointerup', (event) => viewHelper.handleClick( event ) );


            // TransFormControls Added ----------------------------------------------------------------------------->

                control = new TransformControls( currentCamera, renderer.domElement );
                        control.addEventListener( 'change', render );
                        control.addEventListener( 'dragging-changed', function ( event ) {
                        orbit.enabled = ! event.value;
                    } );
                    scene.add( control );




                    // All Data Get for Image Tracking --------------------------------------------->

                    axios.get(API.BASE_URL+"scene_details/"+id+"/")
                    .then((responseProject)=>{
                            ctx.setreRender(true);   
                        setButton(responseProject.data.data[0].button_data)
                        setText(responseProject.data.data[0].text_data)
                        setImage(responseProject.data.data[0].image_data)
                        setVideo(responseProject.data.data[0].video_data)
                        set3Dmodel(responseProject.data.data[0].ThreeDmodeldata)
                        setScene(responseProject.data.data[0].scene_data)
                        setProject(responseProject.data.data[0].project_content_data);
                        set2D3D(responseProject.data.data[0].twoD_threeD_data)
                        ctx.setselectedImage(responseProject.data.data[0].image_data);
                        ctx.setselectedVideos(responseProject.data.data[0].video_data);
                        ctx.setselected3D(responseProject.data.data[0].ThreeDmodeldata)
                        rendeR=false


                    }).catch ((err)=>{
                        toast.error("Connecting to Server !")
                    })


                   
                    // Image Handler Function ------------------------------------------------------------------------------------------>

                    if (getImage){
                        for (let i = 0; i < getImage.length  &&  getImage !== undefined; i++){
                            const imageId = getImage[i][0].id
                            const imageData = getImage[i][0].image_url
                            const textureLoader = new THREE.TextureLoader()
                            const texturedf = textureLoader.load(imageData)

                            texturedf.minFilter = THREE.LinearFilter;
                            texturedf.magFilter = THREE.LinearFilter;
                            const geometry = new THREE.BoxGeometry(getImage[i][0].image_transform.width, getImage[i][0].image_transform.height,1)
                            const material = new THREE.MeshBasicMaterial({ map: texturedf, transparent: false })
                            mesh = new THREE.Mesh(geometry, material);
                            plane.add(mesh);
                            mesh.position.set(Number(getImage[i][0].image_transform.position_x), Number(getImage[i][0].image_transform.position_y), Number(getImage[i][0].image_transform.position_d)+8)
                            mesh.rotation.x =getImage[i][0].image_transform.Rotation_x
                            mesh.rotation.y =getImage[i][0].image_transform.Rotation_y
                            mesh.rotation.z =getImage[i][0].image_transform.Rotation_z
                            mesh.userData.type = 'image';
                            mesh.userData.name = imageData;      
                        }
                    }



                    // Video Handler Function --------------------------------------------------------------------------------->

                    if (getVideo){
                        for (let i = 0; i < getVideo.length  &&  getVideo !== undefined; i++){

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
                            const Videogeometry = new THREE.BoxGeometry(getVideo[i][0].video_transform.width,getVideo[i][0].video_transform.height,1);
                            Videomesh = new THREE.Mesh(Videogeometry, Videomaterial);
                            scene.add(Videomesh);
                            Videomesh.position.set(0,0,-10)
                            Videomesh.userData.name=getVideo[i][0].video_url;
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

                            }
                        }
                    }   
                    console.log(contentImgVdo1,'this is selected<-------------------')
                    if(contentImgVdo1 && contentImgVdo1[0].image_url === mesh.userData.name){
                        control.attach(mesh)
                        console.log('contentImgVdo1')
                    }
                    else{
                        console.log("not found");
                    }
                    if(contentImgVdo1 && contentImgVdo1[0].video_url === Videomesh.userData.name){
                        control.attach(Videomesh)
                    }
                    else{
                        console.log("No selected")
                    }

                    // States for Text Featres ------------------------------------------------------------------------------------------------>
             
                    labelRenderer = new CSS3DRenderer() 
                    labelRenderer.domElement.style.top = '0px';
                    labelRenderer.domElement.style.position = 'absolute';
                    labelRenderer.domElement.style.pointerEvents = 'none';
                    document.body.appendChild(labelRenderer.domElement) 

                    // HTML CSS2DRENDERER ---------------------------------------------------------------->
                    if (getText){
                        for (let i = 0; i < getText.length; i++){
                            text_nameget(getText[i][0].button_name)
                            text_actionGet(getText[i][0].text_action.text_action)
                            text_actionIDGet(getText[i][0].text_action.id)

                            alignmentGet(getText[i][0].text_text.alignment)
                            textFeatureIDGet(getText[i][0].text_text.id)
                            linkGet(getText[i][0].text_text.link)
                            text_textget(getText[i][0].text_text.text)
                            text_colorget(getText[i][0].text_text.text_color)
                            text_fontget(getText[i][0].text_text.text_font)
                            text_sizeget(getText[i][0].text_text.text_size)

                            MirrorGet(getText[i][0].text_transform.Mirror)
                            Rotation_xGet(getText[i][0].text_transform.Rotation_x)
                            Rotation_yGet(getText[i][0].text_transform.Rotation_y)
                            Rotation_zGet(getText[i][0].text_transform.Rotation_z)
                            depthGet(getText[i][0].text_transform.depth)
                            heightGet(getText[i][0].text_transform.height)
                            position_dGet(getText[i][0].text_transform.position_d)
                            position_xGet(getText[i][0].text_transform.position_x)
                            position_yGet(getText[i][0].text_transition.position_y)
                            widthGet(getText[i][0].text_transition.width)
                            transformIDGet(getText[i][0].text_transition.id)

                            delayGet(getText[i][0].text_transition.dealy)
                            durationGet(getText[i][0].text_transition.duration)
                            transitionheightGet(getText[i][0].text_transition.transitionheight)
                            transitionIDGet(getText[i][0].text_transition.id)
                            transition_enterGet(getText[i][0].text_transition.transition_enter)
                            transition_exitGet(getText[i][0].text_transition.transition_exit)


                            const p = document.createElement('h1');
                            p.textContent = getText[i][0].button_name;
                            p.style.color = getText[i][0].text_text.text_color;
                            p.style.fontSize = '10px';
                            p.style.fontWeight = 'bold';
                            p.style.fontFamily = getText[i][0].text_text.text_font;
                            const cPointLable = new CSS3DObject(p);
                            scene.add(cPointLable)
                            cPointLable.position.set(Number(getText[i][0].text_transform.position_x), Number(getText[i][0].text_transform.position_y), Number(getText[i][0].text_transform.position_d)-8)
                            cPointLable.rotation.x =getText[i][0].text_transform.Rotation_x
                            cPointLable.rotation.y =getText[i][0].text_transform.Rotation_y + Math.PI
                            cPointLable.rotation.z =getText[i][0].text_transform.Rotation_z

                        }
                    }

                    // Button APIs ------------------------------------------------------------>

                    if (getButton){
                        for (let i = 0; i <getButton.length; i++){
                            const buttonEle = document.createElement('div')
                            buttonEle.textContent = getButton[i][0].button_name
                            buttonEle.style.backgroundColor = 'rgb(150, 191, 239)'
                            buttonEle.style.width = '10px'
                            buttonEle.style.height = '3.6px'
                            buttonEle.style.color = 'white'
                            buttonEle.style.alignItems = 'center'
                            buttonEle.style.justifyContent = 'center'
                            const buttonpoint = new CSS3DObject(buttonEle)
                            scene.add(buttonpoint)
                            buttonpoint.position.set(0,0,8)
                        }
                    }

                 


                   
                   

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

    }

    //   }
        // Window Resize Functions -------------------------------------------------------------------------------------------------------->

                            
        function onWindowResize() {
            const aspect = window.innerWidth / window.innerHeight;
            cameraPersp.aspect = aspect;
            cameraPersp.updateProjectionMatrix();
            cameraOrtho.left = cameraOrtho.bottom * aspect;
            cameraOrtho.right = cameraOrtho.top * aspect;
            cameraOrtho.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        function updatetransform() {
            let timer; // Declare a variable to hold the timer ID
        
            control.addEventListener('change', function() {
                clearTimeout(timer); // Clear any existing timer before setting a new one
        
                timer = setTimeout(function() {
                    var position = control.object.position;
        
                    if (contentImgVdo1[0].image_id) {
                        axios.put(API.BASE_URL + "image_transform/" + contentImgVdo1[0].image_transform.id + '/', {
                            position_x: position.x,
                            position_y: position.y,
                            position_d: position.z
                        }).then(function(response) {
                            console.log(response);
                        }).catch(function(error) {
                            console.log(error);
                        });
                    }
        
                    if (contentImgVdo1[0].video_id) {
                        axios.put(API.BASE_URL + "video_transform/" + contentImgVdo1[0].video_transform.id + '/', {
                            position_x: position.x,
                            position_y: position.y,
                            position_d: position.z
                        }).then(function(response) {
                            console.log(response);
                        }).catch(function(error) {
                            console.log(error);
                        });
                    }
                }, 1000); // Delay of 1000ms (1 second) before executing the API call
            });
        }
        

          

        function render() {


            const currentTime = performance.now();
            const timeSinceLastRender = currentTime - lastRenderTime;

            if (timeSinceLastRender >= 1000 / frameRate) {
                lastRenderTime = currentTime;
                onWindowResize();
                renderer.render(scene, currentCamera);
                updatetransform();
            }
            // requestAnimationFrame(render);
        }
    }
            setTimeout(()=>{
                boxModal()
            }, 200)
        },[rendeR,id,ctx.reRender,ctx.loadContent,ctx.loader ,contentImgVdo1]);
}
export default ModelAr;