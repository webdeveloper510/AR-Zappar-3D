import axios from 'axios';
import Tab from "react-bootstrap/Tab";
import React, { useContext, useState } from 'react'
import { contextObject } from '../ContextStore/ContextApi';
import { API } from '../../config/api';
import zIndex from '@material-ui/core/styles/zIndex';

const ButtonsDetail = ({imageObject,imageObject2}) => {
    const [selectedBtn, setselectedBtn] = useState(null);
    const ctx=useContext(contextObject);

    const AddButton=(event)=>{
        const datafull = document.getElementById(selectedBtn)
        console.log(datafull)
        const  text =datafull.innerHTML
        const BackColor = datafull.style.backgroundColor
        const button_width = datafull.style.width.replace("px",'')
        const height = datafull.style.height.replace("px",'')
        const color = datafull.style.color
        const align = datafull.style.alignItems
        const border = datafull.style.border
        const borderRadius = datafull.style.borderRadius
        const borderComponents = border.split(" ");
        const borderWidth = borderComponents[0];
        const borderStyle = borderComponents[1];
        const borderColor = borderComponents.slice(2).join(" ");


        axios.post(API.BASE_URL + "buttons/", {
          'scene_id':ctx.scene_id,
          'Button_name': text
        },{}).then(function (res){
         buttonTransform(res.data.id  , button_width , height)
         buttonTransition(res.data.id)
         buttonText(res.data.id ,text, color , align )
         buttonAppearance(res.data.id ,borderRadius , BackColor , borderWidth , borderStyle , borderColor)
         buttonAction(res.data.id)
        }).catch(function(err){
          console.log(err)
          })
      }
      const buttonTransform=(id , button_width ,height)=>{
        axios.post(API.BASE_URL + "button_transform/", {
          "button_Id":id,
          "width":button_width,
          "height":height,
          "depth":0,
          "position_x":0,
          "position_y":0,
          "position_d":0,
          "Rotation_x":0,
          "Rotation_y":0,
          "Rotation_z":0,
          "Mirror":null,
        },{}).then((res) => {}).catch((err) => {})
      }
      const buttonTransition=(id)=>{
        axios.post(API.BASE_URL + "button_transition/", {
          "button_Id":id,
          "transition_enter":null,
          "transition_exit":null,
          "height":0,
          "duration":0,
          "delay":0,
        },{}).then((res) => {}).catch((err) => {})
      }
      const buttonText=(id ,text, color , align)=>{
        axios.post(API.BASE_URL + "button_text/", {
          "button_Id":id,
          "text":text,
          "text_size":"10px",
          "text_font":"Arial",
          "link":null,
          "text_color":color,
          "alignment":align,
        },{}).then((res) => {}).catch((err) => {})
      }

      const buttonAppearance=(id ,borderRadius , BackColor , borderWidth , borderStyle , borderColor)=>{
        axios.post(API.BASE_URL + "button_appearance/", {
          "button_Id":id,
          "corner_radius":borderRadius,
          "fill_Color":BackColor,
          "border_width":`${borderWidth} ${borderStyle}`,
          "border_color":borderColor,
        },{}).then((res) => {}).catch((err) => {})
      }
    
      const buttonAction=(id)=>{
        axios.post(API.BASE_URL + "button_action/", {
          "button_Id":id,
          "button_action":null,
        },{}).then((res) => {}).catch((err) => {})
      }

  return (
    // <Tab.Container>
    <div
                  eventKey="first"
                    // eventKey={firstKey}
                    // eventKey={()=>{ (()=>{
                    //     if(EventKey==="first"){
                    //       setEventKey(null);
                    //       return null;
                    //     }else{
                    //       setEventKey("first");
                    //       return "first";
                    //     }
                    //   })()
                    // }
                    // }
                    // eventKey={isOpen ? "first" : null}
                    className="bg-light p-4 tab-content"
                    style={{zIndex:'9',width:'360px',height:'82%', boxShadow: '5px 0 5px -2px rgba(0, 0, 0, 0.1)',position:'absolute',left:'75px',top:'0px',
                    transition: '1s ease-in-out !important' }}
                  >
                    <h2 className="buttons-head">Buttons</h2>
                    <h6 className="btn-target-left mt-3">Basic buttons</h6>
                    <hr />
                    <div className="Grid--v4HT5">
                      <div
                        id="1d3f034a-16b5-4754-9763-7bbabfce9095"
                        style={{
                          width: "100px",
                          height: "36px",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: "rgb(150, 191, 239)",
                          border:
                            selectedBtn ===
                            "1d3f034a-16b5-4754-9763-7bbabfce9095"
                              ? "1px solid red"
                              : "",
                        }}
                        onClick={() => {
                          setselectedBtn(
                            "1d3f034a-16b5-4754-9763-7bbabfce9095"
                          );
                          console.log("Abc selected");
                        }}
                      >
                        Abc
                      </div>
                      <div
                        id="ee7d490e-21d2-4f1d-a51e-0546f4a40353"
                        style={{
                          width: "100px",
                          height: "36px",
                          color: "rgb(150, 191, 239)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: "transparent",
                          border: "2px solid rgb(150, 191, 239)",
                          border:
                            selectedBtn ===
                            "ee7d490e-21d2-4f1d-a51e-0546f4a40353"
                              ? "2px solid #0778e8"
                              : "2px solid rgb(150, 191, 239)",
                        }}
                        onClick={() => {
                          setselectedBtn(
                            "ee7d490e-21d2-4f1d-a51e-0546f4a40353"
                          );
                          console.log("Abc2 selected");
                        }}
                      >
                        Abc2
                      </div>
                      <div
                        id="d89f4b83-667d-46e8-b095-5eecc601a8e0"
                        style={{
                          width: "100px",
                          height: "36px",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: "rgb(150, 191, 239)",
                          border:
                            selectedBtn ===
                            "d89f4b83-667d-46e8-b095-5eecc601a8e0"
                              ? "1px solid red"
                              : "",
                        }}
                        onClick={() => {
                          setselectedBtn(
                            "d89f4b83-667d-46e8-b095-5eecc601a8e0"
                          );
                          console.log("Abc3 selected");
                        }}
                      >
                        Abc3
                      </div>
                      <div
                        id="9c3c290e-3f02-48e8-9862-711e33f6ef42"
                        style={{
                          width: "100px",
                          height: "36px",
                          color: "rgb(150, 191, 239)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: "transparent",
                          borderRadius: "6px",
                          border: "2px solid rgb(150, 191, 239)",
                          border:
                            selectedBtn ===
                            "9c3c290e-3f02-48e8-9862-711e33f6ef42"
                              ? "2px solid #0778e8"
                              : "2px solid rgb(150, 191, 239)",
                        }}
                        onClick={() => {
                          setselectedBtn(
                            "9c3c290e-3f02-48e8-9862-711e33f6ef42"
                          );
                          console.log("Abc4 selected");
                        }}
                      >
                        Abc4
                      </div>
                      <div
                        id="5115829b-42a0-4328-9dcb-9ab1a19719c7"
                        style={{
                          width: "100px",
                          height: "36px",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: " rgb(150, 191, 239)",
                          borderRadius: "36px",
                          border: "2px solid rgb(150, 191, 239)",
                          border:
                            selectedBtn ===
                            "5115829b-42a0-4328-9dcb-9ab1a19719c7"
                              ? "1px solid red"
                              : "",
                        }}
                        onClick={() => {
                          setselectedBtn(
                            "5115829b-42a0-4328-9dcb-9ab1a19719c7"
                          );
                          console.log("Abc5 selected");
                        }}
                      >
                        Abc5
                      </div>
                      <div
                        id="daf7cdff-ee9c-4873-a336-cbc5e4bc2bf3"
                        style={{
                          width: "100px",
                          height: "36px",
                          color: " rgb(150, 191, 239)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          backgroundColor: "transparent",
                          borderRadius: "36px",
                          border: "2px solid rgb(150, 191, 239)",
                          border:
                            selectedBtn ===
                            "daf7cdff-ee9c-4873-a336-cbc5e4bc2bf3"
                              ? "2px solid #0778e8"
                              : "2px solid rgb(150, 191, 239)",
                        }}
                        onClick={() => {
                          setselectedBtn(
                            "daf7cdff-ee9c-4873-a336-cbc5e4bc2bf3"
                          );
                          console.log("Abc6 selected");
                        }}
                      >
                        Abc6
                      </div>
                    </div>
                    <div className="Title--29AmM">
                      Social buttons
                      <div
                        className="TitleDivider--2R3vH"
                        style={{
                          borderTop: "1px solid rgb(178, 196, 215)",
                          height: "auto",
                          width: "100%",
                        }}
                      >
                        <div className="Grid--1NhFW">
                          {imageObject.map((img, i) => {
                            return (
                              <div
                                id={i}
                                draggable={true}
                                style={{
                                  display: "flex",
                                  cursor: "pointer",
                                  backgroundRepeat: "no-repeat",
                                  backgroundPosition: "50% 50%",
                                  backgroundSize: "contain",
                                  marginRight: "auto",
                                  marginLeft: "auto",
                                  backgroundImage: `url(${img})`,
                                  width: "38px",
                                  height: "38px",
                                  marginTop: "0px",
                                }}
                                data-texture={img}
                                onClick={() => {}}
                              ></div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="Grid--r1Nnn">
                        {imageObject2?.map((img2, i) => {
                          return (
                            <div
                              className="96d04a62-6acd-454f-b9fc"
                              id="96d04a62-6acd-454f-b9fc-bf348626c305"
                              style={{
                                display: "flex",
                                cursor: "pointer",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "50% 50%",
                                backgroundSize: "contain",
                                backgroundImage: `url(${img2})`,
                                width: "110px",
                                height: "39px",
                              }}
                              data-texture={img2}
                              onClick={() => {}}
                            ></div>
                          );
                        })}
                        {/* <div id="787f30b6-85d7-43e6-ad38-1f06eb3d2215" style={{display: "flex", cursor: "pointer", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%", backgroundSize: "contain", marginRight: "auto", marginLeft: "auto", backgroundImage: "url(&quot;https://d1mfzu0xo6h6ih.cloudfront.net/designer/facebook-sqr-v1.svg&quot", width: "38px", height: "38px", marginTop: "0px"}}></div> */}
                      </div>
                    </div>
                    <img
                      src=""
                      id="social-icon"
                      className="social-icon"
                      alt=""
                    ></img>
                        <button className="applybutton" onClick={AddButton}>
                          Apply
                        </button>
                  </div>
                //   </Tab.Container>
  )
}

export default ButtonsDetail