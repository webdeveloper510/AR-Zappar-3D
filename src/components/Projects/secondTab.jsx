import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faGripHorizontal, faQrcode, faArrowDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Mob1 from "../../assets/images/Zappar-app-destination.jpg";
import Mob2 from "../../assets/images/mobi-2.png";

const SecondTab = () => {
    return (
        <>
            <section>
                {/* Start Second Tab Content */}
                <div id="tab2" class="tab-content triggers-tab-content">
                            <div class="row py-4">
                              <div class="col-md-4 d-flex flex-column bottom-content">
                              <h5 class="project-title-head">Untitle Project</h5>
                              <div class="project-deep-link-img">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="160"
                                      height="160"
                                      viewBox="0 0 250 250"
                                    >
                                      <g transform="translate(125 125) scale(3.67647)">
                                        <defs>
                                          <clipPath id="bits-clip1">
                                            <path d="M0-31c-17.12 0-31 13.88-31 31 0 17.12 13.88 31 31 31 17.12 0 31-13.88 31-31 0-17.12-13.88-31-31-31zm0 8c12.703 0 23 10.297 23 23S12.703 23 0 23-23 12.703-23 0s10.297-23 23-23z"></path>
                                          </clipPath>
                                        </defs>
                                        <circle r="33" fill="#fff"></circle>
                                        <path d="M0-34c-18.778 0-34 15.222-34 34s15.222 34 34 34S34 18.778 34 0 18.778-34 0-34zm0 2c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z"></path>
                                        <path d="M0-22c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22zm-1.906 3.344L11.688-2.031-.406 8.313l7.781 10.343L-11.344 7.72l8.5-8.938-8.844-6.406 9.782-11.031z"></path>
                                        <g clipPath="url(#bits-clip1)">
                                          <path
                                            d="M0 0l798.421-50.232V50.232zM0 0l796.45 75.287-15.717 99.228zM0 0l734.204 317.718-45.61 89.515zM0 0l294.5 743.821-95.548 31.046zM0 0l174.515 780.733-99.228 15.717zM0 0l-75.287 796.45-99.228-15.717zM0 0l-428.661 675.462-81.278-59.051zM0 0l-529.05 600.089-71.039-71.04zM0 0l-743.821 294.5-31.046-95.548zM0 0l-780.733 174.515-15.717-99.228zM0 0l-734.204-317.718 45.61-89.515zM0 0l-600.089-529.05 71.04-71.039zM0 0l-509.94-616.41 81.279-59.052zM0 0l-407.233-688.594 89.515-45.61zM0 0l-174.515-780.733 99.228-15.717zM0 0l198.952-774.867L294.5-743.82zM0 0l428.661-675.462 81.278 59.051zM0 0l616.41-509.94 59.052 81.279zM0 0l688.594-407.233 45.61 89.515zM0 0l780.733-174.515 15.717 99.228z"
                                            className="paths"
                                          ></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                              

                            
                              </div>
                              <div class="col-md-3"></div>
                              <div class="col-md-5 destination-img">
                              <h5 class="project-destination-head">Destination</h5>
                                <img src={Mob1} alt="" />
                                <h5 class="project-webar-head">App</h5>
                              </div>
                            </div>
                          </div>
            </section>
        </>
    )

}

export default SecondTab;