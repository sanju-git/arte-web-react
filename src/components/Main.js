import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="bg-img">
        <nav className="navbar navbar-expand-sm fixed-top navbar-light">
          <div className="ml-2 mt-2">
            {/* <a style={{ color: "white" }} className="navbar-brand" href="#">
              ArteMakeupAcademy
            </a> */}
            <img className="logo" src={"/assets/images/arte-logo.png"} />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar1"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="ml-1 mt-2 d-flex align-items-center justify-content-center collapse navbar-collapse"
            id="navbar1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item active mx-3">
                {" "}
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item active mx-3">
                {" "}
                <NavLink
                  style={{ color: "white" }}
                  className="nav-link"
                  to="/gallery"
                >
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item active mx-3">
                {" "}
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item active mx-3">
                {" "}
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Career
                </a>
              </li>
              <li className="nav-item active mx-3">
                {" "}
                <a style={{ color: "white" }} className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item active mx-3">
                {" "}
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item active mx-3">
                {" "}
                <a style={{ color: "white" }} className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      // <div>
      //   <header></header>
      //   <nav className="navbar navbar-expand-sm fixed-top navbar-light">
      //     <div className="container">
      //       <a style={{ color: "white" }} className="navbar-brand" href="#">
      //         ArteMakeupAcademy
      //       </a>
      //       <button
      //         className="navbar-toggler"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target="#navbar1"
      //       >
      //         <span className="navbar-toggler-icon"></span>
      //       </button>
      //       <div className="collapse navbar-collapse" id="navbar1">
      //         <ul className="nav navbar-nav navbar-right">
      //           <li className="nav-item active">
      //             <a style={{ color: "white" }} className="nav-link" href="#">
      //               Link
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a style={{ color: "white" }} className="nav-link" href="#">
      //               Link
      //             </a>
      //           </li>
      //         </ul>
      //         <ul className="navbar-nav ml-auto">
      //           <li className="nav-item active">
      //             <a style={{ color: "white" }} className="nav-link" href="#">
      //               Link
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}

export default Main;
