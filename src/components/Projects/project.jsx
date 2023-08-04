import React, { useContext, useEffect, useState } from "react";
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
import { contextObject } from "../ContextStore/ContextApi";


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
  const [publishedKey,setpublishedKey]=useState(true);
  const [isShowDot,setisShowDot]=useState(false)
  const ctx=useContext(contextObject);


  

 // USE EFFECT FOR ID ------------------------------------------------------------------->
 useEffect  (() => {
  if(id?.length > 0){
  axios.get(API.BASE_URL+'project-list/'+id+'/')
    .then(function(response){
      setpublishedKey(response.data.publish_key)
      ctx.setisPublish(response.data.publish_key)
      setisShowDot(true)
      addTitle(response.data.ProTitle)
      ProImg(response.data.imagePro.toString())
      CreationDate(response.data.created_at)
      ctx.setqrCode(response.data.qr_code_url)
    })
    .catch(function(error){
    })
  }
 },[imgProject])

 // USE EFFECT FOR USERNAME ------------------------------------------------------------------->

 const token = localStorage.getItem('token')
 const userId = localStorage.getItem('id')
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
   });
 },[]);


 const deleteProject = () => {
  axios.delete(API.BASE_URL+'project-list/'+id+'/')
  .then(function(response){
    navigate('/home')
  })
  .catch(function(error){
  })
 }


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
      // console.log("---------------------------------------------------------*************------>",response.data.data.imagepro)
      toast.success("Image Uploaded !")
      ProImg(response.data.data.imagepro.toString())
    }).catch(function(error){
      toast.error("The submited file is not Image File !")
    })
  };
  
 // FOR API  ------------------------------------------------------------------->


 useEffect(() => {
  const delay = 500;

  const timeoutId = setTimeout(() => {
      const formData = new FormData();
      formData.append('ProTitle',titlePro)
      axios.post(API.BASE_URL + 'update-project/'+id+'/', formData, {
        headers: {
          'accept': 'application/json',
              'content-type': 'multipart/form-data' 
          },
        })
      .then(function (response) {
        console.log(response)
        if(response.data.data.projectTitle ===null){
          console.log('ok')
          formData.append('projectTitle',titlePro)
          axios.post(API.BASE_URL + 'update-project/'+id+'/', formData, {
            headers: {
              'accept': 'application/json',
                  'content-type': 'multipart/form-data' 
              },
            })
            .then(function (response) {console.log('update-project')})
      }
      })
      .catch(function(err) {
        console.error('Error uploading file', err);
      });
  }, delay);

  return () => {
    clearTimeout(timeoutId);
  };
}, [titlePro]);




  const handleSubmit = () => {   
      const formData = new FormData();
      formData.append('ProTitle',titlePro)
      axios.post(API.BASE_URL + 'update-project/'+id+'/', formData, {
        headers: {
          'accept': 'application/json',
              'content-type': 'multipart/form-data' 
          },
        })
      .then(function (response) {
        navigate('/target/'+id)
      })
      .catch(function(err) {
        console.error('Error uploading file', err);
      });
}


// Unpublished project API function

const unPublishProject=()=>{
  axios.post(API.BASE_URL+'publish_project/',{
    project_id:id,
    publish_key:'False',
  }).then((res)=>{
    console.log(res,'response from unpublished key');
    ctx.setisPublish(false)
  }).catch((err)=>{
    console.log(err,'error from unpublished key');
  })
}
//-------------------------------------------CreateScene---------------------------------------->


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

  const[emailRes, recEmail]=useState(null)
  const[imageRes, recImage]=useState(null)
  const[usernameRes, recUsername]=useState(null)
  const[detailRes, recDetails]=useState(null)
  useEffect(()=>{
    axios.get(API.BASE_URL+'getpublish_list/'+userId+'/')
    .then(function(res){
      console.log(res)
      recEmail(res.data.data.email)
      recImage(res.data.data.profile_image)
      recUsername(res.data.data.username)
      recDetails(res.data.data.project_details)
    }).catch(function(err){
      console.log(err)
    })
  },[])
/********** End----Model State *************/




