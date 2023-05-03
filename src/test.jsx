import * as THREE from '../node_modules/three/build/three.module'
import { useEffect } from 'react';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import {DragControls } from "../node_modules/three/examples/jsm/controls/DragControls"
import { TransformControls} from '../node_modules/three/examples/jsm/controls/TransformControls'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {TextGeometry} from '../node_modules/three/examples/jsm/geometries/TextGeometry';

const ModelAr =()=> {
        useEffect(() => {
        const boxModal = () => {

            let cameraPersp, cameraOrtho, currentCamera;
            let scene, renderer, control, orbit , control2 , control3 , control4 , control5 , control6 , plane ,mesh , Videomesh , Imagesocial , gltf , plane2
            var ModelsArray = []

            init();
            render();

    function init() {

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

            const aspect = window.innerWidth / window.innerHeight;

            cameraPersp = new THREE.PerspectiveCamera( 75, aspect, 0.11, 1000 );
            cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 3000 );
            currentCamera = cameraPersp;

            currentCamera.position.set(  0 , 0, -500);
            // currentCamera.lookAt( 200,0 ,0 );

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xffffff );

            const grid =  new THREE.PlaneGeometry( 250, 250  ) ;
            const planematerialFront = new THREE.MeshBasicMaterial( {color: 0x3d3d3d, side: THREE.DoubleSide , transparent : false} );
            plane = new THREE.Mesh( grid, planematerialFront );
            scene.add( plane );


            // Target Image Load Function :-----------------------)

            const GetTargetImage = localStorage.getItem('targetImage');
            const texTureL = new THREE.TextureLoader().load(GetTargetImage)
            const TargetTex = new THREE.BoxGeometry(250 , 250 , 1)
            const materials = [
                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                new THREE.MeshBasicMaterial({ transparent: false, color: 0x3d3d3d }),
                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                new THREE.MeshBasicMaterial({ map: texTureL, transparent: false }),
                ];
            const targetMesh = new THREE.Mesh(TargetTex, materials)
            plane.add(targetMesh)
            plane.userData.draggable = true;
            plane.userData.name="plane Material"

            const light = new THREE.DirectionalLight( 0xffffff, 5 );
            light.position.set( 1, 1, 1 );
            scene.add( light );

            const texture = new THREE.TextureLoader().load( 'textures/crate.gif', render );
            texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

            const geometry = new THREE.BoxGeometry( 80, 80, 1 );
            const material = new THREE.MeshLambertMaterial( { map: texture, transparent: true } );

            orbit = new OrbitControls( currentCamera, renderer.domElement );
            orbit.update();
            orbit.addEventListener( 'change', render );

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
                control2.addEventListener( 'change', render );

                    control2.addEventListener( 'dragging-changed', function ( event ) {

                    orbit.enabled = ! event.value;

                } );
                control3.addEventListener( 'change', render );

                    control3.addEventListener( 'dragging-changed', function ( event ) {

                    orbit.enabled = ! event.value;

                } );
                control4.addEventListener( 'change', render );

                    control4.addEventListener( 'dragging-changed', function ( event ) {

                    orbit.enabled = ! event.value;

                } );
                control5.addEventListener( 'change', render );

                    control5.addEventListener( 'dragging-changed', function ( event ) {

                    orbit.enabled = ! event.value;

                } );
                control6.addEventListener( 'change', render );

                control6.addEventListener( 'dragging-changed', function ( event ) {

                orbit.enabled = ! event.value;

            } );
            mesh = new THREE.Mesh( geometry, material );

            scene.add( mesh );

            mesh.position.set(0, 0, 0);
            plane.add( control , control2 , control3 , control4 );



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
    



            // ADDING IMAGE CONTROL FUNCTION TO MODEL...

                var currentmesh = null
                var input = document.getElementById('img-upload');
                    input.addEventListener('change', function(e) { 
                        console.log(e);
                        var file = e.target.files[0];
                        console.log(file);
                        var reader = new FileReader();
                            reader.onloadend = (onload)=> {
                                    console.log('RESULT', reader.result)
                                    new THREE.TextureLoader().load(reader.result ,function onLoad(texture){
                                            var material = [
                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                new THREE.MeshBasicMaterial({ transparent: false , color :0x3d3d3d}),
                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
                                                new THREE.MeshBasicMaterial({map:texture,transparent:false}),
                                            ]
                                            if (currentmesh !== null){
                                                scene.remove(currentmesh)
                                            }
                                            material.needsUpdate = false
                                            mesh.material = material;
                                            material.map= texture
                                            mesh.userData.draggable = true;
                                            mesh.userData.name="Image Material"
                                            ModelsArray.push(mesh)
                                            control.attach(mesh)
                                            // mesh.addEventListener('click',function(){
                                            //     //console.log('here');
                                            //     control.attach(mesh)
                                            // })
                                    })
                            }
                            reader.readAsDataURL(file);
                    });

            // ADDING 3D MODEL UPLOAD CONTROLER FUNCTION TO MODEL...

                const ModelUp = document.getElementById('3D-upload')
                ModelUp.addEventListener('change', (event) => {
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.addEventListener('load', (event) => {
                                const gltfContent = event.target.result;
                                const loader = new GLTFLoader();
                                loader.load(gltfContent, (gltf) => {
                                        gltf.scene.position.set(1, 2, 0);
                                        scene.add(gltf.scene);
                                        gltf.scene.needsUpdate = true
                                        gltf.scene.userData.draggable = true;
                                        gltf.scene.userData.name="Image Material"
                                        ModelsArray.push(gltf.scene)
                                        control2.attach(gltf.scene)
                                    });
                        });
                        reader.readAsDataURL(file);
                    });




                        // ADDING VIDEO CONTROL FUNCTION TO MODEL...


                                const video = document.getElementById('uploaded-video');
                                        video.autoplay = true;
                                        video.loop = true;
                                        video.muted = true;
                                        console.log(video)
                                        const Videotexture = new THREE.VideoTexture(video )
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
                                            video.addEventListener('canplaythrough', () => {
                                                            video.play();
                                                        },
                                                        false);
                                                        
                                            const Videogeometry = new THREE.BoxGeometry(80,80,1);
                                            Videomesh = new THREE.Mesh(Videogeometry, Videomaterial);

                                                scene.add(Videomesh);
                                                ModelsArray.push(Videomesh)
                                                Videomesh.userData.draggable = true;
                                                Videomesh.userData.name="Video Material"
                                                control3.attach(Videomesh)
                                
                                // IMAGE DRAG AND DROP FUNCTION 

                                    const TextureImage = document.querySelector('.Grid--1NhFW')
                                    TextureImage.addEventListener('click', (e) =>{
                                            const TexturePath = e.target.dataset.texture
                                            var img2 = document.getElementById("social-icon")
                                            img2.src = TexturePath
                                            const confirm = document.getElementById('submitTexture')
                                            confirm.addEventListener("click", () =>{
                                                        console.log(TexturePath)
                                                        const ImageGet = new THREE.TextureLoader()
                                                        const Rtexture = ImageGet.load(TexturePath)
                                                        const ImageGeo = new THREE.BoxGeometry(80,80,1)
                                                        const Imagematerial =[
                                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                                new THREE.MeshBasicMaterial({ transparent: false , color :0x3d3d3d}),
                                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
                                                                new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
                                                                new THREE.MeshBasicMaterial({map:Rtexture,transparent:false} ),
                                                            ]
                                                    const ImageSocial = new THREE.Mesh(ImageGeo , Imagematerial)
                                                    const previousMesh = scene.getObjectByName('ImageSocial')
                                                        if (previousMesh !== undefined) {
                                                            scene.remove(previousMesh)
                                                            }
                                                    ImageSocial.name = 'ImageSocial'
                                                    ModelsArray.push(ImageSocial)
                                                    scene.add(ImageSocial)
                                                    control4.attach(ImageSocial)
                                            })
                                        })

                                                const TextureImage2 = document.querySelector('.Grid--r1Nnn')
                                                TextureImage2.addEventListener('click', (e) =>{
                                                        console.log(e.target.dataset.texture)
                                                        const TexturePath = e.target.dataset.texture
                                                        var img2 = document.getElementById("social-icon")
                                                        img2.src = TexturePath
                                                        const confirm = document.getElementById('submitTexture')
                                                        confirm.addEventListener("click", () =>{
                                                                console.log(TexturePath)
                                                                const ImageGet = new THREE.TextureLoader()
                                                                const Rtexture = ImageGet.load(TexturePath)
                                                                const ImageGeo = new THREE.BoxGeometry(80,80,1)
                                                                const Imagematerial =[
                                                                    new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                                    new THREE.MeshBasicMaterial({ transparent: false , color :0x3d3d3d}),
                                                                    new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                                    new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
                                                                    new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
                                                                    new THREE.MeshBasicMaterial({map:Rtexture,transparent:false} ),
                                                                ]
                                                            const ImageSocial = new THREE.Mesh(ImageGeo , Imagematerial)
                                                            scene.add(ImageSocial)
                                                            ModelsArray.push(ImageSocial)
                                                            control5.attach(ImageSocial)
                                                    
                                                            // control4.attach(ImageSocial)
                                                            // REMOVE BUTTON

                                                            // const removeBtn = document.createElement('button');
                                                            // removeBtn.textContent = 'Remove';
                                                            // ImageSocial.add(removeBtn)
                                                            // removeBtn.style.position = 'absolute';
                                                            // removeBtn.style.top = '10px';
                                                            // removeBtn.style.left = '10px';
                                                            // document.body.appendChild(removeBtn);

                                                            // // Add event listener to remove button
                                                            // removeBtn.addEventListener('click', () => {
                                                            // scene.remove(ImageSocial);
                                                            // control4.detach(ImageSocial);
                                                            // document.body.removeChild(removeBtn);
                                                            // });

                                                    })
                                                })


                                        // TEXT FEATURE 
                                        const TextureImage3 = document.querySelector('.Grid--v4HT5')
                                        TextureImage3.addEventListener('click', (e) => {
                                                if (e.target.tagName === 'DIV') {
                                                        const div = e.target;
                                                        const style = window.getComputedStyle(div);
                                                        const backgroundImage = style.getPropertyValue('background-image');
                                                        const textureUrl = backgroundImage.slice(4, -1).replace(/"/g, "");
                                                        const imageLoader = new THREE.TextureLoader();
                                                        const texture = imageLoader.load(textureUrl);
                                                        const geometry = new THREE.BoxGeometry(80, 40, 1);
                                                        const materials = [
                                                        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                        new THREE.MeshBasicMaterial({ transparent: false, color: 0x3d3d3d }),
                                                        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                        new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
                                                        new THREE.MeshBasicMaterial({ map: texture, transparent: false }),
                                                        ];
                                                    const mesh = new THREE.Mesh(geometry, materials);
                                                    scene.add(mesh);
                                                    control6.attach(mesh)
                                                    ModelsArray.push(mesh)

                                                }
                                        });



                                                    // scene.add(plane);
                                                    
                                                            // SELECTION FEATURES

                                                            // let intersects
                                                            // renderer.domElement.addEventListener('click', onClick);
                                                            // function onClick(event) {
                                                            //         const mouse = new THREE.Vector2();
                                                            //         mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                                                            //         mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                                                                
                                                            //         const raycaster = new THREE.Raycaster();
                                                            //         raycaster.setFromCamera(mouse, cameraPersp);
                                                                
                                                            //         intersects = raycaster.intersectObjects(scene.chlildren, true);
                                                            //         console.log(intersects[0].object);

                                                            // }
                                                                      
                                                                
                                                                // ADJUSTMENTT FEATURES

                                                                            var getWidth = document.getElementById('GetWidth') 
                                                                            getWidth.addEventListener("change" , (event) =>{
                                                                                mesh.scale.x = event.target.value
                                                                            })
                                                                            var getLength = document.getElementById('GetLength')
                                                                            getLength.addEventListener("change" , (event) =>{
                                                                                mesh.scale.y = event.target.value
                                                                            })
                                                                            var getHeight = document.getElementById('GetHeight')
                                                                            getHeight.addEventListener("change" , (event) =>{
                                                                                mesh.scale.z = event.target.value
                                                                            })  


                            window.addEventListener( 'keyup', function ( event ) {

                                switch ( event ) {
                                    case 16: 
                                        control.setTranslationSnap( null );
                                        control.setRotationSnap( null );
                                        control.setScaleSnap( null );
                                        break;

                                }

                            } );

                        }
                                        

                            const switchElement = document.querySelector('.Switcher2d3d--1SCbh');
                            switchElement.addEventListener('click', (event) =>{

                            
                                if (event.target.checked) {
                                    switchTo3DMode();
                                    console.log('Switch') 
                                  } else {
                                    switchTo2DMode();
                                    console.log('NotSwitch')
                                  }
                            })
                           
                          

  
                        function switchTo2DMode() {
                        orbit.enabled=false
                        control.detach(mesh);
                        control2.detach(Videomesh);
                        // control5.deatach(gltf.scne);
                        // DRAG CONTROLS

                        // const Dragcontrols = new DragControls( ModelsArray, cameraPersp, renderer.domElement );

                        // Dragcontrols.addEventListener( 'dragstart', function ( event ) {
                        //     orbit.enabled = false;
                        //     event.object.material.emissive.set( 0xaaaaaa );
                        
                        // } );
                        
                        // Dragcontrols.addEventListener( 'dragend', function ( event ) {
                        //     orbit.enabled = true;
                        //     event.object.material.emissive.set( 0x000000 );
                        
                        // } );
                        }
                          
                        function switchTo3DMode() {
                        orbit.enabled=true
                        }
                          
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

                        function render() {
                            renderer.render( scene, currentCamera );
                        }
                                }
                        setTimeout(boxModal, 1000)
                            },);
                        }
                        export default ModelAr;