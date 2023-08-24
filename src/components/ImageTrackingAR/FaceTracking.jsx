import * as THREE from '../../../node_modules/three/build/three.module';
import * as ZapparThree from '@zappar/zappar-threejs';
import { GLTFLoader } from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import model from "../../../src/assets/Box.glb"

const FaceTracking=() => {
if (ZapparThree.browserIncompatible()) {
  // The browserIncompatibleUI() function shows a full-page dialog that informs the user
  ZapparThree.browserIncompatibleUI();

  // If the browser is not compatible, we can avoid setting up the rest of the page

  throw new Error('Unsupported browser');
}

const manager = new ZapparThree.LoadingManager();

// Construct our ThreeJS renderer and scene as usual
const renderer = new THREE.WebGLRenderer({ antialias: true });
const scene = new THREE.Scene();
document.body.appendChild(renderer.domElement);

// As with a normal ThreeJS scene, resize the canvas if the window resizes
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Create a Zappar camera that we'll use instead of a ThreeJS camera
const camera = new ZapparThree.Camera();

// In order to use camera and motion data, we need to ask the users for permission
// The Zappar library comes with some UI to help with that, so let's use it
ZapparThree.permissionRequestUI().then((granted) => {
  if (granted) camera.start(true); // true parameter for user facing camera
  else ZapparThree.permissionDeniedUI();
});

// The Zappar component needs to know our WebGL context, so set it like this:
ZapparThree.glContextSet(renderer.getContext());
scene.background = camera.backgroundTexture;
const faceTracker = new ZapparThree.FaceTrackerLoader(manager).load();
const faceTrackerGroup = new ZapparThree.FaceAnchorGroup(camera, faceTracker);
// Add our face tracker group into the ThreeJS scene
scene.add(faceTrackerGroup);

// Start with the content group invisible
faceTrackerGroup.visible = false;


const mask = new ZapparThree.HeadMaskMeshLoader().load();
faceTrackerGroup.add(mask);

// Load a 3D model to place within our group (using ThreeJS's GLTF loader)
// Pass our loading manager in to ensure the progress bar works correctly
const gltfLoader = new GLTFLoader(manager);

// const helmetSrc = new URL(model, import.meta.url).href;
gltfLoader.load(model, (gltf) => {
  // Position the loaded content to overlay user's face
  gltf.scene.position.set(0,0,0);
  gltf.scene.scale.set(1.1, 1.1, 1.1);

  // Add the scene to the tracker group
  faceTrackerGroup.add(gltf.scene);
}, undefined, () => {
  console.log('An error ocurred loading the GLTF model');
});

// Let's add some lighting, first a directional light above the model pointing down
const directionalLight = new THREE.DirectionalLight('white', 0.8);
directionalLight.position.set(0, 5, 0);
directionalLight.lookAt(0, 0, 0);
scene.add(directionalLight);

// And then a little ambient light to brighten the model up a bit
const ambeintLight = new THREE.AmbientLight('white', 0.4);
scene.add(ambeintLight);

// Hide the 3D content when the face is out of view
faceTrackerGroup.faceTracker.onVisible.bind(() => { faceTrackerGroup.visible = true; });
faceTrackerGroup.faceTracker.onNotVisible.bind(() => { faceTrackerGroup.visible = false; });

// Use a function to render our scene as usual
function render() {
  // The Zappar camera must have updateFrame called every frame
  camera.updateFrame(renderer);

  // Update the head mask so it fits the user's head in this frame
  mask.updateFromFaceAnchorGroup(faceTrackerGroup);

  // Draw the ThreeJS scene in the usual way, but using the Zappar camera
  renderer.render(scene, camera);

  // Call render() again next frame
  requestAnimationFrame(render);
}

// Start things off
render();
}
export default FaceTracking;