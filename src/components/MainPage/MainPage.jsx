import React, { useContext, useEffect , useState } from "react";
import "../../App.css";
import homsecreen from '../../assets/images/homescreen.png'
import axios from "axios";
import { API } from "../../config/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faList } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import mainbg from '../../assets/images/main-bg.jpg';
import backtop from '../../assets/SVG/back_top.svg';
import DesignersLogo from "../../assets/images/designerslogo.png"
import UniversalAR from "../../assets/images/UniversalAR.jpg"
import StudioImage from "../../assets/images/studio.jpg"
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";
import Button from 'react-bootstrap/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import defaultProjectImage from "../../assets/images/defaultProject.png"
import { contextObject } from "../ContextStore/ContextApi";
import { async } from "q";
import ProjectCard from "./ProjectCard";


const MainPage =()=>{
  document.title = 'Saybaz - Projects';
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
  const token = localStorage.getItem('token');
  const [showcreatelabel, setcreatelabel] = useState(false);
  const ctx=useContext(contextObject);
  const {id} = useParams();
  const [labelName,setlabelName]=useState('');
  const [reRender,setreRender]=useState(true);
  const [seachTerm,setseachTerm]=useState('');
  const [debouncedSearchTerm,setdebouncedSearchTerm]=useState('');


  // seaching logic

  useEffect(()=>{
    const delay=500;
    const timeOutId=setTimeout(()=>{
      setdebouncedSearchTerm(seachTerm)
    },delay)
  },[seachTerm])


  // USE EFFFECTS FUNCTIONS ***************************************************************/


  useEffect(()=>{
    ctx.getLabels()
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
      console.log(response.data,'Main.JSX INSIDE uSEEFFECT')
    }).catch(function(error){
    })
  }, [reRender])

  // CONST ES6 FUNCTIONS ***************************************************************/
