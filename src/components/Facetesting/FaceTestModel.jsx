import * as THREE from "../../../node_modules/three/build/three.module"
import { GLTFLoader } from "../../../node_modules/three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls"
import model from "../../../src/assets/LeePerrySmith.glb"
const Face=()=>{
            //  Create Scene ===================================> 
                  const scene = new THREE.Scene();
                  scene.background = new THREE.Color( 0xf2f2f2);

            //  Create Camera ===================================> 
                  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

            //  WebGL Renderer ===================================> 
                  const renderer = new THREE.WebGLRenderer();
                  renderer.setSize( window.innerWidth, window.innerHeight );
                  document.body.appendChild( renderer.domElement );

                  const orbit = new OrbitControls( camera, renderer.domElement );  

            // Adding Light =======================================>
                  const light = new THREE.DirectionalLight( 0xffffff, 5 );
                  light.position.set( 1, 1, 1 );
                  scene.add( light );

                  scene.add( new THREE.DirectionalLight(0xffffff, Math.PI * 2))
            //  Adding Scene ===================================>     

                  function addModel(){
                        const loader = new GLTFLoader();
                        loader.load( model, function ( gltf ) {
                              gltf.scene.scale.set( 0.7,0.7,0.7 );
                              scene.add( gltf.scene );
                              gltf.scene.position.z = -5
                              console.log( gltf.scene.position);
                        } );
                  }
  
            //  Render Function ===================================>       

                  function animate() {
                        requestAnimationFrame( animate );
                        renderer.render( scene, camera );
                        orbit.update();
                  }
                  animate();
                  addModel()
}
export default Face;