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
    <div class="col-md-2 p-0 m-0 project-side main-page-left-bar">
      <div className="container">
        <div class="d-flex flex-column flex-shrink-0 p-3 project-main">
          <ul class="nav nav-pills flex-column mb-auto">
            <li
              class="nav-item"
              style={activeButton === 'Home' ? selectedStyle : unselectedStyle}
              onClick={(event) => handleOnPage(event, 'Home')}
            >
              <a class="nav-link d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faGripHorizontal}
                  style={{ color: 'rgb(120 120 120)', width: '20px', height: '20px', marginRight: 8 }}
                />
                Project
              </a>
            </li>
            <li
              onClick={(event) => handleOnPage(event, 'Team')}
              style={activeButton === 'Team' ? selectedStyle : unselectedStyle}
            >
              <a class="nav-link d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  style={{ color: 'rgb(120 120 120)', width: '20px', height: '20px', marginRight: 8 }}
                />
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
