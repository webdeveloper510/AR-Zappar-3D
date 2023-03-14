import React from "react";
import Mob1 from "../../assets/images/mobi-1.png";
import Mob2 from "../../assets/images/mobi-2.png";
const Project =()=>{
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
                          
                   </div>
                   <div class="col-md-4 align-self-center">
                    <a href="#" class="link-dark text-decoration-none"> Untitled Project <i class="bi bi-pencil-square ps-2"></i></a>
                   </div>
                   <div class="col-md-4">
                    <a href="#" class="link-dark text-decoration-none text-end d-block"> Create by: Lorem ipsum | 30 Oct 2022 </a>
                    
                    <button id="open-design" class="btn btn-info d-block float-end btn-1"> <a href="editor.php">Open Designer</a></button>
                   </div>
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
    )
}
export default Project;