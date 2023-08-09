import React, { useState } from 'react'

const ProjectCard = ({
    handleProject,
 proData,
//  ToggleButtonShow,
//  ToggleButton,
handleCoverimageShow,
EditHandle,
handleDeleteShow,
imageProfile,
}) => {

    const [ToggleButton,setToggleButton]=useState(false)

  return (
    <div className="card project-card-placeholder col-md-3 mb-4 mx-2 p-0 link-body" onClick={() => {handleProject(proData.id)}} >
    <div className="card-img-outer">
      <span className="badge text-bg-light">{proData.projectType}</span>
      <img src={proData.imagePro} className="card-img-top" alt="..."/>
      <div className="overlay dark">Open project</div>
      <div className="dropdown-menu-svg" direction="bottom-left">
        <button className="btn btn-dots" id="profile-dots" slot="toggle" onClick={(e)=>{
            e.stopPropagation()
            setToggleButton(p=>!p)}}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 40 40">
          <path  fillRule="evenodd"  d="M20 25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-6.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
          </svg>
        </button>
        { ToggleButton && ( 
          <ul slot="body" className="profile-list">
            <li className="edit-cover"  onClick={(e)=>{e.stopPropagation();handleCoverimageShow(proData.id);EditHandle(proData.id);
            setToggleButton(false)
            } }>Edit cover image</li>
            <li className="disabled">Unpublish</li>
            <li className="danger"  onClick={(e)=>{e.stopPropagation();handleDeleteShow(proData.id);
                setToggleButton(false)}}>
              Delete
            </li>
          </ul>
        )}
      </div>
    </div>
    <div className="card-body ">
        <img src={imageProfile} className="rounded-circle" width="36" height="36" alt="..."/>
      <h5 className="card-title">{proData.ProTitle}</h5>
      <p className="card-text"><small className="text-muted">Created {proData.created_at} | 
   {
    proData.publish_key ? 'Published' : 'Unpublished'
   }
      {/* Unpublished */}
      </small></p>
    </div>  
  </div>
  )
}

export default ProjectCard