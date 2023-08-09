import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../config/api";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import loginright from "../../assets/images/login-banner.png";
import { toast } from "react-toastify";
import profileImg from "../../assets/images/profile.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { contextObject } from "../ContextStore/ContextApi";
//

const RegisterPage = () => {
  document.title='Saybaz - SignUp'
  const ctx=useContext(contextObject);
  const navigate = useNavigate();
  //  First Name
  const [firstName, UserFirstName] = useState("");
  const handleFirstName = (e) => {
    if(firstName===''){
      UserFirstName(e.target.value.trim());
    }else{
      UserFirstName(e.target.value);
    }
  };
  // Last Name
  const [LastName, UserLastName] = useState("");
  const handleLastName = (e) => {
    if(LastName===''){
    UserLastName(e.target.value.trim())
  }else{
    UserLastName(e.target.value);
  }
  };
  //  Email Address
  const [email, userEmail] = useState("");
 



  //  Password
  const [password, userPassword] = useState("");

  const handlePassword = (e) => {
      userPassword(e.target.value.trim());
  };
  // Proffession
  const [Proffession, selectProff] = useState("");

  const handleSelect = (e) => {
    selectProff(e.target.value);
  };
  // Date picker
  const [selectedDate, setSelectedDate] = useState("");

    // error object
    const [firstNameError, setfirstNameError] = useState(false);
    const [LastNameError, setLastNameError] = useState(false);
    const [PassError, setPassError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [DOBError, setDOBError] = useState(false);
    const [RoleError, setRoleError] = useState(false);
    const [reRender,setreRender]=useState(true);
    const [passwordVisible,setpasswordVisible]=useState(false);
    const [showToast,setshowToast]=useState(true);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const handelLogin = () => {
    navigate("/");
  };


  const handleEmail = (e) => {
    const emailValue = e.target.value.toString();
    userEmail(emailValue.trim());
  }

 
  const disAbleDate = new Date().toISOString().split('T')[0];

  const handleRegister = () => {
    setfirstNameError(false);
    setLastNameError(false);
    setPassError(false);
    setemailError(false);
    setDOBError(false);
    setRoleError(false);

    if (firstName.trim() === "") {
      setfirstNameError(true);
    }
    if (LastName.trim() === "") {
      setLastNameError(true);
    }
    if (password.trim() === "") {
      setPassError(true);
    }
    if (Proffession.trim()==="") {
      setRoleError(true)
    }
    if (selectedDate.trim()==="") {
      setDOBError(true)
    }

    if(email.trim() === ''){
      setemailError(true)
    }

    if (firstName.trim() === "" || LastName.trim() === "" || password.trim() === "" || Proffession.trim()==="" || selectedDate.trim()==="" || email.trim() === '') {
        return ;
    }
    if(firstName.trim().length>50){
      setfirstNameError(true);
     if(showToast){toast.error('This field should not contain more than 50 characters',{
      autoClose:2500
    });
     setshowToast(false);
     setTimeout(() => {
       setshowToast(true);
     }, 3000);
    }
      return;
    }
    if(LastName.trim().length>50){
      setLastNameError(true);
      if(showToast){toast.error('This field should not contain more than 50 characters',{
        autoClose:2500
      });
      setshowToast(false);
      setTimeout(() => {
        setshowToast(true);
      }, 3000);
    }
      return;
    }
    const emailRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\/\\])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

    if(!emailRegex.test(password)){
      setPassError(true);
      if(showToast){toast.error('Password should contain at least one special character, one upper case charackter, one lowercase character and one integer.',{
        autoClose:2500
      });
      setshowToast(false);
      setTimeout(() => {
        setshowToast(true);
      }, 3000);
    }
      return;
    }
    const today = new Date();
    const selectedDateValue = new Date(selectedDate)
    if(selectedDateValue>today){
      setDOBError(true)
      if(showToast){
        toast.error("can't select future date",{
          autoClose:2500
        });
        setshowToast(false);
        setTimeout(() => {
          setshowToast(true);
        }, 3000);
      }
      return;
    }
    else {
      const formData = new FormData();
      formData.append("firstname", firstName);
      formData.append("lastname", LastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("proffession", Proffession);
      formData.append("dateofbirth", selectedDate);
      ctx.setloader(true);
      fetch(profileImg)
        .then((response) => response.blob())
        .then((blob) => {
          formData.append("image", blob, "profile.png");
          axios
            .post(API.BASE_URL + "signup/", formData, {
              headers: {
                accept: "application/json",
                "content-type": "multipart/form-data",
              },
            })
            .then(function (response) {
              navigate("/emailconfirm");
            })
            .catch(function (err) {
              if (err.response.data.email) {
                const errMsg = err.response.data.email[0];
                setemailError(true);
                if (errMsg) {
                  if(showToast){
                    toast.error(errMsg,{
                      autoClose:2500
                    });
                    setshowToast(false);
                    setTimeout(() => {
                      setshowToast(true);
                    }, 3000);
                  }
                  return;
                }
              }
              if (err.response.data.dateofbirth) {
                setDOBError(true);
              }
            })
            .finally(()=> ctx.setloader(false));
        });
    }
  };

  useEffect(()=>{

  },[reRender])

  return (
    <div className="sign-up-page" id="sign-up-page">

      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0 align-items-center sign-up-bgg">
          <div className="col-md-12 sign-up-outer">
            <div className="text-center pb-2 sign-up-pg-container-left">
              <h3 className="creat-account"> Sign up</h3>
              <form className="sign-up-pg-form">
                <div className="row mb-2">
                  <div className="col-6">
                    <label className="form-label fw-semibold">First Name{<span><strong className="text-danger">*</strong></span>}</label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstName}
                      placeholder="Enter Your Fisrt Name"
                      onChange={handleFirstName}
                      style={{
                        border: firstNameError ? "0.5px solid red" : "",
                      }}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label fw-semibold">Last Name{<span><strong className="text-danger">*</strong></span>}</label>
                    <input
                      type="text"
                      className="form-control"
                      value={LastName}
                      placeholder="Enter Your Last Name"
                      onChange={handleLastName}
                      style={{ border: LastNameError ? "0.5px solid red" : "" }}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label fw-semibold">Email{<span><strong className="text-danger">*</strong></span>}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    style={{ border: emailError ? "0.5px solid red" : "" }}
                  />
                </div>
       
                <div className="mb-2" style={{
                  position:'relative'
                }}>
                  <label className="form-label fw-semibold">Password{<span><strong className="text-danger">*</strong></span>}</label>
                  <input
                    type={!passwordVisible ? "password" : 'text'}
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    style={{ border: PassError ? "0.5px solid red" : ""}}
                  />
                          <div
                      style={{
                        position: 'absolute',
                        top: '52%',
                        right: '10px',
                        // transform: 'translateY(-50%)',
                        cursor: 'pointer',
                      }}
                      onClick={()=>{
                        setpasswordVisible((prev)=>!prev)}}
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>

                <div className="mb-2 dob">
                  <label className="form-label fw-semibold date-of-birth">
                    Date of Birth{<span><strong className="text-danger">*</strong></span>}
                  </label>
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="form-control"
                    max={disAbleDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                    // DOBError
                    style={{ border: DOBError ? "0.5px solid red" : "" }}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-semibold role">Role{<span><strong className="text-danger">*</strong></span>}</label>
                  <select
                    className="form-select"
                    onChange={handleSelect}
                    style={{ border: RoleError ? "0.5px solid red" : "" }}
                  >
                    <option value={""} selected>
                      Select Role
                    </option>
                    <option value={"I am a Designer."}>I am a Designer.</option>
                    <option value={"I am a Developer."}>
                      I am a Developer.
                    </option>
                    <option value={"I am a Marketer."}>I am a Marketer.</option>
                    <option value={"I am a 3D Artist."}>
                      I am a 3D Artist.
                    </option>
                    <option value={"I am a Educator."}>
                      I am a Educator.
                    </option>
                    <option value={"I am working in Learning and Development."}>
                      I am working in Learning and Development.
                    </option>
                    <option value={"Something Else."}>Something Else.</option>
                  </select>
                </div>
                <div className="d-grid gap-2 mt-2">
                  <a
                    className="btn btn-sign-in pt-2 pb-2"
                    type="button"
                    onClick={handleRegister}
                    id="signup-btn"
                  >
                    Sign up
                  </a>
                </div>
                <p className="already-account">
                  Already have an account ?
                  <a
                    className="fw-bolder btn-register btn btn-sign-in pt-2 pb-2"
                    type="button"
                    onClick={handelLogin}
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
            <div className="sign-up-pg-container-right">
              <img className="login-pic" src={loginright} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