/***********creatlabelpopup***************************** */
const handledeleteClose = () => setcreatelabel(false);
const handleshowcreatelabel = () => setcreatelabel(true);
  /********** Start----Model State *************/

    const handleClose = () =>{
      setShow(false);
    } 

  /********** Start----SecondModel State *************/
    const handleSecondShow = () =>{
      if(!ProjectType==''){
        handleClose();
        setSecondShow(true);
      }

    }

  /********** Start----Model Delete State *************/
    const handleDeleteClose = () => {
      localStorage.removeItem('deleteProject')
    setShowDelete(false);
    }

    const handleDeleteShow = (id) => {
    // console.log(id)
    localStorage.setItem("deleteProject", id);
    setShowDelete(true);
    }
    const handleShow = () => setShow(true);
    const handleSecondClose = () => setSecondShow(false);
  
    /********** Start----Model Coverimage State *************/
    const handleCoverClose = () => setShowCover(false);


    const handleProject = (id)=>{
      // console.log(id)
      // e.stopPropagation()
      axios.get(API.BASE_URL+'project-list/'+id+'/')
      .then(function(response){
        // console.log(response)
      navigate('/project/'+id+'/')
      })
      .catch(function(error){
        // console.log(error)
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
            navigate("/project/"+response.data.data.id)
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
      // console.log("COver Image ID -------------->",id)
      localStorage.setItem("coverimage", id);
      setShowCover(true);
      
    }
    const coverimageid = localStorage.getItem("coverimage");

    const handleCoverImageChange=(e) =>{
      coverImage(e.target.files[0]);
      const file=e.target.files[0];
      setimgName(file.name)
      // console.log(file.name,'cover image changed from +cover');
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
        setreRender((prev)=>!prev)
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
      // console.log(editableItem,'editableItemeditableItemeditableItem');

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
            <div className="col-md-11 p-0 m-0 side-main main-page-container side-pic-container" style={{ backgroundImage:`url(${backtop})` }}>
                <div className="container" id="home-page-container">

                  {proInfo?.length>0?(
                          <div className="row p-5 pb-3 side-container">
                            <div className="container-fluid d-md-flex w-100 justify-content-between align-items-center">
                              <div className="dropdown col-md-4">
                                <a id="projectStart" variant="primary" onClick={handleShow} className="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none ">
                                  <h3> Create New Project</h3>
                                    <FontAwesomeIcon icon={faCirclePlus} style={{ color: "rgb(120 120 120)", width: "37px", height: "37px", marginLeft: 8 }} />
                                </a>
                              </div>
                      
                            <div className="d-flex align-items-center col-md-8">
                            <form className="w-100 me-3" role="search" id="search-form">
                                <svg
                                    className={`main-serach ${seachTerm.trim() !== '' ? 'hidden-icon' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    onClick={() => {
                                        if (seachTerm.trim() !== '') {
                                            setseachTerm('');
                                        }
                                    }}
                                >
                                    <path
                                        fill="#344B60"
                                        d="M19 11a8 8 0 015.999 13.293l4.272 4.287a.5.5 0 01-.64.764l-.069-.058L24.292 25A8 8 0 1119 11zm0 1a7 7 0 104.848 12.049.412.412 0 01.085-.117.5.5 0 01.115-.086A6.96 6.96 0 0026 19a7 7 0 00-7-7z"
                                    ></path>
                                </svg>
                                <input
                                    type="search"
                                    className="form-control main-serach-input"
                                    placeholder="Search projects"
                                    aria-label="Search"
                                    value={seachTerm}
                                    onChange={(e) => setseachTerm(e.target.value)}
                                />
                            </form>

                              <div className="flex-shrink-0 dropdown sort-bar">
                                <a href="#" className="main-page-sortbar d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="40"
                                      height="40"
                                      viewBox="0 0 40 40"
                                    >
                                      <path d="M15.5 27a.5.5 0 01.09.992L15.5 28h-4a.5.5 0 01-.09-.992L11.5 27h4zm10-8a.5.5 0 01.492.41l.008.09v6.793l2.146-2.147.07-.057a.5.5 0 01.695.695l-.057.07-3 3a.498.498 0 01-.227.13l-.084.014h-.086a.498.498 0 01-.241-.087l-.07-.057-3-3a.5.5 0 01.638-.765l.07.057L25 26.293V19.5a.5.5 0 01.5-.5zm-5 0a.5.5 0 01.09.992L20.5 20h-9a.5.5 0 01-.09-.992L11.5 19h9zm8-8a.5.5 0 01.09.992L28.5 12h-17a.5.5 0 01-.09-.992L11.5 11h17z"></path>
                                    </svg>Sort  <svg className="down-arrow-img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        fill="#000"
                                        version="1.1"
                                        viewBox="0 0 330 330"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"></path>
                                      </svg>
                                </a>
                                <ul className="dropdown-menu text-small shadow main-page-sort" id="fist-sort-listing">
                                  <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html" 
                                  onClick={()=>{
                                    const sortedProInfoDescending = proInfo.slice().sort((a, b) => {
                                       return b.created_at.localeCompare(a.created_at);
                                     })
                                     console.log(sortedProInfoDescending,'sortedARRAY');
                                     setProInfo(sortedProInfoDescending)
                                    }}
                                  >By date created</a></li>
                                  <li
                                  className="disabled"
                                  disabled 
                                  style={{cursor:'notAllowed'}}
                                  ><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html" 
                                  >By date published</a></li>
                                  <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html" 
                                  onClick={()=>{
                                    const sortedProInfoDescending1 = proInfo.slice().sort((a, b) => {
                                       return a.ProTitle.localeCompare(b.ProTitle);
                                     })
                                     setProInfo(sortedProInfoDescending1)
                                    }}
                                  >By project name</a></li>
                                </ul>
                              </div>

                             

                              <div className="flex-shrink-0 ms-2 filter-bar">
                                  <a href="#" className="main-page-filterbar d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                  >
                                    <path d="M10.5 10l-.084.007a.5.5 0 00-.325.779l6.915 9.88.001 8.834c0 .445.538.667.852.353l3.99-3.995.051-.06a.5.5 0 00.095-.293v-4.82l7.895-9.874A.5.5 0 0029.5 10h-19zm17.961.999l-7.354 9.2-.047.07a.5.5 0 00-.062.242v4.786l-2.994 2.997v-7.783L18 20.435a.5.5 0 00-.084-.21l-6.458-9.226h17.004z"></path>
                                  </svg>Filter  <svg className="down-arrow-img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10"
                                        height="10"
                                        fill="#000"
                                        version="1.1"
                                        viewBox="0 0 330 330"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0021.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"></path>
                                      </svg>
                                </a>
                                <ul className="dropdown-menu text-small shadow main-page-sort" id="sort-fliter-list">
                                <div className="flex btw filter-inner-list"><div className="filter-title">Tool</div>
                                <a href="#" className="btn btn-link">Clear all</a></div>
                                <li className="" title="Universal AR"><div className="field"><label><input type="checkbox" name="uar" value="uar"/>Universal AR</label></div></li>
                                <li className="" title="Studio"><div className="field"><label><input type="checkbox" name="studio" value="studio"/>Studio</label></div></li>
                                <li className="" title="Designer"><div className="field"><label><input type="checkbox" name="designer-2" value="designer-2"/>Designer</label></div></li>
                                <li>
                              <div className="field-serch">
                                <div className="input-wrapper"><input id="search-labels-input" type="search" placeholder="Search labels"/>
                                <svg className="search-label-svg" role="button" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M19,11 C23.418278,11 27,14.581722 27,19 C27,21.0296419 26.2441691,22.8827501 24.9986213,24.2932105 L29.2708011,28.5802351 C29.4657149,28.775845 29.4651506,29.092427 29.2695406,29.2873408 C29.0956652,29.4605974 28.8262068,29.4794023 28.6315796,29.3440591 L28.562435,29.2860803 L24.2922058,24.9995083 C22.8818702,26.2445279 21.0291601,27 19,27 C14.581722,27 11,23.418278 11,19 C11,14.581722 14.581722,11 19,11 Z M19,12 C15.1340068,12 12,15.1340068 12,19 C12,22.8659932 15.1340068,26 19,26 C20.8819703,26 22.5904778,25.2573173 23.8484255,24.0490489 C23.8682789,24.0062003 23.8973303,23.9668665 23.9327917,23.9315312 C23.9676812,23.8967659 24.0064192,23.8682194 24.0476289,23.8458892 C25.2573173,22.5904778 26,20.8819703 26,19 C26,15.1340068 22.8659932,12 19,12 Z" fill="#344B60"></path></svg></div></div>
                              </li>
                              <hr/>
                              {/* <li><hr className="dropdown-divider"/></li> */}
                              <div class="filter-labels">Labels
                              {

                                ctx.allLabels?.map((itm,i)=>(
                                   <li className="" title="Universal AR"><div className="field"><label><input type="checkbox" name="uar" value="uar"/>{itm.project_label}</label></div></li>
                                ))
                              }
                                </div>

                              <li className="create-labels" onClick={handleshowcreatelabel}><FontAwesomeIcon icon={faPlus} /> Create Labels</li>
                              </ul>
                              </div>

                              <div className="flex-shrink-0 ms-2 list-bar">
                                  <a className="d-flex align-items-center link-dark text-decoration-none">
                                   
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                          >
                                            <path d="M12 12a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 011-1h1zm0 1h-1v1h1v-1zm0 6a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 011-1h1zm0 1h-1v1h1v-1zm0 6a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1a1 1 0 011-1h1zm0 1h-1v1h1v-1zm17.423-7a.5.5 0 01.09.992l-.09.008H15.577a.5.5 0 01-.09-.992l.09-.008h13.846zm0 7a.5.5 0 01.09.992l-.09.008H15.577a.5.5 0 01-.09-.992l.09-.008h13.846zm0-14a.5.5 0 01.09.992l-.09.008H15.577a.5.5 0 01-.09-.992l.09-.008h13.846z"></path>
                                    </svg>
                                    List
                                  </a>
                              </div>
                                 {/*start create label popup*/}
                           
                          <Modal id="create-label-popup" show={showcreatelabel} onHide={handledeleteClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create label</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="field mb24"><div className="label-wrapper">
                  <label className="label-name" for="Labelname">Label name</label></div>
                  <div className="input-wrapper">
                  <input slot="input" type="text" id="Labelname" min="0" max="255"/></div></div>
                  </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" className="btn-cancel-popup" onClick={handledeleteClose}>
                  Cancel
                  </Button>
                  <Button variant="primary" className="btn-delete-popup" 
                   onClick={()=>{
                    ctx.createLabel(id,labelName);
                    handledeleteClose()
                  // setcreatelabel(false);
                }}
                  // onClick={handledeleteClose}
                  >
                   Create
                  </Button>
                </Modal.Footer>
            </Modal>

                          {/*end  create  label popup*/}

                            </div>
                          </div>
                        </div>
                    ):
                  <>
                  </>
                  }

                <div className="row col-md-12 pt-5" id="card-project-outer" >
                  {/* filtring by date */}
              
                  {proInfo?.length>0?
                  (debouncedSearchTerm.trim()==='' ? proInfo?.map((proData, i) => {
                      return(
                        <ProjectCard 
                        handleProject={handleProject}
                         proData={proData}
                         ToggleButtonShow={ToggleButtonShow}
                        //  ToggleButton={ToggleButton} 
                        handleCoverimageShow={handleCoverimageShow}
                        EditHandle={EditHandle}
                        handleDeleteShow={handleDeleteShow}
                        imageProfile={imageProfile}

                        />
                      )
                    }
                    
                  
                  )
                  :
                  proInfo?.filter((itm)=>itm.ProTitle.toLowerCase().includes(debouncedSearchTerm.toLocaleLowerCase())).map((proData)=>{
                    return(
                      <ProjectCard 
                      handleProject={handleProject}
                       proData={proData}
                       ToggleButtonShow={ToggleButtonShow}
                      //  ToggleButton={ToggleButton} 
                      handleCoverimageShow={handleCoverimageShow}
                      EditHandle={EditHandle}
                      handleDeleteShow={handleDeleteShow}
                      imageProfile={imageProfile}

                      />
                    )
                  })
                  ):
                  <>
                  <div className="home-screen-outer">
                    <div className="home-screen">
                      <img src={homsecreen} className="home-img" alt="..."/>
                    </div>
                    <div className="home-screen-right">
                      <h3 className="mb16">Welcome to sayehbaz!</h3>
                      <p className="mb16 fs14">We are excited for you to be here!</p>
                      <p className="mb16 fs14">We offer a set of award-winning tools for creators of all abilities to build augmented reality experiences. Start your first project today.</p>
                      <button type="button" className="btn btn-primary btn-medium mb24" id="createProjectBtn" onClick={handleShow}>Create project</button>
                      <p className="fs14">Not sure where to begin? Learn about AR and the different types of experiences with our
                      <button type="button" className="btn btn-link" id="interactiveTourLink">interactive tour.</button></p>
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
                {editableItem[0]?.ProTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="flex btw image-preview">
                {proInfo?.length>0?(
                  editableItem?.map((proData, i) => {
                    // {proData.id === coverimageid}
                    return (
                      <div className="card">
                        <div className="card-project"><div className="tag">proData.projectType</div>
                          <div className="image">
                          <img src={draggedImage || proData.imagePro} className="card-img-top" alt="..."/>
                            <div className="overlay dark">Delete image</div>
                          </div>
                          <div className="text-content">
                              <span className="icon" title="Web Developer">W</span>
                              <h4>
                                {proData.ProTitle}</h4>
                            <div>
                              <span className="status-icon"></span>
                              <span className="status-text">Created {proData.created_at}&nbsp;&nbsp;|&nbsp;&nbsp;{
                              !ctx.isPublish ? 'Unpublished' : 'Published'
                              }</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ):<></>}
                  <div className="upload-cover-img">
                
                    <div className="dz-overlay"></div>
              
                      <div className="upload-outer">
                        <input type="file" title=" " name="projectCover" accept="image/*" required="" onChange={handleCoverImageChange}/>
                          <zpr-dropzone-icon hydrated="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
                            <path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path>
                            <path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </zpr-dropzone-icon>
                          <zpr-dropzone-msg className="help-text" hydrated="">
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
                <Button variant="secondary" className="btn-cancel-cover" onClick={handleCoverClose}>
                Cancel
                </Button>
                <Button variant="primary" className="btn-save-cover" onClick={handleCoverImage}>
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
                  <Button variant="secondary" className="btn-cancel-popup" onClick={handleDeleteClose}>
                  Cancel
                  </Button>
                  <Button variant="primary" className="btn-delete-popup" onClick={handleDelete}>
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
                    <div className="first-div-desable">
                    {/*{`first-div ${ProjectType === "Studio" ? "project-type" : ""}`} >
                       onClick={event => handleSelectProjectType( event , "Studio")} > */}
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
                    <div className="first-div-desable">
                     {/* {`first-div ${ProjectType === "Studio" ? "project-type" : ""}`} onClick={event => handleSelectProjectType( event , "Universal AR")} > */}
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
                      <div className="svg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#000" version="1.1" viewBox="0 0 448 448" xmlSpace="preserve">
                                <g><path d="M64 64H96V96H64z"></path><path d="M352 64H384V96H352z"></path><path d="M288 0v160h160V0H288zm128 128h-96V32h96v96z"></path><path d="M256 64L224 64 224 32 256 32 256 0 192 0 192 96 224 96 224 128 256 128z"></path><path d="M160 160V0H0v160h160zM32 32h96v96H32V32z"></path><path d="M0 192L0 256 32 256 32 224 64 224 64 192z"></path><path d="M224 224L256 224 256 160 224 160 224 128 192 128 192 192 224 192z"></path><path d="M352 192H384V224H352z"></path><path d="M416 192H448V224H416z"></path><path d="M320 256L320 288 352 288 352 320 384 320 384 256 352 256 352 224 320 224 320 192 288 192 288 224 256 224 256 256z"></path><path d="M384 224H416V256H384z"></path><path d="M0 288v160h160V288H0zm128 128H32v-96h96v96z"></path><path d="M256 256L224 256 224 224 192 224 192 192 96 192 96 224 64 224 64 256 128 256 128 224 160 224 160 256 192 256 192 288 224 288 224 320 256 320z"></path><path d="M288 288H320V320H288z"></path><path d="M416 256H448V320H416z"></path><path d="M320 320H352V352H320z"></path><path d="M384 320H416V352H384z"></path><path d="M64 352H96V384H64z"></path><path d="M320 384L320 352 288 352 288 320 256 320 256 352 224 352 224 320 192 320 192 384 224 384 224 416 256 416 256 384z"></path><path d="M352 384L320 384 320 416 352 416 352 448 384 448 384 352 352 352z"></path><path d="M416 352H448V384H416z"></path><path d="M192 416H224V448H192z"></path><path d="M256 416H320V448H256z"></path><path d="M416 416H448V448H416z"></path></g>
                              </svg>
                                  <span className="qr-code">QR code</span>
                      </div>
                    <div className="qr-text">
                      <p> Simple to use and popular across the world. Scanning the QR launches your AR experience in browser with WebAR.</p>
                    </div>
                    </div>
                    </div>
                      {/* <div className={`deep-link-div ${FeaturedTrackerOption === "Deep Link" ? "sel-trigger" : ""}`} onClick={event => handleSelectTrigerType( event , "Deep Link")}>
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
                      </div> */}
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