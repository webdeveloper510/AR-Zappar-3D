import React, { useEffect , useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import Pro1 from '../../assets/images/pro-1.jpg'
import Pro from '../../assets/images/pro.jpg'
import axios from "axios";
import { API } from "../../config/api";
/* eslint-disable react/jsx-props-no-spreading */

const MainPage =()=>{
  const [proInfo,setProInfo ] = useState([])
  const val = localStorage.getItem('id');
    const navigate = useNavigate()
    const handleCreate =()=>{
      navigate('/project')
    }
    
    
    useEffect(() => {
      axios.get(API.BASE_URL+'projects/'+val )
      .then(function(response){
        console.log(response)
        setProInfo(response.data)

      }).catch(function(error){
        console.log(error)
      })
    }, [])

// ProTitle: "dsagyer"
// id:2
// imagePro:"image/WoodFlooring061_Flat_jLLquJL.jpg"
// projectIcon:""
// projectTitle:""
// projectUser_id: 4
    return(
<div className="hello">

        <div className="container-fluid">
          <div className="d-flex align-items-center">
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


     <div class="container-fluid project-pg">
         <div class="row">
             <div class="col-md-2 p-0 m-0 bg-light">
                 <div class="d-flex flex-column flex-shrink-0 p-3 ">
                     <ul class="nav nav-pills flex-column mb-auto">
                       <li class="nav-item">
                         <a href="#" class="nav-link active b1-bg-color"><i class="bi bi-grid pe-3"></i>Project</a>
                       </li>
                       <li>
                         <a href="/#/team" class="nav-link link-dark"><i class="bi bi-people-fill pe-3"></i>Team</a>
                       </li>
                     </ul>
                 </div>
             </div>

             <div class="col-md-10 p-0 m-0 ">
                 <div class="row p-5 pb-0">
 
                         <div class="container-fluid d-grid gap-3 align-items-center">
                           <div class="dropdown">
                             <a id="projectStart" onClick={handleCreate} class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none ">
                                Create New Project<i class="bi bi-plus-circle ps-2"></i>
                             </a>
                            
                           </div>
                    
                           <div class="d-flex align-items-center">
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
                                 <a href="#" class="d-block link-dark text-decoration-none">
                                   <i class="bi bi-list-ul pe-1"></i>List
                                 </a>
                               </div>

                           </div>
                         </div>

                 </div>
                 <div class="row p-5">
                     <div class="col-md-3">
                      {proInfo.map((proData, i) => {
                        return(
                          <div class="card project-card-placeholder">
                             <span class="badge text-bg-light">Designer</span>
                             <img src={proData.imagePro} class="card-img-top" alt="..."/>
                             <div class="card-body">
                                 <img src={Pro1} class="rounded-circle" width="50" height="50" alt="..."/>
                               <h5 class="card-title">{proData.ProTitle}</h5>
                               <p class="card-text"><small class="text-muted">Created 31 Oct 22 | Unpublished</small></p>
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