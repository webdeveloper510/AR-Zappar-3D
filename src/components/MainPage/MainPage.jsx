import React, { useEffect , useState } from "react";
import "../../App.css";
import { useNavigate, useParams ,Link} from "react-router-dom";
import Pro1 from '../../assets/images/pro-1.jpg'
import Pro from '../../assets/images/pro.jpg'
import axios from "axios";
import { API } from "../../config/api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faGripHorizontal, faList, faUserGroup } from '@fortawesome/free-solid-svg-icons';
/* eslint-disable react/jsx-props-no-spreading */
const MainPage =()=>{
  const [proInfo,setProInfo ] = useState([])
  const val = localStorage.getItem('id');
  
  const navigate = useNavigate()
  const handleCreate =()=>{
    navigate('/project')
  }
    
  useEffect(() => {
    axios.get(API.BASE_URL+'projects/'+val+'/' )
    .then(function(response){
      console.log(response)
      setProInfo(response.data)
    }).catch(function(error){
      console.log(error)
    })
  }, [])

  
 

// const  openProject=(value) => {
//   console.log("       " , value.id)
//   axios.get(`${API.BASE_URL}project-list/${value.id}/`)
//   .then(function(response) {
//     console.log(" " , response)
//     navigate('/project')
//   })
// }
    return(
      <div className="hello">
        
        <div className="navbar">
          <div className="container-fluid">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="w-100 text-white">
                <h4>Logo</h4>
              </div>
      
              <div className="dropdown">
                <a href="#" className="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li><a className="dropdown-item" href="#"><i className="bi bi-gear-fill pe-1"></i>User Setting</a></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-collection-play pe-1"></i>Media Library</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right pe-1"></i>Log out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-page-content">
          <div class="row project-pg">
            <div class="col-md-2 p-0 m-0 bg-light project-side">
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

            <div class="col-md-10 p-0 m-0 side-main">
                <div className="container">
                <div class="row p-5 pb-3 side-container">
                  <div class="container-fluid d-md-flex w-100 justify-content-between align-items-center">
                    <div class="dropdown col-md-2">
                      <a id="projectStart" onClick={handleCreate} class="d-flex align-items-center mb-2 mb-lg-0 link-dark text-decoration-none ">
                          Create New Project
                          <FontAwesomeIcon icon={faCirclePlus} style={{ color: "rgb(120 120 120)", width: "20px", height: "20px", marginLeft: 8 }} />
                      </a>
                      
                    </div>
              
                    <div class="d-flex align-items-center col-md-8">
                      <form class="w-100 me-3" role="search">
                        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                      </form>
              
                      <div class="flex-shrink-0 dropdown">
                        <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="bi bi-filter-left pe-1"></i>Sort
                        </a>
                        <ul class="dropdown-menu text-small shadow">
                          <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date created</a></li>
                          <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By date published</a></li>
                          <li><a class="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/project-list.html">By project name</a></li>
                        </ul>
                      </div>

                      <div class="flex-shrink-0 ms-2">
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
                        <div class="card project-card-placeholder col-md-3 mb-4 mx-2 p-0 link-body">
                          {/* <button className="button-project" onClick={() => openProject(proData)} ></button> */}
                          <span class="badge text-bg-light">Designer</span>
                          <img src={proData.imagePro} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                              <img src={Pro1} class="rounded-circle" width="50" height="50" alt="..."/>
                            <h5 class="card-title">{proData.ProTitle}</h5>
                            <p class="card-text"><small class="text-muted">Created {proData.created_at} | Unpublished</small></p>
                            <Link className="link-tag" to={'/target/'+proData.id} />
                          </div>
                      </div>
                      )
                    })}
                      
                  
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    
      )
}

export default MainPage;