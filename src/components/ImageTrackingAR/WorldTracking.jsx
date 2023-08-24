import * as THREE from "../../../node_modules/three/build/three.module"
import ZapparThree from "@zappar/zappar-threejs"
import React from "react"

const WorldTracking=()=>{
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

          
}
export default WorldTracking;