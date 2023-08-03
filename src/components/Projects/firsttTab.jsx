import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faGripHorizontal, faQrcode, faArrowDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Mob1 from "../../assets/images/mobi-1.png";
import Mob2 from "../../assets/images/newMobile.jpg";
import { contextObject } from "../ContextStore/ContextApi";

const FirstTab = () => {

  const ctx=useContext(contextObject);
    return (
        <>
            <section>
                   {/* Start first Tab Content */}
                     
                   <div id="tab1" class="tab-content triggers-tab-content">
                              <div class="row py-4">
                                <div class="col-md-4 d-flex flex-column bottom-content">
                                  <h5 class="project-title-head">Untitle Project</h5>
                                  
                                 <div class="project-qr-img">
                                 {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      width="180"
      height="180"
      preserveAspectRatio="none"
      viewBox="0 0 33 33"
    >
      <g>
        <path fill="#fff" d="M0 0H33V33H0z"></path>
        <g>
          <path d="M4 4H11V5H4z"></path>
          <path d="M14 4H18V5H14z"></path>
          <path d="M22 4H29V5H22z"></path>
          <path d="M4 5H5V6H4z"></path>
          <path d="M10 5H11V6H10z"></path>
          <path d="M12 5H14V6H12z"></path>
          <path d="M16 5H20V6H16z"></path>
          <path d="M22 5H23V6H22z"></path>
          <path d="M28 5H29V6H28z"></path>
          <path d="M4 6H5V7H4z"></path>
          <path d="M6 6H9V7H6z"></path>
          <path d="M10 6H11V7H10z"></path>
          <path d="M13 6H16V7H13z"></path>
          <path d="M18 6H19V7H18z"></path>
          <path d="M20 6H21V7H20z"></path>
          <path d="M22 6H23V7H22z"></path>
          <path d="M24 6H27V7H24z"></path>
          <path d="M28 6H29V7H28z"></path>
          <path d="M4 7H5V8H4z"></path>
          <path d="M6 7H9V8H6z"></path>
          <path d="M10 7H11V8H10z"></path>
          <path d="M12 7H13V8H12z"></path>
          <path d="M17 7H19V8H17z"></path>
          <path d="M22 7H23V8H22z"></path>
          <path d="M24 7H27V8H24z"></path>
          <path d="M28 7H29V8H28z"></path>
          <path d="M4 8H5V9H4z"></path>
          <path d="M6 8H9V9H6z"></path>
          <path d="M10 8H11V9H10z"></path>
          <path d="M13 8H18V9H13z"></path>
          <path d="M20 8H21V9H20z"></path>
          <path d="M22 8H23V9H22z"></path>
          <path d="M24 8H27V9H24z"></path>
          <path d="M28 8H29V9H28z"></path>
          <path d="M4 9H5V10H4z"></path>
          <path d="M10 9H11V10H10z"></path>
          <path d="M12 9H14V10H12z"></path>
          <path d="M16 9H21V10H16z"></path>
          <path d="M22 9H23V10H22z"></path>
          <path d="M28 9H29V10H28z"></path>
          <path d="M4 10H11V11H4z"></path>
          <path d="M12 10H13V11H12z"></path>
          <path d="M14 10H15V11H14z"></path>
          <path d="M16 10H17V11H16z"></path>
          <path d="M18 10H19V11H18z"></path>
          <path d="M20 10H21V11H20z"></path>
          <path d="M22 10H29V11H22z"></path>
          <path d="M13 11H14V12H13z"></path>
          <path d="M16 11H17V12H16z"></path>
          <path d="M19 11H21V12H19z"></path>
          <path d="M4 12H9V13H4z"></path>
          <path d="M10 12H14V13H10z"></path>
          <path d="M15 12H16V13H15z"></path>
          <path d="M18 12H22V13H18z"></path>
          <path d="M23 12H24V13H23z"></path>
          <path d="M25 12H26V13H25z"></path>
          <path d="M27 12H28V13H27z"></path>
          <path d="M4 13H6V14H4z"></path>
          <path d="M7 13H8V14H7z"></path>
          <path d="M9 13H10V14H9z"></path>
          <path d="M17 13H18V14H17z"></path>
          <path d="M20 13H21V14H20z"></path>
          <path d="M23 13H24V14H23z"></path>
          <path d="M27 13H28V14H27z"></path>
          <path d="M4 14H5V15H4z"></path>
          <path d="M7 14H8V15H7z"></path>
          <path d="M9 14H11V15H9z"></path>
          <path d="M12 14H13V15H12z"></path>
          <path d="M14 14H15V15H14z"></path>
          <path d="M16 14H20V15H16z"></path>
          <path d="M21 14H26V15H21z"></path>
          <path d="M27 14H29V15H27z"></path>
          <path d="M4 15H6V16H4z"></path>
          <path d="M11 15H12V16H11z"></path>
          <path d="M15 15H17V16H15z"></path>
          <path d="M18 15H19V16H18z"></path>
          <path d="M21 15H24V16H21z"></path>
          <path d="M28 15H29V16H28z"></path>
          <path d="M5 16H8V17H5z"></path>
          <path d="M10 16H11V17H10z"></path>
          <path d="M13 16H15V17H13z"></path>
          <path d="M17 16H25V17H17z"></path>
          <path d="M26 16H29V17H26z"></path>
          <path d="M4 17H6V18H4z"></path>
          <path d="M7 17H10V18H7z"></path>
          <path d="M11 17H12V18H11z"></path>
          <path d="M15 17H16V18H15z"></path>
          <path d="M17 17H18V18H17z"></path>
          <path d="M20 17H21V18H20z"></path>
          <path d="M23 17H24V18H23z"></path>
          <path d="M25 17H26V18H25z"></path>
          <path d="M27 17H28V18H27z"></path>
          <path d="M4 18H5V19H4z"></path>
          <path d="M10 18H11V19H10z"></path>
          <path d="M13 18H15V19H13z"></path>
          <path d="M16 18H20V19H16z"></path>
          <path d="M22 18H26V19H22z"></path>
          <path d="M27 18H29V19H27z"></path>
          <path d="M4 19H5V20H4z"></path>
          <path d="M6 19H7V20H6z"></path>
          <path d="M13 19H15V20H13z"></path>
          <path d="M16 19H17V20H16z"></path>
          <path d="M20 19H21V20H20z"></path>
          <path d="M23 19H25V20H23z"></path>
          <path d="M28 19H29V20H28z"></path>
          <path d="M4 20H5V21H4z"></path>
          <path d="M6 20H7V21H6z"></path>
          <path d="M9 20H12V21H9z"></path>
          <path d="M17 20H18V21H17z"></path>
          <path d="M20 20H25V21H20z"></path>
          <path d="M26 20H27V21H26z"></path>
          <path d="M12 21H13V22H12z"></path>
          <path d="M14 21H16V22H14z"></path>
          <path d="M18 21H21V22H18z"></path>
          <path d="M24 21H26V22H24z"></path>
          <path d="M4 22H11V23H4z"></path>
          <path d="M12 22H14V23H12z"></path>
          <path d="M16 22H18V23H16z"></path>
          <path d="M20 22H21V23H20z"></path>
          <path d="M22 22H23V23H22z"></path>
          <path d="M24 22H25V23H24z"></path>
          <path d="M26 22H29V23H26z"></path>
          <path d="M4 23H5V24H4z"></path>
          <path d="M10 23H11V24H10z"></path>
          <path d="M14 23H15V24H14z"></path>
          <path d="M19 23H21V24H19z"></path>
          <path d="M24 23H26V24H24z"></path>
          <path d="M27 23H28V24H27z"></path>
          <path d="M4 24H5V25H4z"></path>
          <path d="M6 24H9V25H6z"></path>
          <path d="M10 24H11V25H10z"></path>
          <path d="M12 24H13V25H12z"></path>
          <path d="M14 24H15V25H14z"></path>
          <path d="M16 24H18V25H16z"></path>
          <path d="M19 24H25V25H19z"></path>
          <path d="M26 24H28V25H26z"></path>
          <path d="M4 25H5V26H4z"></path>
          <path d="M6 25H9V26H6z"></path>
          <path d="M10 25H11V26H10z"></path>
          <path d="M12 25H13V26H12z"></path>
          <path d="M15 25H16V26H15z"></path>
          <path d="M18 25H23V26H18z"></path>
          <path d="M24 25H29V26H24z"></path>
          <path d="M4 26H5V27H4z"></path>
          <path d="M6 26H9V27H6z"></path>
          <path d="M10 26H11V27H10z"></path>
          <path d="M12 26H15V27H12z"></path>
          <path d="M19 26H20V27H19z"></path>
          <path d="M21 26H22V27H21z"></path>
          <path d="M25 26H27V27H25z"></path>
          <path d="M28 26H29V27H28z"></path>
          <path d="M4 27H5V28H4z"></path>
          <path d="M10 27H11V28H10z"></path>
          <path d="M12 27H14V28H12z"></path>
          <path d="M15 27H16V28H15z"></path>
          <path d="M20 27H21V28H20z"></path>
          <path d="M23 27H26V28H23z"></path>
          <path d="M28 27H29V28H28z"></path>
          <path d="M4 28H11V29H4z"></path>
          <path d="M12 28H13V29H12z"></path>
          <path d="M14 28H15V29H14z"></path>
          <path d="M17 28H19V29H17z"></path>
          <path d="M22 28H29V29H22z"></path>
        </g>
      </g>
    </svg> */}
    <img src={localStorage.getItem('qrCode')} />
    {
      console.log(localStorage.getItem('qrCode'),'ctx.qrCodectx.qrCodectx.qrCode')
    }
                                 </div>

                                  {/* <div class="d-flex text-center">
                                  <button class="pt-1 pb-1" id="png-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />PNG</button>
                                  <button class="pt-1 pb-1" id="svg-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />SVG</button>
                                  
                                  
                                  </div> */}
                                  
                                </div>
                                <div class="col-md-3"></div>
                                <div class="col-md-5 destination-img">
                                  <h5 class="project-destination-head">Destination</h5>
                                  
                                  <img src={Mob2} alt="" />

                                  <h5 class="project-webar-head">WebAR site</h5>
                                </div>
                              </div>
                          </div> 
                     {/* End first Tab Content */}
            </section>
        </>
    )

}

export default FirstTab;