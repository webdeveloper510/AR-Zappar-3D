import React, { useEffect, useState } from "react";
import { API } from "../../../src/config/api"
import axios from "axios"; 
import { useNavigate , useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import WorldTracking from '../../assets/images/worldtracking.jpg'
import faceTracking from '../../assets/images/facetracking.png'
import ImageTracking from '../../assets/images/imagetracking.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";
import mainbg from '../../assets/images/main-bg.jpg';
import {  faCodeMerge } from '@fortawesome/free-solid-svg-icons';
import {  faAreaChart } from '@fortawesome/free-solid-svg-icons';
import {  faWrench } from '@fortawesome/free-solid-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import MainTab from "./mainTab";


const Project =()=>{
  const navigate = useNavigate()
  const [imgProject , ProImg] = useState(null)
  const [titlePro , addTitle] = useState(null)
  const [created_at , CreationDate] = useState(null)
  const [nameOfUser , UserName] = useState(null)
  const {id} = useParams()
  const [show, setShow] = useState(false);
  const [SceneType , selectSceneType] = useState(null);
  const [FeaturedtrackerOption,Featuredtracker] = useState(null);
  const [showcreatelabel, setcreatelabel] = useState(false);
  

 // USE EFFECT FOR ID ------------------------------------------------------------------->
 useEffect  (() => {
  if(id?.length > 0){
  axios.get(API.BASE_URL+'project-list/'+id+'/')
    .then(function(response){
      console.log('Response---------------------->',response)
      addTitle(response.data.ProTitle)
      ProImg(response.data.imagePro.toString())
      CreationDate(response.data.created_at)
      Featuredtracker(response.data.FeaturedtrackerOption)
    })
    .catch(function(error){
      console.log(error)
    })
  }
 },[imgProject])
 console.log("--------------------------------------------------->" , FeaturedtrackerOption)

 // USE EFFECT FOR USERNAME ------------------------------------------------------------------->

 const token = localStorage.getItem('token')
 useEffect(()=>{
   axios.post(API.BASE_URL + 'userprofile/', null, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   })
   .then(function (response) {
    UserName(response.data.firstname)
   })
   .catch((error) => {
     console.log(error, 'error');
   });
 },[])


 // Title  ------------------------------------------------------------------->
 
  const handleUntitle = (e) =>{
    addTitle(e.target.value)
  };

 // IMAGE  ------------------------------------------------------------------->

  const handleImageChange = (event) => {
    const formData = new FormData;
    formData.append("imagePro" , event.target.files[0])
    axios.post(API.BASE_URL + 'update-project/'+id+'/', formData, {
      headers: {
        'accept': 'application/json',
            'content-type': 'multipart/form-data'
      },
    }).then(function(response){
      console.log("---------------------------------------------------------*************------>",response.data.data.imagepro)
      toast.success("Image Uploaded !")
      ProImg(response.data.data.imagepro.toString())
    }).catch(function(error){
      toast.error("The submited file is not Image File !")
    })
  };
  
 // FOR API  ------------------------------------------------------------------->

  const handleSubmit = () => {    // will run on create scene
    if (FeaturedtrackerOption===''){
      const formData = new FormData();
      formData.append('ProTitle',titlePro)
      formData.append('FeaturedtrackerOption' , SceneType)
      axios.post(API.BASE_URL + 'update-project/'+id+'/', formData, {
        headers: {
          'accept': 'application/json',
              'content-type': 'multipart/form-data' 
          },
        })
      .then(function (response) {
        CreateScene(id)
        CreateProject(id)
        navigate('/target/'+id)
      })
      .catch(function(err) {
        console.error('Error uploading file', err);
      });
    }
}
//-------------------------------------------CreateScene---------------------------------------->
const CreateScene=(id)=>{
  const formdata = {'project_id': id,'name': 'Scene 1'}
  axios.post(API.BASE_URL + 'scene/', formdata ,{
    headers: {
      'accept': 'application/json',
          'content-type': 'multipart/form-data' 
      },
  }).then(function (response) {
    console.log(response.data.id)
    sceneTransitions(response.data.id)
  }).catch(function(errorMessage){
    console.log(errorMessage)
  })
}
const sceneTransitions=(id)=>{
  const formData = {
    scene_id: id,
    transition_enter: null,
    transition_exit: null,
    height: 0,
    duration: 0,
    delay: 0,
  }
  axios.post(API.BASE_URL + "scene_transition/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(function (response) {
  }).catch(function (err) {
    console.log(err);
  });
}


