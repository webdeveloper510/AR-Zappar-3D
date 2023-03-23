import React, { useEffect, useState } from "react";
import Mob1 from "../../assets/images/mobi-1.png";
import Mob2 from "../../assets/images/mobi-2.png";
import { API } from "../../../src/config/api"
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
const Project =()=>{
  const navigate = useNavigate()
  const  projectUserId = localStorage.getItem("id");
  const handleInput = (e)=>{
    uploadProjectImg();
  };


  const [imgProject , ProImg] = useState(null)
  const [proImg , uploadProImg] = useState(null)
  const [titlePro , addTitle] = useState(null)
  const handleUntitle = (e) =>{
    addTitle(e.target.value)
  }
  console.log('--->' , titlePro)
  const uploadProjectImg = (event) => {
    ProImg(event.target.files[0])
  }
  console.log("Image",imgProject)



  const handleSubmit = () => {
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
      console.log('/target/'+response.data.id)
      navigate('/target/')
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

    return(
        <div className="projectDetail">
        <div class="container-fluid">
          <div class="d-flex align-items-center">
            <div class="w-100 text-white">
              <h4>Logo</h4>
            </div>
    
            <div class="dropdown">
              <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
              </a>
              <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/user.html#"><i class="bi bi-gear-fill pe-1"></i>User Setting</a></li>
                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/media-library.html#"><i class="bi bi-collection-play pe-1"></i>Media Library</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/login.html"><i class="bi bi-box-arrow-right pe-1"></i>Log out</a></li>
              </ul>
            </div>
          </div>
        </div>

    <div class="container-fluid project-pg">
        <div class="row">
            <div class="col-md-2 p-0 m-0 bg-light" >
                <div class="d-flex flex-column flex-shrink-0 p-3 ">
                    <ul class="nav nav-pills flex-column mb-auto">
                      <li class="nav-item">
                        <a href="#" class="nav-link active b1-bg-color"><i class="bi bi-grid pe-3"></i>Project</a>
                      </li>
                      <li>
                        <a href="#" class="nav-link link-dark"><i class="bi bi-people-fill pe-3"></i>Team</a>
                      </li>
                    </ul>
                </div>
            </div>
 
            <div class="col-md-10 p-0 m-0 projetc-page">

                <div class="row sec-1 ">
                   <div class="col-md-4 m-0 p-0">


                 {/*Image Upload For the New Project   */}
              <div class="overview-cover-image" style={{backgroundImage:`url(${proImg != null ? proImg : ""})` , backgroundSize: "100% 100%" , border: "none", outline: "none" ,    borderRadius: "10px"}}>

                  <div class="tag">Designer</div>
                  <input type="file" onChange={uploadProjectImg}/>
                          
                           <button id="svgporj" onClick={handleInput}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path><path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg></button>
                            <span>{proImg !=null ? "Want to replace?" : "Click to upload cover image"}</span>
        
                   </div>
              </div>
                {/* Add Input Tex for the New projName */}
                   <div class="col-md-4 align-self-center">
                    <input id="projName" type="text" placeholder="Untitled Project" onChange={handleUntitle} />  
                   </div>
                   <div class="col-md-4">
                    <a href="#" class="link-dark text-decoration-none text-end d-block"> Create by: Lorem ipsum | 30 Oct 2022 </a>
                    
                    <button id="open-design" type="submit" class="btn btn-info d-block float-end btn-1" onClick={handleSubmit} >Open Designer</button>
                   </div>

                <div class="row sec-2">
                  <p> Untitled Project <i class="bi bi-pencil-square ps-2"></i></p>
                </div>
                
                <div class="row sec-1">
                  <div class="col-md-4 m-0 p-0" >
                      <div class="tabs">
                          <ul id="tabs-nav">
                            <li><a href="#tab1"><i class="bi bi-qr-code-scan pe-2"></i>Untitled Project</a></li>
                            <li><a href="#tab2"><i class="bi bi-upc pe-2"></i>Untitled Project</a></li>
                          </ul>
                      </div>    
                  </div>
                  <div class="col-md-8 pt-3 text-center">
                        <div id="tabs-content">
                          <div id="tab1" class="tab-content">
                              <div class="row">
                                <div class="col-md-4">
                                  <h5>Untitle Project</h5>
                                  
                                  <i class="bi bi-qr-code-scan"></i>

                                  <div class="d-flex text-center btn-2">
                                    <p class="pe-4 text-center"><i class="bi bi-download pe-1"></i>SVG</p>
                                    <p class="ps-4 text-center"><i class="bi bi-download pe-1"></i>PNG</p>
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
                            <div class="row">
                              <div class="col-md-4">
                                <h5>Untitle Project</h5>
                                
                                <i class="bi bi-upc" ></i>

                                <div class="d-flex text-center btn-2">
                                  <p class="pe-4 text-center"><i class="bi bi-download pe-1"></i>SVG</p>
                                  <p class="ps-4 text-center"><i class="bi bi-download pe-1"></i>PNG</p>
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
    )
}
export default Project;