import React  from "react";

import "../../App.css"


const RegisterPage =()=>{
    return(
    <div class="sign-up-page" id="sign-up-page">
        <div class="container-fluid p-0 m-0">
            <div class="row p-0 m-0 align-items-center">
                <div class="col-md-5 p-0 m-0">
                    <div class="text-center pt-5">
                        <h2 class="logo-here">Logo Here</h2>

                        <form class="sign-up-pg-form">
                            <div class="row mb-2">
                                <div class="col-6">
                                    <label class="form-label fw-semibold">First Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Fisrt Name"/>
                                </div>
                                <div class="col-6">
                                    <label class="form-label fw-semibold">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Last Name"/>
                                </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label fw-semibold">Email</label>
                                <input type="email" class="form-control" placeholder="Email"/>
                            </div>
                            <div class="mb-2">
                                <label class="form-label fw-semibold">Password</label>
                                <input type="password" class="form-control" placeholder="Password"/>
                            </div>

                            <div class="mb-2 text-center eight">
                                <h4>Date of Birth</h4>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <label class="form-label fw-semibold">Month</label>
                                    <select class="form-select">
                                        <option selected>Select</option>
                                        <option value="1">January</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label class="form-label fw-semibold">Date</label>
                                    <select class="form-select">
                                        <option selected>Select</option>
                                        <option value="1">20-02-2023</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label class="form-label fw-semibold">Year</label>
                                    <select class="form-select">
                                        <option selected>Select</option>
                                        <option value="1">2002</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label fw-semibold">Role</label>
                                <select class="form-select">
                                    <option selected>Select Role</option>
                                    <option value="1">I’m a designer</option>
                                    <option value="1">I’m a developer</option>
                                    <option value="1">I’m a marketer</option>
                                    <option value="1">I’m a 3D artist</option>
                                    <option value="1">I’m an educator</option>
                                    <option value="1">I'm working in Learning and Development</option>
                                    <option value="1">Something else</option>
                                </select>
                            </div>

                            <div class="d-grid gap-2 mt-2">
                                <a class="btn btn-sign-in pt-1 pb-1" type="button"
                                    href="file:///C:/Users/USER/Downloads/Compressed/web-ar/confirmation-email.html">Sign
                                    up</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-7 p-0 m-0 sign-up-page-bg"></div>

            </div>
        </div>

    </div>
    )
}

export default RegisterPage;