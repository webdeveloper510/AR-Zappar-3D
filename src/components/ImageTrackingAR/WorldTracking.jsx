import * as THREE from '../../../node_modules/three/build/three.module';
import * as ZapparThree from '@zappar/zappar-threejs';
import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import model from "../../../src/assets/Box.glb"

const WorldTracking=()=>{
      if (ZapparThree.browserIncompatible()) {
            ZapparThree.browserIncompatibleUI();
            throw new Error('Unsupported browser');
          }
          
          
          const manager = new ZapparThree.LoadingManager();
          
          const renderer = new THREE.WebGLRenderer({ antialias: true });
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
          
          
          const instantTracker = new ZapparThree.InstantWorldTracker();
          const instantTrackerGroup = new ZapparThree.InstantWorldAnchorGroup(camera, instantTracker);
          
          // Add our instant tracker group into the ThreeJS scene
          scene.add(instantTrackerGroup);
          
          
          const gltfLoader = new GLTFLoader(manager);
          
          gltfLoader.load(model, (gltf) => {
            // Now the model has been loaded, we can add it to our instant_tracker_group
            instantTrackerGroup.add(gltf.scene);
          }, undefined, () => {
            console.log('An error ocurred loading the GLTF model');
          });
          
          // Let's add some lighting, first a directional light above the model pointing down
          const directionalLight = new THREE.DirectionalLight('white', 0.8);
          directionalLight.position.set(0, 5, 0);
          directionalLight.lookAt(0, 0, 0);
          instantTrackerGroup.add(directionalLight);
          
          // And then a little ambient light to brighten the model up a bit
          const ambientLight = new THREE.AmbientLight('white', 0.4);
          instantTrackerGroup.add(ambientLight);
          
          // When the experience loads we'll let the user choose a place in their room for
          // the content to appear using setAnchorPoseFromCameraOffset (see below)
          // The user can confirm the location by tapping on the screen
          let hasPlaced = false;
          const placeButton = document.getElementById('tap-to-place') || document.createElement('div');
          placeButton.addEventListener('click', () => {
            hasPlaced = true;
            placeButton.remove();
          });
          
          // Use a function to render our scene as usual
          function render() {
            if (!hasPlaced) {
              // If the user hasn't chosen a place in their room yet, update the instant tracker
              // to be directly in front of the user
              instantTrackerGroup.setAnchorPoseFromCameraOffset(0, 0, -5);
            }
          
            // The Zappar camera must have updateFrame called every frame
            camera.updateFrame(renderer);
          
            // Draw the ThreeJS scene in the usual way, but using the Zappar camera
            renderer.render(scene, camera);
          
            // Call render() again next frame
            requestAnimationFrame(render);
          }
          
          // Start things off
          render();

          
}
export default WorldTracking;