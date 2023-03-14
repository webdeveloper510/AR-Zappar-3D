import React from "react";
import "../../App.css"

const LoginPage =()=>{
    return(


    <div class="login-page" id="login-page">
        <div class="container-fluid p-0 m-0">
            <div class="row p-0 m-0 align-items-center">
                <div class="col-md-7 p-0 m-0 login-page-bg"></div>
                <div class="col-md-5 p-0 m-0">
                    <div class="text-center pt-5">
                        <h2 class="logo-here">Logo </h2>

                        <form class="login-pg-form">
                            <h2 class="fw-bolder fs-1">Welcome Back</h2>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Email</label>
                                <input type="email" class="form-control" placeholder="Email"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">Password</label>
                                <input type="password" class="form-control" placeholder="Password"/ >
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-semibold">2 Factor Authentication</label>
                                <input type="password" class="form-control" placeholder="Enter Authentication Code"/>
                            </div>

                            <div class="d-grid gap-2 mt-5">
                                <a class="btn btn-sign-in" type="button"
                                    href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project.html#">Sign in</a>
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