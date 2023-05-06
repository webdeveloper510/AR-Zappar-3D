import React from "react";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";

const UserProfile =()=>{
  const navigate = useNavigate()

  const handleLogout = ()=>{  
    localStorage.clear()
    toast.success('Log Out Successfully !');
    navigate('/');
  }
    return(
    <div className="userProfile">
        {/* <div class="container-fluid">
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
        </div> */}
        <NavBar />

    <div class="container-fluid project-pg">
        <div class="row">
            {/* <div class="col-md-2 p-0 m-0 bg-light">
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
            </div> */}
              <SideBar />
            <div class="col-md-10 p-0 m-0 ">
                <div class="row m-0 p-0">
                    <h4 class="text-center pt-5">User Settings</h4>
                    <form class="user-pg-form">
                      <div class="row mb-2">
                          <div class="col-2">
                            <img src="https://github.com/mdo.png" alt="mdo" width="55" height="55" class="rounded-circle" />
                          </div>
                          <div class="col-10">
                            <i class="bi bi-upload"></i>
                            <a href="#" class="text-decoration-none text-dark">Upload</a><br/>
                            <i class="bi bi-trash"></i>
                            <a href="#" class="text-decoration-none text-dark">Remove</a>
                          </div>
                      </div> 
                      <div class="row mb-2">
                        <div class="col-6">
                            <label class="form-label fw-semibold">First Name</label>
                            <input type="text" class="form-control" placeholder="lorem" />
                        </div>
                        <div class="col-6">
                            <label class="form-label fw-semibold">Last Name</label>
                            <input type="text" class="form-control" placeholder="lorem" />
                        </div>
                    </div> 
                      <div class="row mb-2">
                        <div class="col-6">
                            <label class="form-label fw-semibold">Email</label>
                            <input type="text" class="form-control" placeholder="lorem@email.com"/>
                        </div>
                        <div class="col-6">
                            <label class="form-label fw-semibold">Role</label>
                            <input type="text" class="form-control" placeholder="I'm Designer"/>
                        </div>
                      </div>    
                      <hr/>
                      <div class="row">
                        <div class="col-10">
                            <label class="form-label fw-semibold">Password</label>
                            <input type="password" class="form-control border-0" placeholder="**************************" />
                        </div>
                        <div class="col-2 mt-4">
                            <i class="bi bi-pencil-square"></i>
                            <a href="#" class="text-decoration-none text-dark">Edit</a>
                        </div>
                      </div>
                      <hr/>
                      <div class="row">
                        <div class="col-8">
                            <label class="form-label fw-semibold">Tow-Factor Authentication (2FA)</label>
                            <label class="form-label">For incresed in security. We recommend 2FA to protect your account.</label>
                        </div>
                        <div class="col-4 mt-4">
                          <button class="btn-1 pt-1 pb-1" type="button">Enable</button>
                        </div>
                      </div>
                      <hr/>
                      <div class="row">
                        <div class="col-8">
                            <label class="form-label fw-semibold">Google</label><br/>
                            <label class="form-label">Login With Google</label>
                        </div>
                        <div class="col-4 mt-4">
                          <button class="btn-1 pt-1 pb-1" type="button">Enable</button>
                        </div>
                      </div>
                      

                      
                      <div class="d-grid gap-2 mt-2">
                          <button class="btn btn-sign-in pt-1 pb-1" type="button">Save</button>
                      </div>
                  </form>
                </div>
                
            </div>

            


        </div>
    </div>
</div>
    )
}

export default UserProfile;