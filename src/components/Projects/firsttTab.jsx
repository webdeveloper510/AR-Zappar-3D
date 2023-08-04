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
                                 
    <img src={ctx.qrCode} />
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