import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { sideBarContentAction } from "../store/contentReducer";
import { contextObject } from "../ContextStore/ContextApi";
import { leftSideBarAction } from "../store/LeftSideBarReducer";

const Applets = ({
  getImage,
  getVideo,
  setselectedText,
  seturlVdo,
  getText,
  get3Dmodel
}) => {
  const dispatch = useDispatch();
  const ctx=useContext(contextObject);
  return (
    <div
      // eventKey="sixth"
      // eventKey={isOpen ? "sixth" : null}
      // onClick={() => setisOpen(!isOpen)}
      className="bg-light p-4 tab-content"
      style={{
        zIndex: "9",
        width: "360px",
        height: "auto",
        position: "absolute",
        left: "75px",
        top: "0px",
        boxShadow: "5px 0 5px -2px rgba(0, 0, 0, 0.1)",
        transition: '.7s ease'
      }}
    >
      <p className="m-0 scene-objects">Scene Objects</p>
      <div className="mt-3">
        <div class="screen-layer">
          <span>Screen Layer</span>
        </div>
        {getImage?.map((itm) => {
          return (
            <div class="video_file">
              <span
                class="videp_file_txt"
                onClick={() => {
                  // setisContent(false);
                  dispatch(sideBarContentAction.setContent(false));
                  setselectedText(null);
                  dispatch(sideBarContentAction.setcontentImgVdo(itm));
                  ctx.setcontentImgVdo(itm);
                  dispatch(sideBarContentAction.settoUpdateDimensions());
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <path
                      fill="#344B60"
                      fillRule="nonzero"
                      d="M15 14.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.475 11.504h-8.473v-3.066c.729-.714 1.877-1.438 3.498-1.438.676 0 1.641.174 2.483.659a5.039 5.039 0 012.492 3.845zm9.522-3.906l.08 4.002-8.597-.096c-.237-2.763-2.159-4.132-2.318-4.25a6.038 6.038 0 015.338-3.263c1.89 0 4.3.985 5.497 3.607zM11.002 13h18.002v8.175c-.91-1.175-2.807-2.678-5.504-2.678-2.607 0-5.005 1.492-6.173 3.71a5.956 5.956 0 00-2.827-.712 6.186 6.186 0 00-3.498 1.124V13zm-.546-1a.469.469 0 00-.456.44v15.12c.01.239.209.43.456.44h19.088a.469.469 0 00.456-.44V12.44a.466.466 0 00-.404-.44h-19.14z"
                      transform="translate(-10 -12)"
                    ></path>
                  </g>
                </svg>

                {
                  itm[0].image_url.split("/")[
                    itm[0].image_url.split("/").length - 1
                  ]
                }
              </span>
            </div>
          );
        })}

        {getVideo?.map((itm) => {
          return (
            <div class="video_file">
              <span
                class="videp_file_txt"
                onClick={(e) => {
                  dispatch(sideBarContentAction.setContent(false));
                  dispatch(sideBarContentAction.setcontentImgVdo(null));
                  setTimeout(() => {
                    dispatch(sideBarContentAction.setcontentImgVdo(itm));
                    ctx.setcontentImgVdo(itm);
                    dispatch(sideBarContentAction.settoUpdateDimensions());


                  }, 0);
                  console.log(itm, "from getVideo<---------------------");
                  setselectedText(null);
                  setTimeout(() => {
                    seturlVdo((p) => !p);
                  }, 0);

                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="none"
                    stroke-width="1"
                  >
                    <path
                      fill="#344B60"
                      fill-rule="nonzero"
                      d="M14.5 27a1.5 1.5 0 011.415 1H29.5a.5.5 0 01.09.992L29.5 29H15.914a1.5 1.5 0 01-2.828 0H10.5a.5.5 0 01-.09-.992L10.5 28h2.585a1.5 1.5 0 011.415-1zm0 1a.5.5 0 100 1 .5.5 0 000-1zM29 10a1 1 0 011 1v13a1 1 0 01-1 1H11a1 1 0 01-1-1V11a1 1 0 011-1h18zm0 1H11v13h18V11zm-11.566 2.5a.91.91 0 01.464.127l5.131 3.034a.985.985 0 010 1.678l-5.131 3.033a.918.918 0 01-1.275-.36.992.992 0 01-.123-.479v-6.066c0-.534.418-.967.934-.967zm-.059 1v6l5.25-3-5.25-3z"
                      transform="translate(-10 -10)"
                    ></path>
                  </g>
                </svg>

                {
                  itm[0].video_url.split("/")[
                    itm[0].video_url.split("/").length - 1
                  ]
                }
              </span>
            </div>
          );
        })}

        {getText?.map((text) => (
          <div
            className="textfield"
            onClick={() => {
              dispatch(sideBarContentAction.setcontentImgVdo(text));
              dispatch(sideBarContentAction.settoUpdateDimensions());
              dispatch(sideBarContentAction.setContent(false));
            }}
          >
            <span className="text-format">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6%"
                height="6%"
                viewBox="0 0 15 20"
              >
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <path
                    fill="#073158"
                    fillRule="nonzero"
                    d="M27.4694534 11.225L21.2234727 11.225 21.2234727 30 19.812701 30 19.812701 11.225 13 11.225 13 10 28 10 28 11.225z"
                    transform="translate(-13 -10)"
                  ></path>
                </g>
              </svg>
              {text[0].button_name}
            </span>
          </div>
        ))}


        {get3Dmodel?.map((model)=>(
          <div className="model3d" onClick={()=>{
            dispatch(sideBarContentAction.setcontentImgVdo(model))
            
          }}>

            <span className="text-format">
                <svg xmlns="http://www.w3.org/2000/svg"   width="6%"
                height="6%" viewBox="0 0 18 20">
                <path
                  fill="#073158"
                  fillRule="nonzero"
                  d="M19.735 10.065a.557.557 0 01.52 0l8.43 4.477a.518.518 0 01.234.19c.054.08.08.169.081.257V25c0 .18-.103.347-.27.435l-8.47 4.5a.557.557 0 01-.52 0l-8.47-4.5A.496.496 0 0111 25l.013-9.896a.463.463 0 01.068-.371.525.525 0 01.292-.21zm-7.721 5.791L12 24.746l7.5 3.988.002-8.519-7.488-4.359zM28 15.847l-7.498 4.356-.002 8.531 7.5-3.988v-8.899zM19.996 11l-7.476 3.988 7.472 4.349 7.492-4.353L19.996 11z"
                  transform="translate(-11 -10)"
                ></path>
              </svg>
                {model[0].file_url.split("/")[
                  model[0].file_url.split("/").length -1
                ]}
            </span>
          </div>
        ))}

        <div class="AR_layer_div">
          <div class="screen-layer">
            <span>AR Layer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applets;
