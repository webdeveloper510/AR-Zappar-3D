import React, { useEffect , useState } from "react";
import "../../App.css";
import Pro1 from '../../assets/images/pro-1.jpg'
import axios from "axios";
import { API } from "../../config/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faList } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import mainbg from '../../assets/images/main-bg.jpg';
import DesignersLogo from "../../assets/images/designerslogo.png"
import UniversalAR from "../../assets/images/UniversalAR.jpg"
import StudioImage from "../../assets/images/studio.jpg"
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";
import { Dropdown } from "bootstrap";

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
  const [ ProjectType , selectProjectType ] = useState(null);
  const [FeaturedTrackerOption , selectFeaturedTracker] = useState(null)



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

  const handleBack = () =>{
    // console.log('here')
    setSecondShow(false)
    handleShow(true)

  }

  const handleSelectProjectType = (event , type) =>{
    selectProjectType(type);
  };
  console.log(ProjectType)
  localStorage.setItem('selectedProjectType', ProjectType)

  const handleSelectTrigerType = (event , type) =>{
    selectFeaturedTracker(type);
    // if (localStorage.getItem('selectedTrigerType')!==null || localStorage.getItem('selectedTrigerType')!==""){
      setTimeout(function() {navigate("/project/")} , 100)      
    // }
  };
  console.log(FeaturedTrackerOption)
  localStorage.setItem('selectedTriggerType', FeaturedTrackerOption)
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
    console.log('Open')
  };

  const [onHoverSelect , OnHoverShow] = useState(false)
  const handleMouseOver = ()=>{
    OnHoverShow(true)
  }
  const handleMouseOut =()=>{
    OnHoverShow(false)
  }
    return(
      <div className="hello">
        
     <NavBar/>
        <div className="main-page-content">
          <div className="row project-pg">
              <SideBar />

            <div className="col-md-10 p-0 m-0 side-main side-pic-container" style={{ backgroundImage:`url(${mainbg})` }}>
                <div className="container">
                <div className="row p-5 pb-3 side-container">
                  <div className="container-fluid d-md-flex w-100 justify-content-between align-items-center">
                    <div className="dropdown col-md-4">
                      <a id="projectStart"
                     variant="primary" 
                     onClick={handleShow}
                      className="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none 
                      ">
                      Create New Project
                      <FontAwesomeIcon icon={faCirclePlus} style={{ color: "rgb(120 120 120)", width: "37px", height: "37px", marginLeft: 8 }} />
                    </a>
                    </div>
              
                    <div className="d-flex align-items-center col-md-8">
                      <form className="w-100 me-3" role="search" id="search-form">
                     
                        <input type="search" className="form-control" placeholder="Search projects" aria-label="Search"/>
                      </form>
              
                      <div className="flex-shrink-0 dropdown sort-bar">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-filter-left pe-1"></i>Sort
                        </a>
                        <ul className="dropdown-menu text-small shadow">
                          <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date created</a></li>
                          <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date published</a></li>
                          <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By project name</a></li>
                        </ul>
                      </div>

                      <div className="flex-shrink-0 ms-2 list-bar">
                          <a href="#" className="d-flex align-items-center link-dark text-decoration-none">
                          List<FontAwesomeIcon icon={faList} style={{ color: "rgb(113 123 131)", width: "15px", height: "15px", marginLeft: 8 }} />
                          </a>
                        </div>

                    </div>
                  </div>
                </div>
                <div className="row col-md-12 p-5" id="card-project-outer" >
                  {proInfo?.length>0?(
                     proInfo?.map((proData, i) => {
                      return(
                        <div className="card project-card-placeholder col-md-3 mb-4 mx-2 p-0 link-body" onClick={() => {handleProject(proData.id)}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        
                      {/* { onHoverSelect && ( 
                        <div className="dropdown-menu-svg" direction="bottom-left">
                          <button class="btn btn-dots" slot="toggle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                          >
                            <path
                              fillRule="evenodd"
                              d="M20 25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                            ></path>
                          </svg>
                           </button>
                           <ul slot="body" class="">
                            <li>Edit cover image</li>
                            <li class="disabled">Unpublish</li>
                            <li class="danger">Delete</li>
                            </ul>
                          </div>
                        )}     */}
                          <div className="card-img-outer">
                          <span className="badge text-bg-light">{proData.projectType}</span>
                         
                          <img src={proData.imagePro} className="card-img-top" alt="..."/>
                          <div class="overlay dark">Open project</div>
                          </div>
                          <div className="card-body ">
                              <img src={Pro1} className="rounded-circle" width="36" height="36" alt="..."/>
                            <h5 className="card-title">{proData.ProTitle}</h5>
                            <p className="card-text"><small className="text-muted">Created {proData.created_at} | Unpublished</small></p>
                          </div>  
                      </div>
                      )
                    })
                  ):<h3> To Start Create a New Project </h3>}
                                    
                  
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
          <Modal.Title>Select a Project Type</Modal.Title>
         </Modal.Header>
        <Modal.Body  onClick={handleSecondShow}>
		    <div className="step-content show">
            <div className="p4">
               
             
              
              <div className="first-popup-design"> 
                <div className="first-div" onClick={event => handleSelectProjectType( event , "Studio")}>
                    <div className="inner-img">
                      <div className="image-outer">
                     <img src={StudioImage}></img></div>
                     <span className="designer-text">Studio</span>
                     <p> Create 2D and 3D experience with our powerful AR-first engine.</p>
                    </div>
                </div>
                <div className="first-div" onClick={event => handleSelectProjectType( event , "Designer")}>
                <div className="inner-img">
                <div className="image-outer">
                     <img src={DesignersLogo}></img>
                     </div>
                     <span className="designer-text">Designer</span>
                     <p> Create world &amp; image tracked 3D projects with our drag &amp; drop editor.</p>
                    </div>
                </div>
                <div className="first-div" onClick={event => handleSelectProjectType( event , "Universal AR")}>
                <div className="inner-img">
                <div className="image-outer">
                     <img src={UniversalAR}></img>
                     </div>
                     <span className="designer-text">Universal AR</span>
                     <p> Power up your frameworks and engines with our AR SDKs.</p>
                    </div>
                </div>
              </div>
              
            </div>
        </div>
          
        </Modal.Body>
      </Modal>
      {/* End---model data */}


       {/* Start-----SecondModel  */}
       <Modal show={secondShow} onHide={handleSecondClose} id="second-modal-popup">
        <Modal.Header closeButton>
        <div className="flex">
                    <button type="button" className="btn btn-ghost trigger-btn" data-back="trigger">
                        <div className="trigger-btn-iner" onClick={handleBack}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                  </button>

                        {/* <h3 className="trigger-select">Back to Project Type</h3> */}
                <div className="p4">
                <h3 className="trigger-select">Select a Trigger</h3>
                {/* <p className="fs16 mb0 trigger-heading"><b className="triggers-text">Select a Trigger</b></p> */}
                <p className="trigger-paragraph">A trigger is an entry point that will allow end users to launch your AR experience.
                      Projects may have multiple triggers for the same experience.
                      <a className="fs14" href="https://docs.zap.works/general/project-triggers/" target="_blank">Learn more</a>.</p>

                    </div>
                   
                  </div>
        </Modal.Header>
        <Modal.Body>

        <div className="step-content show" >
                <div className="p4-2">
                
                    <span className="triggers">Triggers</span>
                     
                     <div className="trigger-qr-div">

                      <div className="qr-outer">
                        <div className="qr-div" onClick={event => handleSelectTrigerType( event , "QR Code")}>
                        <div className="qr-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3276c3" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                    <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                                  </svg>
                                      <span className="qr-code">QR code</span>
                        </div>
                        <div className="qr-text">
                         <p> Simple to use and popular across the world. Scanning the QR launches your AR experience in browser with WebAR.</p>
                        </div>
                        </div>
                        <div className="deep-link-div" onClick={event => handleSelectTrigerType( event , "Deep Link")}>
                        <div className="qr-img">
                        <svg fill="#3276c3" width="50" height="50" viewBox="-0.96 -0.96 33.92 33.92" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)">
                                          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.768"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                          <g id="SVGRepo_iconCarrier"> <title>link</title> <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z"/> </g>
                                    </svg>
                                      <span className="qr-code">Deep link</span>
                        </div>
                        <div className="qr-text">
                         <p>  Deep links allows users to launch an experience without first having to scan a zapcode.</p>
                        </div>
                        </div>
                      </div>
                     </div>

          </div>
      </div>
        </Modal.Body>    
      </Modal>

      {/* End---- SecondModel  */}
      </div>

    
      )
}

export default MainPage;