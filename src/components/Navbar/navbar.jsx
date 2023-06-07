import React ,{useState, useEffect}from "react";
import logoImage from '../../assets/images/sayehbazf.png';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../../config/api";
const NavBar =()=>{

    const navigate = useNavigate()
  const [nameOfUser , UserName] = useState(null)
  const [ProfilePic , UserImage] = useState(null)

  const handleLogout = ()=>{  
    localStorage.clear()
    toast.success('Log Out Successfully !');
    navigate('/');
  }
  const handleUserProfile = ()=>{  
  window.addEventListener( "pageshow", function ( event ) {

    var historyTraversal = event.persisted || 
    ( typeof window.performance != "undefined" && 
         window.performance.navigation.type === 2 );

    if ( historyTraversal ) {
      // Handle page restore.
      window.location.reload(true);
    }
  })
    navigate('/user');
  }
  const token = localStorage.getItem('token')
  useEffect(()=>{
    axios.post(API.BASE_URL + 'userprofile/', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
     UserName(response.data.firstname)
     UserImage(response.data.profile_image)
    })
    .catch((error) => {
      console.log(error, 'error');
    });
  },[])
    return(



<div className="navbar main-page-nav">
<div className="container-fluid">
  <div className="d-flex align-items-center justify-content-between w-100">
    <div className="w-100 text-white">          
      <h2 class="main-op-logo"><img src={logoImage} /></h2>
    </div>
   
    <div className="dropdown custom-drop-down">
      <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={ProfilePic} alt="mdo" width="32" height="32" className="rounded-circle"/>
        <p class="user-profile-name">{nameOfUser}</p><FontAwesomeIcon icon={faChevronDown} />
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