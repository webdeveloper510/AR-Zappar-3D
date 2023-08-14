import React , {useEffect, useState} from "react";
import "../../App.css"
import axios from "axios";
import { API } from "../../config/api";
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import google from '../../assets/images/google.png'
import logoImage from '../../assets/images/logof.png';
import loginright from '../../assets/images/login-banner.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginPage =()=>{
    document.title='Sayehbaz - Login'
const navigate = useNavigate();
//  Email Address
const [email , userEmail] = useState('');
const [passwordVisible,setpasswordVisible]=useState(false);
const handleEmail =(e)=>{
    userEmail(e.target.value.trim())
}
//  Password
const [password , userPassword] = useState('')
const [passErr,setpassErr]=useState(false);
const [emailErr,setemailErr]=useState(false);
const handlePass =(e)=>{
    userPassword(e.target.value.trim())
}
const handleLogin = ()=>{
        setpassErr(false);
        setemailErr(false);
        if(email.trim()===""){
            setemailErr(true)
        }
        if(password.trim()===""){
            setpassErr(true)
        }
        if(email.trim()==="" || password.trim()===""){
            return;
        }
       else{
        axios.post(API.BASE_URL + 'login/', {
            email: email,
            password: password,
          }).then(function (response) {
            navigate('/home')
            toast.success("Login Successfully !")
            localStorage.setItem('token',response.data.token.access)
            localStorage.setItem('id',response.data.data.id)         
          })
          .catch(function(err) {
            console.error('Error uploading file', err);
            toast.error("Invalid login credentials !")
          })
        }
}
var token = localStorage.getItem('token');
useEffect(()=>{
    if (token){
        navigate('/home')
    }
},
[])

const navigateForgot=()=>{
    navigate('/enter-forgot-email/')
}
    return(
    <div className="login-page" id="login-page">
        <div className="container-fluid p-0 m-0">
            <div className="row col-md-12 p-0 m-0 align-items-center login-bgg">
                <div className="col-md-12 p-0 m-0 login-outer">
                    <div className="text-center login-up-pg-container-left">   
                   
                        <form className="login-pg-form">
                        <h2 className="top-logo"><img src={logoImage} /></h2>
                            <div className="mb-3 envelop-div">
                                <label className="form-label fw-semibold" >Email</label>
                                <input type="text" className="form-control" value={email} placeholder="Enter Your Email"  onChange={handleEmail} 
                                style={{
                                    border: emailErr ? '1px solid red' : ''
                                }}
                                />
                            </div>
                            <div className="mb-3" style={{
                  position:'relative'
                }}>
                                <label className="form-label fw-semibold" value={password} >Password</label>
                                <input type={!passwordVisible ? "password" : 'text'}className="form-control" placeholder="Enter Your Password" onChange={handlePass}

                                 style={{
                                    border: passErr ? '1px solid red' : ''
                                }}
                                />
                                           <div
                                style={{
                                    position: 'absolute',
                                    top: '52%',
                                    right: '10px',
                                    cursor: 'pointer',
                                }}
                                onClick={()=>{
                                    setpasswordVisible((prev)=>!prev)}}
                                >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <div className="mt-3">
                                <a className="btn btn-sign-in" type="button"
                                onClick={handleLogin}>Sign in</a>    
                            </div>
                            <div className="mb-3">
                                <h3 className="forgot-div"> 
                                    <a onClick={navigateForgot} className="login-forgot">Forgot Password ?</a>
                                </h3>
                            </div>
                            <div className="or-text"><p>or</p></div>
                            <div className="login-with-goo">
                            <button className="btn btn-sign-in-google" type="button">
                                <img className="googlw-img" src={google}></img>Login with Google</button>
                            </div>
                            <h6 className="login-account mt-3 text-center">
                                Don't Have an Account? <a href="/#/register" className="fw-bolder login-sign-up"> Sign up</a>
                            </h6>
                        </form>
                    </div>
                        <div className="login-up-pg-container-right"> 
                             <img className="login-pic" src={loginright} /> 
                        </div>  
                </div>
            </div>     
        </div>
    </div>
    )
}

export default LoginPage;