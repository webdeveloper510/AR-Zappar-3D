import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/navbar";
import SideBar from "../SideBar/sidebar";
import mainbg from "../../assets/images/main-bg.jpg";
import backtop from '../../assets/SVG/back_top.svg';
const TeamPage = () => {
  const navigate = useNavigate();

  // const handleLogout = ()=>{
  //   localStorage.clear()
  //   toast.success('Log Out Successfully !');
  //   navigate('/');
  // }

  return (
    <div className="mainpage">
      <NavBar />

      <div className="main-page-content project-pg team-page">
        <div className="row project-pg">
          <SideBar />

          <div
            className="col-md-11 p-0 m-0 team-page"
            style={{ backgroundImage: `url(${backtop})` }}
          >
            <h4 className="text-center m-3 team-head">The Lorem Team</h4>

            {/* <div className="row sec-2 ">
                    <h4 className="mb-3">Lorem <a type="button" href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-plus-circle-fill pe-3"></i></a></h4>
                </div> */}

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
                    <td colSpan="4">
                      <img
                        src="https://github.com/mdo.png"
                        width="25"
                        height="25"
                        className="rounded-circle me-2"
                      />
                      Lorem ipsum
                    </td>
                    <td colSpan="2">Loremipsum@email.com</td>
                    <td colSpan="2">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Edit User Permissions
              </h5>
              <p className="modal-title text-center" id="exampleModalLabel">
                Loremipsum@email.com
              </p>

              <p className="mt-5">Access Level</p>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>select Permission Level</option>
                <option value="1">Admin</option>
                <option value="2">Standard</option>
                <option value="3">Strict</option>
                <option value="3">Custom</option>
              </select>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Lorem Ipsum
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamPage;