// --------------------------------------------------------CreateProject----------------------------------------------->

  const CreateProject=(id)=>{
    const formData = {target_image:  null,project_Id: id,opacity: 0,orientation: 0,dimensions_w: 0,dimensions_h: 0,units: ''};
    axios.post(API.BASE_URL + 'project_content/', formData ,{
      headers: {
        'accept': 'application/json',
            'content-type': 'multipart/form-data' 
        },
    }).then(function (response) {
      const project_content_id = response.data.id;
      backgroundSoundApi(project_content_id);
      analyticsApi(project_content_id);
    }).catch(function(errorMessage){
      console.log(errorMessage)
    })
  }

  // function for post api background sound

  const backgroundSoundApi = (idee) => {
    const formData = {project_content_id: idee, media_file: null};
    axios.post(API.BASE_URL + 'background_sound/',formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(function (response) {
      }).catch(function (err) {
        console.log(err);
      });
  };

  const analyticsApi = (idee) => {
    const formData = {project_content_id: idee,track_with: null};
    axios.post(API.BASE_URL + "analytics/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(function (response) {
        console.log(response, "RESponSE from analyticsApi");
      }).catch(function (err) {
        console.log(err);
      });
  };

 // USEEFFECT FOR IMAGE  ------------------------------------------------------------------->

useEffect(() => {
  if(FeaturedtrackerOption) {
    handleSubmit()

    console.log("Done")
  }
}, [])

 // To SELECT TARGET   ------------------------------------------------------------------->

  const handleSelectTarget =(event , type)=>{
    selectSceneType(type)
    event.currentTarget.classList.add("selected");
  }



/***********creatlabelpopup***************************** */
const handleDeleteClose = () => setcreatelabel(false);
const handleshowcreatelabel = () => setcreatelabel(true);

 /********** Start----Model State *************/

 const handleClose = () =>{
  setShow(false);
} 

const handleShow = () => {   // will run on Open design------------------------------------>
  if (FeaturedtrackerOption!=='') {
    const formData = new FormData();
    formData.append('ProTitle',titlePro)
    axios.post(API.BASE_URL + 'update-project/'+id+'/', formData, {
      headers: {
        'accept': 'application/json',
            'content-type': 'multipart/form-data'
          },
        })
        .then(function (response) {
          console.log('Alert--------------------->',response);
          navigate('/target/'+id)
        })
        .catch(function(err) {
          console.error('Error uploading file!!!', err);
        });
      }
      else{
    setShow(true);
  }
}


  
/********** End----Model State *************/




