import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faGripHorizontal, faQrcode, faArrowDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Mob1 from "../../assets/images/mobi-1.png";
import Mob2 from "../../assets/images/mobi-2.png";

const FirstTab = () => {
    return (
        <>
            <section>
                   {/* Start first Tab Content */}
                     
                   <div id="tab1" class="tab-content triggers-tab-content">
                              <div class="row py-4">
                                <div class="col-md-4 d-flex flex-column bottom-content">
                                  <h5 class="project-title-head">Untitle Project</h5>
                                  
                                 <div class="project-qr-img">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                    <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                  </svg>
                                 </div>

                                  <div class="d-flex text-center">
                                  <button class="pt-1 pb-1" id="svg-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />SVG</button>
                                  <button class="pt-1 pb-1" id="png-btn-download" type="button"><FontAwesomeIcon icon={faArrowDown} style={{ color: "rgb(120 120 120)", width: "15px", height: "15px", marginRight: 8 }} />PNG</button>
                                  
                                  </div>
                                  
                                </div>
                                <div class="col-md-4"></div>
                                <div class="col-md-4">
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