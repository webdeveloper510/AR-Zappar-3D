import React, { useEffect , useState } from "react";
import "../../App.css";
import homsecreen from '../../assets/images/homescreen.png'
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
import Button from 'react-bootstrap/Button';
import defaultProjectImage from "../../assets/images/defaultProject.png"

const MainPage =()=>{
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [proInfo,setProInfo ] = useState([])
  const [ ProjectType , selectProjectType ] = useState(null);
  const [FeaturedTrackerOption , selectFeaturedTracker] = useState(null)
  const [open, setOpen] = React.useState(false);
  const [ToggleButton , ButtonShow] = useState(false)
  const [showcover, setShowCover] = useState(false);
  const [imageProfile, proFile] = useState(null);
  const [coverImageUpdated, coverImage] = useState(null);
  const [editableItem,seteditableItem]=useState([]);
  const [draggedImage,setdraggedImage]=useState(null);
  const [imgName,setimgName]=useState(null);
  const val = localStorage.getItem('id');
  const token = localStorage.getItem('token')


  // USE EFFFECTS FUNCTIONS ***************************************************************/


  useEffect(()=>{
    axios.post(API.BASE_URL + 'userprofile/', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(function (response) {
      proFile(response.data.profile_image)
    })
    .catch((error) => {
    });
  },[])

  
  useEffect(() => {
    axios.get(API.BASE_URL+'projects/'+val+'/' )
    .then(function(response){
      setProInfo(response.data)
    }).catch(function(error){
    })
  }, [])

  // CONST ES6 FUNCTIONS ***************************************************************/

  /********** Start----Model State *************/

    const handleClose = () =>{
      setShow(false);
    } 

  /********** Start----SecondModel State *************/
    const handleSecondShow = () =>{
      handleClose();
      setSecondShow(true);
    }

  /********** Start----Model Delete State *************/
    const handleDeleteClose = () => {
      localStorage.removeItem('deleteProject')
    setShowDelete(false);
    }

    const handleDeleteShow = (id) => {
    console.log(id)
    localStorage.setItem("deleteProject", id);
    setShowDelete(true);
    }
    const handleShow = () => setShow(true);
    const handleSecondClose = () => setSecondShow(false);
  
    /********** Start----Model Coverimage State *************/
    const handleCoverClose = () => setShowCover(false);


    const handleProject = (id)=>{
      // e.stopPropagation()
      axios.get(API.BASE_URL+'project-list/'+id+'/')
      .then(function(response){
        console.log(response)
      navigate('/project/'+id+'/')
      })
      .catch(function(error){
        console.log(error)
      })
    }


    const handleBack = () =>{
      setSecondShow(false)
      handleShow(true)

    }

  

    const handleSelectProjectType = (event , type) =>{
      selectProjectType(type);
      event.currentTarget.classList.add("project-type")
    };

    const handleSelectTrigerType = (event , type) =>{
      selectFeaturedTracker(type);
      event.currentTarget.classList.add("sel-trigger");
      const formdata = new FormData();
      formdata.append('projectType',ProjectType)
      formdata.append('triggerType',type)
      formdata.append('ProTitle' , 'Untitled Project')
      formdata.append('projectUser',val)
      fetch(defaultProjectImage)
      .then((response) => response.blob())
      .then((blob) => {
        formdata.append("imagePro", blob, "default.png");

      axios.post(API.BASE_URL+"create-project/", formdata, {
            headers: {
              'accept': 'application/json',
                  'content-type': 'multipart/form-data'
            },
          }).then(function(response) {
            localStorage.setItem('projectId',response.data.id)
            navigate("/project/"+response.data.id)
          }).catch(function(err) {
            toast.error("Not able to create project !")
          })
        })
    };

    const ToggleButtonShow =(e) =>{
      e.stopPropagation()
      ButtonShow(!ToggleButton)
    }


    // Handle Cover Image Change ----------------------------------------------------------------------------------------------->

    const handleCoverimageShow = (id) =>{
      console.log("COver Image ID -------------->",id)
      localStorage.setItem("coverimage", id);
      setShowCover(true);
      
    }
    const coverimageid = localStorage.getItem("coverimage");

    const handleCoverImageChange=(e) =>{
      coverImage(e.target.files[0]);
      const file=e.target.files[0];
      setimgName(file.name)
      console.log(file.name,'cover image changed from +cover');
      const imgUrl=URL.createObjectURL(e.target.files[0]);
      setdraggedImage(imgUrl)


    };
    const handleCoverImage=() =>{
      const formdata = new FormData();
      formdata.append("imagePro",coverImageUpdated)
      axios.post(API.BASE_URL+"update-project/"+coverimageid+"/" ,formdata,{
        headers:{
          'accept': 'application/json',
              'content-type': 'multipart/form-data' 
        }
      }).then(function(res){
        toast.success("Cover Image Updated Successfully !")
        localStorage.removeItem("coverimage");
        setShowCover(false);
    }).catch(function(err){
        toast.error("Something went wrong !")
        localStorage.removeItem("coverimage");
        setShowCover(false);
    })
    }

    const EditHandle=(id) =>{
      setdraggedImage(null);
      setimgName(null)
      const editableItem=proInfo.filter(item=>item.id===id);
      seteditableItem(editableItem)
      console.log(editableItem,'editableItemeditableItemeditableItem');

    }


    // Handle Project Delete ----------------------------------------------------------------------------------------------->

    const handleDelete=()=>{
      const id = localStorage.getItem("deleteProject")
      axios.delete(API.BASE_URL+"project-list/"+id+'/')
      .then(function(response) {
        toast.success("Project Deleted Successfully!")
        localStorage.removeItem("deleteProject")
        setShowDelete(false)
        window.location.reload()
      })
      .catch(function(err){
        toast.error(err)
        localStorage.removeItem("deleteProject")
      })
    }


    return(
      <div className="hello">

        <NavBar/>
        <div className="main-page-content">
          <div className="row project-pg">
            <>
            <SideBar />
            </>
            <div className="col-md-10 p-0 m-0 side-main side-pic-container" style={{ backgroundImage:`url(${mainbg})` }}>
                <div className="container">

                  {proInfo?.length>0?(
                          <div className="row p-5 pb-3 side-container">
                            <div className="container-fluid d-md-flex w-100 justify-content-between align-items-center">
                              <div className="dropdown col-md-4">
                                <a id="projectStart" variant="primary" onClick={handleShow} className="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none ">
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
                    ):
                  <>
                  </>
                  }

                <div className="row col-md-12 pt-5" id="card-project-outer" >
                  {proInfo?.length>0?(
                     proInfo?.map((proData, i) => {
                      return(
                        <div className="card project-card-placeholder col-md-3 mb-4 mx-2 p-0 link-body" onClick={() => {handleProject(proData.id)}} >
                          <div className="card-img-outer">
                            <span className="badge text-bg-light">{proData.projectType}</span>
                            <img src={proData.imagePro} className="card-img-top" alt="..."/>
                            <div class="overlay dark">Open project</div>
                            <div className="dropdown-menu-svg" direction="bottom-left">
                              <button class="btn btn-dots" id="profile-dots" slot="toggle" onClick={ToggleButtonShow}>
                                <svg xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 40 40">
                                <path  fillRule="evenodd"  d="M20 25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
                                </svg>
                              </button>
                              { ToggleButton && ( 
                                <ul slot="body" class="profile-list">
                                  <li class="edit-cover"  onClick={(e)=>{e.stopPropagation();handleCoverimageShow(proData.id);EditHandle(proData.id)} }>Edit cover image</li>
                                  <li class="disabled">Unpublish</li>
                                  <li class="danger"  onClick={(e)=>{e.stopPropagation();handleDeleteShow(proData.id)}}>
                                    Delete
                                  </li>
                                </ul>
                              )}
                            </div>
                          </div>
                          <div className="card-body ">
                              <img src={imageProfile} className="rounded-circle" width="36" height="36" alt="..."/>
                            <h5 className="card-title">{proData.ProTitle}</h5>
                            <p className="card-text"><small className="text-muted">Created {proData.created_at} | Unpublished</small></p>
                          </div>  
                        </div>
                      )
                    })
                  ):
                  <>
                  <div class="home-screen-outer">
                    <div class="home-screen">
                      <img src={homsecreen} className="home-img" alt="..."/>
                    </div>
                    <div class="home-screen-right">
                      <h3 class="mb16">Welcome to sayehbaz!</h3>
                      <p class="mb16 fs14">We are excited for you to be here!</p>
                      <p class="mb16 fs14">We offer a set of award-winning tools for creators of all abilities to build augmented reality experiences. Start your first project today.</p>
                      <button type="button" class="btn btn-primary btn-medium mb24" id="createProjectBtn" onClick={handleShow}>Create project</button>
                      <p class="fs14">Not sure where to begin? Learn about AR and the different types of experiences with our
                      <button type="button" class="btn btn-link" id="interactiveTourLink">interactive tour.</button></p>
                    </div>
                  </div>
                  </>
                 }
                  </div>
                </div>
            </div>
          </div>
        </div>
            
            <Modal id="editcover-image-popup" show={showcover} onHide={handleCoverClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit cover image for project<br></br>
                “Untitled project”</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div class="flex btw image-preview">
                {proInfo?.length>0?(
                  editableItem?.map((proData, i) => {
                    // {proData.id === coverimageid}
                    return (
                      <div class="card">
                        <div class="card-project"><div class="tag">proData.projectType</div>
                          <div class="image">
                          <img src={draggedImage || proData.imagePro} className="card-img-top" alt="..."/>
                            <div class="overlay dark">Delete image</div>
                          </div>
                          <div class="text-content">
                              <span class="icon" title="Web Developer">W</span>
                              <h4>{proData.ProTitle}</h4>
                            <div>
                              <span class="status-icon"></span>
                              <span class="status-text">Created {proData.created_at}&nbsp;&nbsp;|&nbsp;&nbsp;Unpublished</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ):<></>}
                  <div class="upload-cover-img">
                
                    <div class="dz-overlay"></div>
              
                      <div class="upload-outer">
                        <input type="file" title=" " name="projectCover" accept="image/*" required="" onChange={handleCoverImageChange}/>
                          <zpr-dropzone-icon hydrated="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
                            <path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path>
                            <path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </zpr-dropzone-icon>
                          <zpr-dropzone-msg class="help-text" hydrated="">
                            {
                              !draggedImage && <span>Drag your cover image here or click to upload</span>
                            }
                            {
                              draggedImage && <span>{imgName}</span>
                            }
                           
                          </zpr-dropzone-msg>
                      </div>
                  </div>
              </div>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" class="btn-cancel-cover" onClick={handleCoverClose}>
                Cancel
                </Button>
                <Button variant="primary" class="btn-save-cover" onClick={handleCoverImage}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal id="delete-project-popup" show={showDelete} onHide={handleDeleteClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure you want to delete "Untitled project"?</Modal.Title>
                </Modal.Header>
                <Modal.Body>All experience content and analytics data associated with this project will be lost.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" class="btn-cancel-popup" onClick={handleDeleteClose}>
                  Cancel
                  </Button>
                  <Button variant="primary" class="btn-delete-popup" onClick={handleDelete}>
                    Delete
                  </Button>
                </Modal.Footer>
            </Modal>
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
                    <div className={`first-div ${ProjectType === "Studio" ? "project-type" : ""}`} onClick={event => handleSelectProjectType( event , "Studio")} >
                        <div className="inner-img">
                          <div className="image-outer">
                        <img src={StudioImage}></img></div>
                        <span className="designer-text">Studio</span>
                        <p> Create 2D and 3D experience with our powerful AR-first engine.</p>
                        </div>
                    </div>
                    <div className={`first-div ${ProjectType === "Studio" ? "project-type" : ""}`} onClick={event => handleSelectProjectType( event , "Designer")} >
                    <div className="inner-img">
                    <div className="image-outer">
                        <img src={DesignersLogo}></img>
                        </div>
                        <span className="designer-text">Designer</span>
                        <p> Create world &amp; image tracked 3D projects with our drag &amp; drop editor.</p>
                        </div>
                    </div>
                    <div className={`first-div ${ProjectType === "Studio" ? "project-type" : ""}`} onClick={event => handleSelectProjectType( event , "Universal AR")} >
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
          <Modal show={secondShow} onHide={handleSecondClose} id="second-modal-popup">
            <Modal.Header closeButton>
            <div className="flex">
              <button type="button" className="btn btn-ghost trigger-btn" data-back="trigger">
                  <div className="trigger-btn-iner" onClick={handleBack}>
                      <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
              </button>
              <div className="p4">
                <h3 className="trigger-select">Select a Trigger</h3>
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
                    <div className={`qr-div ${FeaturedTrackerOption === "QR Code" ? "sel-trigger" : ""}`} onClick={event => handleSelectTrigerType( event , "QR Code")}>
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
                      <div className={`deep-link-div ${FeaturedTrackerOption === "Deep Link" ? "sel-trigger" : ""}`} onClick={event => handleSelectTrigerType( event , "Deep Link")}>
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
      </div>
      )
}

export default MainPage;




// URL.createObjectURL