import React ,{useState ,useRef , useEffect, Suspense} from "react";
import './target.css';
import { API } from "../../../src/config/api"
import axios from "axios"; 
import ModelAr from "../../test";
  


const Target =()=>{


  const [selectedFile, setVideoUrl] = useState(null);
const [newpath, setNewPath] = useState(null);

const handleInputChange = (event) => {
  console.log(event.target.value)
  setVideoUrl(event.target.files[0]);
};

useEffect(() => {
  if (selectedFile) {
    console.log('Done');
    const formData = new FormData();
    formData.append('video', selectedFile);
    console.log(selectedFile, "formData");

    axios.post(API.BASE_URL + 'video-upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(function (response) {
      console.log('File uploaded successfully', response);
      setNewPath(response.data.video? response.data.video : "")
      console.log("Video Path", newpath)
    })
    .catch(function(err) {
      console.error('Error uploading file', err);
    });
  }
}, [selectedFile]);



  const [Url , setUrl] = useState('');
  // Update the URL state when the user enters a new URL
  const handleChange = (event) => {
 setUrl(event.target.value);
  }

 // Generate a QR code with the current URL state
 const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(Url)}&size=200x200`;
 console.log(qrCodeUrl);

 
  

    return(
    <div className="targetPage">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div className="w-100 text-dark">
              <h5><i className="bi bi-chevron-left pe-4 fs-6"></i> Project 1</h5>
            </div>
    
            <div className="dropdown">
              <a href="#" className="d-block link-light text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/user.html#"><i className="bi bi-gear-fill pe-1"></i>User Setting</a></li>
                <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/media-library.html#"><i className="bi bi-collection-play pe-1"></i>Media Library</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="file:///C:/Users/USER/Downloads/Compressed/web-ar/login.html"><i className="bi bi-box-arrow-right pe-1"></i>Log out</a></li>
              </ul>
            </div>
            <button className="btn btn-1">Preview</button>
            <button className="btn btn-2">Publish</button>

          </div>
        </div>


    <div className="container-fluid target-page">
        <div className="row">

            <div className="col-md-1 p-0 m-0 bg-light" >
              <div className="d-flex flex-column flex-shrink-0 pt-3 ">
                  <ul className="nav nav-pills flex-column mb-auto " id="target-tabs-nav">
                    <li className="nav-item text-center">
                      <i className="bi bi-hand-index-thumb p-0 m-0"></i>
                      <a href="#tab1" className="nav-link p-0 m-0 fw-bold link-dark">Button</a>
                    </li>
                    <div className="ps-4 pe-4 pb-0 pt-0 fw-bolder"></div>
                    <li className="nav-item text-center">
                      <i className="bi bi-fonts p-0 m-0"></i>
                      <a href="#tab2" className="nav-link p-0 m-0 fw-bold link-dark" >Text</a>
                    </li>
                    <div className="ps-4 pe-4 pb-0 pt-0 fw-bolder"></div>
                    <li className="nav-item text-center">
                      <i className="bi bi-image p-0 m-0"></i>
                      <a href="#tab3" className="nav-link p-0 m-0 fw-bold link-dark" >Image</a>
                    </li>
                    <div className="ps-4 pe-4 pb-0 pt-0 fw-bolder"></div>
                    <li className="nav-item text-center">
                      <i className="bi bi-play-btn p-0 m-0"></i>

<form className="form" enctype="multipart/form-data">

                      <input  type="file" id="video-upload"  className="btn btn-dark border-1 border-dark pt-2 pe-5 ps-5 pb-2 text-white rounded-2" onChange={handleInputChange} />
                      </form>
                      <video src= {newpath} crossorigin="anonymous" id="uploaded-video" hidden/>


                      <a href="#tab4" className="nav-link p-0 m-0 fw-bold link-dark" >Video</a>
                    </li>
                    <div className="ps-4 pe-4 pb-0 pt-0 fw-bolder"></div>
                    <li className="nav-item text-center">
                      <i className="bi bi-box p-0 m-0"></i>
                      <input id="3dmodel" type="file" className="nav-link p-0 m-0 fw-bold link-dark" />3D
                    </li>
                    
                  </ul>
                  <div className="position-absolute bottom-0 pb-4 bottom-icon">
                    <i className="bi bi-stack p-0 m-0"></i>
                  </div>
              </div>
          


          <div id="target-tabs-content" className="target-tabs-content">

              <div id="tab1" className="tab-content button-cl">
                <h2>Buttons</h2>
                <h6 className="mt-3">Basic buttons</h6>
                <hr/>
                <div className="mb-3" >
                  <button className="btn btn-info border-1 border-info pt-2 pe-5 ps-5 pb-2 text-white rounded-0">Abc</button>
                  <button className="btn text-info border-1 border-info pt-2 pe-5 ps-5 pb-2 rounded-0">Abc</button>
                </div>

                <div className="mb-3" >
                  <button className="btn btn-info border-1 border-info pt-2 pe-5 ps-5 pb-2 text-white rounded-3">Abc</button>
                  <button className="btn text-info border-1 border-info pt-2 pe-5 ps-5 pb-2 rounded-3">Abc</button>
                </div>

                <div className="mb-3" >
                  <button className="btn btn-info border-1 border-info pt-2 pe-5 ps-5 pb-2 text-white rounded-5">Abc</button>
                  <button className="btn text-info border-1 border-info pt-2 pe-5 ps-5 pb-2 rounded-5">Abc</button>
                </div>

                <h6 className="mt-5">Social buttons</h6>
                <hr/>
                <div className="mb-3" >
                  <i className="bi bi-facebook p-2 m-3"></i>
                  <i className="bi bi-twitter p-2 m-3"></i>
                  <i className="bi bi-instagram p-2 m-3"></i>
                  <i className="bi bi-linkedin p-2 m-3"></i>
                  <i className="bi bi-tiktok p-2 m-3"></i>
                  <i className="bi bi-youtube p-2 m-3"></i>
                  <i className="bi bi-tiktok p-2 m-3"></i>
                  <i className="bi bi-youtube p-2 m-3"></i>
                </div>

                <div className="mb-3" >
                  <a className="btn btn-info pt-2 pe-4 ps-4 pb-2 text-white rounded-0 mt-2"><i className="bi bi-facebook pe-2"></i>Facebook</a>
                  <a className="btn btn-info pt-2 pe-4 ps-4 pb-2 text-white rounded-0 mt-2"><i className="bi bi-twitch pe-2"></i>Twitter</a>
                  <a className="btn btn-info pt-2 pe-4 ps-4 pb-2 text-white rounded-0 mt-2"><i className="bi bi-instagram pe-2"></i>Instagram</a>
                  <a className="btn btn-info pt-2 pe-4 ps-4 pb-2 text-white rounded-0 mt-2"><i className="bi bi-linkedin pe-2"></i>Linkedin</a>
                  <a className="btn btn-info pt-2 pe-4 ps-4 pb-2 text-white rounded-0 mt-2"><i className="bi bi-tiktok pe-2"></i>Tik Tok</a>
                  <a className="btn btn-info pt-2 pe-4 ps-4 pb-2 text-white rounded-0 mt-2"><i className="bi bi-youtube pe-2"></i>YouTube</a>  
                </div>
                
              </div>
              
              <div id="tab2" className="tab-content">
                <p className="m-0">Text</p>
                <p className="m-0 pt-2">Text Hierarchy</p>
                <hr/>
                <p className="m-0 fs-1">Add a heading</p>
                <p className="m-0 fs-4">Add a subheading</p>
                <p className="m-0 fs-6">Add a paragraph </p>

                <p className="m-0 pt-4">Themed text</p>
                <hr/>
                <div className="buttons">
                  <p className="m-0 fs-6 square">Lorem ipsum</p>
                  <p className="m-0 fs-6 square">Lorem ipsum</p>
                  <p className="m-0 fs-6 ellipse">Lorem ipsum</p>
                  <p className="m-0 fs-6 ellipse">Lorem ipsum</p>
                  <p className="m-0 fs-6 round">Lorem ipsum</p>
                  <p className="m-0 fs-6 round">Lorem ipsum</p>
                </div>

              </div>
              <div id="tab3" className="tab-content">
                <p className="m-0 fs-4 fw-semibold ">Image <i className="bi bi-question-circle text-muted fs-6"></i></p>
                <div className="mt-3" >
                   <button className="btn btn-dark border-1 border-dark pt-2 pe-5 ps-5 pb-2 text-white rounded-2" type="file" >                
 Browse media library
                  </button>
                  <button className="btn text-dark border-1 border-dark rounded-2"><i className="bi bi-upload"></i></button>
                </div>
                
              </div>
              <div id="tab4" className="tab-content">
                <p className="m-0 fs-4 fw-semibold">Videos <i className="bi bi-question-circle text-muted fs-6"></i></p>
                <div className="mt-3" >
                  <button className="btn btn-dark border-1 border-dark pt-2 pe-5 ps-5 pb-2 text-white rounded-2">Browse media library</button>
                  <button className="btn text-dark border-1 border-dark rounded-2"><i className="bi bi-upload"></i></button>
                </div>
              </div>
              <div id="tab5" className="tab-content">
                <p className="m-0 fs-4 fw-semibold">3D <i className="bi bi-question-circle text-muted fs-6"></i></p>
                <div className="mt-3" >
                  <input type="file" id="img-upload"  className="btn btn-dark border-1 border-dark pt-2 pe-5 ps-5 pb-2 text-white rounded-2" />
                  {/* >Browse media library</button> */}
                  <button className="btn text-dark border-1 border-dark rounded-2"><i className="bi bi-upload"></i></button>
                </div>
              </div>
          </div> 

        </div>  

            <div className="col-md-9 p-0 m-0"  id="tracker">

               {/* <Canvas >
                <Suspense> */}
                  <ModelAr />
                {/* </Suspense>
               </Canvas> */}

              </div>
   
             <div className="col-md-2 p-0 m-0 float-end">

              <div className="mb-3 pt-2 ps-2">
                <i className="bi bi-facebook ps-2"></i> Scene / <i className="bi bi-twitch ps-2"></i> Project
              </div>
              <p className="mb-3 pt-2 ps-4">Target Image</p>

              <input className="btn btn-info mb-3 ms-4 text-light bg-dark border-0" type="button" value="http://sayehbaz.ir/#/target" onClick={handleChange} />Upload target image
              <div className="right-side-down mb-3 pt-2 ps-4">
                2D <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch"   /> 3D 
                </div>
                <p>| <span>99%</span></p>
              </div>
             </div>

        </div>
    </div>
</div>
    )
}
export default Target;