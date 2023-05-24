
import React, { useEffect , useState } from "react";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";
import "../../App.css";
import mainbg from '../../assets/images/main-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload  } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan  } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
import google from '../../assets/images/google.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const UserProfile =()=>{
  const navigate = useNavigate()


  /********** Start----Model edit popup State *************/
  const [showeditpassword, setshowpassword] = useState(false);

  const handlepasswordClose = () => setshowpassword(false);
  const handleEditShow = () => setshowpassword(true);

   /********** End----Model edit popup State *************/




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

    <div class="main-page-content project-pg">
    <div className="row project-pg">
        <SideBar />
      
        <div class="row col-md-10 p-0 m-0 user-profile-page-outer" style={{ backgroundImage:`url(${mainbg})` }}>
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
            <div class="user-profile-page-inner">
                <div class="row m-0 p-0">
                  
                    <form class="user-pg-form">
                    <h4 class="text-center user-settings">User Settingss</h4>
                      <div class="row mb-2">
                          <div class="col-md-2">
                            <img src="https://github.com/mdo.png" alt="mdo" width="60" height="60" class="rounded-circle" />
                          </div>
                          <div class="col-md-10">
                           <div class="upload-btn">
                            <a href="#" class="text-decoration-none text-dark"><FontAwesomeIcon icon={faUpload} />Upload</a><br/>
                            </div>
                            <div class="remove-btn">
                            <a href="#" class="text-decoration-none text-dark"><FontAwesomeIcon icon={faTrashCan} />Remove</a>
                            </div>
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
                     
                      <div class="row" id="password-field">
                        <div class="col-10">
                            <label class="form-label fw-semibold">Password</label>
                            <input type="password" class="form-control border-0" placeholder="**************************" />
                        </div>
                        <div class="col-2 edit-btn" >
                        <FontAwesomeIcon icon={faPenToSquare} />
                            <a class="text-decoration-none text-dark" onClick={handleEditShow}>Edit</a>
                        </div>
                      </div>
                      <hr/>


                      
                      <div class="row">
                        <div class="col-8">
                            <label class="form-label fw-semibold">Tow-Factor Authentication (2FA)</label>
                            <label class="form-label">For incresed in security. We recommend 2FA to protect your account.</label>
                        </div>
                        <div class="col-4 mt-4">
                          <button class="btn-1 pt-1 pb-1" id="btn-anabled" type="button">Enable</button>
                        </div>
                      </div>
                      <hr/>
                      <div class="row">
                        <div class="col-8">
                            <label class="form-label fw-semibold">Google</label><br/>
                            <label class="form-label google-user"><img class="googlw-img" src={google}></img>Login With Google</label>
                        </div>
                        <div class="col-4 mt-4">
                          <button class="btn-1 pt-1 pb-1" id="google-btn-enabled" type="button">Enable</button>
                        </div>
                      </div>
                      

                      
                      <div class="d-grid gap-2 mt-2 saved-outer">
                          <button class="btn btn-sign-in pt-1 pb-1" id="user-saved-in" type="button">Save</button>
                      </div>
                  </form>
                </div>
                
            </div>
            </div>

            


        </div>
    </div>
     {/* Start changepassowrd Model  */}
 <Modal id="change-password-popup" show={showeditpassword} onHide={handlepasswordClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
           <div className="container">
        <div className="card-password">
           
                <div className="input-text">
                  <label>New Passowd</label>
                    <input type="password" className="" placeholder="New Password" />
                    <i className="fa fa-envelope"></i>

                </div>
                <div className="input-text">
                  <label>Confirm Passowd</label>
                    <input type="password" className="" placeholder="Confirm Password" />
                    <i className="fa fa-envelope"></i>

                </div>
               
                <div className="requirement">
                     <p>Must meet at least 1 of these complexity requirements:
                      <ul>
                        <li>Minimum of 5 characters</li>
                      </ul>
                     </p>
                </div>

                <div className="requirement">
                    <h5> Note</h5>
                    <p> Password requirements are being enforced by the policies of the following workspace (s): Personal projects
                     </p>
                </div>
               

        </div>
    </div>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" class="btn-cancel-cover" onClick={handlepasswordClose}>
             Cancel
            </Button>
            <Button variant="primary" class="btn-save-cover" onClick={handlepasswordClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>


     {/* End changepassword Model  */}
</div>


    )
}

export default UserProfile;