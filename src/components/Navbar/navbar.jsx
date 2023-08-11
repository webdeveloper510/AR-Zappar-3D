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
      // console.log(error, 'error');
    });
  },[])
    return(



<div className="navbar main-page-nav">
<div className="container-fluid">
  <div className="d-flex align-items-center justify-content-between w-100">
    <div className="w-100 text-white">          
      <h2 className="main-op-logo"><img src={logoImage} /></h2>
    </div>
   
    <div className="dropdown custom-drop-down">
      <a href="#" className="navbar-profile-toggle link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={ProfilePic} alt="mdo" width="32" height="32" className="rounded-circle"/>
            <p className="user-profile-name">{nameOfUser}</p>
              <svg className="down-arrow-img"xmlns="http://www.w3.org/2000/svg"width="28"height="28"fill="#000"version="1.1"viewBox="0 0 330 330"xmlSpace="preserve">
                  <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"></path>
              </svg>
      </a>


      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" onClick={handleUserProfile}> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path d="M21 10a1 1 0 011 1v4h7a1 1 0 011 1v12a1 1 0 01-1 1H11a1 1 0 01-1-1V16a1 1 0 011-1h7v-4a1 1 0 011-1h2zm8 6H11v12h18V16zm-13.254 5.5c1.467 0 2.671 1.916 2.75 3.805l.004.195H13c0-1.95 1.228-4 2.746-4zm11.67 3a.5.5 0 01.09.992l-.09.008h-5.833a.5.5 0 01-.09-.992l.09-.008h5.834zm-11.67-2c-.605 0-1.299.835-1.597 1.918l-.021.082h3.242l-.015-.064c-.283-1.04-.93-1.847-1.513-1.93l-.096-.006zm10.654-.75a.5.5 0 01.09.992l-.09.008h-4.8a.5.5 0 01-.09-.992l.09-.008h4.8zM15.8 17.5a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm0 1a.8.8 0 100 1.6.8.8 0 000-1.6zm11.617.5a.5.5 0 01.09.992l-.09.008h-5.834a.5.5 0 01-.09-.992l.09-.008h5.834zM21 11h-2v4h2v-4z"></path>
          </svg>
          User Setting
        </a></li>


        <li className="disabled" ><a className="dropdown-item" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
          >
            <path d="M18.302 12a1 1 0 01.951.692l.523 1.616a1 1 0 00.951.692h8.26c.553 0 1 .448 1.002 1l.01 11a.999.999 0 01-.881.994L29 28H11a1 1 0 01-1-1V13a1 1 0 011-1h7.302zm0 1H11v14h17.999l-.01-11h-8.262a2 2 0 01-1.847-1.233l-.055-.151L18.302 13zm-.504 4.747a.7.7 0 01.353.095l5.403 3.152a.7.7 0 010 1.209l-5.403 3.152a.7.7 0 01-1.053-.605v-6.303a.7.7 0 01.7-.7zm.301 1.222v5.257l4.506-2.628L18.1 18.97z"></path>
          </svg>Media Library
        </a></li>


        <li className="disabled"><a className="dropdown-item" onClick={handleUserProfile}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <path d="M16.036 27.5l.037.19c.216.942.866 1.646 1.642 1.785l.146.02.135.005c.897 0 1.681-.756 1.923-1.811l.035-.179.001-.01H21c0 1.5-1.325 3-3.004 3-1.62 0-2.901-1.395-2.991-2.84L15 27.5h1.036zm1.96-17.5c1.517 0 2.377 1.254 2.488 3.087l.003.002-.006.824-.146.113-.416-.1a4.557 4.557 0 00-1.923-.426c-2.693 0-4.888 2.364-4.996 5.327l-.004.229v2.456a1.5 1.5 0 00-1.03.614l-.086.133-.705 1.241a1.339 1.339 0 001.035 1.994l.129.006h11.314a1.339 1.339 0 001.322-1.127l.665-.094.136-.027.136-.05.08-.036a2.338 2.338 0 01-2.137 2.325l-.202.009H12.339a2.339 2.339 0 01-2.126-3.314l.092-.18.706-1.241c.175-.308.41-.57.687-.775l.17-.116.127-.073v-1.745c0-2.64 1.433-4.934 3.513-5.97.111-1.833.971-3.086 2.488-3.086zm6.149 2.54l.017.046.416 1.414c.288.07.563.171.826.3l.195.1 1.318-.74a.293.293 0 01.323.034l.035.038 1.385 1.727a.274.274 0 01.013.32l-.031.038-1.056 1.064c.047.172.089.343.115.529.017.123.026.243.031.361l.005.178 1.307.733a.27.27 0 01.13.29l-.014.049-.855 2.042a.278.278 0 01-.273.174l-.051-.007-1.471-.348c-.21.202-.435.39-.682.55l-.19.116-.01 1.474a.27.27 0 01-.19.255l-.051.012-2.24.315a.278.278 0 01-.29-.145l-.017-.046L22.425 22a4.107 4.107 0 01-.826-.3l-.196-.1-1.317.74a.293.293 0 01-.324-.035l-.035-.037-1.384-1.727a.274.274 0 01-.014-.32l.032-.038 1.055-1.065a4.245 4.245 0 01-.114-.528 3.702 3.702 0 01-.031-.36l-.005-.18-1.308-.732a.267.267 0 01-.132-.29l.016-.049.855-2.042a.278.278 0 01.274-.175l.05.007 1.472.349c.209-.203.434-.39.681-.551l.19-.116.01-1.473a.27.27 0 01.191-.256l.05-.011 2.24-.315a.278.278 0 01.29.144zm-.763.931l-1.014.14-.004.847a1 1 0 01-.373.772l-.106.074-.164.1c-.18.118-.356.26-.532.432a1 1 0 01-.802.276l-.125-.021-.877-.212-.372.883.742.416a1 1 0 01.499.716l.012.131.009.258.017.168c.016.115.045.243.088.403a1 1 0 01-.176.88l-.078.088-.599.6.598.749.788-.443a1 1 0 01.836-.067l.115.05.173.09c.203.1.41.175.625.228a1 1 0 01.682.578l.04.111.235.81 1.014-.14.006-.846a1 1 0 01.373-.773l.105-.074.165-.1c.18-.117.355-.26.532-.431a1 1 0 01.801-.277l.126.022.874.21.37-.884-.737-.414a1 1 0 01-.5-.716l-.011-.131-.004-.162a2.647 2.647 0 00-.056-.448l-.055-.218a1 1 0 01.176-.88l.078-.089.598-.6-.599-.749-.786.444a1 1 0 01-.835.067l-.115-.05-.173-.09a3.106 3.106 0 00-.626-.228 1 1 0 01-.682-.578l-.04-.111-.236-.81zM23.5 16a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2zm-5.504-6c-.767 0-1.279.613-1.443 1.69.295-.08.598-.135.909-.165l.312-.02.222-.005c.498 0 .981.066 1.443.19-.164-1.077-.676-1.69-1.443-1.69z"></path>
            </svg>
            Notifications settings
        </a></li>


        <li><hr className="dropdown-divider"/></li>
        <li><a className="user-logout dropdown-item" onClick={handleLogout}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path d="M11 .5a.5.5 0 01.09.992L11 1.5H2c-.255 0-.452.151-.492.331L1.5 1.9v16.2c0 .185.168.357.407.393L2 18.5h9a.5.5 0 01.09.992L11 19.5H2c-.77 0-1.42-.544-1.493-1.263L.5 18.1V1.9c0-.74.605-1.327 1.357-1.394L2 .5h9zm3.784 6.089l.07.057 3 3a.498.498 0 01.13.227l.014.084v.086a.498.498 0 01-.087.241l-.057.07-3 3a.5.5 0 01-.765-.638l.057-.07 2.147-2.146H6.5a.5.5 0 01-.09-.992L6.5 9.5h9.793l-2.147-2.146-.057-.07a.5.5 0 01.695-.695z"></path>
            </svg>
            Log out
        </a></li>
      </ul>



    </div>
  </div>
</div>
</div>
    )
}
export default NavBar;