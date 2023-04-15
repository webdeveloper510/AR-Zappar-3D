import React , {useState} from "react";
import axios from "axios";
import { API } from "../../config/api";
import "../../App.css"
import { useNavigate } from "react-router-dom";

const RegisterPage =()=>{
    const navigate = useNavigate();

    //  First Name 
    const [firstName , UserFirstName]= useState(null)

    const handleFirstName = (e)=>{
        UserFirstName(e.target.value);
    }
    // console.log("firstName----------->" , firstName)

    // Last Name
    const [LastName , UserLastName]= useState(null)

    const handleLastName = (e)=>{
        UserLastName(e.target.value);
    }
    // console.log("LastName----------->" , LastName)


//  Email Address
    const [email , userEmail] = useState(null)
    const handleEmail =(e)=>{
        userEmail(e.target.value)
    }
    // console.log("email----------->" , email)


//  Password
    const [password , userPassword] = useState(null)

    const handlePassword =(e)=>{
        userPassword(e.target.value)
    }
    // console.log("password----------->" , password)


    // Proffession
    const [Proffession , selectProff] = useState(null)

    const handleSelect =(e)=>{
        selectProff(e.target.value)
    }
    // console.log("Proffession----------->" , Proffession)


    // Year Select
    const [Year , selectYear] = useState(null)

    const handleYear =(e)=>{
        selectYear(e.target.value)
    } 
    // console.log("Year----------->" , Year)
    

    // Month Select
    const [Month , selectMonth] = useState(null)

    const handleMonth =(e)=>{
        selectMonth(e.target.value)
    } 
    // console.log("Month----------->" , Month)
    

    // Date Select
    const [Date , selectDate] = useState(null)
    
    const handleDate =(e)=>{
        selectDate(e.target.value)
    }
    // console.log("Date----------->" , Date)

    const MyDataObject = {
        "firstname" : firstName,
        "lastname" : LastName,
        "email" : email,
        "password" : password,
        "proffession": Proffession,
        "dateofbirth" : Year+"-"+Month+"-"+Date,
    }
    // console.log("MyDataObject----------->" , MyDataObject)


    const handleRegister = ()=>{
        if (MyDataObject){
            const formData = new FormData();
            formData.append("firstname" , firstName,)
            formData.append("lastname" , LastName,)
            formData.append("email" , email,)
            formData.append("password" , password,)
            formData.append("proffession", Proffession,)
            formData.append("dateofbirth" , Year+"-"+Month+"-"+Date,)
            console.log("MyDataObject----------->" , formData)

            axios.post(API.BASE_URL + 'signup/', formData, {
                headers: {
                  'accept': 'application/json',
                      'content-type': 'multipart/form-data'
                },
              })
              .then(function (response) {
                console.log(response)
                console.log('Registerd SuccessFully', response);
                navigate('/login')
                // uploadProImg(response.data.imagePro? response.data.imagePro : "")
                
              })
              .catch(function(err) {
                console.error('Error uploading file', err);
              });
            
        }
    }

    return(
    <div class="sign-up-page" id="sign-up-page">
        <div class="container-fluid p-0 m-0">
            <div class="row p-0 m-0 align-items-center">
                <div class="col-md-5 p-0 m-0">
                    <div class="text-center pt-5 sign-up-pg-container">
                        <h2 class="logo-here">Logo Here</h2>

                        <form class="sign-up-pg-form">
                            <div class="row mb-2">
                                <div class="col-6">
                                    <label class="form-label fw-semibold">First Name</label>
                                    <input type="text" class="form-control" value={firstName}   placeholder="Enter Your Fisrt Name" onChange={handleFirstName}/>
                                </div>
                                <div class="col-6">
                                    <label class="form-label fw-semibold">Last Name</label>
                                    <input type="text" class="form-control"  value={LastName}  placeholder="Enter Your Last Name" onChange={handleLastName}/>
                                </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label fw-semibold">Email</label>
                                <input type="email" class="form-control" placeholder="Email" value={email} onChange={handleEmail}/>
                            </div>
                            <div class="mb-2">
                                <label class="form-label fw-semibold">Password</label>
                                <input type="password" class="form-control" placeholder="Password" value={password} onChange={handlePassword}/>
                            </div>

                            <div class="mb-2 text-center eight">
                                <h4>Date of Birth</h4>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <label class="form-label fw-semibold">Year</label>
                                    <select class="form-select" onChange={handleYear}>
                                        <option selected>Select</option>
                                        <option value="2000">2000</option>
                                    </select>
                                </div>  
                                <div class="col-4">
                                    <label class="form-label fw-semibold">Month</label>
                                    <select class="form-select" onChange={handleMonth}>
                                        <option selected>Select</option>
                                        <option value="05">05</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label class="form-label fw-semibold">Date</label>
                                    <select class="form-select" onChange={handleDate}>
                                        <option selected>Select</option>
                                        <option value="1">11</option>
                                    </select>
                                </div>
                            </div>

                            <div class="mb-2">
                                <label class="form-label fw-semibold">Role</label>
                                <select class="form-select" onChange={handleSelect}>
                                    <option selected>Select Role</option>
                                    <option value={Proffession}>I am a Designer.</option>
                                    <option value={Proffession}>I am a Developer.</option>
                                    <option value={Proffession}>I am a Marketer.</option>
                                    <option value={Proffession}>I am a 3D Artist.</option>
                                    <option value={Proffession}>I am an Educator.</option>
                                    <option value={Proffession}>I am working in Learning and Development.</option>
                                    <option value={Proffession}>Something Else.</option>
                                </select>
                            </div>

                            <div class="d-grid gap-2 mt-2">
                                <a class="btn btn-sign-in pt-1 pb-1" type="button"
                                    onClick={handleRegister}>Sign up</a>
                            </div>
                            Already have an account.
                            <div class="d-grid gap-2 mt-2 login">
                                <a class="btn btn-sign-in pt-1 pb-1" type="button"
                                    href="/#/login">Login</a>
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