return(
      <div className="projectDetail">
            <NavBar />
        <div className="main-page-content">
          <div class="row project-pg d-md-flex justify-content-between">
            <SideBar />
            
            <div class="col-md-10 p-0 m-0 project-page" style={{ backgroundImage:`url(${mainbg})` }}>
                <div class="row sec-1 p-2 p-md-4 m-0">
                  <div className="project-page-upper d-md-flex justify-content-between align-items-center p-0">
                    <div class="col-md-4 m-0 p-0 d-flex cover-designer-img">
                      <div class="overview-cover-image" style={{backgroundImage:`url(${imgProject != null ? imgProject : ""})` , backgroundSize: "100% 100%" , outline: "none" ,    borderRadius: "10px"}}>
                      <div class="pointer-div">
                        <div class="tag designer-tag-text">Designer</div>
                        
                          <input type="file" className="base-img" onChange={handleImageChange} />
                          <div class="upload-file-btn">
                          <button id="svgporj" class="open-designer-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path><path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </button>
                          <span class="upload-cover-img">{imgProject !=null ? "Want to replace?" : "Click to upload cover image"}</span>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4 align-self-center p-4" id="project-actions">
                    <span class=" status-icon"></span>
                      <input id="projName" className="mt-md-0" type="text" onChange={handleUntitle} value={titlePro} /> 
                  <div class="actions-div">
                      <div className="dropdown custom-drop-down">
                          <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          
                            <p class="user-profile-name"><FontAwesomeIcon icon={faWrench} />Actions</p><FontAwesomeIcon icon={faChevronDown} />
                          </a>
                          <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item"> 
                          
                            Duplicate</a></li>
                            <li><a className="dropdown-item">
                         Get deep link ID</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item">
                          Unpublish</a></li>
                          <li><a className="dropdown-item">Delete</a></li>
                          </ul>
                        </div>

                        {/* labels*/}
                        <div className="dropdown custom-drop-down"id="project-labels">
                            <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            
                              <p class="user-profile-name"><FontAwesomeIcon icon={faTag} />Labels</p><FontAwesomeIcon icon={faChevronDown} />
                            </a>
                            <ul className="dropdown-menu text-small shadow">
                              <li>
                              <div class="field">
                                <div class="input-wrapper"><input id="search-labels-input" type="search" placeholder="Search labels"/>
                                <svg class="search-label-svg" role="button" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M19,11 C23.418278,11 27,14.581722 27,19 C27,21.0296419 26.2441691,22.8827501 24.9986213,24.2932105 L29.2708011,28.5802351 C29.4657149,28.775845 29.4651506,29.092427 29.2695406,29.2873408 C29.0956652,29.4605974 28.8262068,29.4794023 28.6315796,29.3440591 L28.562435,29.2860803 L24.2922058,24.9995083 C22.8818702,26.2445279 21.0291601,27 19,27 C14.581722,27 11,23.418278 11,19 C11,14.581722 14.581722,11 19,11 Z M19,12 C15.1340068,12 12,15.1340068 12,19 C12,22.8659932 15.1340068,26 19,26 C20.8819703,26 22.5904778,25.2573173 23.8484255,24.0490489 C23.8682789,24.0062003 23.8973303,23.9668665 23.9327917,23.9315312 C23.9676812,23.8967659 24.0064192,23.8682194 24.0476289,23.8458892 C25.2573173,22.5904778 26,20.8819703 26,19 C26,15.1340068 22.8659932,12 19,12 Z" fill="#344B60"></path></svg></div></div>
                              </li>
                              <li><hr className="dropdown-divider"/></li>
                              <li class="create-labels" onClick={handleshowcreatelabel}><FontAwesomeIcon icon={faPlus} /> Create Labels</li>
                            </ul>
                          </div>
                          </div>

                          {/*start create label popup*/}
                           
                          <Modal id="create-label-popup" show={showcreatelabel} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create label</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="field mb24"><div class="label-wrapper">
                  <label class="label-name" for="Labelname">Label name</label></div>
                  <div class="input-wrapper">
                  <input slot="input" type="text" id="Labelname" min="0" max="255"/></div></div>
                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" class="btn-cancel-popup" onClick={handleDeleteClose}>
                  Cancel
                  </Button>
                  <Button variant="primary" class="btn-delete-popup" onClick={handleDeleteClose}>
                   Create
                  </Button>
                </Modal.Footer>
            </Modal>

                          {/*end  create  label popup*/}

                    </div>
                    <div class="col-md-4 p-4 created-text-design">
                      <a href="#" class="link-dark text-decoration-none text-end d-block"> Create by: {nameOfUser} | {created_at} </a>
                      
                      <button id="open-design" type="submit" class="btn btn-info d-block float-end btn-1"   onClick={handleShow} > Open Designer</button>
                    </div>
                  </div>
                  
                  <div className="project-page-bottom mt-5 p-0">
                    <div class="sec-2 project-bottom-title">
                      <div class="trigger-head-left">
                      <p class="project-triggers-head">
                        <FontAwesomeIcon icon={faCodeMerge} />Triggers <i class="bi bi-pencil-square ps-2"></i></p>
                        </div>
                        <div class="trigger-head-right">
                        <p class="project-triggers-head">
                       
                          Project icon & title</p>
                        </div>
                    </div>


                     {/* start Main Tab  */}
                     < MainTab />

                      {/* End Main Tab  */}
                  </div>

                  <div className="project-page-bottom mt-5 p-0" id="Analytics-div">
                    <div class="sec-2 project-bottom-title">
                      <div class="trigger-head-left">
                      <p class="project-triggers-head">
                        <FontAwesomeIcon icon={faAreaChart} />Analytics</p>
                        </div>
                    </div>
                      <div class="Analytics-left-div">
                        <div class="total-views">
                          <p>Total Views</p>
                        </div>
                      </div>
                      <div class="Analytics-right-div">
                      <div class="analytics-right-inner-text">
                        <h3>Try business for complete analytics</h3>
                        <p>Discover greater insight into how your project campaigns are performing with with a business workspace.</p>
                     <div class="upgrade-business">
                     <a href="#" class="btn btn-primary btn-small">Upgrade to business</a>
                     </div>
                      </div>
                      </div>
                  </div>

                  <div className="project-page-bottom mt-5 p-0" id="published-logs">
                    <div class="sec-2 project-bottom-title">
                      <div class="trigger-head-left">
                      <p class="project-triggers-head">
                      <FontAwesomeIcon icon={faList} />Publish logs</p>
                        </div>
                    </div>
                    
                      <div class="published-log-tabel">
                      <table class="table">
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">Email</th>
      <th scope="col">Publish Date</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img alt="mdo" width="32" height="32" class="rounded-circle published-log-img" src="http://43.204.111.164:8000/media/profile_picture/profile.png" />Web Developer</th>
      <td>developerweb6@gmail.com</td>
      <td>May 24, 2023, 10:42 a.m.</td>
      <td>Version | v5</td>
    </tr>
    <tr>
      <th scope="row"><img alt="mdo" width="32" height="32" class="rounded-circle published-log-img" src="http://43.204.111.164:8000/media/profile_picture/profile.png" />Web Developer</th>
      <td>developerweb6@gmail.com</td>
      <td>May 24, 2023, 10:42 a.m.</td>
      <td>Version | v5</td>
    </tr>
    <tr>
      <th scope="row"><img alt="mdo" width="32" height="32" class="rounded-circle published-log-img" src="http://43.204.111.164:8000/media/profile_picture/profile.png" />Web Developer</th>
      <td>developerweb6@gmail.com</td>
      <td>May 24, 2023, 10:42 a.m.</td>
      <td>Version | v5</td>
    </tr>
  </tbody>
</table>
                     
                      </div>
                  </div>

                </div>
            </div>
          </div>
        </div>



 {/* Start---model data */}
 <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="slectTrigger" id="ope-design-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select a tracking type for your new scene</Modal.Title>
         </Modal.Header>
        <Modal.Body>


          <div className="open-designer-popup" >
            <div className={`three-image-designer ${SceneType === "WorldTracking" ? "selected" : ""}`} onClick={event => handleSelectTarget(event , "WorldTracking")}>
            <div className="designer-image">
            <img src={WorldTracking}></img>
            </div>
            <div className="designer-content">
            <h3>World tracking</h3>
            <p>Place content on flat surfaces, like the ground or tabletop.</p>
            </div>
            </div>

            <div className={`three-image-designer ${SceneType === "ImageTracking" ? "selected" : ""}`} onClick={event => handleSelectTarget(event , "ImageTracking")}>
            <div className="designer-image">
            <img src={ImageTracking}></img>
            </div>
            <div className="designer-content">
            <h3>Image tracking</h3>
            <p>Content will anchor to images. Great for posters.</p>
            </div>
            </div>

            <div className={`three-image-designer ${SceneType === "FaceTracking" ? "selected" : ""}`} onClick={event => handleSelectTarget(event , "FaceTracking")}>
            <div className="designer-image">
            <img src={faceTracking}></img>
            </div>
            <div className="designer-content">
            <h3>Face tracking</h3>
            <p>Attach content to anchor points on parts of the face.</p>
            </div>
            </div>

           
          </div>
          <div className="scene-outer">
            <button className="btn-scene" disabled="" style={{padding: "10px 16px"}} onClick={handleSubmit}>Create scene</button>
            </div>
		    <>
       
       
        </>
          
        </Modal.Body>
      </Modal>
      {/* End---model data */}

      </div>
    )
}
export default Project;