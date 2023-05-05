import React from "react";
import Pro from "../../assets/images/pro-1.jpg"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Library =()=>{
  const navigate = useNavigate()

  const handleLogout = ()=>{  
    localStorage.clear()
    toast.success('Log Out Successfully !');
    navigate('/');
  }

    return(
<div className="library">
        <div class="container-fluid">
          <div class="d-flex align-items-center">
            <div class="w-100 text-white">
              <h4>Logo</h4>
            </div>
    
            <div class="dropdown">
              <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
              </a>
              <ul class="dropdown-menu text-small shadow">
                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/user.html#"><i class="bi bi-gear-fill pe-1"></i>User Setting</a></li>
                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/media-library.html#"><i class="bi bi-collection-play pe-1"></i>Media Library</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" onClick={handleLogout}><i class="bi bi-box-arrow-right pe-1"></i>Log out</a></li>
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

            <div class="col-md-10 p-5 m-0 ">
                <div class="row p-5 pb-0 m-0">
                        <div class="container-fluid d-grid gap-3 align-items-center">
                          <div class="dropdown">
                            <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none ">
                                Project<i class="bi bi-plus-circle ps-2"></i>
                            </a>
                            
                          </div>
                    
                          <div class="d-flex align-items-center">
                            <form class="w-100 me-3" role="search">
                              <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
                            </form>
                    
                            <div class="flex-shrink-0 dropdown">
                              <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-filter-left pe-1"></i>Sort
                              </a>
                              <ul class="dropdown-menu text-small shadow">
                                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date created</a></li>
                                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date published</a></li>
                                <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By project name</a></li>
                              </ul>
                            </div>

                            <div class="flex-shrink-0 ms-2">
                               
                              </div>

                          </div>
                        </div>
                </div>


                <div class="row pt-0 pe-5 pb-5 ps-5 m-0">
                    
                  <div class="tabs">
                    <ul id="tabs-nav">
                      <li><a href="#tab1">All</a></li>
                      <li><a href="#tab2">Image</a></li>
                      <li><a href="#tab3">Video</a></li>
                      <li><a href="#tab4">3D</a></li>
                    </ul> 
                    <div id="tabs-content">
                      <div id="tab1" class="tab-content">
                        <h4 class="mt-3">Image (4)</h4>
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />

                        <h4 class="mt-5">Video (4)</h4>
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />

                        <h4 class="mt-5">4D (4)</h4>
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />

                      </div>
                      <div id="tab2" class="tab-content">
                        <h4>Image (4)</h4>
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                      </div>
                      <div id="tab3" class="tab-content">
                        <h4>Video (4)</h4>
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />  
                      </div>
                      <div id="tab4" class="tab-content">
                        <h4>3D (4)</h4>
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
                        <img src={Pro} class="img-thumbnail" alt="..." height="270" width="270" />
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

export default Library;