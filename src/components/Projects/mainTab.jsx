import React, { useContext, useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import FirstTab from "./firsttTab";
// import SecondTab from "./secondTab";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {  faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { API } from "../../config/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { contextObject } from "../ContextStore/ContextApi";



let firstTime=false;
const MainTab = () => {

    const [projectTitle,setprojectTitle]=useState('Untitled Project');
    const [projectIcon,setprojectIcon]=useState(null)
    const {id} = useParams();
    const ctx=useContext(contextObject);

    const handleImageChange = (event) => {
        const formdata = new FormData()
            formdata.append('projectIcon' , event.target.files[0] )
        axios.post(API.BASE_URL + 'update-project/'+id+'/', formdata, {
          headers: {
            'accept': 'application/json',
                'content-type': 'multipart/form-data'
          },
        }).then(function(response){
            setprojectIcon(response.data.data.projectIcon)
        }).catch(function(error){
          toast.error("The submited file is not Image File !")
        })
      };

      useEffect(()=>{
        axios.get(API.BASE_URL + 'project-list/'+id+'/').then((res)=>{
            setprojectTitle(res.data.project_details.projectTitle)


        }).catch((e)=>console.log(e))

      },[])
    //   const UpdateMobileTitle=(e)=>{
    //     setprojectTitle(e.target.value)

    //   }
    //   console.log(projectTitle, 'fhdsssssss')
    //   useEffect(() => {
    //     const delay = 500;
      
    //     const timeoutId = setTimeout(() => {
    //         const formData = new FormData();
    //         formData.append('projectTitle',projectTitle)
    //         axios.post(API.BASE_URL+'update-project/'+id+'/', formData,{
    //           headers: {
    //             'accept': 'application/json',
    //                 'content-type': 'multipart/form-data' 
    //             },
    //         }).then(function (response){
    //             setprojectTitle(response.data.projectTitle)
    //         }).catch(function(err){});
    //     },delay);
    //     return()=>{
    //         clearTimeout(timeoutId)
    //     }
    // },[projectTitle]);



    return (
        <>
            <section class="open-designer-tab-section">
                <div class="trigger-tabs">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" class="custom-tabs-section">
                    <Row>
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column custom-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"> 
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 33 33"
                                            >
                                            <g><path fill="#fff" d="M0 0H33V33H0z"></path><g><path d="M4 4H11V5H4z"></path><path d="M14 4H18V5H14z"></path><path d="M22 4H29V5H22z"></path><path d="M4 5H5V6H4z"></path><path d="M10 5H11V6H10z"></path><path d="M12 5H14V6H12z"></path><path d="M16 5H20V6H16z"></path><path d="M22 5H23V6H22z"></path><path d="M28 5H29V6H28z"></path><path d="M4 6H5V7H4z"></path><path d="M6 6H9V7H6z"></path><path d="M10 6H11V7H10z"></path><path d="M13 6H16V7H13z"></path><path d="M18 6H19V7H18z"></path><path d="M20 6H21V7H20z"></path><path d="M22 6H23V7H22z"></path><path d="M24 6H27V7H24z"></path><path d="M28 6H29V7H28z"></path><path d="M4 7H5V8H4z"></path><path d="M6 7H9V8H6z"></path><path d="M10 7H11V8H10z"></path><path d="M12 7H13V8H12z"></path><path d="M17 7H19V8H17z"></path><path d="M22 7H23V8H22z"></path><path d="M24 7H27V8H24z"></path><path d="M28 7H29V8H28z"></path><path d="M4 8H5V9H4z"></path><path d="M6 8H9V9H6z"></path><path d="M10 8H11V9H10z"></path><path d="M13 8H18V9H13z"></path><path d="M20 8H21V9H20z"></path><path d="M22 8H23V9H22z"></path><path d="M24 8H27V9H24z"></path><path d="M28 8H29V9H28z"></path><path d="M4 9H5V10H4z"></path><path d="M10 9H11V10H10z"></path><path d="M12 9H14V10H12z"></path><path d="M16 9H21V10H16z"></path><path d="M22 9H23V10H22z"></path><path d="M28 9H29V10H28z"></path><path d="M4 10H11V11H4z"></path><path d="M12 10H13V11H12z"></path><path d="M14 10H15V11H14z"></path><path d="M16 10H17V11H16z"></path><path d="M18 10H19V11H18z"></path><path d="M20 10H21V11H20z"></path><path d="M22 10H29V11H22z"></path><path d="M13 11H14V12H13z"></path><path d="M16 11H17V12H16z"></path><path d="M19 11H21V12H19z"></path><path d="M4 12H9V13H4z"></path><path d="M10 12H14V13H10z"></path><path d="M15 12H16V13H15z"></path><path d="M18 12H22V13H18z"></path><path d="M23 12H24V13H23z"></path><path d="M25 12H26V13H25z"></path><path d="M27 12H28V13H27z"></path><path d="M4 13H6V14H4z"></path><path d="M7 13H8V14H7z"></path><path d="M9 13H10V14H9z"></path><path d="M17 13H18V14H17z"></path><path d="M20 13H21V14H20z"></path><path d="M23 13H24V14H23z"></path><path d="M27 13H28V14H27z"></path><path d="M4 14H5V15H4z"></path><path d="M7 14H8V15H7z"></path><path d="M9 14H11V15H9z"></path><path d="M12 14H13V15H12z"></path><path d="M14 14H15V15H14z"></path><path d="M16 14H20V15H16z"></path><path d="M21 14H26V15H21z"></path><path d="M27 14H29V15H27z"></path><path d="M4 15H6V16H4z"></path><path d="M11 15H12V16H11z"></path><path d="M15 15H17V16H15z"></path><path d="M18 15H19V16H18z"></path><path d="M21 15H24V16H21z"></path><path d="M28 15H29V16H28z"></path><path d="M5 16H8V17H5z"></path><path d="M10 16H11V17H10z"></path><path d="M13 16H15V17H13z"></path><path d="M17 16H25V17H17z"></path><path d="M26 16H29V17H26z"></path><path d="M4 17H6V18H4z"></path><path d="M7 17H10V18H7z"></path><path d="M11 17H12V18H11z"></path><path d="M15 17H16V18H15z"></path><path d="M17 17H18V18H17z"></path><path d="M20 17H21V18H20z"></path><path d="M23 17H24V18H23z"></path><path d="M25 17H26V18H25z"></path><path d="M27 17H28V18H27z"></path><path d="M4 18H5V19H4z"></path><path d="M10 18H11V19H10z"></path><path d="M13 18H15V19H13z"></path><path d="M16 18H20V19H16z"></path><path d="M22 18H26V19H22z"></path><path d="M27 18H29V19H27z"></path><path d="M4 19H5V20H4z"></path><path d="M6 19H7V20H6z"></path><path d="M13 19H15V20H13z"></path><path d="M16 19H17V20H16z"></path><path d="M20 19H21V20H20z"></path><path d="M23 19H25V20H23z"></path><path d="M28 19H29V20H28z"></path><path d="M4 20H5V21H4z"></path><path d="M6 20H7V21H6z"></path><path d="M9 20H12V21H9z"></path><path d="M17 20H18V21H17z"></path><path d="M20 20H25V21H20z"></path><path d="M26 20H27V21H26z"></path><path d="M12 21H13V22H12z"></path><path d="M14 21H16V22H14z"></path><path d="M18 21H21V22H18z"></path><path d="M24 21H26V22H24z"></path><path d="M4 22H11V23H4z"></path><path d="M12 22H14V23H12z"></path><path d="M16 22H18V23H16z"></path><path d="M20 22H21V23H20z"></path><path d="M22 22H23V23H22z"></path><path d="M24 22H25V23H24z"></path><path d="M26 22H29V23H26z"></path><path d="M4 23H5V24H4z"></path><path d="M10 23H11V24H10z"></path><path d="M14 23H15V24H14z"></path><path d="M19 23H21V24H19z"></path><path d="M24 23H26V24H24z"></path><path d="M27 23H28V24H27z"></path><path d="M4 24H5V25H4z"></path><path d="M6 24H9V25H6z"></path><path d="M10 24H11V25H10z"></path><path d="M12 24H13V25H12z"></path><path d="M14 24H15V25H14z"></path><path d="M16 24H18V25H16z"></path><path d="M19 24H25V25H19z"></path><path d="M26 24H28V25H26z"></path><path d="M4 25H5V26H4z"></path><path d="M6 25H9V26H6z"></path><path d="M10 25H11V26H10z"></path><path d="M12 25H13V26H12z"></path><path d="M15 25H16V26H15z"></path><path d="M18 25H23V26H18z"></path><path d="M24 25H29V26H24z"></path><path d="M4 26H5V27H4z"></path><path d="M6 26H9V27H6z"></path><path d="M10 26H11V27H10z"></path><path d="M12 26H15V27H12z"></path><path d="M19 26H20V27H19z"></path><path d="M21 26H22V27H21z"></path><path d="M25 26H27V27H25z"></path><path d="M28 26H29V27H28z"></path><path d="M4 27H5V28H4z"></path><path d="M10 27H11V28H10z"></path><path d="M12 27H14V28H12z"></path><path d="M15 27H16V28H15z"></path><path d="M20 27H21V28H20z"></path><path d="M23 27H26V28H23z"></path><path d="M28 27H29V28H28z"></path><path d="M4 28H11V29H4z"></path><path d="M12 28H13V29H12z"></path><path d="M14 28H15V29H14z"></path><path d="M17 28H19V29H17z"></path><path d="M22 28H29V29H22z"></path></g>
                                            </g>
                                        </svg>
                                  <p>Untitle Project</p> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="second"> 

                                     <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    viewBox="0 0 250 250"
                                                    >
                                                    <g transform="translate(125 125) scale(3.67647)">
                                                        <defs>
                                                        <clipPath id="bits-clip1">
                                                            <path d="M0-31c-17.12 0-31 13.88-31 31 0 17.12 13.88 31 31 31 17.12 0 31-13.88 31-31 0-17.12-13.88-31-31-31zm0 8c12.703 0 23 10.297 23 23S12.703 23 0 23-23 12.703-23 0s10.297-23 23-23z"></path>
                                                        </clipPath>
                                                        </defs>
                                                        <circle r="33" fill="#fff"></circle>
                                                        <path d="M0-34c-18.778 0-34 15.222-34 34s15.222 34 34 34S34 18.778 34 0 18.778-34 0-34zm0 2c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32z"></path>
                                                        <path d="M0-22c-12.15 0-22 9.85-22 22s9.85 22 22 22 22-9.85 22-22-9.85-22-22-22zm-1.906 3.344L11.688-2.031-.406 8.313l7.781 10.343L-11.344 7.72l8.5-8.938-8.844-6.406 9.782-11.031z"></path>
                                                        <g clipPath="url(#bits-clip1)">
                                                        <path
                                                            d="M0 0l798.421-50.232V50.232zM0 0l796.45 75.287-15.717 99.228zM0 0l734.204 317.718-45.61 89.515zM0 0l294.5 743.821-95.548 31.046zM0 0l174.515 780.733-99.228 15.717zM0 0l-75.287 796.45-99.228-15.717zM0 0l-428.661 675.462-81.278-59.051zM0 0l-529.05 600.089-71.039-71.04zM0 0l-743.821 294.5-31.046-95.548zM0 0l-780.733 174.515-15.717-99.228zM0 0l-734.204-317.718 45.61-89.515zM0 0l-600.089-529.05 71.04-71.039zM0 0l-509.94-616.41 81.279-59.052zM0 0l-407.233-688.594 89.515-45.61zM0 0l-174.515-780.733 99.228-15.717zM0 0l198.952-774.867L294.5-743.82zM0 0l428.661-675.462 81.278 59.051zM0 0l616.41-509.94 59.052 81.279zM0 0l688.594-407.233 45.61 89.515zM0 0l780.733-174.515 15.717 99.228z"
                                                            className="paths"
                                                        ></path>
                                                        </g>
                                                    </g>
                                                    </svg>
                                    <p>Untitle Project</p><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <FirstTab />
                                </Tab.Pane>
                                {/* <Tab.Pane eventKey="second">
                                    <SecondTab />
                                </Tab.Pane> */}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                </div>
                <div class="triggers-content-div">
                    <div class="triggr-right-content">
                        <p>Project icon (Recommended size: 256x256)</p>

                        <div class="overview-cover-image" id="triggrr-img-upload">
                      <div class="pointer-div" 
                      style={{backgroundImage:`url(${projectIcon != null ? projectIcon : ""})` , backgroundSize: "100% 100%" , outline: "none" ,    borderRadius: "10px"}}
                      >  
                                        {/* to update icon and title */}
                          <input type="file" className="base-img" onChange={handleImageChange}/>
                          <div class="upload-file-btn">
                          <button id="svgporj" class="open-designer-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M10,0a6.008,6.008,0,0,1,3.86,1.371,5.808,5.808,0,0,1,2.033,3.5A4.887,4.887,0,0,1,18.96,6.639a4.717,4.717,0,0,1-.534,6.473,4.919,4.919,0,0,1-3.312,1.26H12.67a.448.448,0,0,1-.314-.128.43.43,0,0,1,0-.616.448.448,0,0,1,.314-.128h2.443a4.034,4.034,0,0,0,2.76-1.085A3.87,3.87,0,0,0,18.126,7,4.019,4.019,0,0,0,15.48,5.675a.448.448,0,0,1-.27-.121.433.433,0,0,1-.132-.261,4.947,4.947,0,0,0-.593-1.89,5.036,5.036,0,0,0-1.292-1.518A5.141,5.141,0,0,0,11.4.977a5.19,5.19,0,0,0-3.923.458,5.081,5.081,0,0,0-1.523,1.3A4.978,4.978,0,0,0,5.063,4.5a4.925,4.925,0,0,0-.126,1.974.428.428,0,0,1-.016.184.433.433,0,0,1-.092.161.444.444,0,0,1-.152.109.451.451,0,0,1-.184.037H4.229a3.359,3.359,0,0,0-2.353.957,3.224,3.224,0,0,0,0,4.619,3.358,3.358,0,0,0,2.353.957h3.11a.448.448,0,0,1,.314.128.43.43,0,0,1,0,.616.448.448,0,0,1-.314.128H4.229A4.247,4.247,0,0,1,1.272,13.2a4.075,4.075,0,0,1-.127-5.791,4.24,4.24,0,0,1,2.9-1.293,5.729,5.729,0,0,1,.365-2.324A5.811,5.811,0,0,1,5.685,1.8,5.937,5.937,0,0,1,7.656.463,6.029,6.029,0,0,1,10,0Z" transform="translate(0 0)" fill="#ef5332"></path><path d="M2.232,0a.359.359,0,0,1,.231.091L4.35,1.922a.394.394,0,0,1,.027.521.343.343,0,0,1-.488.023L2.574,1.19V6.957a.355.355,0,0,1-.342.366.355.355,0,0,1-.343-.366V1.19L.575,2.466a.349.349,0,0,1-.488-.023.389.389,0,0,1,.027-.521L2,.092A.289.289,0,0,1,2.232,0Z" transform="translate(7.506 8.678)" fill="#ef5332"></path></svg>
                          </button>
                        
                        </div>
                        </div>
                        </div>
                        <div class="label-wrapper"><label slot="label" for="project-title">Title</label></div>
                        <div class="input-wrapper">
                            {/* onChange={UpdateMobileTitle} */}
                            <input slot="input" type="text" id="project-title" value={projectTitle}  name="title"/><slot-fb name="icon-right"><span><span></span></span></slot-fb></div>
                            {console.log("Yes Changig", projectTitle)}
                        <div id="metadataInfo">
                            <div class="hide" republish="1181055884153543226">
                            <p class="mb12">Would you like to publish a new version with these changes?</p>
                            <div class="flex btw triggr-btn-content">
                                <button type="button" class="btn btn-secondary btn-small" cancel="">Cancel</button>
                                <button type="button" class="btn btn-primary btn-small" publish="">Publish</button>
                            </div>
                            </div>
                            <p class="mb0 fs14">Project icons and titles are metadata used for lite branded splash screen, WebAR favicon and Zappar mobile app</p>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )

}

export default MainTab;