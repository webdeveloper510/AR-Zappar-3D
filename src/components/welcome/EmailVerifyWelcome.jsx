import React, { useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import axios from "axios";
import { toast } from "react-toastify";
import thankyouimg from "../../assets/images/thank-you-png-icon.png";
const VerifyEmail =() =>{
      const navigate = useNavigate()
      const {id} = useParams()
      useEffect(()=>{
        axios.post(API.BASE_URL+'verified-email/', null, {
          headers: {
            Authorization: `Bearer ${id}`,
          },
        })
        .then(function(res){
          toast.success("Email verified Successfully !")
        }) 
        .catch(function(err){console.log(err)})
      },[])
      const homeNavigate=()=>{
        navigate('/')
      }
return(
  <div className="email-verification-main">
  <div className="container">
           <div className="row">
             <div className="col-md-6 offset-md-3">
               <div className="card verification-div">
                 <div className="card-body">
                 <img src={thankyouimg} className="thank-you" alt="..."/>
                  
                   <h1 className="card-title text-center welcome-text">Welcome to our website!</h1>
                   <p className="card-text text-center thank-you-email-text">
                   Thank You for Verifying your Email. <br/> Your Email is successfully verified. <br/> Click below to Continue !
                   </p>
                 </div>
                 <button className='continue-button' onClick={homeNavigate}>Continue</button>
               </div>
             </div>
           </div>
           {/* <button className='continue-button' onClick={homeNavigate}>Continue</button> */}
         </div>
     </div>
)
}
export default VerifyEmail;