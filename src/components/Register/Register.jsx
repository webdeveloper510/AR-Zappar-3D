import React , {useState} from "react";
import axios from "axios";
import { API } from "../../config/api";
import "../../App.css"
import { useNavigate } from "react-router-dom";
// <<<<<<< Updated upstream
import logoImage from '../../assets/images/sayehbazf.png';
import "react-datepicker/dist/react-datepicker.css";
import loginright from '../../assets/images/login-right.png';
import DatePicker from 'react-datepicker';

// =======
import { toast } from "react-toastify"
// >>>>>>> Stashed changes

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

// Date picker
const [selectedDate, setSelectedDate] = useState("");

const handleDateChange = (event) => {
  setSelectedDate(event.target.value);
};
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

    const handelLogin =()=>{
        navigate('/')
    }
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
                navigate('/')
                toast.success('Registerd Successfully !')
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
            <div class="row p-0 m-0 align-items-center sign-up-bgg">
                <div class="col-md-12 sign-up-outer">
                    <div class="text-center pb-2 sign-up-pg-container-left">
                   

                        <form class="sign-up-pg-form">
                        <h2 class="top-logo"><img src={logoImage} /></h2>
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

                            <div class="mb-2 dob">
                                <h4>Date of Birth</h4>
                            </div>

                            <input 
                             type="date" 
                             id="birthday" 
                             name="birthday" 
                             className="form-control"
                             value={selectedDate} 
                             onChange={handleDateChange} 
                             />

                            {/* <div class="row mb-2">
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
                            </div> */}

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
                                <a class="btn btn-sign-in pt-2 pb-2" type="button"
                                    onClick={handleRegister}>Sign up</a>
                            </div>
                            <p class="already-account fw-bolder">
                            Already have an account ?<a class="btn-register btn btn-sign-in pt-2 pb-2" type="button"
                                    onClick={handelLogin}> Login</a></p>
                            
                        </form>
                    </div>

                    <div class="sign-up-pg-container-right">
                <img class="login-pic" src={loginright} />
                </div>
                </div>
                {/* <div class="col-md-7 p-0 m-0 sign-up-page-bg"></div> */}

            </div>
        </div>

    </div>
    )
}

export default RegisterPage;