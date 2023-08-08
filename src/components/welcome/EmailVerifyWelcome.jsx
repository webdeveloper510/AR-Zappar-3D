import React from "react";

const VerifyEmail =() =>{
      const userEmail = "satpaldeepsingh@gmail.com";
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
           <button className='continue-button' >Continue</button>
         </div>
     </div>
)
}
export default VerifyEmail;