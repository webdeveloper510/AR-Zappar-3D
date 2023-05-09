import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGripHorizontal,  faUserGroup } from '@fortawesome/free-solid-svg-icons';

const SideBar =()=>{
    return(
        <div class="col-md-2 p-0 m-0 project-side main-page-left-bar">
        <div className="container">
          <div class="d-flex flex-column flex-shrink-0 p-3 project-main">
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link active d-flex align-items-center"><FontAwesomeIcon icon={faGripHorizontal} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px", marginRight: 8 }} />Project</a>
                </li>
                <li>
                  <a href="/#/team" class="nav-link d-flex align-items-center"><FontAwesomeIcon icon={faUserGroup} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px", marginRight: 8 }} />Team</a>
                </li>
              </ul>
          </div>
        </div>
    </div>
    )
}
export default SideBar;