return(
      <div className="projectDetail">
            <NavBar />
        <div className="main-page-content">
          <div class="row project-pg">
            <SideBar />
            
            <div class="col-md-11 p-0 m-0 project-page" style={{ backgroundImage:`url(${mainbg})` }}>
                <div class="row sec-1 p-2 p-md-4 m-0">
                  <div className="project-page-upper d-md-flex justify-content-between align-items-center p-0">
                    <div class="col-md-3 m-0 p-0 d-flex cover-designer-img">
                      <div class="overview-cover-image" style={{backgroundImage:`url(${imgProject != null ? imgProject : ""})` , backgroundSize: "100% 100%" , outline: "none" ,    borderRadius: "10px"}}>
                      <div class="pointer-div">
                        <div class="tag designer-tag-text">Designer</div>
                        
                          <input type="file" className="base-img" onChange={handleImageChange}
                          accept="image/*"
                          />
                          <div class="upload-file-btn">
                          <button id="svgporj" class="open-designer-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path><path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </button>
                          <span class="upload-cover-img">{imgProject !=null ? "Want to replace?" : "Click to upload cover image"}</span>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-5 align-self-center p-4" id="project-actions">
                    {isShowDot && <span class=" status-icon" style={{
                      backgroundColor:!ctx.isPublish ? '#9fc1d9':'green'
                    }}></span>}
                      <input id="projName" className="mt-md-0" type="text" onChange={handleUntitle} value={titlePro} /> 
                  <div class="actions-div">
                      <div className="dropdown custom-drop-down">
                          <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          
                            <p class="user-profile-name"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                              <path d="M21.913 10.843c-1.703 1.107-2.6 3.132-2.327 5.126l.028.18-8.736 8.735a2.997 2.997 0 000 4.238l.138.13a2.998 2.998 0 004.101-.13l8.73-8.729.254.04a5.231 5.231 0 005.898-5.301l-.009-.098a.703.703 0 00-1.043-.497l-2.232 1.288-1.476-.862-.008-1.71 2.23-1.287a.702.702 0 00.013-1.208 5.232 5.232 0 00-5.368-.034l-.193.12zm4.636.556l.024.013-2.307 1.331.012 2.792 2.415 1.407L29 15.611l-.019.19a4.25 4.25 0 01-2.096 3.153 4.252 4.252 0 01-3.095.46l-.256-.058-9.058 9.048a2.038 2.038 0 01-2.88 0 2.033 2.033 0 010-2.876l9.062-9.053-.058-.254c-.406-1.795.394-3.696 1.986-4.632a4.26 4.26 0 013.963-.19z"></path>
                            </svg>Actions</p><FontAwesomeIcon icon={faChevronDown} />
                          </a>
                          <ul className="dropdown-menu text-small shadow">
                            <li><a className="dropdown-item"> 
                          
                            Duplicate</a></li>
                            <li><a className="dropdown-item">
                         Get deep link ID</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li ><button className="dropdown-item" disabled={!ctx.isPublish ? true : false} 
                            onClick={unPublishProject}
                            >
                          Unpublish</button></li>
                          <li onClick={deleteProject}><a className="dropdown-item">Delete</a></li>
                          </ul>
                        </div>
                        {/* labels*/}
                        <div className="dropdown custom-drop-down"id="project-labels">
                            <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            
                              <p class="user-profile-name">
                                <svg class="labels-svg"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="#073158"
                                  viewBox="0 0 20 20"
                                >
                                  <g clipPath="url(#clip0_379_1216)">
                                    <path
                                      fill="#000"
                                      d="M10.368 0a.68.68 0 01.484.201l8.35 8.39c.558.586.836 1.249.794 1.958-.04.664-.304 1.274-.807 1.846l-7.074 7.037-.115.092c-.638.406-1.26.564-1.85.428-.515-.118-1.054-.436-1.677-.978l-8.16-8.219a.68.68 0 01-.199-.47L0 1.472C.007 1.044.126.681.392.413.666.138 1.055.023 1.588 0h8.78zm-.284 1.363H1.618c-.13.005-.21.018-.243.02l-.006-.001v.015l-.004.078.111 8.516 7.929 7.988c.431.374.789.585 1.052.645.178.041.424-.017.75-.213l6.986-6.948c.278-.316.419-.642.44-.995.018-.307-.109-.61-.41-.927l-8.139-8.178zM6.474 3.21a2.956 2.956 0 012.732 4.084 2.956 2.956 0 01-3.864 1.599 2.956 2.956 0 01-1.827-2.73A2.956 2.956 0 016.474 3.21zm0 1.363a1.59 1.59 0 100 3.18 1.59 1.59 0 000-3.18z"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_379_1216">
                                      <path fill="#fff" d="M0 0H20V20H0z"></path>
                                    </clipPath>
                                  </defs>
                                </svg>Labels</p><FontAwesomeIcon icon={faChevronDown} />
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
                      
                      <button id="open-design" type="submit" class="btn btn-info d-block float-end btn-1"   onClick={handleSubmit} > Open Designer</button>
                    </div>
                  </div>
                  
                  <div className="project-page-bottom mt-5 p-0" id="trigger-section-outer">
                    <div class="sec-2 project-bottom-title">
                      <div class="trigger-head-left">
                      <p class="project-triggers-head">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 4h6v6H4V4m16 0v6h-6V4h6m-6 11h2v-2h-2v-2h2v2h2v-2h2v2h-2v2h2v3h-2v2h-2v-2h-3v2h-2v-4h3v-1m2 0v3h2v-3h-2M4 20v-6h6v6H4M6 6v2h2V6H6m10 0v2h2V6h-2M6 16v2h2v-2H6m-2-5h2v2H4v-2m5 0h4v4h-2v-2H9v-2m2-5h2v4h-2V6M2 2v4H0V2a2 2 0 012-2h4v2H2m20-2a2 2 0 012 2v4h-2V2h-4V0h4M2 18v4h4v2H2a2 2 0 01-2-2v-4h2m20 4v-4h2v4a2 2 0 01-2 2h-4v-2z"></path>
                        </svg>
                         Triggers <i class="bi bi-pencil-square ps-2"></i></p>
                        </div>
                        <div class="trigger-head-right">
                       
                        <p class="project-triggers-head">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="-13.32 0 68.514 68.514"
                          >
                            <g data-name="Group 62" transform="translate(-815.597 -920.238)">
                              <g data-name="Group 59">
                                <path
                                  fill="#0c2b67"
                                  d="M852.706 988.752h-32.343a4.773 4.773 0 01-4.766-4.767v-58.98a4.773 4.773 0 014.766-4.767h32.343a4.773 4.773 0 014.767 4.767v58.98a4.773 4.773 0 01-4.767 4.767zm-32.343-65.514a1.769 1.769 0 00-1.766 1.767v58.98a1.769 1.769 0 001.766 1.767h32.343a1.769 1.769 0 001.767-1.767v-58.98a1.769 1.769 0 00-1.767-1.767z"
                                  data-name="Path 53"
                                ></path>
                              </g>
                              <g data-name="Group 60">
                                <rect
                                  width="26.5"
                                  height="43.764"
                                  fill="#0c2b67"
                                  data-name="Rectangle 35"
                                  rx="2.058"
                                  transform="translate(823.285 929.072)"
                                ></rect>
                              </g>
                              <g data-name="Group 61">
                                <circle
                                  cx="3.699"
                                  cy="3.699"
                                  r="3.699"
                                  fill="#0c2b67"
                                  data-name="Ellipse 76"
                                  transform="translate(832.836 975.706)"
                                ></circle>
                              </g>
                            </g>
                          </svg>
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
                      {detailRes?.length>0?(
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
                          {detailRes?.map((i,val)=>(
                            <tr>
                            <th><img alt="mdo" width="32" height="32" class="rounded-circle published-log-img" src={imageRes} />{usernameRes}</th>
                            <td>{emailRes}</td>
                            <td>{i.updated_at}</td>
                            <td>Version | {i.description}</td>
                          </tr>
                          ))}
                          </tbody>
                        </table>
                          ):<>
                          <div className="unPublished-log">
                            <h4>Publish your project to create logs and versions</h4>
                          </div>
                          </>}
                      </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Project;