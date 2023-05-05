import React from "react";
import Pro from "../../assets/images/pro-1.jpg"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const DesignOpen =()=>{
const navigate = useNavigate() 

  const handleLogout = ()=>{  
    localStorage.clear()
    toast.success('Log Out Successfully !');
    navigate('/');
  }

    return(
        <div className="open-design">
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
                    <li><a class="dropdown-item" onClick={handleLogout}><i class="bi bi-box-arrow-right pe-1"></i>Log out</a></li>
                  </ul>
                </div>
              </div>
            </div>

    
        <div class="container-fluid open-design-page">
            <div class="row">
    
                <div class="col-md-12 p-0 m-0">
                    
                  <div class="main-box">
                    <div class="row pt-4">
                      <div class="col-md-3 ps-4 side-l">
                        <i class="bi bi-tv-fill pe-2"></i>Blank Project
                      </div>
                      <div class="col-md-9 ps-4">
                        <h5>Blank Project</h5>
                        <p>Choose an empty tracking scene to start your project with.</p>
                          <div class="row">
                            <div class="col-md-6 p-2">
                                <div class="card text-start">
                                  <img class="card-img-top" src={Pro} height="160" width="240"  />
                                  <div class="card-body">
                                    <h6 class="card-title">Target Image</h6>
                                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur.</p>
                                  </div>
                                </div>
                            </div>
                            <div class="col-md-6 p-2">
                              <div class="card text-start">
                                <img class="card-img-top" src={Pro} height="160" />
                                <div class="card-body">
                                  <h6 class="card-title">Target Image</h6>
                                  <p class="card-text">Lorem, ipsum dolor sit amet consectetur.</p>
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

export default DesignOpen;