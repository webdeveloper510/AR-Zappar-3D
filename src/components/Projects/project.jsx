import React, { useEffect, useState } from "react";
import Mob1 from "../../assets/images/mobi-1.png";
import Mob2 from "../../assets/images/mobi-2.png";
import { API } from "../../../src/config/api"
import axios from "axios"; 
import { useNavigate , useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faGripHorizontal, faQrcode, faArrowDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import WorldTracking from '../../assets/images/worldtracking.jpg'
import faceTracking from '../../assets/images/facetracking.png'
import ImageTracking from '../../assets/images/imagetracking.png';
import Modal from 'react-bootstrap/Modal';
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";
import mainbg from '../../assets/images/main-bg.jpg';
import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {  faCodeMerge } from '@fortawesome/free-solid-svg-icons';


const Project =()=>{


  const navigate = useNavigate()
  /********** Start----Model State *************/
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
  } 
  const handleShow = () => {
    if (id){
      axios.get(API.BASE_URL + 'create-project/')
      .then(function (response) {
        console.log(response)

        console.log('File uploaded successfully', response);
        console.log('/target/'+id)
        navigate('/target/'+id)
      })
      .catch(function(err) {
        console.error('Error uploading file', err);
      });
    }
    else{setShow(true);}}
    
  /********** End----Model State *************/
  const  projectUserId = localStorage.getItem("id");

  const [imgProject , ProImg] = useState(null)
  const [proImg , uploadProImg] = useState(null)
  const [titlePro , addTitle] = useState(null)
  const [imageBase64, setImageBase64] = useState('');
  const {id} = useParams()
  console.log('---------------->',id)
 useEffect  (() => {
  if(id?.length > 0){
  axios.get(API.BASE_URL+'project-list/'+id+'/')
    .then(function(response){
      console.log(response)
      addTitle(response.data.ProTitle)
      setImageBase64(response.data.imagePro.toString())
    })
    .catch(function(error){
      console.log(error)
    })
  }
 })


  const handleUntitle = (e) =>{
    addTitle(e.target.value)
  }
  console.log('--->' , titlePro)



  console.log("Image",imgProject)

  const handleImageChange = (event) => {
    ProImg(event.target.files[0])
    const imageFile = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(imageFile);
  };


  const handleSubmit = () => {
    if (id){
      axios.get(API.BASE_URL + 'create-project/')
      .then(function (response) {
        console.log(response)

        console.log('File uploaded successfully', response);
        console.log('/target/'+id)
        navigate('/target/'+id)
      })
      .catch(function(err) {
        console.error('Error uploading file', err);
      });
    }
  if(imgProject){
    console.log("ok")
    const ProjectType = localStorage.getItem('selectedProjectType')
    const TriggerType = localStorage.getItem('selectedTriggerType')
    console.log(ProjectType , TriggerType)
    const formData = new FormData();
    formData.append('imagePro' , imgProject)
    formData.append('ProTitle' , titlePro)
    formData.append('projectUser' , projectUserId)
    formData.append('projectType' , ProjectType)
    formData.append('triggerType' , TriggerType)
    formData.append('FeaturedtrackerOption' , SceneType)
    
    console.log(imgProject , titlePro)

    axios.post(API.BASE_URL + 'create-project/', formData, {
      headers: {
        'accept': 'application/json',
            'content-type': 'multipart/form-data'
      },
    })
    .then(function (response) {
      console.log(response)
      console.log('File uploaded successfully', response);
      uploadProImg(response.data.imagePro? response.data.imagePro : "")
      localStorage.setItem('projectId', response.data.id)
      console.log('/target/'+response.data.id)
      navigate('/target/'+response.data.id)
      localStorage.removeItem('selectedProjectType')
      localStorage.removeItem('selectedTriggerType')
    })
    .catch(function(err) {
      console.error('Error uploading file', err);
    });
  }
}

console.log("Video Path", proImg)

useEffect(() => {
  if(proImg !=null) {
    handleSubmit()
    console.log("Done")
  }
}, [])


const handleLogout = ()=>{  
  localStorage.clear()
  toast.success('Log Out Successfully !');
  navigate('/');
}


  const [SceneType , selectSceneType] = useState(null);

  // const handleSubmit2 = ()=>{
  //   selectSceneType(true)
  // }


  const handleSelectTarget =(event , type)=>{
    selectSceneType(type)
  }
  console.log(SceneType)








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
                      <div class="overview-cover-image" style={{backgroundImage:`url(${imageBase64 != null ? imageBase64 : ""})` , backgroundSize: "100% 100%" , outline: "none" ,    borderRadius: "10px"}}>
                      
                        <div class="tag designer-tag-text">Designer</div>
                          <input type="file" className="base-img" onChange={handleImageChange} />
                          <button id="svgporj" class="open-designer-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path><path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </button>
                          <span>{imageBase64 !=null ? "Want to replace?" : "Click to upload cover image"}</span>
                        </div>
                    </div>
                    <div class="col-md-4 align-self-center p-4">
                    <span class=" status-icon"></span>
                      <input id="projName" className="mt-md-0" type="text" placeholder="Untitled Project" onChange={handleUntitle} value={titlePro} />  
                    </div>
                    <div class="col-md-4 p-4 created-text-design">
                      <a href="#" class="link-dark text-decoration-none text-end d-block"> Create by: Lorem ipsum | 30 Oct 2022 </a>
                      
                      <button id="open-design" type="submit" class="btn btn-info d-block float-end btn-1"   onClick={handleShow} > Open Designer</button>
                    </div>
                  </div>
                  
                  <div className="project-page-bottom mt-5 p-0">
                    <div class="row sec-2 project-bottom-title">
                      <p class="project-triggers-head">
<FontAwesomeIcon icon={faCodeMerge} />Triggers <i class="bi bi-pencil-square ps-2"></i></p>
                    </div>
                    <div class="row sec-1 project-bottom-content m-0">
                      <div class="col-md-3 m-0 p-0 project-bottom-left">
                          <div class="tabs" id="project-page-tabs">
                              <ul id="tabs-nav">
                                <li>
                                  <a href="#tab1" className="d-flex align-items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                    <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                  </svg>Untitled Project <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
                                <li>
                                  <a href="#tab2" className="d-flex align-items-center">
                                  <svg fill="#3276c3" width="20" height="20" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                          <g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                    </svg>
                                  Untitled Project  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
                              </ul>
                          </div>    
                      </div>
                      <div class="col-md-9 pt-3 text-center project-bottom-right">
                        <div id="tabs-content">
                          <div id="tab1" class="tab-content">
                              <div class="row py-4">
                                <div class="col-md-4 d-flex flex-column justify-content-between bottom-content">
                                  <h5 class="project-title-head">Untitle Project</h5>
                                  
                                 <div class="project-qr-img">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                    <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                  </svg>
                                 </div>

                                  <div class="d-flex text-center">
                                  <button class="pt-1 pb-1" id="svg-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />SVG</button>
                                  <button class="pt-1 pb-1" id="png-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />PNG</button>
                                  
                                  </div>
                                  
                                </div>
                                <div class="col-md-4"></div>
                                <div class="col-md-4">
                                  <h5 class="project-destination-head">Destination</h5>
                                  
                                  <img src={Mob2} alt="" />

                                  <h5 class="project-webar-head">WebAR site</h5>
                                </div>
                              </div>
                          </div>
                          <div id="tab2" class="tab-content">
                            <div class="row py-4">
                              <div class="col-md-4 d-flex flex-column justify-content-between">
                              <h5 class="project-title-head">Untitle Project</h5>
                              <div class="project-deep-link-img">
                                  <svg fill="#3276c3" width="150" height="150" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                          <g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                    </svg>
                                  </div>
                              

                                <div class="d-flex text-center">
                                <button class="pt-1 pb-1" id="svg-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />SVG</button>
                                  <button class="pt-1 pb-1" id="png-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />PNG</button>
                                  
                                </div>
                                
                              </div>
                              <div class="col-md-4"></div>
                              <div class="col-md-4">
                              <h5 class="project-destination-head">Destination</h5>
                                
                                <img src={Mob1} alt="" />

                                <h5 class="project-webar-head">App</h5>
                              </div>
                            </div>
                          </div>
                        </div>  
                      </div>      
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


          <div class="open-designer-popup" >
            <div class="three-image-designer" onClick={event => handleSelectTarget(event , "WorldTracking")}>
            <div class="designer-image">
            <img src={WorldTracking}></img>
            </div>
            <div class="designer-content">
            <h3>World tracking</h3>
            <p>Place content on flat surfaces, like the ground or tabletop.</p>
            </div>
            </div>

            <div class="three-image-designer" onClick={event => handleSelectTarget(event , "ImageTracking")}>
            <div class="designer-image">
            <img src={ImageTracking}></img>
            </div>
            <div class="designer-content">
            <h3>Image tracking</h3>
            <p>Content will anchor to images. Great for posters.</p>
            </div>
            </div>

            <div class="three-image-designer" onClick={event => handleSelectTarget(event , "FaceTracking")}>
            <div class="designer-image">
            <img src={faceTracking}></img>
            </div>
            <div class="designer-content">
            <h3>Face tracking</h3>
            <p>Attach content to anchor points on parts of the face.</p>
            </div>
            </div>

           
          </div>
          <div class="scene-outer">
            <button className="btn-scene" disabled="" style={{padding: "10px 16px"}} onClick={handleSubmit}>Create scene</button>
            </div>
		    <>
       
       
        </>
          
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}

      </Modal>
      {/* End---model data */}

      </div>
    )
}
export default Project;