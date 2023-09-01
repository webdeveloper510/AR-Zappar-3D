import React, { useContext } from 'react'
import { contextObject } from '../ContextStore/ContextApi';

const ModalDetail = ({setshowPopHandle,setuploadAll,inputCallingFunction}) => {

const ctx=useContext(contextObject);

  return (
    <div
    // eventKey="fifth"
    // eventKey={isOpen ? "fifth" : null}
    // onClick={() => setisOpen(!isOpen)}
    className="bg-light p-4 tab-content"
    style={{zIndex:'9',width:'360px',height:'auto',boxShadow: '5px 0 5px -2px rgba(0, 0, 0, 0.1)',position:'absolute',left:'75px',top:'0px', 
    transition: '.7s ease' }}
  >
    <p className="m-0 fs-4 fw-semibold">3D</p>

    <div className="mt-3" id="threeD-modal-popup">
      <div className="images-btn-outer">
        <div className="browse-btn-outer">
          <button
            className="btn rounded-2"
            id="browse-btn"
            // onClick={handleshowthreedmodal}
            onClick={() => {
              setshowPopHandle(true);
              setuploadAll(true);
            }}
          >
            Browse media library
          </button>
        </div>
        <div className="upload-btn-outer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <g clipPath="url(#clip0_1953_9492)">
              <path
                fill="#4A90E2"
                d="M.8 9.2a.4.4 0 01-.394-.328L.4 8.8V1.6C.4.985.835.465 1.41.406L1.52.4h12.96c.591 0 1.062.484 1.115 1.086l.005.114v7.2a.4.4 0 01-.794.072L14.8 8.8V1.6c0-.204-.121-.361-.265-.394L14.48 1.2H1.52c-.148 0-.286.134-.315.326L1.2 1.6v7.2a.4.4 0 01-.4.4zm7.2 6a.4.4 0 01-.394-.328L7.6 14.8V6.966L5.883 8.683l-.056.046a.4.4 0 01-.51-.612l2.4-2.4a.398.398 0 01.182-.104l.067-.012h.068a.398.398 0 01.193.07l.056.046 2.4 2.4a.4.4 0 01-.51.612l-.056-.046L8.4 6.966V14.8a.4.4 0 01-.4.4z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1953_9492">
                <path fill="#fff" d="M0 0H16V16H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <input
            class="3D-modal-upload"
            type="file"
            id="img-upload"
            // onChange={handle3Dmodel}
            onChange={(e) => inputCallingFunction(e)}
          />
        </div>
      </div>
    </div>

    <div className="row mt-3">
      {ctx.selected3D?.map((image, index) => (
        <div className="col-md-6" key={index}>
          <img
            src={image[0].file_url}
            alt={`Image ${index + 1}`}
            className="img-fluid"
            style={{
              width: "100%",
              height: "160px",
              marginTop: "10px",
            }}
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ModalDetail