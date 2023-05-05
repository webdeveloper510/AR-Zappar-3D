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
import ImageTracking from '../../assets/images/imagetracking.png'

const Project =()=>{


  const navigate = useNavigate()
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
    const formData = new FormData();
    formData.append('imagePro' , imgProject)
    formData.append('ProTitle' , titlePro)
    formData.append('projectUser' , projectUserId)
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


  const [SceneType , selectSceneType] = useState(false);

  const handleSubmit2 = ()=>{
    selectSceneType(true)
  }












return(
      <div className="projectDetail">
        <div className="navbar">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="w-100 text-white">
                <h4>Logo</h4>
              </div>
      
              <div className="dropdown">
                <a href="#" className="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear-fill pe-1"></i>User Setting</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-collection-play pe-1"></i>Media Library</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" onClick={handleLogout}><i className="bi bi-box-arrow-right pe-1"></i>Log out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="main-page-content">
          <div class="row project-pg d-md-flex justify-content-between">
            <div class="col-md-1 p-0 m-0 bg-light project-side">
              <div className="container">
                <div class="d-flex flex-column flex-shrink-0 p-3 project-main">
                    <ul class="nav nav-pills flex-column mb-auto">
                      <li class="nav-item">
                        <a href="#" class="nav-link active d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={faGripHorizontal} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px" }} />
                        </a>
                      </li>
                      <li>
                        <a href="/#/team" class="nav-link d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={faUserGroup} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px" }} />
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
            </div>

            <div class="col-md-11 p-0 m-0 project-page">
                <div class="row sec-1 p-2 p-md-4 m-0">
                  <div className="project-page-upper d-md-flex justify-content-between align-items-center p-0">
                    <div class="col-md-4 m-0 p-0 d-flex">
                      <div class="overview-cover-image" style={{backgroundImage:`url(${imageBase64 != null ? imageBase64 : ""})` , backgroundSize: "100% 100%" , border: "none", outline: "none" ,    borderRadius: "10px"}}>
                      
                        <div class="tag">Designer</div>
                          <input type="file" className="base-img" onChange={handleImageChange} />
                          <button id="svgporj" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path><path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </button>
                          <span>{imageBase64 !=null ? "Want to replace?" : "Click to upload cover image"}</span>
                        </div>
                    </div>
                    <div class="col-md-4 align-self-center p-4">
                      <input id="projName" className="mt-md-0" type="text" placeholder="Untitled Project" onChange={handleUntitle} value={titlePro} />  
                    </div>
                    <div class="col-md-4 p-4">
                      <a href="#" class="link-dark text-decoration-none text-end d-block"> Create by: Lorem ipsum | 30 Oct 2022 </a>
                      
                      <button id="open-design" type="submit" class="btn btn-info d-block float-end btn-1" onClick={handleSubmit2} >Open Designer</button>
                    </div>
                  </div>
                  
                  <div className="project-page-bottom mt-5 p-0">
                    <div class="row sec-2 project-bottom-title">
                      <p> Untitled Project <i class="bi bi-pencil-square ps-2"></i></p>
                    </div>
                    <div class="row sec-1 project-bottom-content m-0">
                      <div class="col-md-3 m-0 p-0 project-bottom-left">
                          <div class="tabs">
                              <ul id="tabs-nav">
                                <li><a href="#tab1" className="d-flex align-items-center"><FontAwesomeIcon icon={faQrcode} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />Untitled Project</a></li>
                                <li><a href="#tab2" className="d-flex align-items-center"><FontAwesomeIcon icon={faBarcode} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />Untitled Project</a></li>
                              </ul>
                          </div>    
                      </div>
                      <div class="col-md-9 pt-3 text-center project-bottom-right">
                        <div id="tabs-content">
                          <div id="tab1" class="tab-content">
                              <div class="row py-4">
                                <div class="col-md-4 d-flex flex-column justify-content-between bottom-content">
                                  <h5>Untitle Project</h5>
                                  
                                  <i class="bi bi-qr-code-scan"></i>

                                  <div class="d-flex text-center btn-2">
                                    <p class="pe-4 text-center"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />SVG</p>
                                    <p class="ps-4 text-center"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />PNG</p>
                                  </div>
                                  
                                </div>
                                <div class="col-md-4"></div>
                                <div class="col-md-4">
                                  <h5>Destination</h5>
                                  
                                  <img src={Mob2} alt="" />

                                  <h5>WebAR site</h5>
                                </div>
                              </div>
                          </div>
                          <div id="tab2" class="tab-content">
                            <div class="row py-4">
                              <div class="col-md-4 d-flex flex-column justify-content-between">
                                <h5>Untitle Project</h5>
                                
                                <i class="bi bi-upc" ></i>

                                <div class="d-flex text-center btn-2">
                                  <p class="pe-4 text-center"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />SVG</p>
                                  <p class="ps-4 text-center"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />PNG</p>
                                </div>
                                
                              </div>
                              <div class="col-md-4"></div>
                              <div class="col-md-4">
                                <h5>Destination</h5>
                                
                                <img src={Mob1} alt="" />

                                <h5>App</h5>
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


      {SceneType && (
        <>
        <div className="Wrap--2qKdL">
          <div className="zmdlCloseBtn--1BzUi">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
            >
              <path stroke="#344B60" d="M9 9L1 1m0 8l8-8-8 8z"></path>
          </svg>
          </div>
            
            <div className="zmdlInnerContainer--23NbO FitContent--3uY7j">
              <div className="Container--2-6Wm FitContent--S4X8V">
                <div className="InnerContainer--2LcdQ">
            <div className="Content--9GnI_">
              <div className="TextContent--2darF">
                <h1>Select a tracking type for your new scene</h1>
                <div className="CardList--3AV_R" style={{height: "auto"}}>
                  <div className="Card--3peyC" style={{height: "298px", width: "230px"}}>
                    <div className="Image--1W5q9" style={{backgroundImage: `url(${WorldTracking})`}}>
                      </div><div className="Content--7Vw1W">
                <div className="TitleIconRow--18dmO">
                  <div className="IconContainer--2LR3O">
                    
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                    >
                      <path
                        fill="#B4BBC3"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        d="M19.5 14.58a.5.5 0 01.492.413l.008.09v4.47a.502.502 0 01-.41.494l-.09.009h-4a.502.502 0 01-.09-.997l.09-.009H19v-3.967c0-.277.224-.502.5-.502zm-19 0a.5.5 0 01.492.413l.008.09v3.967h3.5a.502.502 0 01.09.997l-.09.009h-4a.501.501 0 01-.5-.503v-4.47c0-.277.224-.502.5-.502zM10 4.023c3.314 0 6 2.701 6 6.034 0 3.332-2.686 6.033-6 6.033s-6-2.701-6-6.033c0-3.333 2.686-6.034 6-6.034zm-.5 6.533H7.015c.14 2.296 1.227 4.074 2.486 4.453L9.5 10.555zm1 0v4.453c1.259-.38 2.345-2.157 2.485-4.452l-2.485-.001zm4.476 0l-.99.001c-.074 1.36-.447 2.592-1.02 3.547a5.028 5.028 0 002.01-3.547zm-8.962.001h-.99a5.028 5.028 0 001.818 3.398l.191.149-.138-.244c-.494-.917-.814-2.056-.881-3.303zm1.02-4.548l-.116.088a5.028 5.028 0 00-1.894 3.46h.99c.074-1.361.447-2.593 1.02-3.548zM9.5 5.103c-1.26.38-2.346 2.157-2.486 4.452H9.5V5.103zm1 0L10.5 9.555h2.485c-.14-2.294-1.226-4.072-2.485-4.452zm2.465.905l.024.04c.56.95.923 2.166.996 3.507h.99a5.028 5.028 0 00-1.818-3.398l-.192-.15zM19.5.056a.5.5 0 01.492.412l.008.09v4.47a.5.5 0 01-.992.09L19 5.028V1.06h-3.5a.502.502 0 01-.09-.997l.09-.008h4zm-15 0a.502.502 0 01.09.997l-.09.008H1v3.967a.5.5 0 01-.992.09L0 5.028V.558C0 .281.224.056.5.056h4z"
                      ></path>
                    </svg>
                    
                    </div>
                    <h3>World tracking</h3>
                    </div><p>Place content on flat surfaces, like the ground or tabletop.</p></div>
                    </div>
                    <div className="Card--3peyC" style={{height: "298px" ,width: "230px"}}>
                      <div className="Image--1W5q9" style={{backgroundImage: `url(${ImageTracking})`}}></div>
                      <div className="Content--7Vw1W"><div className="TitleIconRow--18dmO">
                        <div className="IconContainer--2LR3O">
                        <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                              viewBox="0 0 20 21"
                            >
                              <path
                                fill="#B4BBC3"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                d="M19.5 14.596c.278 0 .503.224.503.5v4.356a.5.5 0 01-.492.6H15.49l-.09-.007a.5.5 0 01.09-.992h3.508v-3.957l.008-.09a.502.502 0 01.495-.41zm-19 0c.247 0 .452.177.495.41l.008.09-.001 3.957h3.51a.5.5 0 01.09.992l-.09.008H.488a.501.501 0 01-.492-.602v-4.355c0-.276.225-.5.503-.5zm15.564-9.568c.151.02.264.137.27.276v9.503c-.008.15-.14.27-.305.276H3.304c-.165-.006-.297-.126-.304-.276V5.304c.007-.15.14-.27.304-.276zM12 9.736c-1.192 0-2.716.55-3.559 2.05l.057.04c.273.198 1.345 1.053 1.489 2.631l5.731.06-.053-2.514C14.867 10.355 13.26 9.736 12 9.736zm-6 1.89a3.37 3.37 0 00-2.332.905v1.927h5.649c-.147-1.225-.925-2.017-1.662-2.417A3.637 3.637 0 006 11.627zm9.67-5.97H3.668v6.046A4.297 4.297 0 016 10.995c.815 0 1.47.234 1.885.447.778-1.394 2.377-2.331 4.115-2.331 1.798 0 3.063.945 3.67 1.683V5.656zm-9.337.943C7.253 6.599 8 7.302 8 8.17s-.746 1.571-1.667 1.571c-.92 0-1.666-.703-1.666-1.57 0-.869.746-1.572 1.666-1.572zm0 .628c-.552 0-1 .422-1 .943 0 .52.448.943 1 .943.553 0 1-.422 1-.943 0-.52-.447-.943-1-.943zM19.511.058a.501.501 0 01.493.601l-.001 4.356a.502.502 0 01-.997.09l-.009-.09V1.058h-3.508a.5.5 0 01-.09-.992l.09-.008h4.022zm-15 0l.09.008a.5.5 0 01-.09.992H1.002v3.957l-.007.09a.502.502 0 01-.998-.09V.66a.5.5 0 01.492-.6H4.51z"
                              ></path>
                            </svg>
                          
                      </div><h3>Image tracking</h3></div><p>Content will anchor to images. Great for posters and cards.</p></div>
                      </div><div className="Card--3peyC" style={{height: "298px" ,width: "230px"}}><div className="Image--1W5q9" style={{backgroundImage: `url(${faceTracking})`}}></div>
                <div className="Content--7Vw1W"><div className="TitleIconRow--18dmO"><div className="IconContainer--2LR3O">
                  
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#B4BBC3"
                        d="M15.6 11.62a.4.4 0 01.394.33l.006.072v3.576a.402.402 0 01-.328.395L15.6 16h-3.2a.402.402 0 01-.072-.798l.072-.007h2.8v-3.173c0-.222.18-.402.4-.402zm-15.2 0a.4.4 0 01.394.33l.006.072v3.173h2.8c.22 0 .4.18.4.403a.402.402 0 01-.328.395L3.6 16H.4c-.22 0-.4-.18-.4-.402v-3.576c0-.222.18-.402.4-.402zM15.6 0a.4.4 0 01.394.33L16 .402v3.576a.4.4 0 01-.794.072l-.006-.072V.804h-2.8a.402.402 0 01-.072-.798L12.4 0h3.2zm-12 0a.402.402 0 01.072.798L3.6.804H.8v3.174a.4.4 0 01-.794.072L0 3.978V.402C0 .18.18 0 .4 0h3.2z"
                      ></path>
                      <path
                        fill="#B4BBC3"
                        d="M15.6 11.62a.4.4 0 01.394.33l.006.072v3.576a.402.402 0 01-.328.395L15.6 16h-3.2a.402.402 0 01-.072-.798l.072-.007h2.8v-3.173c0-.222.18-.402.4-.402zm-15.2 0a.4.4 0 01.394.33l.006.072v3.173h2.8c.22 0 .4.18.4.403a.402.402 0 01-.328.395L3.6 16H.4c-.22 0-.4-.18-.4-.402v-3.576c0-.222.18-.402.4-.402zM15.6 0a.4.4 0 01.394.33L16 .402v3.576a.4.4 0 01-.794.072l-.006-.072V.804h-2.8a.402.402 0 01-.072-.798L12.4 0h3.2zm-12 0a.402.402 0 01.072.798L3.6.804H.8v3.174a.4.4 0 01-.794.072L0 3.978V.402C0 .18.18 0 .4 0h3.2zM8 3.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zM8 4C5.644 4 4 5.644 4 8s1.644 4 4 4 4-1.644 4-4-1.644-4-4-4z"
                      ></path>
                      <path
                        fill="#B4BBC3"
                        d="M8 3.2a4.8 4.8 0 110 9.6 4.8 4.8 0 010-9.6zM8 4C5.644 4 4 5.644 4 8s1.644 4 4 4 4-1.644 4-4-1.644-4-4-4z"
                      ></path>
                      <path
                        fill="#B4BBC3"
                        fillRule="evenodd"
                        d="M6.445 9.319a.4.4 0 01.566-.003c.275.272.648.284.93.284.283 0 .656-.012.931-.284a.4.4 0 01.563.568c-.522.517-1.2.516-1.477.516h-.034c-.277 0-.954 0-1.476-.516a.4.4 0 01-.003-.565z"
                        clipRule="evenodd"
                      ></path>
                      <ellipse cx="5.518" cy="7.2" fill="#B4BBC3" rx="0.808" ry="0.8"></ellipse>
                      <ellipse
                        cx="10.366"
                        cy="7.2"
                        fill="#B4BBC3"
                        rx="0.808"
                        ry="0.8"
                      ></ellipse>
                    </svg>
                  
                  </div><h3>Face tracking</h3></div><p>Attach content to anchor points on parts of the face.</p></div></div></div>
                  
                  <div className="Footer--2f8R2">
                    
                    <button className="ActionBtn--1x70k " disabled="" style={{padding: "10px 16px"}}>Create scene</button></div></div>
                    </div></div></div></div></div>
        
        </>
      )}


      </div>
    )
}
export default Project;