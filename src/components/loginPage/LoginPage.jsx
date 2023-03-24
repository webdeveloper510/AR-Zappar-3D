import React , {useState} from "react";
import "../../App.css"
import axios from "axios";
import { API } from "../../config/api";

import { useNavigate } from 'react-router-dom';

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
            console.log(response)
            console.log('Login SuccessFully', response);
            console.log(response.data)
            localStorage.setItem('id',response.data.data[0].id)
            localStorage.setItem('FirstName',response.data.data[0].firstname)
            localStorage.setItem('lastname',response.data.data[0].lastname)
            localStorage.setItem('email',response.data.data[0].email)
            localStorage.setItem('proffession',response.data[0].data.proffession)
            
            // uploadProImg(response.data.imagePro? response.data.imagePro : "")
            
          })
          .catch(function(err) {
            console.error('Error uploading file', err);
          });
        
    // }
}


    return(


    <div class="login-page" id="login-page">
        <div class="container-fluid p-0 m-0">
            <div class="row p-0 m-0 align-items-center">
                <div class="col-md-7 p-0 m-0 login-page-bg"></div>
                <div class="col-md-5 p-0 m-0">
                    <div class="text-center pt-5 login-up-pg-container">
                        <h2 class="logo-here">Logo </h2>

                        <form class="login-pg-form">
                            <h2 class="fw-bolder fs-1">Welcome Back</h2>
                            <div class="mb-3">
                                <label class="form-label fw-semibold" >Email</label>
                                <input type="email" class="form-control" value={email} placeholder="Email"  onChange={handleEmail}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold" value={password} >Password</label>
                                <input type="password" class="form-control" placeholder="Password" onChange={handlePass} />
                            </div>
                            {/* <div class="mb-3">
                                <label class="form-label fw-semibold">2 Factor Authentication</label>
                                <input type="password" class="form-control" placeholder="Enter Authentication Code"/>
                            </div> */}

                            <div class="d-grid gap-2 mt-5">
                                <a class="btn btn-sign-in" type="button"
                                   onClick={handleLogin}>Sign in</a>
                                <p class="text-center p-0 m-0"> or </p>
                                <button class="btn btn-sign-in-google" type="button"><i
                                        class="bi bi-google pe-4"></i>Sign in with Google</button>
                            </div>
                            <h6 class="fw-bolder mt-3 text-center">Don't Have an Account? <a
                                    href="/"> Sign up</a>
                            </h6>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default LoginPage;