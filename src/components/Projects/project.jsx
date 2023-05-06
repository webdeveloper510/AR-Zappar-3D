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

const Project =()=>{


  const navigate = useNavigate()
  /********** Start----Model State *************/
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
  } 
  const handleShow = () => setShow(true);
    
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


  const handleSelectTarget =(e)=>{
    console.log(e.target)
    e.target.classList.add("selected");
  
    // Add a CSS rule to activate the hover effect
    const style = document.createElement("style");
    style.innerHTML = `
      .selected:active {
        background-color: rgb(32 157 225);
      }
    `;
    document.head.appendChild(style);
  }









return(
      <div className="projectDetail">
        {/* <div className="navbar">
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
        </div> */}
            <NavBar />
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
              {/* <SideBar /> */}
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
                      
                      <button id="open-design" type="submit" class="btn btn-info d-block float-end btn-1"   onClick={handleShow} > Open Designer</button>
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


          <div class="open-designer-popup" onClick={handleSelectTarget}>
            <div class="three-image-designer">
            <div class="designer-image">
            <img src={WorldTracking}></img>
            </div>
            <div class="designer-content">
            <h3>World tracking</h3>
            <p>Place content on flat surfaces, like the ground or tabletop.</p>
            </div>
            </div>

            <div class="three-image-designer">
            <div class="designer-image">
            <img src={ImageTracking}></img>
            </div>
            <div class="designer-content">
            <h3>Image tracking</h3>
            <p>Content will anchor to images. Great for posters.</p>
            </div>
            </div>

            <div class="three-image-designer">
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
            <button className="btn-scene" disabled="" style={{padding: "10px 16px"}}>Create scene</button>
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