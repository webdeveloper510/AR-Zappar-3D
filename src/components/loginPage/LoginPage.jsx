import React , {useEffect, useState} from "react";
import "../../App.css"
import axios from "axios";
import { API } from "../../config/api";
//  
//   
import {toast} from 'react-toastify'
//    
import { useNavigate } from 'react-router-dom';
import loginright from '../../assets/images/login-right.png';


const LoginPage =()=>{
const navigate = useNavigate();

//  Email Address
const [email , userEmail] = useState(null)

const handleEmail =(e)=>{
    userEmail(e.target.value)
}
// console.log("email----------->" , email)


//  Password
const [password , userPassword] = useState(null)

const handlePass =(e)=>{
    userPassword(e.target.value)
}
// console.log("password----------->" , password)

const MyDataObject = {

    "email" : email,
    "password" : password,

}
const handleLogin = ()=>{
        axios.post(API.BASE_URL + 'login/', {
            email: email,
            password: password,
          }).then(function (response) {
            navigate('/home')
            toast.success("Login Successfully !")
            console.log(response)
            console.log('Login SuccessFully', response);
            console.log(response.data)
            localStorage.setItem('token',response.data.token.access)
            localStorage.setItem('id',response.data.data.id)         
          })
          .catch(function(err) {
            console.error('Error uploading file', err);
            toast.error("Invalid login credentials !")
          });
}
var token = localStorage.getItem('token');
useEffect(()=>{
    if (token){
        navigate('/home')
    }
},
[])

    return(


    <div class="login-page" id="login-page">
        <div class="container-fluid p-0 m-0">
            <div class="row col-md-12 p-0 m-0 align-items-center login-bgg">
              
                <div class="col-md-12 p-0 m-0 login-outer">
                
                    <div class="text-center login-up-pg-container-left">
                     

                        <form class="login-pg-form">
                        <h2 class="top-logo">Welcome</h2>
                            {/* <h2 class="login-text fs-1">Log in</h2> */}
                            <div class="mb-3 envelop-div">
                                {/* <label class="form-label fw-semibold" >Email</label> */}
                               {/* <img class="envelop" src={mailbox}></img> */}
                                <input type="email" class="form-control" value={email} placeholder="Enter Your Email"  onChange={handleEmail}/>
                            </div>
                            <div class="mb-3">
                                {/* <label class="form-label fw-semibold" value={password} >Password</label> */}
                                {/* <img class="pwd-pic" src={passwordpic}></img> */}
                                <input type="password" class="form-control" placeholder="Enter Your Password" onChange={handlePass} />
                            </div>
                            {/* <div class="mb-3">
                                <label class="form-label fw-semibold">2 Factor Authentication</label>
                                <input type="password" class="form-control" placeholder="Enter Authentication Code"/>
                            </div> */}

                            <div class="d-grid gap-2 mt-3">
                                <a class="btn btn-sign-in" type="button"
                                   onClick={handleLogin}>Sign in</a>
                                <p class="text-center p-0 m-0"> or </p>
                                <button class="btn btn-sign-in-google" type="button"><i
                                        class="bi bi-google pe-4"></i>Sign in with Google</button>
                            </div>
                            <h6 class="login-account mt-3 text-center">Don't Have an Account? <a
                                    href="/#/register" class="fw-bolder login-sign-up"> Sign up</a>
                            </h6>

                        </form>
                        </div>
                        <div class="login-up-pg-container-right">
                <img class="login-pic" src={loginright} />
                </div>
                    
                </div>

               
                </div>
           
        </div>

    </div>
    )
}

export default LoginPage;