import React, {useEffect} from "react";
import ArComponent from "./ImageTrackingAr";
import FaceTracking from "./FaceTracking";
import WorldTracking from "./WorldTracking";
const ImageArTracker=()=>{
      return(
            <div className="main-container">
                  <div className="ar-viewer">
                        <div className="canvas">
                        <ArComponent/>
                        {/* <WorldTracking /> */}
                        <div id="tap-to-place" style={{position: 'fixed',
                        bottom: "20px",
                        left: "50%",
                        right: "0px",
                        borderRadius: "15px",
                        background: "black",
                        color: "white",
                        width: "200px",
                        marginLeft:" -100px",
                        textAlign: "center",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontFamily: "sans-serif",
                        textTransform: "uppercase"}}>Tap to Place</div>
                        </div>
                  {/* <FaceTracking/> */}

                  </div>
            </div>
      )
}
export default ImageArTracker;