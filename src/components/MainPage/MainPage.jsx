import React, { useEffect , useState } from "react";
import "../../App.css";
import Pro1 from '../../assets/images/pro-1.jpg'
import axios from "axios";
import { API } from "../../config/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faGripHorizontal, faList, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
 
import logoImage from '../../assets/images/sayehbazf.png';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  
import DesignersLogo from "../../assets/images/designerslogo.png"
import UniversalAR from "../../assets/images/UniversalAR.jpg"
import StudioImage from "../../assets/images/studio.jpg"
   

const MainPage =()=>{
  const navigate = useNavigate()
  /********** Start----Model State *************/
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
  } 
  const handleShow = () => setShow(true);

  /********** End----Model State *************/

    /********** Start----SecondModel State *************/
    const [secondShow, setSecondShow] = useState(false);

    const handleSecondClose = () => setSecondShow(false);
    const handleSecondShow = () =>{
      handleClose();
      setSecondShow(true);
    }
  
    /********** End----Model State *************/

  const [proInfo,setProInfo ] = useState([])
  const val = localStorage.getItem('id');
  


  useEffect(() => {
    axios.get(API.BASE_URL+'projects/'+val+'/' )
    .then(function(response){
      console.log(response)
      setProInfo(response.data)
    }).catch(function(error){
      console.log(error)
    })
  }, [])

  const handleLogout = ()=>{  
    localStorage.clear()
    toast.success('Log Out Successfully !');
    navigate('/');
  }
  const handleProject = (id)=>{
    axios.get(API.BASE_URL+'project-list/'+id+'/')
    .then(function(response){
      console.log(response)
    navigate('/project/'+id+'/')
    })
    .catch(function(error){
      console.log(error)
    })
  }
  const [ ProjectType , selectProjectType ] = useState(false);
  const [FeaturedTrackerOption , selectFeaturedTracker] = useState(false)


  const handleCreate =()=>{
    selectProjectType(true)
  }
    
  const selectFeatureOption = (e) => {
    console.log(e.target);
    e.target.classList.add("selected");
  
    // Add a CSS rule to activate the hover effect
    const style = document.createElement("style");
    style.innerHTML = `
      .selected:hover:active {
        background-color: rgb(204, 209, 209);
      }
    `;
    document.head.appendChild(style);
  };
  const  handleOpenFeatures = ()=>{
    selectFeaturedTracker(true)
  };
  
    return(
      <div className="hello">
        
        <div className="navbar main-page-nav">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="w-100 text-white">          
                <h2 class="main-op-logo"><img src={logoImage} /></h2>
              </div>
             
              <div className="dropdown custom-drop-down">
                <a href="#" className="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li><a className="dropdown-item" href="#"> 
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
        <div className="main-page-content">
          <div class="row project-pg">
            <div class="col-md-2 p-0 m-0 bg-light project-side main-page-left-bar">
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

            <div class="col-md-10 p-0 m-0 side-main side-pic-container">
                <div className="container">
                <div class="row p-5 pb-3 side-container">
                  <div class="container-fluid d-md-flex w-100 justify-content-between align-items-center">
                    <div class="dropdown col-md-4">
                      {/* <a id="projectStart" onClick={handleCreate} class="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none ">
                          Create New Project
                          <FontAwesomeIcon icon={faCirclePlus} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px", marginLeft: 8 }} />
                      </a> */}
                      <a id="projectStart"
                     variant="primary" 
                     onClick={handleShow}
                      class="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none 
                      ">
                      Create New Project
                      <FontAwesomeIcon icon={faCirclePlus} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px", marginLeft: 8 }} />
                    </a>
                    </div>
              
                    <div class="d-flex align-items-center col-md-8">
                      <form class="w-100 me-3" role="search" id="search-form">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                      </form>
              
                      <div class="flex-shrink-0 dropdown sort-bar">
                        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="bi bi-filter-left pe-1"></i>Sort
                        </a>
                        <ul class="dropdown-menu text-small shadow">
                          <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date created</a></li>
                          <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date published</a></li>
                          <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By project name</a></li>
                        </ul>
                      </div>

                      <div class="flex-shrink-0 ms-2 list-bar">
                          <a href="#" class="d-flex align-items-center link-dark text-decoration-none">
                          List<FontAwesomeIcon icon={faList} style={{ color: "rgb(113 123 131)", width: "15px", height: "15px", marginLeft: 8 }} />
                          </a>
                        </div>

                    </div>
                  </div>
                </div>
                <div class="row p-5">
                  
                    {proInfo?.map((proData, i) => {
                      return(
                        <div class="card project-card-placeholder col-md-3 mb-4 mx-2 p-0 link-body" onClick={() => {handleProject(proData.id)}}>
                          {/* <button className="button-project" onClick={() => openProject(proData)} ></button> */}
                          <div class="card-img-outer">
                          <span class="badge text-bg-light">Designer</span>
                          <img src={proData.imagePro} class="card-img-top" alt="..."/>
                          </div>
                          <div class="card-body ">
                              <img src={Pro1} class="rounded-circle" width="50" height="50" alt="..."/>
                            <h5 class="card-title">{proData.ProTitle}</h5>
                            <p class="card-text"><small class="text-muted">Created {proData.created_at} | Unpublished</small></p>
                          </div>  
                      </div>
                      )
                    })}
                      
                  
                </div>
                </div>
            </div>
          </div>
        </div>


 
          {/* Start---model data */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="slectTrigger" id="first-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select a project type</Modal.Title>
         </Modal.Header>
        <Modal.Body  onClick={handleSecondShow}>
		    <div className="step-content show">
            <div className="p4">
               
                {/* <p className="fs16 mb16"><b>Last used</b></p> */}
                
                <div className="card card-horizontal studio-card" data-step="triggers" data-tool="studio">
                    <div className="image top-popup-img">
                        <img src={StudioImage} alt="tool" />
                        <div className="overlay dark">
                            Select tool
                        </div>
                    </div>
                    <div className="text-content">
                        <div className="fs28 mt20 mb20 fw300 studio-text">Studio</div>
                        <p className="fs14">Create 2D and 3D experience with our powerful AR-first engine.</p>
                        <div className="mta mla">
                          <button type="button" className="btn btn-primary btn-medium">Select &amp; continue</button></div>
                    </div>
                </div>
                <p className="fs16 mb16 mt32"><b class="create-ar">More ways to create AR</b></p>
                <table plain="" className="plain first-popup-table" hydrated="" onClick={handleOpenFeatures}>
                    
                    
                    <table-tr data-step="triggers" data-tool="designer-2" className="" hydrated="">
                      
                        <table-td-img status="Ready" url={DesignersLogo} label="Designer" preview="Select tool" className="" hydrated="">
                            <div className="imagePreview" data-title="Select tool" style={{ backgroundImage: `url(${DesignersLogo})`}}></div>
                            <div className="imageAvatar"><div className="iconImage" style={{backgroundImage: `url(${DesignersLogo})`}}></div>
                        <span class="designer-text">Designer</span></div>
                        </table-td-img>
                        <table-td align-left="" word-break="" className="f2 word-break" hydrated="">Create world &amp; image tracked 3D projects with our drag &amp; drop editor.</table-td>
                    </table-tr>
                    <table-tr data-step="sdk" data-tool="uar" className="" hydrated="">
                        <table-td-img status="Ready" url={UniversalAR} label="Universal AR" preview="Select tool" className="" hydrated="">
                            <div className="imagePreview" data-title="Select tool" style={{backgroundImage: `url(${UniversalAR})`}}></div>
                            <div className="imageAvatar"><div className="iconImage" style={{backgroundImage: `url(${UniversalAR})`}}></div>
                        <span class="designer-text">Universal AR</span></div>
                        </table-td-img>
                        <table-td align-left="" word-break="" className="f2 word-break" hydrated="">Power up your frameworks and engines with our AR SDKs.</table-td>
                    </table-tr>
                    
                    
                </table>
                
            </div>
        </div>
          
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}

      </Modal>
      {/* End---model data */}


       {/* Start-----SecondModel  */}
       <Modal show={secondShow} onHide={handleSecondClose} id="second-modal-popup">
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>

        <div className="step-content show">
                <div className="p4">
                  <div className="flex acenter">
                    <button type="button" className="btn btn-ghost" data-back="trigger">
                        <div className="mt8">
                            <svg className="" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                              <defs>
                                <path id="arrow-a" d="M3.9361615,3.49235871 C4.18720002,3.49235871 4.39070695,3.69227377 4.39070695,3.94532909 L4.39061605,15.4093587 L15.8090728,15.4096487 C16.0540045,15.4096487 16.2577138,15.5909046 16.2999586,15.8191991 L16.303616,15.8643587 L16.30004,15.910991 C16.2582017,16.1428891 16.0562004,16.3187396 15.8090728,16.3187396 L4.07964842,16.3187396 C3.94112145,16.3187396 3.81578048,16.2607606 3.72537872,16.1690842 C3.58088272,16.0942144 3.48161605,15.9433981 3.48161605,15.7666611 L3.48161605,3.94532909 C3.48161605,3.72295697 3.64821257,3.53801054 3.85639002,3.49965667 L3.9361615,3.49235871 Z" />
                              </defs>
                              <use fill="#344B60" fillRule="evenodd" transform="rotate(45 9.249 9.921)" xlinkHref="#arrow-a" />
                            </svg>
                        </div>
                  </button>
                    <h3 className="ml12 mb0 trigger-select">Select a trigger</h3>
                  </div>
                  <p className="mb16 mt16 ml32 fs14 mw509">A trigger is an entry point that will allow end users to launch your AR experience.
                      Projects may have multiple triggers for the same experience.
                      <a className="fs14" href="https://docs.zap.works/general/project-triggers/" target="_blank">Learn more</a>.</p>
                  <p className="fs16 mb16 mt32"><b class="triggers-text">Triggers</b></p>

              <div className="table-container popup-table-container" onClick={selectFeatureOption} >
                    <table plain="" className="plain" hydrated="">
                      <table-tr data-trigger="3" className="" hydrated="" >
                          <table-td align-left="" className="" hydrated="">
                              <div className="flex acenter">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                    <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                  </svg>
                                      <span className="ml16 btn btn-link"><b>QR code</b></span>
                                  </div>
                              </table-td>
                              <table-td align-left="" word-break="" className="f2 word-break" hydrated="">Simple to use and popular across the world. Scanning the QR launches your AR experience in browser with WebAR.
                              </table-td>
                          </table-tr>

                          <table-tr data-trigger="1" className="" hydrated="">
                              <table-td align-left="" className="" hydrated="">
                                  <div className="flex acenter">
                                  <svg fill="#3276c3" width="40px" height="40px" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                          <g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                    </svg>
                                      <span className="ml16 btn btn-link"><b>Deep link</b></span>
                                  </div>
                              </table-td>

                              <table-td align-left="" word-break="" className="f2 word-break" hydrated="">
                                  Deep links allows users to launch an experience without first having to scan a zapcode. Useful for non-imaged tracked experiences launched from an app or mobile web.
                              </table-td>
                          </table-tr>
                      
                  
                  </table>
              </div>

          </div>
      </div>
        </Modal.Body>    
      </Modal>

      {/* End---- SecondModel  */}


   
        {FeaturedTrackerOption && (
          <>
            <div className="step-content show">
              <div className="p40">
                <div className="flex acenter">
                  <button type="button" className="btn btn-ghost" data-back="trigger">
                      <div className="mt8">
                          <svg className="" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                              <path id="arrow-a" d="M3.9361615,3.49235871 C4.18720002,3.49235871 4.39070695,3.69227377 4.39070695,3.94532909 L4.39061605,15.4093587 L15.8090728,15.4096487 C16.0540045,15.4096487 16.2577138,15.5909046 16.2999586,15.8191991 L16.303616,15.8643587 L16.30004,15.910991 C16.2582017,16.1428891 16.0562004,16.3187396 15.8090728,16.3187396 L4.07964842,16.3187396 C3.94112145,16.3187396 3.81578048,16.2607606 3.72537872,16.1690842 C3.58088272,16.0942144 3.48161605,15.9433981 3.48161605,15.7666611 L3.48161605,3.94532909 C3.48161605,3.72295697 3.64821257,3.53801054 3.85639002,3.49965667 L3.9361615,3.49235871 Z" />
                            </defs>
                            <use fill="#344B60" fillRule="evenodd" transform="rotate(45 9.249 9.921)" xlinkHref="#arrow-a" />
                          </svg>
                      </div>
                </button>
                  <h3 className="ml12 mb0">Select a trigger</h3>
                </div>
                <p className="mb16 mt16 ml32 fs14 mw509">A trigger is an entry point that will allow end users to launch your AR experience.
                    Projects may have multiple triggers for the same experience.
                    <a className="fs14" href="https://docs.zap.works/general/project-triggers/" target="_blank">Learn more</a>.</p>
                <p className="fs16 mb16 mt32"><b>Triggers</b></p>

            <div className="table-container" onClick={selectFeatureOption} >
                  <table plain="" className="plain" hydrated="">
                    <table-tr data-trigger="3" className="" hydrated="" >
                        <table-td align-left="" className="" hydrated="">
                            <div className="flex acenter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                  <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                </svg>
                                    <span className="ml16 btn btn-link"><b>QR code</b></span>
                                </div>
                            </table-td>
                            <table-td align-left="" word-break="" className="f2 word-break" hydrated="">Simple to use and popular across the world. Scanning the QR launches your AR experience in browser with WebAR.
                            </table-td>
                        </table-tr>

                        <table-tr data-trigger="1" className="" hydrated="">
                            <table-td align-left="" className="" hydrated="">
                                <div className="flex acenter">
                                <svg fill="#3276c3" width="40px" height="40px" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                        <g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                  </svg>
                                    <span className="ml16 btn btn-link"><b>Deep link</b></span>
                                </div>
                            </table-td>

                            <table-td align-left="" word-break="" className="f2 word-break" hydrated="">
                                Deep links allows users to launch an experience without first having to scan a zapcode. Useful for non-imaged tracked experiences launched from an app or mobile web.
                            </table-td>
                        </table-tr>
                    
                 
                </table>
            </div>

        </div>
    </div>
          </>
         )} 
      </div>

    
      )
}

export default MainPage;