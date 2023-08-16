import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { API } from "../../config/api";
import axios from "axios";
import * as THREE from '../../../node_modules/three/build/three.module'
import 'aframe'
import 'aframe-ar'
// import * as THREEx from "../../../node_modules/threex/vendor/three.js/build/three"
// import "threex"
// import "threex/artoolkitsource"
// import "threex/artoolkitcontext"
// import "threex/arbasecontrols"
const ImageTrackingAR = () => {

  // FUNCTIONS ------------->
//   const [targetImage,targetImageFound]=useState(null)
//   const {id}= useParams();
//   const openwebPage=()=>{
//     axios.get(API.BASE_URL+'get_targetimage_by_projectid/'+id+'/')
//     .then(function(response){
//       targetImageFound(response.data.data)
//     })
//     .catch(function(err){});
//   }



      const scene = new THREE.Scene();
      const camera = new THREE.Camera()
      scene.add(camera)
      const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
      });
      renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( renderer.domElement );
      
      
      // var ArToolkitSource = new THREEx.ArToolkitSource({
      //       sourceType: "webcam",
      // })
      // ArToolkitSource.init(function(){
      //       setTimeout(function(){
      //             ArToolkitSource.onResizeElement();
      //             ArToolkitSource.copyElementSizeTo(renderer.domElement);
      //       },2000)
      // })
      
      // var ArToolkitContext = new THREEx.ArToolkitContext({
      //       cameraParametersUrl:'camera_para.dat',
      //       detectionMode: 'color_and_matrix',
      // })
      // ArToolkitContext.init(function(){
      //       camera.projectionMatrix.copy(ArToolkitContext.getProjectionMatrix());
      // });
      // var rMarkerControls = new THREEx.ArMarkerControls(ArToolkitContext,camera,
      // {
      //       type:'pattern',
      //       patternUrl: 'pattern-blue.patt',
      //       changeMatrixMode: 'cameraTransformMatrix',
            
      // })
      // scene.visible = false;
      
      const geometry = new THREE.BoxGeometry( 1, 1, 1 );
      const material = new THREE.MeshNormalMaterial({
            color: 0x00ff00 ,
            transparent: true,
            opacity:0.5,
            side: THREE.DoubleSide
      } );
      const cube = new THREE.Mesh( geometry, material );
      cube.position.y = geometry.parameters.height/2;
      scene.add( cube );
      camera.position.z = 5;
      
      function animate() {
            requestAnimationFrame( animate );
            // ArToolkitContext.update(ArToolkitSource.domElement)
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            scene.visible = camera.visible;
            renderer.render( scene, camera );
      
      }
      
      animate();

};

export default ImageTrackingAR;
