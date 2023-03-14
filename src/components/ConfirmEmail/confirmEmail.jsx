import React from "react";

const EmailConfirm =()=>{
    return(

<div class="confirmation-email" id="confirmation-email">
    <div class="container-fluid p-0 m-0">
        <div class="row p-0 m-0 align-items-center">
            <div class="col-md-5 p-0 m-0">
                <div class="text-center pt-5">
                    <h2 class="logo-here">Logo Here</h2>
                </div>   
                <div class="text-left pt-5 ps-5">
                    <h2>You’ve got mail!</h2>
                    <p class="p-0 m-0">To verify the email address click the link we sent to</p>
                    <p class="p-0 m-0">loremipsum@gmail.com</p>
                    <p class="mt-4">Didn’t get confirmation email?</p>
                    <a class="btn" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/main.html">Resent Email</a>
                </div> 
                       
                
            </div>
            <div class="col-md-7 p-0 m-0 confirmation-email-bg"></div>

        </div>
    </div>

</div>



    )
}

export default EmailConfirm;