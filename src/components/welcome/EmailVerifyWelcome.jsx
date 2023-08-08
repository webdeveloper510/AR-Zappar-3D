import React, { useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import axios from "axios";
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
          console.log(res)
          localStorage.setItem('token',id)
          localStorage.setItem('id',res.data.data.id)       
        }) 
        .catch(function(err){console.log(err)})
      },[])
      const homeNavigate=()=>{
        navigate('/home')
      }
return(
  <div className="main">
  <div className="container">
           <div className="row">
             <div className="col-md-6 offset-md-3 mt-5">
               <div className="card">
                 <div className="card-body">
                   <h1 className="card-title text-center">Welcome to our website!</h1>
                   <p className="card-text text-center">
                   Thank You for Verifying you Email. <br/> Your Email is successfully verified. <br/> Click Continue !
                   </p>
                 </div>
               </div>
             </div>
           </div>
           <button className='continue-button' onClick={homeNavigate}>Continue</button>
         </div>
     </div>
)
}
export default VerifyEmail;