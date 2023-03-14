import * as THREE from '../node_modules/three/build/three.module'
import { useEffect } from 'react';
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"
import { TransformControls} from '../node_modules/three/examples/jsm/controls/TransformControls'
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';


const ModelAr =()=> {
        useEffect(() => {
        const boxModal = () => {

let cameraPersp, cameraOrtho, currentCamera;
let scene, renderer, control, orbit;

init();
render();

function init() {

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const aspect = window.innerWidth / window.innerHeight;

    cameraPersp = new THREE.PerspectiveCamera( 75, aspect, 0.11, 3000 );
    cameraOrtho = new THREE.OrthographicCamera( - 600 * aspect, 600 * aspect, 600, - 600, 0.01, 3000 );
    currentCamera = cameraPersp;

    currentCamera.position.set(  100, 250, 10 );
    currentCamera.lookAt( 200,0 ,0 );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );

    const grid =  new THREE.GridHelper( 200, 10, 0x000000, 0x000000 ) ;
    grid.position.set( 1,0,0)
    grid.rotation.set(-Math.PI / 2, 0,0 );
    scene.add( grid );

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
    control.addEventListener( 'change', render );

    control.addEventListener( 'dragging-changed', function ( event ) {

        orbit.enabled = ! event.value;

    } );

    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    control.attach( mesh );
    scene.add( control );

    window.addEventListener( 'resize', onWindowResize );

    window.addEventListener( 'keydown', function ( event ) {

        switch ( event.keydown ) {

            case 81: // Q
                control.setSpace( control.space === 'local' ? 'world' : 'local' );
                break;

            case 16: // Shift
                control.setTranslationSnap( 100 );
                control.setRotationSnap( THREE.MathUtils.degToRad( 100 ) );
                control.setScaleSnap( 0.25 );
                break;

            case 87: // W
                control.setMode( 'translate' );
                break;

            case 69: // E
                control.setMode( 'rotate' );
                break;

            case 82: // R
                control.setMode( 'scale' );
                break;

            case 67: // C
                const position = currentCamera.position.clone();

                currentCamera = currentCamera.isPerspectiveCamera ? cameraOrtho : cameraPersp;
                currentCamera.position.copy( position );

                orbit.object = currentCamera;
                control.camera = currentCamera;

                currentCamera.lookAt( orbit.target.x, orbit.target.y, orbit.target.z );
                onWindowResize();
                break;

            case 86: // V
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
            case 107: // +, =, num+
                control.setSize( control.size + 0.1 );
                break;

            case 189:
            case 109: // -, _, num-
                control.setSize( Math.max( control.size - 0.1, 0.1 ) );
                break;

            case 88: // X
                control.showX = ! control.showX;
                break;

            case 89: // Y
                control.showY = ! control.showY;
                break;

            case 90: // Z
                control.showZ = ! control.showZ;
                break;

            case 32: // Spacebar
                control.enabled = ! control.enabled;
                break;

            case 27: // Esc
                control.reset();
                break;

        }

    } );


            // Iamge Upload Section
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
                                    new THREE.MeshBasicMaterial({map:texture,transparent:false} ),
                                ]

                                console.log(material)
                                console.log(mesh)
                                material.needsUpdate = false
                                // material.depthtset = false;
                                mesh.material = material;
                                texture.needsUpdate = false;
                                material.map= texture
                        })

                    }
                    reader.readAsDataURL(file);
                    
                });



    const loader = new GLTFLoader();
    console.log( loader)
    const downloadUrl = new URL('./assets/scene_sphere.gltf', import.meta.url);
        loader.load( downloadUrl+"",function ( gltf ) {
            gltf.scene.position.set(1,2,0   )
            scene.add(gltf.scene);
            console.log( gltf.scene)
            control.attach( gltf.scene );
    
        })
     




    const video = document.getElementById('uploaded-video');
    console.log( video.src)

    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    console.log(video)
    const Videotexture = new THREE.VideoTexture(video)
        var Videomaterial = [
            new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
            new THREE.MeshBasicMaterial({ transparent: false , color :0x3d3d3d}),
            new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
            new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
            new THREE.MeshBasicMaterial({ color: 0x3d3d3d } ),
            new THREE.MeshBasicMaterial({map:Videotexture,transparent:false} ),
        ]


    Videotexture.minFilter = THREE.LinearFilter;
    Videotexture.magFilter = THREE.LinearFilter;
    Videotexture.format = THREE.RGBAFormat;
    
    video.addEventListener('canplaythrough', () => {
        video.play();
      }, false);
    
    const Videogeometry = new THREE.BoxGeometry(80,80,1);
    const Videomesh = new THREE.Mesh(Videogeometry, Videomaterial);
    
    scene.add(Videomesh);
    control.attach(Videomesh);

    window.addEventListener( 'keyup', function ( event ) {

        switch ( event.keyCode ) {

            case 16: // Shift
                control.setTranslationSnap( null );
                control.setRotationSnap( null );
                control.setScaleSnap( null );
                break;

        }

    } );

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

