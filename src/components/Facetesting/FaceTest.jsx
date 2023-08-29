import React from "react";
import Face from "./FaceTestModel";
const FaceTracking=()=>{
      return(
            <div className="main-tag">
            <div className="container">
            <div
              className="col-md-9 p-0 m-0 target-center"
              id="tracker"
            >
              <canvas
                id="canvas"
                width={window.innerWidth}
                height={window.innerHeight}
              >
              <Face />
                </canvas>
            </div>
            </div>
      </div>
      )
}
export default FaceTracking;