import React from "react";

const TeamPage =()=>{
    return(
<div className="mainpage">

        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div className="w-100 text-white">
              <h4>Logo</h4>
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
          </div>
        </div>

    <div className="container-fluid project-pg">
        <div className="row">
            <div className="col-md-2 p-0 m-0 bg-light" >
                <div className="d-flex flex-column flex-shrink-0 p-3 ">
                    <ul className="nav nav-pills flex-column mb-auto">
                      <li className="nav-item">
                        <a href="#" className="nav-link active b1-bg-color"><i className="bi bi-grid pe-3"></i>Project</a>
                      </li>
                      <li>
                        <a href="/#/team" className="nav-link link-dark"><i className="bi bi-people-fill pe-3"></i>Team</a>
                      </li>
                    </ul>
                </div>
            </div>

            <div className="col-md-10 p-0 m-0 team-page">
              <h4 className="text-center m-3">The Lorem Team</h4>
              
                <div className="row sec-2 ">
                    <h4 className="mb-3">Lorem <a type="button" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-circle-fill pe-3"></i></a></h4>
                </div>
                
                <div className="row sec-1 ">
                  <table className="table">
                    <thead className="">
                      <tr>
                        <th colSpan="4">Name</th>
                        <th colSpan="2">Email</th>
                        <th colSpan="2">Permission Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="4"><img src="https://github.com/mdo.png" width="25" height="25" className="rounded-circle me-2" />Lorem ipsum</td>
                        <td colSpan="2">Loremipsum@email.com</td>
                        <td colSpan="2">Standard</td>
                      </tr>
                    </tbody>
                  </table>
                </div>  
                
                
  
            </div>

            


        </div>
    </div>
    

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h5 className="modal-title text-center" id="exampleModalLabel">Edit User Permissions</h5>
        <p className="modal-title text-center" id="exampleModalLabel">Loremipsum@email.com</p>  
        
        <p className="mt-5">Access Level</p>
        <select className="form-select" aria-label="Default select example">
          <option defaultValue>select Permission Level</option>
          <option value="1">Admin</option>
          <option value="2">Standard</option>
          <option value="3">Strict</option>
          <option value="3">Custom</option>
        </select>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Lorem Ipsum</label>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
export default TeamPage;