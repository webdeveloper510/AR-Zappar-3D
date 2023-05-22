import React from "react";
import logoImage from '../../assets/images/sayehbazf.png';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
const NavBar =()=>{

    const navigate = useNavigate()
  const handleLogout = ()=>{  
    localStorage.clear()
    toast.success('Log Out Successfully !');
    navigate('/');
  }
  const handleUserProfile = ()=>{  
    navigate('/user');
  }
    return(


<div className="navbar main-page-nav">
<div className="container-fluid">
  <div className="d-flex align-items-center justify-content-between w-100">
    <div className="w-100 text-white">          
      <h2 class="main-op-logo"><img src={logoImage} /></h2>
    </div>
   
    <div className="dropdown custom-drop-down">
      <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
        <p class="user-profile-name">Web Developer</p><FontAwesomeIcon icon={faChevronDown} />
      </a>
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" onClick={handleUserProfile}> 
        <FontAwesomeIcon icon={faGears} />
          User Setting</a></li>
        <li><a className="dropdown-item" href="#">
        <FontAwesomeIcon icon={faPhotoFilm} />Media Library</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" onClick={handleLogout}>
        <FontAwesomeIcon icon={faRightFromBracket} />Log out</a></li>
      </ul>
    </div>
  </div>
</div>
</div>
    )
}
export default NavBar;