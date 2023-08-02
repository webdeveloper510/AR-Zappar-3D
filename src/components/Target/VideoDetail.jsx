import React, { useContext } from 'react'
import { contextObject } from '../ContextStore/ContextApi';

const VideoDetail = ({setshowPopHandle,setuploadAll,inputCallingFunction}) => {

    const ctx=useContext(contextObject);

  return (
    <div
    // eventKey="fourth"
    // eventKey={isOpen ? "fourth" : null}
    // onClick={() => setisOpen(!isOpen)}
    className="bg-light p-4 tab-content"
    style={{zIndex:'9',width:'360px',height:'auto', boxShadow: '5px 0 5px -2px rgba(0, 0, 0, 0.1)',position:'absolute',left:'75px',top:'0px' }}
  >
    <p className="m-0 fs-4 fw-semibold">
      Videos
      <i className="bi bi-question-circle text-muted fs-6"></i>
    </p>

    <div className="mt-3" id="videos-popup">
      <div className="images-btn-outer">
        <div className="browse-btn-outer">
          <button
            className="btn rounded-2"
            id="browse-btn"
            // onClick={handleshowvideomedia}
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
            class="video-upload"
            type="file"
            id="img-upload"
            onChange={inputCallingFunction}
          />
        </div>
      </div>
    </div>

    <div className="row mt-3">
      {ctx.selectedVideos.map((video, index) => (
        <div className="col-md-12" key={index}>
          <video
            // controls
            style={{
              width: "100%",
              height: "auto",
              marginTop: "10px",
            }}
            onMouseOver={(e) => e.target.play()}
            onMouseOut={(e) => e.target.pause()}
          >
            <source src={video[0].video_url} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  </div>
  )
}

export default VideoDetail