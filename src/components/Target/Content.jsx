
import { useDispatch, useSelector } from 'react-redux';
import { sideBarContentAction } from '../store/contentReducer';



import React, { useState, useRef, useEffect, useContext } from "react";
import { API } from "../../../src/config/api";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import "./target.css";
import { contextObject } from "../ContextStore/ContextApi";




const Content = () => {

    const ctx = useContext(contextObject);
    const dispatch=useDispatch();
    const [valueopacityborder, setborderopacityvalue] = useState(0);
    const [valueborder, setbordervalue] = useState(0);
    

    const isContent=useSelector((state)=>state.sideBarContentReducer.isContent)

    const targetImage=useSelector((state)=>state.sideBarContentReducer.targetImage)

    const widthImgVdo=useSelector((state)=>state.sideBarContentReducer.widthImgVdo)

    const heightImgVdo=useSelector((state)=>state.sideBarContentReducer.heightImgVdo)

    const depthImgVdo=useSelector((state)=>state.sideBarContentReducer.depthImgVdo)

    const dposition_x=useSelector((state)=>state.sideBarContentReducer.dposition_x)

    const dposition_y=useSelector((state)=>state.sideBarContentReducer.dposition_y)

    const dposition_d=useSelector((state)=>state.sideBarContentReducer.dposition_d)

    const dRotation_x=useSelector((state)=>state.sideBarContentReducer.dRotation_x)

    const dRotation_y=useSelector((state)=>state.sideBarContentReducer.dRotation_y)

    const dRotation_z=useSelector((state)=>state.sideBarContentReducer.dRotation_z)

    // const valueopacityborder=useSelector((state)=>state.sideBarContentReducer.valueopacityborder)

    const twoDthreeDID=useSelector((state)=>state.sideBarContentReducer.twoDthreeDID)

    const contentImgVdo=useSelector((state)=>state.sideBarContentReducer.contentImgVdo)


//     const contentImgVdo=ctx.contentImgVdo;
//   const setcontentImgVdo=ctx.setcontentImgVdo;

console.log(contentImgVdo,'this is content video')


  const handleborderopacityValue = (event) => {
    setborderopacityvalue(event.target.value);
  };

  const handleborderValue = (event) => {
    setbordervalue(event.target.valueborder);
  };

  const thecheckfunction = (e) => {
    const formdata = { value: e.target.checked };
    // ctx.setloader(true)
    axios
      .put(API.BASE_URL + "twod_threed/" + twoDthreeDID + "/", formdata, {})
      .then(function (res) {})
      .catch(function (err) {})
      .finally(()=>{
        // setTimeout(()=>{ ctx.setloader(false)},0)
       });
  };



const getDimensions=()=>{
  console.log(contentImgVdo,'this is ideeeeeeeeeee');
  axios.get(API.BASE_URL + "scene_details/" + ctx.scene_id)
  .then((res)=>{
    // console.log(res.data.data[0],'inside useEffect');

    if(contentImgVdo && contentImgVdo[0].image_id){
      console.log(res.data.data[0].image_data.map(itm=>(
        itm.find(item=>item.image_id===contentImgVdo[0].image_id)
      )),'IMAGE IDIDIDIDID')
    }
    if(contentImgVdo && contentImgVdo[0].video_id){
      console.log(res.data.data[0].image_data.map(itm=>(
        itm.filter(item=>item.image_id===contentImgVdo[0].video_id)
      )).find(elem=>typeof elem ==='object'),'ViDEO IDIDIDIDID')
    }

   console.log( res.data.data[0].image_data[2],'ID of 178 of this item <------------------');
  })
  .catch((e)=>console.log(e,'ERROR to fetch dimensions'))
}

useEffect(() => {
  // getDimensions()
  dispatch(sideBarContentAction.setwidthImgVdo(
    (contentImgVdo &&
     contentImgVdo[0]
      ?.image_transform
      ?.width) ||
   (contentImgVdo &&
    contentImgVdo[0]
      ?.video_transform
       ?.width) ||
       
         (contentImgVdo &&
           contentImgVdo[0]
             ?.text_transform
             ?.width)
  ));

  dispatch(sideBarContentAction.setheightImgVdo(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.height) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.height) ||
        
          (contentImgVdo &&
            contentImgVdo[0]
              ?.text_transform
              ?.height)
  ))

  dispatch(sideBarContentAction.dimposition_x(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.position_x) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.position_x) ||
          (contentImgVdo &&
            contentImgVdo[0]
              ?.text_transform
              ?.position_x)
  ))

  dispatch(sideBarContentAction.dimposition_y(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.position_y) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.position_y) ||
          (contentImgVdo &&
            contentImgVdo[0]
              ?.text_transform
              ?.position_y)
  ))

  dispatch(sideBarContentAction.dimposition_d(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.position_d) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.position_d) ||
        (contentImgVdo &&
          contentImgVdo[0]
            ?.text_transform
            ?.position_d)
  ))

  dispatch(sideBarContentAction.dimRotation_x(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.Rotation_x) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.Rotation_x) ||
        (contentImgVdo &&
          contentImgVdo[0]
            ?.text_transform
            ?.Rotation_x)
  ))

  dispatch(sideBarContentAction.dimRotation_y(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.Rotation_y) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.Rotation_y) ||
        (contentImgVdo &&
          contentImgVdo[0]
            ?.text_transform
            ?.Rotation_y) 
  ))

  dispatch(sideBarContentAction.dimRotation_z(
    (contentImgVdo &&
      contentImgVdo[0]
        ?.image_transform
        ?.Rotation_z) ||
    (contentImgVdo &&
      contentImgVdo[0]
        ?.video_transform
        ?.Rotation_z) ||
        (contentImgVdo &&
          contentImgVdo[0]
            ?.text_transform
            ?.Rotation_z) 
  ))




}, [useSelector((state)=>state.sideBarContentReducer.toUpdateDimensions)])


  return (
    <div>
    <Tab.Container id="right-tabs-example" defaultActiveKey="first" style={{
        border:'1px solid green'
      }}>
        <Row className="flex-column justify-content-between tab-list right-tabs video-img-tabs">
          <Col className="side-tab mb-5 mb-md-0 p-0">
            <Tab.Content>
              {/* Start---- single---section  */}
              <Tab.Pane
                eventKey="first"
                className="bg-light py-4 tab-content target-tab-content"
              >
                <div
                  className="InspectorMenu--1PeA4 video-div-height"
                  data-testid="InspectorMenu"
                >
                  {!isContent && (
                    <Accordion defaultActiveKey="0">
                      <div className="ShelfContainer--1Ad4O">
                        <div style={{ width: "100%" }}>
                          {/* start Content show hide content  */}
                          <div className="TitleContainer--2xD-b title-content">
                            <Accordion.Item eventKey="0">
                              <Accordion.Header >
                               <p style={{
                                color:contentImgVdo && contentImgVdo[0].button_name ? 'rgb(91 89 89 / 35%)' : 'black'
                              }}> Content</p>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div
                                  data-testid="ShelfDrawerBtnContent"
                                  className="target-image-content Content--15Wyt Open--EFZA8"
                                  style={{ overflow: "visible" }}
                                >
                                  {/* <div> */}

                                   
                                   <div className="target-image-content-inner PreviewDiv--WjPlt PreviewDiv--1AHiO">

                                    <div className="target-image-content-inner PreviewDiv--WjPlt PreviewDiv--1AHiO " style={{width: "100%",height: "170px"}}>
                                      {contentImgVdo &&
                                        contentImgVdo[0].image_url && (
                                          <img
                                            src={
                                              contentImgVdo[0].image_url
                                            }
                                            style={{
                                              width: "100%",
                                              height: "100%",
                                              display: "flex",
                                              objectFit: "cover",
                                            }}
                                          />
                                        )}
                                      {contentImgVdo &&
                                        contentImgVdo[0].video_url && (
                                          <video
                                            width="100%"
                                            height="100%"
                                            controls
                                          >
                                            <source
                                              src={
                                                (()=>{
                                                    return contentImgVdo[0].video_url
                                                }
                                                )()
                                              }
                                              type="video/mp4"
                                            />
                                          </video>
                                        )}
                                      <div className="HoverDiv--jI34Q ">
                                        <button
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                          }}
                                        >
                                          <div className="SubBtn--26RUV TrkImgUploadButton--3e-ZC">
                                            Replace123
                                          </div>
                                        </button>
                                        <input
                                          type="file"
                                          accept="image/jpeg,image/png,.jpeg,.jpg,.png"
                                          onChange={(e)=>dispatch(sideBarContentAction.selectedTargetImage())}
                                          style={{
                                            margin: "-60px 0 0 0 ",
                                            position: "relative",
                                            zIndex: "3",
                                          }}
                                        />
                                      </div>
                                      <div className="HoverDiv--2gksf ">
                                        <button className="ActionBtn--1x70k">
                                          {/* <div className="EntityReplaceBtn--V4byk">
                                            Replace
                                          </div> */}
                                        </button>
                                        <input
                                          type="file"
                                          style={{ display: "none" }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </div>
                          {/* End Content show hide  */}

                          <div
                            style={{
                              borderTop: "1px solid rgb(178, 196, 215)",
                              height: "auto",
                              width: "100%",
                            }}
                          ></div>
                        </div>

                        <div style={{ width: "100%" }}>
                          <div
                            data-testid="ShelfDrawerBtnContent"
                            className="Content--15Wyt Closed--2YzdP"
                            style={{ overflow: "hidden" }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}></div>

                        <div style={{ width: "100%" }}>
                          <button
                            data-testid="ShelfDrawerBtn"
                            className="btn-transition-effect DrawerBtn--bdcva  "
                          >
                            {/* start Transition show hide content  */}
                            <div
                              className="TitleContainer--2xD-b title-content"
                              id="transition-affects-outer-two"
                            >
                              <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                  {" "}
                                  Transition Effects
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div
                                    data-testid="ShelfDrawerBtnContent"
                                    className="target-image-content Content--15Wyt Open--EFZA8"
                                    style={{ overflow: "visible" }}
                                  >
                                    <div>
                                      <div className="row">
                                        <Tab.Container
                                          id="left-tabs-example"
                                          defaultActiveKey="first"
                                        >
                                          <Col className="side-tab col-md-12 mb-5 mb-md-0 p-0">
                                            <Nav
                                              variant="pills"
                                              className="side-main"
                                            >
                                              <Nav.Item>
                                                <Nav.Link eventKey="first-enter">
                                                  <a
                                                    href="#tab1"
                                                    className="nav-link p-0 m-0 fw-bold link-dark enter-text"
                                                  >
                                                    {" "}
                                                    Enter-12
                                                  </a>
                                                </Nav.Link>
                                              </Nav.Item>

                                              <Nav.Item>
                                                <Nav.Link eventKey="second-exit">
                                                  <a
                                                    href="#tab2"
                                                    className="nav-link p-0 m-0 fw-bold link-dark enter-text"
                                                  >
                                                    Exit
                                                  </a>
                                                </Nav.Link>
                                              </Nav.Item>
                                            </Nav>
                                          </Col>
                                          <Col className="tab-main">
                                            <Tab.Content>
                                              {/* Start---- Enter   */}
                                              <Tab.Pane
                                                eventKey="first-enter"
                                                className="bg-light tab-content target-tab-content"
                                              >
                                                <Accordion>
                                                  <div className="transition-outer">
                                                    <div className="transition-for-all">
                                                      <div className="first-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <rect
                                                              id="path-1"
                                                              width="68"
                                                              height="68"
                                                              x="0"
                                                              y="0"
                                                              rx="5"
                                                            ></rect>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="100%"
                                                              x2="0%"
                                                              y1="50%"
                                                              y2="50%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>

                                                              <path
                                                                fill="#96BFEF"
                                                                d="M3.4 22.6148507L17.8328447 6.8 38.4 30.8755409 20.8993196 45.675647 30.1572612 59.8 3.83003227 45.4802808 16.58811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU none-text">
                                                          None
                                                        </div>
                                                      </div>

                                                      <div className="second-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <rect
                                                              id="path-1"
                                                              width="68"
                                                              height="68"
                                                              x="0"
                                                              y="0"
                                                              rx="5"
                                                            ></rect>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="100%"
                                                              x2="0%"
                                                              y1="50%"
                                                              y2="50%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>
                                                              <path
                                                                fill="url(#linearGradient-3)"
                                                                fillRule="nonzero"
                                                                d="M-17 22.6148507L-2.56715528 6.8 17.8328447 6.8 17.2472582 18.6534773 16.58811 31.9959974 10.7026223 45.675647 30.1572612 59.8 -2.56715528 59.8 -16.5699677 45.4802808 -3.81189004 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M63.298 37.644l-9.821-9.822a1.7 1.7 0 00-2.43 0l-9.821 9.822a1.735 1.735 0 002.429 2.464l8.678-8.606 8.675 8.676a1.7 1.7 0 002.43 0 1.735 1.735 0 00-.14-2.534z"
                                                                mask="url(#mask-2)"
                                                                transform="rotate(90 52.36 34)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M3.4 22.6148507L17.8328447 6.8 38.4 30.8755409 20.8993196 45.675647 30.1572612 59.8 3.83003227 45.4802808 16.58811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide L-R
                                                        </div>
                                                      </div>
                                                      <div className="third-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <rect
                                                              id="path-1"
                                                              width="68"
                                                              height="68"
                                                              x="0"
                                                              y="0"
                                                              rx="5"
                                                            ></rect>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="83.061%"
                                                              x2="0%"
                                                              y1="50%"
                                                              y2="50%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>
                                                              <path
                                                                fill="url(#linearGradient-3)"
                                                                fillRule="nonzero"
                                                                d="M40.8 22.6148507L43.3328447 6.8 75.6328447 6.8 75.0472582 18.6534773 74.38811 31.9959974 74.38811 45.4802808 72.536306 59.8 55.6572612 59.8 41.2300323 45.4802808 53.98811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M28.9 22.6148507L43.3328447 6.8 63.9 30.8755409 46.3993196 45.675647 55.6572612 59.8 29.3300323 45.4802808 42.08811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M27.598 37.644l-9.821-9.822a1.7 1.7 0 00-2.43 0l-9.821 9.822a1.735 1.735 0 002.429 2.464l8.678-8.606 8.675 8.676a1.7 1.7 0 002.43 0 1.735 1.735 0 00-.14-2.534z"
                                                                mask="url(#mask-2)"
                                                                transform="matrix(0 1 1 0 -17.34 17.34)"
                                                              ></path>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide R-L
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="transition-for-all">
                                                      <div className="fourth-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="70"
                                                          viewBox="0 0 68 70"
                                                        >
                                                          <defs>
                                                            <path
                                                              id="path-1"
                                                              d="M4.987.165l58-.152a5 5 0 015.013 5v58.165a5 5 0 01-5 5H5a5 5 0 01-5-5V5.165a5 5 0 014.987-5z"
                                                            ></path>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="50%"
                                                              x2="50%"
                                                              y1="0%"
                                                              y2="100%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g transform="translate(0 1)">
                                                              <g transform="translate(0 -1)">
                                                                <g transform="translate(0 .822)">
                                                                  <mask
                                                                    id="mask-2"
                                                                    fill="#fff"
                                                                  >
                                                                    <use href="#path-1"></use>
                                                                  </mask>
                                                                  <path
                                                                    fill="url(#linearGradient-3)"
                                                                    fillRule="nonzero"
                                                                    d="M16 49.4649587L30.0083493 34.1783937 49.9705882 57.4497055 49.9705882 68.6858564 39.9328401 85.4079602 16 71.3920676z"
                                                                    mask="url(#mask-2)"
                                                                  ></path>
                                                                  <g mask="url(#mask-2)">
                                                                    <g transform="translate(15.5 10.038)">
                                                                      <path
                                                                        fill="#96BFEF"
                                                                        fillRule="nonzero"
                                                                        d="M0.5 39.4272899L14.5083493 24.1407249 34.4705882 47.4120367 17.4846337 61.717754 26.4702829 75.3702914 0.917384264 61.5289139 13.3002244 48.495065z"
                                                                      ></path>
                                                                      <path
                                                                        fill="#96BFEF"
                                                                        fillRule="evenodd"
                                                                        d="M27.787 9.987L18.254.493a1.654 1.654 0 00-2.358 0L6.363 9.987a1.672 1.672 0 00.072 2.278 1.69 1.69 0 002.286.104l8.422-8.32 8.42 8.387a1.654 1.654 0 002.358 0 1.673 1.673 0 00-.134-2.45z"
                                                                      ></path>
                                                                      <g
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                        strokeLinecap="round"
                                                                        strokeWidth="1"
                                                                        transform="matrix(0 -1 -1 0 31.5 69.14)"
                                                                      >
                                                                        <g transform="translate(14 25)">
                                                                          <path
                                                                            stroke="#FFF"
                                                                            d="M0.5 1L17.5 1"
                                                                          ></path>
                                                                          <path
                                                                            stroke="#96BFEF"
                                                                            d="M0.5 0.5L17.5 0.5"
                                                                          ></path>
                                                                        </g>
                                                                        <g transform="translate(4)">
                                                                          <path
                                                                            stroke="#FFF"
                                                                            d="M0.5 1L17.5 1"
                                                                          ></path>
                                                                          <path
                                                                            stroke="#96BFEF"
                                                                            d="M0.5 0.5L17.5 0.5"
                                                                          ></path>
                                                                        </g>
                                                                        <g transform="translate(0 14)">
                                                                          <path
                                                                            stroke="#FFF"
                                                                            d="M0.5 1L17.5 1"
                                                                          ></path>
                                                                          <path
                                                                            stroke="#96BFEF"
                                                                            d="M0.5 0.5L17.5 0.5"
                                                                          ></path>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide up
                                                        </div>
                                                      </div>
                                                      <div className="five-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <path
                                                              id="path-1"
                                                              d="M5 0h58a5 5 0 015 5v58a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5z"
                                                            ></path>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="50%"
                                                              x2="50%"
                                                              y1="0%"
                                                              y2="100%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>
                                                              <g mask="url(#mask-2)">
                                                                <g transform="translate(17 -20.4)">
                                                                  <path
                                                                    fill="url(#linearGradient-3)"
                                                                    fillRule="nonzero"
                                                                    d="M0.430032272 15.8148507L7.63284472 9.05941988e-15 28.0328447 9.05941988e-15 35 11.8534773 35 24.0755409 26.78811 30.9020874 26.78811 53 0.430032272 38.6802808z"
                                                                  ></path>
                                                                  <path
                                                                    fill="#96BFEF"
                                                                    fillRule="nonzero"
                                                                    d="M1.09618981e-12 15.8148507L14.4328447 1.20792265e-14 35 24.0755409 17.4993196 38.875647 26.7572612 53 0.430032272 38.6802808 13.18811 25.1959974z"
                                                                  ></path>
                                                                  <path
                                                                    fill="#96BFEF"
                                                                    fillRule="evenodd"
                                                                    d="M27.598 76.632l-9.821-9.822a1.7 1.7 0 00-2.43 0l-9.821 9.822a1.735 1.735 0 002.429 2.464l8.678-8.606 8.675 8.676a1.7 1.7 0 002.43 0 1.735 1.735 0 00-.14-2.534z"
                                                                    transform="matrix(1 0 0 -1 0 145.976)"
                                                                  ></path>
                                                                </g>
                                                              </g>
                                                              <g
                                                                strokeLinecap="round"
                                                                mask="url(#mask-2)"
                                                              >
                                                                <g transform="rotate(90 27.5 16)">
                                                                  <g transform="translate(13.5 21)">
                                                                    <path
                                                                      stroke="#FFF"
                                                                      d="M0.5 1L17.5 1"
                                                                    ></path>
                                                                    <path
                                                                      stroke="#96BFEF"
                                                                      d="M0.5 0.5L17.5 0.5"
                                                                    ></path>
                                                                  </g>
                                                                  <g transform="translate(14.5 .5)">
                                                                    <path
                                                                      stroke="#FFF"
                                                                      d="M0.5 1L17.5 1"
                                                                    ></path>
                                                                    <path
                                                                      stroke="#96BFEF"
                                                                      d="M0.5 0.5L17.5 0.5"
                                                                    ></path>
                                                                  </g>
                                                                  <g transform="translate(.5 9.5)">
                                                                    <path
                                                                      stroke="#FFF"
                                                                      d="M0.5 1L17.5 1"
                                                                    ></path>
                                                                    <path
                                                                      stroke="#96BFEF"
                                                                      d="M0.5 0.5L17.5 0.5"
                                                                    ></path>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide down
                                                        </div>
                                                      </div>
                                                      <div className="six-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <radialGradient
                                                              id="radialGradient-1"
                                                              cx="50%"
                                                              cy="50%"
                                                              r="46.12%"
                                                              fx="50%"
                                                              fy="50%"
                                                              gradientTransform="matrix(1 0 0 1.47487 0 -.237)"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.584"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.214"
                                                              ></stop>
                                                            </radialGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <rect
                                                                width="68"
                                                                height="68"
                                                                x="0"
                                                                y="0"
                                                                rx="5"
                                                              ></rect>
                                                              <g
                                                                fill="url(#radialGradient-1)"
                                                                fillRule="nonzero"
                                                                transform="translate(17 6.8)"
                                                              >
                                                                <path d="M0 15.8148507L14.4328447 0 35 24.0755409 17.4993196 38.875647 26.7572612 53 0.430032272 38.6802808 13.18811 25.1959974z"></path>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Fade-In
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="transition-for-all">
                                                      <div className="seven-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="56"
                                                          height="58"
                                                          viewBox="0 0 56 58"
                                                        >
                                                          <defs>
                                                            <radialGradient
                                                              id="radialGradient-1"
                                                              cx="50%"
                                                              cy="48.736%"
                                                              r="76.188%"
                                                              fx="50%"
                                                              fy="48.736%"
                                                              gradientTransform="matrix(0 .66667 -1 0 .987 .154)"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.63"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#FFF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </radialGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g transform="translate(-6 -5)">
                                                              <g transform="translate(6 5)">
                                                                <g transform="translate(.822)">
                                                                  <g
                                                                    fillRule="nonzero"
                                                                    transform="translate(11.178 4)"
                                                                  >
                                                                    <path
                                                                      fill="#96BFEF"
                                                                      d="M6.4 18.1937302L14.3174462 9.6 25.6 22.6825581 15.9996267 30.7248799 21.078269 38.4 6.63590342 30.6187186 13.6346203 23.2914099z"
                                                                    ></path>
                                                                    <path
                                                                      fill="url(#radialGradient-1)"
                                                                      d="M0 14.3228836L13.1957437 0 32 21.8042635 15.9993779 35.2081331 24.4637816 48 0.393172363 35.0311977 12.0577005 22.8190165z"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(-1 0 0 1 14 43.7)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="translate(40.291 43.7)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="rotate(180 7 7)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(1 0 0 -1 40.291 14)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Scale-Up
                                                        </div>
                                                      </div>
                                                      <div className="eight-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="46"
                                                          height="51"
                                                          viewBox="0 0 46 51"
                                                        >
                                                          <defs>
                                                            <radialGradient
                                                              id="radialGradient-1"
                                                              cx="50%"
                                                              cy="48.736%"
                                                              r="76.188%"
                                                              fx="50%"
                                                              fy="48.736%"
                                                              gradientTransform="matrix(0 .66667 -1 0 .987 .154)"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.63"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#FFF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </radialGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g transform="translate(-11 -8)">
                                                              <g transform="translate(11 8)">
                                                                <g transform="translate(0 .588)">
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(1 0 0 -1 0 49.412)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="rotate(180 23 24.706)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="translate(0 .412)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(-1 0 0 1 46 .412)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fillRule="nonzero"
                                                                    transform="translate(7 .412)"
                                                                  >
                                                                    <path
                                                                      fill="#96BFEF"
                                                                      d="M6.4 18.1937302L14.3174462 9.6 25.6 22.6825581 15.9996267 30.7248799 21.078269 38.4 6.63590342 30.6187186 13.6346203 23.2914099z"
                                                                    ></path>
                                                                    <path
                                                                      fill="url(#radialGradient-1)"
                                                                      d="M0 14.3228836L13.1957437 0 32 21.8042635 15.9993779 35.2081331 24.4637816 48 0.393172363 35.0311977 12.0577005 22.8190165z"
                                                                    ></path>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Scale-Down
                                                        </div>
                                                      </div>

                                                      <div className="nine-img border-to-all">
                                                        <div className="Title--2wreU">
                                                          Scale-Down-dummy
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Accordion>
                                              </Tab.Pane>
                                              {/* Start---- Exit   */}
                                              <Tab.Pane
                                                eventKey="second-exit"
                                                className="bg-light tab-content target-tab-content"
                                              >
                                                <Accordion>
                                                  <div className="transition-outer">
                                                    <div className="transition-for-all">
                                                      <div className="first-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="35"
                                                          height="53"
                                                          viewBox="0 0 35 53"
                                                        >
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g
                                                              fill="#96BFEF"
                                                              transform="translate(-38 -292)"
                                                            >
                                                              <g transform="translate(21 284)">
                                                                <path d="M17 23.8148507L31.4328447 8 52 32.0755409 34.4993196 46.875647 43.7572612 61 17.4300323 46.6802808 30.18811 33.1959974z"></path>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU none-text">
                                                          None
                                                        </div>
                                                      </div>

                                                      <div className="second-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <rect
                                                              id="path-1"
                                                              width="68"
                                                              height="68"
                                                              x="0"
                                                              y="0"
                                                              rx="5"
                                                            ></rect>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="100%"
                                                              x2="0%"
                                                              y1="50%"
                                                              y2="50%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>
                                                              <path
                                                                fill="url(#linearGradient-3)"
                                                                fillRule="nonzero"
                                                                d="M-17 22.6148507L-2.56715528 6.8 17.8328447 6.8 17.2472582 18.6534773 16.58811 31.9959974 10.7026223 45.675647 30.1572612 59.8 -2.56715528 59.8 -16.5699677 45.4802808 -3.81189004 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M63.298 37.644l-9.821-9.822a1.7 1.7 0 00-2.43 0l-9.821 9.822a1.735 1.735 0 002.429 2.464l8.678-8.606 8.675 8.676a1.7 1.7 0 002.43 0 1.735 1.735 0 00-.14-2.534z"
                                                                mask="url(#mask-2)"
                                                                transform="rotate(90 52.36 34)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M3.4 22.6148507L17.8328447 6.8 38.4 30.8755409 20.8993196 45.675647 30.1572612 59.8 3.83003227 45.4802808 16.58811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide L-R
                                                        </div>
                                                      </div>
                                                      <div className="third-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <rect
                                                              id="path-1"
                                                              width="68"
                                                              height="68"
                                                              x="0"
                                                              y="0"
                                                              rx="5"
                                                            ></rect>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="83.061%"
                                                              x2="0%"
                                                              y1="50%"
                                                              y2="50%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>
                                                              <path
                                                                fill="url(#linearGradient-3)"
                                                                fillRule="nonzero"
                                                                d="M40.8 22.6148507L43.3328447 6.8 75.6328447 6.8 75.0472582 18.6534773 74.38811 31.9959974 74.38811 45.4802808 72.536306 59.8 55.6572612 59.8 41.2300323 45.4802808 53.98811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M28.9 22.6148507L43.3328447 6.8 63.9 30.8755409 46.3993196 45.675647 55.6572612 59.8 29.3300323 45.4802808 42.08811 31.9959974z"
                                                                mask="url(#mask-2)"
                                                              ></path>
                                                              <path
                                                                fill="#96BFEF"
                                                                d="M27.598 37.644l-9.821-9.822a1.7 1.7 0 00-2.43 0l-9.821 9.822a1.735 1.735 0 002.429 2.464l8.678-8.606 8.675 8.676a1.7 1.7 0 002.43 0 1.735 1.735 0 00-.14-2.534z"
                                                                mask="url(#mask-2)"
                                                                transform="matrix(0 1 1 0 -17.34 17.34)"
                                                              ></path>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide R-L
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="transition-for-all">
                                                      <div className="fourth-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="70"
                                                          viewBox="0 0 68 70"
                                                        >
                                                          <defs>
                                                            <path
                                                              id="path-1"
                                                              d="M4.987.165l58-.152a5 5 0 015.013 5v58.165a5 5 0 01-5 5H5a5 5 0 01-5-5V5.165a5 5 0 014.987-5z"
                                                            ></path>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="50%"
                                                              x2="50%"
                                                              y1="0%"
                                                              y2="100%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g transform="translate(0 1)">
                                                              <g transform="translate(0 -1)">
                                                                <g transform="translate(0 .822)">
                                                                  <mask
                                                                    id="mask-2"
                                                                    fill="#fff"
                                                                  >
                                                                    <use href="#path-1"></use>
                                                                  </mask>
                                                                  <path
                                                                    fill="url(#linearGradient-3)"
                                                                    fillRule="nonzero"
                                                                    d="M16 49.4649587L30.0083493 34.1783937 49.9705882 57.4497055 49.9705882 68.6858564 39.9328401 85.4079602 16 71.3920676z"
                                                                    mask="url(#mask-2)"
                                                                  ></path>
                                                                  <g mask="url(#mask-2)">
                                                                    <g transform="translate(15.5 10.038)">
                                                                      <path
                                                                        fill="#96BFEF"
                                                                        fillRule="nonzero"
                                                                        d="M0.5 39.4272899L14.5083493 24.1407249 34.4705882 47.4120367 17.4846337 61.717754 26.4702829 75.3702914 0.917384264 61.5289139 13.3002244 48.495065z"
                                                                      ></path>
                                                                      <path
                                                                        fill="#96BFEF"
                                                                        fillRule="evenodd"
                                                                        d="M27.787 9.987L18.254.493a1.654 1.654 0 00-2.358 0L6.363 9.987a1.672 1.672 0 00.072 2.278 1.69 1.69 0 002.286.104l8.422-8.32 8.42 8.387a1.654 1.654 0 002.358 0 1.673 1.673 0 00-.134-2.45z"
                                                                      ></path>
                                                                      <g
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                        strokeLinecap="round"
                                                                        strokeWidth="1"
                                                                        transform="matrix(0 -1 -1 0 31.5 69.14)"
                                                                      >
                                                                        <g transform="translate(14 25)">
                                                                          <path
                                                                            stroke="#FFF"
                                                                            d="M0.5 1L17.5 1"
                                                                          ></path>
                                                                          <path
                                                                            stroke="#96BFEF"
                                                                            d="M0.5 0.5L17.5 0.5"
                                                                          ></path>
                                                                        </g>
                                                                        <g transform="translate(4)">
                                                                          <path
                                                                            stroke="#FFF"
                                                                            d="M0.5 1L17.5 1"
                                                                          ></path>
                                                                          <path
                                                                            stroke="#96BFEF"
                                                                            d="M0.5 0.5L17.5 0.5"
                                                                          ></path>
                                                                        </g>
                                                                        <g transform="translate(0 14)">
                                                                          <path
                                                                            stroke="#FFF"
                                                                            d="M0.5 1L17.5 1"
                                                                          ></path>
                                                                          <path
                                                                            stroke="#96BFEF"
                                                                            d="M0.5 0.5L17.5 0.5"
                                                                          ></path>
                                                                        </g>
                                                                      </g>
                                                                    </g>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide up
                                                        </div>
                                                      </div>
                                                      <div className="five-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <path
                                                              id="path-1"
                                                              d="M5 0h58a5 5 0 015 5v58a5 5 0 01-5 5H5a5 5 0 01-5-5V5a5 5 0 015-5z"
                                                            ></path>
                                                            <linearGradient
                                                              id="linearGradient-3"
                                                              x1="50%"
                                                              x2="50%"
                                                              y1="0%"
                                                              y2="100%"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#EEF6FF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#EEF6FF"
                                                              ></stop>
                                                            </linearGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <mask
                                                                id="mask-2"
                                                                fill="#fff"
                                                              >
                                                                <use href="#path-1"></use>
                                                              </mask>
                                                              <g mask="url(#mask-2)">
                                                                <g transform="translate(17 -20.4)">
                                                                  <path
                                                                    fill="url(#linearGradient-3)"
                                                                    fillRule="nonzero"
                                                                    d="M0.430032272 15.8148507L7.63284472 9.05941988e-15 28.0328447 9.05941988e-15 35 11.8534773 35 24.0755409 26.78811 30.9020874 26.78811 53 0.430032272 38.6802808z"
                                                                  ></path>
                                                                  <path
                                                                    fill="#96BFEF"
                                                                    fillRule="nonzero"
                                                                    d="M1.09618981e-12 15.8148507L14.4328447 1.20792265e-14 35 24.0755409 17.4993196 38.875647 26.7572612 53 0.430032272 38.6802808 13.18811 25.1959974z"
                                                                  ></path>
                                                                  <path
                                                                    fill="#96BFEF"
                                                                    fillRule="evenodd"
                                                                    d="M27.598 76.632l-9.821-9.822a1.7 1.7 0 00-2.43 0l-9.821 9.822a1.735 1.735 0 002.429 2.464l8.678-8.606 8.675 8.676a1.7 1.7 0 002.43 0 1.735 1.735 0 00-.14-2.534z"
                                                                    transform="matrix(1 0 0 -1 0 145.976)"
                                                                  ></path>
                                                                </g>
                                                              </g>
                                                              <g
                                                                strokeLinecap="round"
                                                                mask="url(#mask-2)"
                                                              >
                                                                <g transform="rotate(90 27.5 16)">
                                                                  <g transform="translate(13.5 21)">
                                                                    <path
                                                                      stroke="#FFF"
                                                                      d="M0.5 1L17.5 1"
                                                                    ></path>
                                                                    <path
                                                                      stroke="#96BFEF"
                                                                      d="M0.5 0.5L17.5 0.5"
                                                                    ></path>
                                                                  </g>
                                                                  <g transform="translate(14.5 .5)">
                                                                    <path
                                                                      stroke="#FFF"
                                                                      d="M0.5 1L17.5 1"
                                                                    ></path>
                                                                    <path
                                                                      stroke="#96BFEF"
                                                                      d="M0.5 0.5L17.5 0.5"
                                                                    ></path>
                                                                  </g>
                                                                  <g transform="translate(.5 9.5)">
                                                                    <path
                                                                      stroke="#FFF"
                                                                      d="M0.5 1L17.5 1"
                                                                    ></path>
                                                                    <path
                                                                      stroke="#96BFEF"
                                                                      d="M0.5 0.5L17.5 0.5"
                                                                    ></path>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Slide down
                                                        </div>
                                                      </div>
                                                      <div className="six-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="68"
                                                          height="68"
                                                          viewBox="0 0 68 68"
                                                        >
                                                          <defs>
                                                            <radialGradient
                                                              id="radialGradient-1"
                                                              cx="50%"
                                                              cy="50%"
                                                              r="46.12%"
                                                              fx="50%"
                                                              fy="50%"
                                                              gradientTransform="matrix(1 0 0 1.47487 0 -.237)"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.584"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.214"
                                                              ></stop>
                                                            </radialGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g>
                                                              <rect
                                                                width="68"
                                                                height="68"
                                                                x="0"
                                                                y="0"
                                                                rx="5"
                                                              ></rect>
                                                              <g
                                                                fill="url(#radialGradient-1)"
                                                                fillRule="nonzero"
                                                                transform="translate(17 6.8)"
                                                              >
                                                                <path d="M0 15.8148507L14.4328447 0 35 24.0755409 17.4993196 38.875647 26.7572612 53 0.430032272 38.6802808 13.18811 25.1959974z"></path>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Fade-Out
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="transition-for-all">
                                                      <div className="seven-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="56"
                                                          height="58"
                                                          viewBox="0 0 56 58"
                                                        >
                                                          <defs>
                                                            <radialGradient
                                                              id="radialGradient-1"
                                                              cx="50%"
                                                              cy="48.736%"
                                                              r="76.188%"
                                                              fx="50%"
                                                              fy="48.736%"
                                                              gradientTransform="matrix(0 .66667 -1 0 .987 .154)"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.63"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#FFF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </radialGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g transform="translate(-6 -5)">
                                                              <g transform="translate(6 5)">
                                                                <g transform="translate(.822)">
                                                                  <g
                                                                    fillRule="nonzero"
                                                                    transform="translate(11.178 4)"
                                                                  >
                                                                    <path
                                                                      fill="#96BFEF"
                                                                      d="M6.4 18.1937302L14.3174462 9.6 25.6 22.6825581 15.9996267 30.7248799 21.078269 38.4 6.63590342 30.6187186 13.6346203 23.2914099z"
                                                                    ></path>
                                                                    <path
                                                                      fill="url(#radialGradient-1)"
                                                                      d="M0 14.3228836L13.1957437 0 32 21.8042635 15.9993779 35.2081331 24.4637816 48 0.393172363 35.0311977 12.0577005 22.8190165z"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(-1 0 0 1 14 43.7)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="translate(40.291 43.7)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="rotate(180 7 7)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(1 0 0 -1 40.291 14)"
                                                                  >
                                                                    <path
                                                                      d="M12.726 8.444L7.819 3.597a.857.857 0 00-1.21-.002L1.721 8.42a.847.847 0 00.04 1.16.873.873 0 001.173.056l4.318-4.23 4.333 4.282a.857.857 0 001.211.002.845.845 0 00-.071-1.247z"
                                                                      transform="scale(1 -1) rotate(45 23.312 0)"
                                                                    ></path>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Scale-Up
                                                        </div>
                                                      </div>
                                                      <div className="eight-img border-to-all">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          width="46"
                                                          height="51"
                                                          viewBox="0 0 46 51"
                                                        >
                                                          <defs>
                                                            <radialGradient
                                                              id="radialGradient-1"
                                                              cx="50%"
                                                              cy="48.736%"
                                                              r="76.188%"
                                                              fx="50%"
                                                              fy="48.736%"
                                                              gradientTransform="matrix(0 .66667 -1 0 .987 .154)"
                                                            >
                                                              <stop
                                                                offset="0%"
                                                                stopColor="#96BFEF"
                                                                stopOpacity="0.63"
                                                              ></stop>
                                                              <stop
                                                                offset="100%"
                                                                stopColor="#FFF"
                                                                stopOpacity="0"
                                                              ></stop>
                                                            </radialGradient>
                                                          </defs>
                                                          <g
                                                            fill="none"
                                                            fillRule="evenodd"
                                                            stroke="none"
                                                            strokeWidth="1"
                                                          >
                                                            <g transform="translate(-11 -8)">
                                                              <g transform="translate(11 8)">
                                                                <g transform="translate(0 .588)">
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(1 0 0 -1 0 49.412)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="rotate(180 23 24.706)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="translate(0 .412)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fill="#96BFEF"
                                                                    transform="matrix(-1 0 0 1 46 .412)"
                                                                  >
                                                                    <path
                                                                      d="M11.808 8.337L6.975 3.565a.835.835 0 00-.6-.245.862.862 0 00-.604.255L.862 8.424A.841.841 0 00.89 9.578a.867.867 0 001.168.043l4.336-4.25 4.268 4.216a.835.835 0 00.6.245.862.862 0 00.605-.254.857.857 0 00.244-.637.831.831 0 00-.303-.604z"
                                                                      transform="scale(1 -1) rotate(45 22.255 0)"
                                                                    ></path>
                                                                  </g>
                                                                  <g
                                                                    fillRule="nonzero"
                                                                    transform="translate(7 .412)"
                                                                  >
                                                                    <path
                                                                      fill="#96BFEF"
                                                                      d="M6.4 18.1937302L14.3174462 9.6 25.6 22.6825581 15.9996267 30.7248799 21.078269 38.4 6.63590342 30.6187186 13.6346203 23.2914099z"
                                                                    ></path>
                                                                    <path
                                                                      fill="url(#radialGradient-1)"
                                                                      d="M0 14.3228836L13.1957437 0 32 21.8042635 15.9993779 35.2081331 24.4637816 48 0.393172363 35.0311977 12.0577005 22.8190165z"
                                                                    ></path>
                                                                  </g>
                                                                </g>
                                                              </g>
                                                            </g>
                                                          </g>
                                                        </svg>
                                                        <div className="Title--2wreU">
                                                          Scale-Down
                                                        </div>
                                                      </div>
                                                      <div className="nine-img border-to-all">
                                                        <div className="Title--2wreU">
                                                          Scale-Down-dummy
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </Accordion>
                                              </Tab.Pane>
                                            </Tab.Content>
                                          </Col>
                                        </Tab.Container>
                                      </div>
                                    </div>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                            {/* End Transition show hide content  */}
                          </button>
                          <div
                            data-testid="ShelfDrawerBtnContent"
                            className="Content--15Wyt Closed--2YzdP"
                            style={{ overflow: "hidden" }}
                          ></div>

                          {/* /**************photoUi****************/}
                          <div
                            style={{
                              borderTop: "1px solid rgb(178, 196, 215)",
                              height: "auto",
                              width: "100%",
                            }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}>
                          <div
                            data-testid="ShelfDrawerBtnContent"
                            className="Content--15Wyt Closed--2YzdP"
                            style={{ overflow: "hidden" }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}></div>
                        <div style={{ width: "100%" }}>
                          <button
                            data-testid="ShelfDrawerBtn"
                            className="btn-transition-effect DrawerBtn--bdcva  "
                          >
                            {/* start tranform show hide content  */}
                            <div className="TitleContainer--2xD-b title-content">
                              <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                  Transforms
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div className="continer">
                                    <div
                                      data-testid="ShelfDrawerBtnContent"
                                      className="Content--15Wyt Open--EFZA8"
                                      style={{ overflow: "visible" }}
                                    >
                                      <div data-testid="Transforms">
                                        <div className="accor-title RowTitle--21qhU RowTitle--3Xq7s">
                                          Size (mm)
                                          <button className="PadLockBtn--1bnDi"></button>
                                        </div>
                                        <div className="InputRow--1kdSn InputRow--2M9c1">
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--CeOv_ TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              id="GetWidth"
                                              value={
                                                     widthImgVdo
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.setwidthImgVdo(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "grey" }}
                                            >
                                              W
                                            </label>
                                          </div>
                                          <div
                                            style={{
                                              borderLeft:
                                                "1px solid rgb(178, 196, 215)",
                                              width: "auto",
                                              height: "23px",
                                            }}
                                          ></div>
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--CeOv_ TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              id="GetHeight"
                                              value={
                                                     heightImgVdo
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.setheightImgVdo(e.target.value))}

                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "grey" }}
                                            >
                                              H
                                            </label>
                                          </div>
                                          <div
                                            style={{
                                              borderLeft:
                                                "1px solid rgb(178, 196, 215)",
                                              width: "auto",
                                              height: "23px",
                                            }}
                                          ></div>
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--CeOv_ TransformInput--6Bbsj Disabled--2q2TU"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              id="GetLength"
                                              value={
                                                // depthImgVdo ||
                                                // (contentImgVdo &&
                                                //   contentImgVdo[0]
                                                //     ?.image_transform
                                                //     ?.depth) ||
                                                // (contentImgVdo &&
                                                //   contentImgVdo[0]
                                                //     ?.video_transform
                                                //     ?.depth) ||
                                                0
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.setdepthImgVdo(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "grey" }}
                                            >
                                              D
                                            </label>
                                          </div>
                                        </div>
                                        <div className="accor-title RowTitle--3Kekp RowTitle--3Xq7s title-position">
                                          Position (mm)
                                        </div>
                                        <div className="InputRow--VLm0n InputRow--2M9c1">
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--3vnmf TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              value={
                                                     dposition_x
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.dimposition_x(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "red" }}
                                            >
                                              X
                                            </label>
                                          </div>
                                          <div
                                            style={{
                                              borderLeft:
                                                "1px solid rgb(178, 196, 215)",
                                              width: "auto",
                                              height: "23px",
                                            }}
                                          ></div>
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--3vnmf TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              value={
                                                     dposition_y
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.dimposition_y(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "green" }}
                                            >
                                              Y
                                            </label>
                                          </div>
                                          <div
                                            style={{
                                              borderLeft:
                                                "1px solid rgb(178, 196, 215)",
                                              width: "auto",
                                              height: "23px",
                                            }}
                                          ></div>
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--3vnmf TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              value={
                                                   dposition_d
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.dimposition_d(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "blue" }}
                                            >
                                              Z
                                            </label>
                                          </div>
                                        </div>
                                        <div className="accor-title RowTitle--1O1Ao RowTitle--3Xq7s title-rotation">
                                          Rotation (deg)
                                        </div>
                                        <div className="InputRow--J8Q4c InputRow--2M9c1">
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--2C1wH TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              value={
                                                   dRotation_x
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.dimRotation_x(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "red" }}
                                            >
                                              °X
                                            </label>
                                          </div>
                                          <div
                                            style={{
                                              borderLeft:
                                                "1px solid rgb(178, 196, 215)",
                                              width: "auto",
                                              height: "23px",
                                            }}
                                          ></div>
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--2C1wH TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              value={
                                                        dRotation_y
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.dimRotation_y(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "green" }}
                                            >
                                              °Y
                                            </label>
                                          </div>
                                          <div
                                            style={{
                                              borderLeft:
                                                "1px solid rgb(178, 196, 215)",
                                              width: "auto",
                                              height: "23px",
                                            }}
                                          ></div>
                                          <div
                                            data-testid="NumericalInputContainerDiv"
                                            className="NumericalInput--3r_8a false TransformInput--2C1wH TransformInput--6Bbsj false"
                                          >
                                            <input
                                              type="number"
                                              data-testid="NumericalInput"
                                              value={
                                                        dRotation_z
                                              }
                                              onChange={(e)=>dispatch(sideBarContentAction.dimRotation_z(e.target.value))}
                                            />
                                            <label
                                              data-testid="NumericalInputLabel"
                                              style={{ color: "blue" }}
                                            >
                                              °Z
                                            </label>
                                          </div>
                                        </div>
                                        <div className="InputRow--1FGNp InputRow--2M9c1">
                                          <div className="InputRowTitle--3HdL6 InputRowTitle--DDSWz">
                                            <span>Order</span>
                                          </div>
                                          <button
                                            data-testid="TransformsOrderMoveToFront"
                                            className="MoveForward--18DDT"
                                          ></button>
                                          <button
                                            data-testid="TransformsOrderMoveForward"
                                            className="MoveForward--18DDT"
                                          ></button>
                                          <button
                                            data-testid="TransformsOrderMoveBackward"
                                            disabled=""
                                            className="MoveBack--O0pO4"
                                          ></button>
                                          <button
                                            data-testid="TransformsOrderMoveToBack"
                                            disabled=""
                                            className="MoveBack--O0pO4"
                                          ></button>
                                        </div>
                                        <div className="InputRow--1bROy InputRow--2M9c1">
                                          <div className="InputRowTitle--6kOLL InputRowTitle--DDSWz">
                                            <span>
                                              {(contentImgVdo &&
                                                contentImgVdo[0]
                                                  ?.image_transform
                                                  ?.Mirror) ||
                                                (contentImgVdo &&
                                                  contentImgVdo[0]
                                                    ?.video_transform
                                                    ?.Mirror) ||
                                                    (contentImgVdo &&
                                                      contentImgVdo[0]
                                                        ?.text_transform
                                                        ?.Mirror) ||
                                                "Mirror"}
                                            </span>
                                          </div>
                                          <button data-testid="TransformsMirrorHorizontal"></button>
                                          <button data-testid="TransformsMirrorVertical"></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                            {/* End Transition show hide content  */}
                          </button>

                          {/* start appearance content */}

                          {/* /**************transforms****************/}
                          <div
                            style={{
                              borderTop: "1px solid rgb(178, 196, 215)",
                              height: "auto",
                              width: "100%",
                            }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}>
                          <div
                            data-testid="ShelfDrawerBtnContent"
                            className="Content--15Wyt Closed--2YzdP"
                            style={{ overflow: "hidden" }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}></div>
                        <div style={{ width: "100%" }}>
                          <button
                            data-testid="ShelfDrawerBtn"
                            className="btn-transition-effect DrawerBtn--bdcva  "
                          >
                            {/* start appearance show hide content  */}
                            <div className="TitleContainer--2xD-b title-content">
                              <Accordion.Item eventKey="6">
                                <Accordion.Header>
                                  Appearance
                                </Accordion.Header>
                                <Accordion.Body>
                                  <div className="row opacity-div">
                                    <p class="opacity">opacity</p>

                                    <div className="row opacity-div">
                                      <p className="opacity">Opacity</p>

                                      <div>
                                        <input
                                          type="range"
                                          id="vol"
                                          name="vol"
                                          min="0"
                                          max="100"
                                          value={valueopacityborder}
                                          onChange={
                                            handleborderopacityValue
                                          }
                                        />
                                        <p>{valueopacityborder}</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row opacity-div">
                                    <p className="opacity">frames</p>
                                    <div className="frames-outer">
                                      <div className="frames-list">
                                        <div className="no-frame frame-for-all">
                                          <span>No Frame</span>
                                        </div>
                                        <div className="first-frame frame-for-all">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="106"
                                            height="72"
                                            viewBox="0 0 106 72"
                                          >
                                            <defs>
                                              <path
                                                id="path-1"
                                                d="M0 0H106V72H0z"
                                              ></path>
                                            </defs>
                                            <g
                                              fill="none"
                                              fillRule="evenodd"
                                              stroke="none"
                                              strokeWidth="1"
                                            >
                                              <g>
                                                <mask
                                                  id="mask-2"
                                                  fill="#fff"
                                                >
                                                  <use xlinkHref="#path-1"></use>
                                                </mask>
                                                <use
                                                  fill="#FFF"
                                                  xlinkHref="#path-1"
                                                ></use>
                                                <g mask="url(#mask-2)">
                                                  <g
                                                    fillRule="nonzero"
                                                    transform="translate(-1)"
                                                  >
                                                    <g transform="translate(.693)">
                                                      <path
                                                        fill="#D5E7FD"
                                                        d="M.307 0h107l-.005 41.742c-5.378-5.98-16.902-13.773-32.831-13.773-15.398 0-29.565 7.592-36.46 18.878-3.677-1.725-9.478-3.618-16.699-3.618-7.22 0-15.08 2.153-21.005 5.771V0z"
                                                      ></path>
                                                      <path
                                                        fill="#96BFEF"
                                                        d="M50.307 72h-50V56.23C4.58 52.63 11.644 49 21.141 49c3.96 0 9.616.875 14.545 3.32 6.478 3.213 13.328 9.857 14.621 19.68z"
                                                      ></path>
                                                      <path
                                                        fill="#AFD4FF"
                                                        d="M107.307 51.571V72H56.962c-1.392-14.235-12.72-21.58-13.655-22.19C50.732 37.515 64.158 33 74.66 33c11.1 0 25.613 5.062 32.647 18.571z"
                                                      ></path>
                                                    </g>
                                                    <path
                                                      fill="#E8F0FA"
                                                      d="M23.19 7.679c-7.317 0-13.25 5.727-13.25 12.793 0 7.066 5.933 12.794 13.25 12.794 7.318 0 13.25-5.728 13.25-12.794 0-7.066-5.932-12.793-13.25-12.793z"
                                                    ></path>
                                                    <path
                                                      fill="#FFF"
                                                      d="M23.19 12.796c4.391 0 7.95 3.437 7.95 7.676 0 4.24-3.559 7.676-7.95 7.676-4.39 0-7.95-3.437-7.95-7.676 0-4.24 3.56-7.676 7.95-7.676z"
                                                    ></path>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>

                                      <div className="frames-list">
                                        <div className="third-frame frame-for-all">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="106"
                                            height="72"
                                            viewBox="0 0 106 72"
                                          >
                                            <defs>
                                              <path
                                                id="path-1"
                                                d="M0 0H106V72H0z"
                                              ></path>
                                            </defs>
                                            <g
                                              fill="none"
                                              fillRule="evenodd"
                                              stroke="none"
                                              strokeWidth="1"
                                            >
                                              <g>
                                                <mask
                                                  id="mask-2"
                                                  fill="#fff"
                                                >
                                                  <use xlinkHref="#path-1"></use>
                                                </mask>
                                                <use
                                                  fill="#FFF"
                                                  xlinkHref="#path-1"
                                                ></use>
                                                <g mask="url(#mask-2)">
                                                  <g
                                                    fillRule="nonzero"
                                                    transform="translate(-1)"
                                                  >
                                                    <g transform="translate(.693)">
                                                      <path
                                                        fill="#D5E7FD"
                                                        d="M.307 0h107l-.005 41.742c-5.378-5.98-16.902-13.773-32.831-13.773-15.398 0-29.565 7.592-36.46 18.878-3.677-1.725-9.478-3.618-16.699-3.618-7.22 0-15.08 2.153-21.005 5.771V0z"
                                                      ></path>
                                                      <path
                                                        fill="#96BFEF"
                                                        d="M50.307 72h-50V56.23C4.58 52.63 11.644 49 21.141 49c3.96 0 9.616.875 14.545 3.32 6.478 3.213 13.328 9.857 14.621 19.68z"
                                                      ></path>
                                                      <path
                                                        fill="#AFD4FF"
                                                        d="M107.307 51.571V72H56.962c-1.392-14.235-12.72-21.58-13.655-22.19C50.732 37.515 64.158 33 74.66 33c11.1 0 25.613 5.062 32.647 18.571z"
                                                      ></path>
                                                    </g>
                                                    <path
                                                      fill="#E8F0FA"
                                                      d="M23.19 7.679c-7.317 0-13.25 5.727-13.25 12.793 0 7.066 5.933 12.794 13.25 12.794 7.318 0 13.25-5.728 13.25-12.794 0-7.066-5.932-12.793-13.25-12.793z"
                                                    ></path>
                                                    <path
                                                      fill="#FFF"
                                                      d="M23.19 12.796c4.391 0 7.95 3.437 7.95 7.676 0 4.24-3.559 7.676-7.95 7.676-4.39 0-7.95-3.437-7.95-7.676 0-4.24 3.56-7.676 7.95-7.676z"
                                                    ></path>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                        <div className="fourth-frame frame-for-all">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="106"
                                            height="72"
                                            viewBox="0 0 106 72"
                                          >
                                            <defs>
                                              <path
                                                id="path-1"
                                                d="M0 0H106V72H0z"
                                              ></path>
                                            </defs>
                                            <g
                                              fill="none"
                                              fillRule="evenodd"
                                              stroke="none"
                                              strokeWidth="1"
                                            >
                                              <g>
                                                <mask
                                                  id="mask-2"
                                                  fill="#fff"
                                                >
                                                  <use xlinkHref="#path-1"></use>
                                                </mask>
                                                <use
                                                  fill="#FFF"
                                                  xlinkHref="#path-1"
                                                ></use>
                                                <g mask="url(#mask-2)">
                                                  <g
                                                    fillRule="nonzero"
                                                    transform="translate(-1)"
                                                  >
                                                    <g transform="translate(.693)">
                                                      <path
                                                        fill="#D5E7FD"
                                                        d="M.307 0h107l-.005 41.742c-5.378-5.98-16.902-13.773-32.831-13.773-15.398 0-29.565 7.592-36.46 18.878-3.677-1.725-9.478-3.618-16.699-3.618-7.22 0-15.08 2.153-21.005 5.771V0z"
                                                      ></path>
                                                      <path
                                                        fill="#96BFEF"
                                                        d="M50.307 72h-50V56.23C4.58 52.63 11.644 49 21.141 49c3.96 0 9.616.875 14.545 3.32 6.478 3.213 13.328 9.857 14.621 19.68z"
                                                      ></path>
                                                      <path
                                                        fill="#AFD4FF"
                                                        d="M107.307 51.571V72H56.962c-1.392-14.235-12.72-21.58-13.655-22.19C50.732 37.515 64.158 33 74.66 33c11.1 0 25.613 5.062 32.647 18.571z"
                                                      ></path>
                                                    </g>
                                                    <path
                                                      fill="#E8F0FA"
                                                      d="M23.19 7.679c-7.317 0-13.25 5.727-13.25 12.793 0 7.066 5.933 12.794 13.25 12.794 7.318 0 13.25-5.728 13.25-12.794 0-7.066-5.932-12.793-13.25-12.793z"
                                                    ></path>
                                                    <path
                                                      fill="#FFF"
                                                      d="M23.19 12.796c4.391 0 7.95 3.437 7.95 7.676 0 4.24-3.559 7.676-7.95 7.676-4.39 0-7.95-3.437-7.95-7.676 0-4.24 3.56-7.676 7.95-7.676z"
                                                    ></path>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row opacity-div">
                                    <p className="opacity">
                                      Corner Radius
                                    </p>
                                    <div>
                                      <input
                                        type="range"
                                        id="vol"
                                        name="vol"
                                        min="0"
                                        max="100"
                                        value={valueborder}
                                        onChange={handleborderValue}
                                      />
                                      <p>{valueborder}</p>
                                    </div>
                                  </div>

                                  <div className="row opacity-div border-input">
                                    <p className="opacity">
                                      Border width
                                    </p>
                                    <div>
                                      <input
                                        type="number"
                                        data-testid="NumericalInput"
                                      />
                                    </div>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                            {/* End appearance show hide content  */}
                          </button>
                          {/* end appearance content */}

                          {/* start action content */}

                          {/* /**************actions****************/}
                          <div
                            style={{
                              borderTop: "1px solid rgb(178, 196, 215)",
                              height: "auto",
                              width: "100%",
                            }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}>
                          <div
                            data-testid="ShelfDrawerBtnContent"
                            className="Content--15Wyt Closed--2YzdP"
                            style={{ overflow: "hidden" }}
                          ></div>
                        </div>
                        <div style={{ width: "100%" }}></div>
                        <div style={{ width: "100%" }}>
                          <button
                            data-testid="ShelfDrawerBtn"
                            className="btn-transition-effect DrawerBtn--bdcva  "
                          >
                            {/* start action show hide content  */}
                            <div className="TitleContainer--2xD-b title-content">
                              <Accordion.Item
                                eventKey="7"
                                id="take-actions"
                              >
                                <Accordion.Header>
                                  Actions
                                </Accordion.Header>
                                <Accordion.Body id="track-top">
                                  <div className="row track-with">
                                    <span className="Title-track">
                                      1. On Tap:
                                    </span>

                                    {/* start dropdown origin */}
                                    <Accordion>
                                      <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                          <span>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="22"
                                              height="22"
                                              className="OptionIcon--1pjW4"
                                              viewBox="0 0 22 22"
                                            >
                                              <g
                                                fill="none"
                                                transform="translate(-11012.146 -515.646)"
                                              >
                                                <path
                                                  d="M0 0H20V20H0z"
                                                  transform="translate(11012.5 516)"
                                                ></path>
                                                <g
                                                  stroke="#4A90E2"
                                                  strokeWidth="1"
                                                  transform="translate(-255.5 116) translate(11268 400)"
                                                >
                                                  <g>
                                                    <circle
                                                      cx="10"
                                                      cy="10"
                                                      r="10"
                                                      stroke="none"
                                                    ></circle>
                                                    <circle
                                                      cx="10"
                                                      cy="10"
                                                      r="9.5"
                                                    ></circle>
                                                  </g>
                                                  <path d="M0 20L20 0"></path>
                                                </g>
                                              </g>
                                            </svg>{" "}
                                            No Action
                                          </span>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <div
                                            className=" "
                                            data-testid="MenuList"
                                          >
                                            <div
                                              className="Option--31oUF Active--37WPC HasNoIcon--3C9vr"
                                              data-testid="Option"
                                              title="Animate Model"
                                            >
                                              <div className="Container--Mc1y-">
                                                <span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    className="OptionIcon--1pjW4"
                                                    viewBox="0 0 20 20"
                                                  >
                                                    <g clipPath="url(#clip0_689_12380)">
                                                      <path
                                                        fill="none"
                                                        d="M0 0H20V20H0z"
                                                      ></path>
                                                      <path
                                                        fill="#B4BBC3"
                                                        fillRule="evenodd"
                                                        d="M17 7a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 100-6 3 3 0 000 6zM1.449 3.928A9.41 9.41 0 00-.098 3.49l.196-.98c.605.12 1.175.278 1.71.485a.5.5 0 01-.36.933zM4.04 5.013a.5.5 0 01.705.062c.68.812 1.244 1.829 1.718 3.095a.5.5 0 11-.937.35c-.445-1.188-.958-2.099-1.548-2.803a.5.5 0 01.062-.704zm8.951 3.12a6.017 6.017 0 00-.798.88.5.5 0 11-.796-.606c.372-.488.696-.815.935-1.025a3.658 3.658 0 01.376-.29l.027-.017.01-.006.004-.002.002-.001.249.433.248.434h.001l.002-.001.001-.001h.001l-.007.003a2.678 2.678 0 00-.255.2zm-6.186 2.981a.5.5 0 01.593.386c.214 1.013.403 2.134.57 3.376a.5.5 0 01-.99.134 45.844 45.844 0 00-.559-3.303.5.5 0 01.386-.593zm3.515.125a.5.5 0 01.265.655c-.37.872-.74 1.925-1.085 3.19a.5.5 0 11-.965-.263 26.03 26.03 0 011.13-3.317.5.5 0 01.655-.265zm-1.96 6.57a.5.5 0 01.405.58 48.774 48.774 0 00-.27 1.682l-.993-.031c-.047-.582-.096-1.144-.147-1.687a.5.5 0 01.702-.503.497.497 0 01.303-.041z"
                                                        clipRule="evenodd"
                                                      ></path>
                                                    </g>
                                                    <defs>
                                                      <clipPath id="clip0_689_12380">
                                                        <path
                                                          fill="none"
                                                          d="M0 0H20V20H0z"
                                                        ></path>
                                                      </clipPath>
                                                    </defs>
                                                  </svg>
                                                  Animate Model
                                                </span>
                                              </div>
                                            </div>
                                            <div
                                              className="Option--31oUF HasNoIcon--3C9vr"
                                              data-testid="Option"
                                              title="play sound"
                                            >
                                              <div className="Container--Mc1y-">
                                                <span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    className="OptionIcon--1pjW4"
                                                    viewBox="0 0 20 20"
                                                  >
                                                    <g data-name="Group 2">
                                                      <path
                                                        fill="none"
                                                        d="M0 0H20V20H0z"
                                                        data-name="Rectangle 68"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v11a.479.479 0 01-.455.5.469.469 0 01-.447-.41L0 11.5V.5A.479.479 0 01.455 0z"
                                                        data-name="Line Copy"
                                                        transform="translate(2.727 4)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v7a.479.479 0 01-.454.5.469.469 0 01-.447-.41L0 7.5v-7A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 7"
                                                        transform="translate(0 6)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v7a.479.479 0 01-.454.5.469.469 0 01-.447-.41L0 7.5v-7A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 6"
                                                        transform="translate(19.091 6)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v11a.479.479 0 01-.455.5.469.469 0 01-.447-.41L0 11.5V.5A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 5"
                                                        transform="translate(16.364 4)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v19a.479.479 0 01-.455.5.469.469 0 01-.447-.41L0 19.5V.5A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 4"
                                                        transform="translate(13.636)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v7a.479.479 0 01-.454.5.469.469 0 01-.447-.41L0 7.5v-7A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 2"
                                                        transform="translate(8.182 6)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v14a.479.479 0 01-.455.5.469.469 0 01-.447-.41L0 14.5V.5A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 3"
                                                        transform="translate(10.909 3)"
                                                      ></path>
                                                      <path
                                                        fill="#344B60"
                                                        d="M.455 0A.469.469 0 01.9.41L.909.5v14a.479.479 0 01-.455.5.469.469 0 01-.447-.41L0 14.5V.5A.479.479 0 01.455 0z"
                                                        data-name="Line Copy 9"
                                                        transform="translate(5.455 3)"
                                                      ></path>
                                                    </g>
                                                  </svg>{" "}
                                                  Play Sound
                                                </span>
                                              </div>
                                            </div>
                                            <div
                                              className="Option--31oUF HasNoIcon--3C9vr"
                                              data-testid="Option"
                                              title="play video"
                                            >
                                              <div className="Container--Mc1y-">
                                                <span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    className="OptionIcon--1pjW4"
                                                    viewBox="0 0 20 20"
                                                  >
                                                    <g
                                                      fill="none"
                                                      fillRule="evenodd"
                                                      stroke="none"
                                                      strokeWidth="1"
                                                    >
                                                      <path
                                                        fill="#B4BBC3"
                                                        fillRule="nonzero"
                                                        d="M14.5 27a1.5 1.5 0 011.415 1H29.5a.5.5 0 01.09.992L29.5 29H15.914a1.5 1.5 0 01-2.828 0H10.5a.5.5 0 01-.09-.992L10.5 28h2.585a1.5 1.5 0 011.415-1zm0 1a.5.5 0 100 1 .5.5 0 000-1zM29 10a1 1 0 011 1v13a1 1 0 01-1 1H11a1 1 0 01-1-1V11a1 1 0 011-1h18zm0 1H11v13h18V11zm-11.566 2.5a.91.91 0 01.464.127l5.131 3.034a.985.985 0 010 1.678l-5.131 3.033a.918.918 0 01-1.275-.36.992.992 0 01-.123-.479v-6.066c0-.534.418-.967.934-.967zm-.059 1v6l5.25-3-5.25-3z"
                                                        transform="translate(-10 -10)"
                                                      ></path>
                                                    </g>
                                                  </svg>
                                                  Play Video
                                                </span>
                                              </div>
                                            </div>

                                            <div
                                              className="Option--31oUF HasNoIcon--3C9vr"
                                              data-testid="Option"
                                              title="play video"
                                            >
                                              <div className="Container--Mc1y-">
                                                <span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    className="OptionIcon--1pjW4"
                                                    viewBox="0 0 20 20"
                                                  >
                                                    <g fill="none">
                                                      <path
                                                        d="M0 0H20V20H0z"
                                                        data-name="Rectangle 66"
                                                      ></path>
                                                      <g
                                                        stroke="#344B60"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="1"
                                                      >
                                                        <path
                                                          stroke="none"
                                                          d="M0 0h16.013a2 2 0 012 2v5.6a2 2 0 01-2 2H2a2 2 0 01-2-2V0z"
                                                          transform="translate(1.319 8.759)"
                                                        ></path>
                                                        <path
                                                          d="M1 .5h15.013a1.5 1.5 0 011.5 1.5v5.6a1.5 1.5 0 01-1.5 1.5H2A1.5 1.5 0 01.5 7.6V1A.5.5 0 011 .5z"
                                                          transform="translate(1.319 8.759)"
                                                        ></path>
                                                      </g>
                                                      <g
                                                        strokeMiterlimit="10"
                                                        data-name="Rectangle Copy 16"
                                                      >
                                                        <path
                                                          d="M0 1.6A1.592 1.592 0 011.851 0l14.8.931a1.99 1.99 0 011.92 1.672l.174 2.152L.165 3.59z"
                                                          transform="rotate(-17 18.41 2.255)"
                                                        ></path>
                                                        <path
                                                          fill="#344B60"
                                                          d="M1.712 1c-.25 0-.476.084-.605.224a.377.377 0 00-.106.3l.091 1.122 16.565 1.042-.08-1c-.027-.33-.439-.72-.987-.755l-14.801-.93A1.226 1.226 0 001.712 1m0-1c.046 0 .093.001.14.004l14.8.931c1.006.064 1.85.799 1.921 1.672l.174 2.152L.165 3.59l-.16-1.986C-.068.707.7 0 1.712 0z"
                                                          transform="rotate(-17 18.41 2.255)"
                                                        ></path>
                                                      </g>
                                                      <path
                                                        stroke="#344B60"
                                                        strokeLinecap="square"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="1"
                                                        d="M16.453 2.326l-.827 2.105"
                                                        data-name="Line 4 Copy 3"
                                                      ></path>
                                                      <path
                                                        stroke="#344B60"
                                                        strokeLinecap="square"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="1"
                                                        d="M12.455 3.105l-.91 2.191"
                                                        data-name="Line 4 Copy"
                                                      ></path>
                                                      <path
                                                        stroke="#344B60"
                                                        strokeLinecap="square"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="1"
                                                        d="M8.266 4.201l-.851 2.053"
                                                        data-name="Line 4 Copy 2"
                                                      ></path>
                                                      <path
                                                        stroke="#344B60"
                                                        strokeLinecap="square"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="1"
                                                        d="M4.026 5.297L3.188 7.46"
                                                        data-name="Line 4 Copy 4"
                                                      ></path>
                                                    </g>
                                                  </svg>
                                                  Links to scene
                                                </span>
                                              </div>
                                            </div>

                                            <div
                                              className="Option--31oUF HasNoIcon--3C9vr"
                                              data-testid="Option"
                                              title="play video"
                                            >
                                              <div className="Container--Mc1y-">
                                                <span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    className="OptionIcon--1pjW4"
                                                    viewBox="0 0 20 20"
                                                  >
                                                    <g
                                                      data-name="Atom/Icon/Social"
                                                      transform="translate(-3)"
                                                    >
                                                      <path
                                                        fill="#344B60"
                                                        d="M8.09 20h-.561a.451.451 0 01-.372-.17.506.506 0 01-.063-.453l1.193-5.639H4.1l-1.193 5.7a.643.643 0 01-.239.437.718.718 0 01-.417.125h-.589l1.32-6.262H.427a.426.426 0 01-.344-.127.643.643 0 01-.077-.453l.056-.409h3.073l1.151-5.5H.722l.084-.537c.038-.31.25-.467.632-.467h3L5.648.537a.6.6 0 01.217-.4A.686.686 0 016.294 0h.576L5.564 6.247h4.183L11.052 0h.589a.444.444 0 01.365.155.506.506 0 01.07.438L10.87 6.247H14l-.085.537a.5.5 0 01-.175.353.724.724 0 01-.443.113h-2.581l-1.151 5.5h3.158a.42.42 0 01.336.127.552.552 0 01.07.438l-.056.424H9.41L8.09 20zM5.409 7.251l-1.151 5.5h4.184l1.151-5.5z"
                                                        data-name="#"
                                                        transform="translate(3)"
                                                      ></path>
                                                    </g>
                                                  </svg>
                                                  Links to social
                                                  network
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                    {/* start dropdown origin */}
                                    <button
                                      data-testid="ShelfDrawerBtn"
                                      className="btn-action-save btn-upload DrawerBtn--bdcva Open--EFZA8 action-btn-save"
                                    >
                                      <div className="Title-action-save">
                                        {" "}
                                        Save
                                      </div>
                                    </button>
                                    <button
                                      data-testid="ShelfDrawerBtn"
                                      className="btn-action-cancel action-btn-cancel"
                                    >
                                      <div className="Title-action-cancel">
                                        Cancel
                                      </div>
                                    </button>
                                  </div>
                                </Accordion.Body>
                              </Accordion.Item>
                            </div>
                            {/* End actions show hide content  */}
                          </button>
                          {/* end actions content */}
                        </div>
                      </div>
                    </Accordion>
                  )}
                </div>
              </Tab.Pane>

              {!isContent && (
                <div
                  className="InspectorMenu--1PeA44 2D-3D-second-div"
                  data-testid="InspectorMenu"
                >
                  <div className="ShelfContainer--1Ad4O">
                    <div style={{ width: "100%" }}></div>
                  </div>

                  <div className="OuterContainer--1AGzZ bottom-2d-3d-height">
                    <div
                      className="Switcher2d3d--1SCbh Disabled--fqu6h"
                      data-testid="Switcher2d3d"
                    >
                      <button
                        className="Inactive--945so"
                        data-testid="ToggleOffButton"
                      >
                        2D
                      </button>

                      <label className="switch--1ZKOu">
                        <input
                          type="checkbox"
                          data-testid="ToggleState"
                          id="checkID"
                          onChange={thecheckfunction}
                        />
                        <span className="slider--y3Xl-"></span>
                      </label>

                      <button
                        className="Active--3YQI9"
                        data-testid="ToggleOnButton"
                      >
                        3D
                      </button>
                    </div>

                    <div
                      className="border-middle"
                      style={{
                        borderLeft: "1px solid rgb(178, 196, 215)",
                        width: "auto",
                        height: "16px",
                      }}
                    ></div>
                    <div className="ViewMenu--2ejhM">
                      <span>27%</span>
                    </div>
                  </div>
                </div>
              )}
            </Tab.Content>
            {/* End---- scene   */}
          </Col>
        </Row>
      </Tab.Container>
      </div>
  )
}

export default Content