import React, {useEffect} from "react";
import ArComponent from "./ImageTrackingAr";
import FaceTracking from "./FaceTracking";
const ImageArTracker=()=>{
      return(
            <div className="main-container">
                  <div className="ar-viewer">
                        <div className="canvas">
                        <ArComponent/>
                              
                        </div>
                  {/* <FaceTracking/> */}

                  </div>
            </div>
      )
}
export default ImageArTracker;