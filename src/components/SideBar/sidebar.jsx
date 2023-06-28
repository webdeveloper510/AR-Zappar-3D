import React ,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGripHorizontal,  faUserGroup } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeButton = location.pathname === '/home' ? 'Home' : 'Team';

  const handleOnPage = (event, page) => {
    if (page === 'Home') {
      navigate('/home');
    } else if (page === 'Team') {
      navigate('/team');
    }
  };

  const selectedStyle = {
    color: "#000",
    background:"#5089c71c",
    borderRadius: "100px",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Montserrat, sans-serif",
}

  const unselectedStyle = {};

  return (
    <div class="col-md-1 p-0 m-0 project-side main-page-left-bar">
      <div className="container-outer">
        <div class="d-flex flex-column flex-shrink-0 p-3 project-main">
          <ul class="nav nav-pills flex-column mb-auto" id="side-navbar-listing">
            <li title="Projects"
              class="nav-item"
              style={activeButton === 'Home' ? selectedStyle : unselectedStyle}
              onClick={(event) => handleOnPage(event, 'Home')}
            >
              <a class="nav-link d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
            <path d="M29 21a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-11 0a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm11 1h-7v7h7v-7zm-11 0h-7v7h7v-7zm0-12a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm11 0a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-11 1h-7v7h7v-7zm11 0h-7v7h7v-7z"></path>
          </svg>
              </a>
            </li>
            <li title="Teams"  class="nav-item"
              onClick={(event) => handleOnPage(event, 'Team')}
              style={activeButton === 'Team' ? selectedStyle : unselectedStyle}
            >
              <a class="nav-link d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
      <path d="M28 10a2 2 0 11-1.016 3.723l-4.539 4.539c.35.49.555 1.09.555 1.738a2.98 2.98 0 01-.555 1.738l5.409 5.408a1.5 1.5 0 11-.706.705l-.002.003-5.408-5.409A2.98 2.98 0 0120 23l-.059-.002-.392 3.147a2 2 0 11-.993-.13l.4-3.202a3.01 3.01 0 01-1.504-1.23l-2.537 1.269A2.503 2.503 0 0112.5 26a2.5 2.5 0 111.967-4.043l2.605-1.302a3.01 3.01 0 01.483-2.393l-3.677-3.676a2.5 2.5 0 11.708-.708l3.676 3.677c.375-.268.815-.45 1.291-.522l.398-3.18a1.5 1.5 0 11.997.107l-.387 3.092c.432.082.832.257 1.177.503l4.539-4.539A2 2 0 0128 10zm-9.2 17a1 1 0 100 2 1 1 0 000-2zm9.7 1a.5.5 0 100 1 .5.5 0 000-1zm-16-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.5-4a2 2 0 100 4 2 2 0 000-4zm-7.5-7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM28 11a1 1 0 100 2 1 1 0 000-2zm-7.4 1a.5.5 0 100 1 .5.5 0 000-1z"></path>
    </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
