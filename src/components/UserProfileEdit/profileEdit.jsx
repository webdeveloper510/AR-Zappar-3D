
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
import axios from "axios";
import { API } from "../../config/api";
const UserProfile =()=>{
  const navigate = useNavigate()


  /********** Start----Model edit popup State *************/
  const [showeditpassword, setshowpassword] = useState(false);

  const handleEditShow = () => setshowpassword(true);
  const [UserDetail , UserInformation] = useState([]);
  const [OldPassword , GetOldPassword] = useState(null);
  const [NewPassword , GetNewPassword] = useState(null);
  const [ConfirmPassword , GetConfirmPassword] = useState(null);

   /********** End----Model edit popup State *************/

    const token = localStorage.getItem('token')
    useEffect(()=>{
      axios.post(API.BASE_URL + 'userprofile/', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        UserInformation(response.data)
      })
      .catch((error) => {
        console.log(error, 'error');
      });
    },[])


    const handleImageUpdate = (e)=>{
      const formdata = new FormData();
      formdata.append('profile_photo',e.target.files[0]);
      axios.post(API.BASE_URL + 'editprofilephoto/',formdata,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(function (response) {
        toast.success("Profile updated successfully !")
      }).catch(function(err){
        toast.error("Pleease try again !")
      })
    }

    const handleOldPassword = (e)=>{
      GetOldPassword(e.target.value)
    }
    const handleNewPassword = (e)=>{
      GetNewPassword(e.target.value)
    }
    const handleConfirmPassword = (e)=>{
      GetConfirmPassword(e.target.value)
    }
    console.log(OldPassword);
    console.log(NewPassword);
    console.log(ConfirmPassword);

    const handlepasswordClose = () => {
      if (NewPassword === ConfirmPassword) {
        const formdata = new FormData;
        formdata.append('old_password', OldPassword)
        formdata.append('new_password', NewPassword)
        axios.post(API.BASE_URL +"changepassword/" , formdata,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function(response){
          toast.success("Password Changed Successfully !")
        })
        .catch(function(error){
          toast.error("Old Password does not match !")
        })
      }
      else {
        toast.error("New Password does not match with Confirm Password !")
      }

      setshowpassword(false);
    }


    return(
    <div className="userProfile">

        <NavBar />

    <div class="main-page-content project-pg">
    <div className="row project-pg">
        <SideBar />

        <div class="row col-md-10 p-0 m-0 user-profile-page-outer" style={{ backgroundImage:`url(${mainbg})` }}>

            <div class="user-profile-page-inner">
                <div class="row m-0 p-0">
                    <form class="user-pg-form">
                    <h4 class="text-center user-settings">User Settingss</h4>
                      <div class="row mb-2">
                          <div class="col-md-2">
                            <img src={UserDetail.profile_image} alt="mdo" width="60" height="60" class="rounded-circle" />
                          </div>
                          <div class="col-md-10">
                           <div class="upload-btn">
                            <a class="text-decoration-none text-dark"  type="file"><input type="file" style={{opacity:"0" , top: "27px", right: '21px'}} onChange={handleImageUpdate}/><FontAwesomeIcon icon={faUpload} />Upload</a><br/>
                            </div>
                            {/* <div class="remove-btn">
                            <a class="text-decoration-none text-dark" onClick={handleImageRemove}><FontAwesomeIcon icon={faTrashCan} />Remove</a>
                            </div> */}
                          </div>
                      </div> 
                      <div class="row mb-2">
                        <div class="col-6">
                            <label class="form-label fw-semibold">First Name</label>
                            <input type="text" class="form-control" value={UserDetail.firstname} />
                        </div>
                        <div class="col-6">
                            <label class="form-label fw-semibold">Last Name</label>
                            <input type="text" class="form-control" value={UserDetail.lastname}/>
                        </div>
                    </div> 
                      <div class="row mb-2">
                        <div class="col-6">
                            <label class="form-label fw-semibold">Email</label>
                            <input type="email" class="form-control" value={UserDetail.email}/>
                        </div>
                        <div class="col-6">
                            <label class="form-label fw-semibold">Role</label>
                            <input type="text" class="form-control" value={UserDetail.proffession}/>
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
                       <h5 className="rowh5"> Feature Is Not Available</h5>
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
                  <label>Old Passowd</label>
                    <input type="password" className="" placeholder="Old Password" onChange={handleOldPassword}/>
                    <i className="fa fa-envelope"></i>

                </div>
                <div className="input-text">
                  <label>New Passowd</label>
                    <input type="password" className="" placeholder="New Password" onChange={handleNewPassword}/>
                    <i className="fa fa-envelope"></i>

                </div>
                <div className="input-text">
                  <label>Confirm Passowd</label>
                    <input type="password" className="" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
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
              Update Password
            </Button>
          </Modal.Footer>
        </Modal>


     {/* End changepassword Model  */}
</div>


    )
}

export default UserProfile;