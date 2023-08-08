import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import { API } from "../../config/api";
import axios from "axios";
const WelcomePage = () => {
  const [targetImage,targetImageFound]=useState(null)
  const {id}= useParams();
  const openwebPage=()=>{
    axios.get(API.BASE_URL+'get_targetimage_by_projectid/'+id+'/')
    .then(function(response){
      targetImageFound(response.data.data)
    })
    .catch(function(err){});
  }
  return (
    <div className="main">
      {targetImage?(
        <>
          {/* <img src={targetImage} alt={targetImage}/> */}
          <a-entity camera zappar-camera></a-entity>

        <a-entity zappar-permissions-ui id="permissions">

            <a-entity text="value: Please reload the page, accepting the camera permissions." position="0 0 -2"></a-entity>
        </a-entity>
        <a-entity camera zappar-camera="user-facing: true;"></a-entity>
        <a-entity
          camera zappar-camera="user-facing: true; user-camera-mirror-mode: poses">
          </a-entity>
          <a-scene zappar-environment-map>
          </a-scene>
          <a-sphere position="0 0 -5" environment-map metalness="1" roughness="0" radius="1"></a-sphere>
        </>):(
        <>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 mt-5">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-center">Welcome to our website!</h1>
                  <p className="card-text text-center">
                    Thank you for visiting. We are excited to have you here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className='continue-button' onClick={openwebPage}>Continue</button>
        </div>
        </>
      )}
    </div>
  );
};

export default WelcomePage;
