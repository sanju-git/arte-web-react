import React from "react";
import Courses from "./Courses";
import GalleryView from "./GallerView";
import Footer from "./Footer";
import Career from "./Career";
import About from "./About";
import Products from "./Products";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setColorchange: false, option: "home" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 80) {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-sm fixed-top dark-nav";
    } else {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-sm fixed-top navbar-light";
    }
  };

  setOption = (option) => {
    this.setState({ option });
  };
  render() {
    let { option } = this.state;
    return (
      <div data-spy="scroll" data-target="navbar">
        <div className="bg-img">
          <nav className="navbar navbar-expand-sm fixed-top navbar-light">
            <div className="ml-2 mt-2">
              <a href="#">
                <img className="logo" src={"/assets/images/arte-logo.png"} />
              </a>
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
                  <a
                    onClick={() => this.setOption("home")}
                    className={
                      option === "home"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item active mx-3">
                  <a
                    onClick={() => this.setOption("gallery")}
                    className={
                      option === "gallery"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#gallery"
                  >
                    GALLERY
                  </a>
                </li>
                <li className="nav-item active mx-3">
                  <a
                    onClick={() => this.setOption("courses")}
                    className={
                      option === "courses"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#courses"
                  >
                    COURSES
                  </a>
                </li>
                <li className="nav-item active mx-3">
                  <a
                    onClick={() => this.setOption("career")}
                    className={
                      option === "career"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#career"
                  >
                    CAREER
                  </a>
                </li>
                <li className="nav-item active mx-3">
                  <a
                    onClick={() => this.setOption("about")}
                    className={
                      option === "about"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item active mx-3">
                  <a
                    onClick={() => this.setOption("products")}
                    className={
                      option === "products"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#products"
                  >
                    PRODUCTS
                  </a>
                </li>
                <li className="nav-item active mx-3">
                  <a
                    onClick={() => this.setOption("testimonials")}
                    className={
                      option === "testimonials"
                        ? "active-option nav-link"
                        : "option nav-link"
                    }
                    href="#"
                  >
                    TESTIMONIALS
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div style={{ backgroundColor: "#0f0f0f" }}>
          <div style={{ padding: 100 }} id="gallery">
            <GalleryView />
          </div>
          <div style={{ padding: 100 }} id="courses">
            <Courses />
          </div>
          <div style={{ padding: 100 }} id="career">
            <Career />
          </div>
          <div style={{ padding: 100 }} id="about">
            <About />
          </div>
          <div style={{ padding: 100 }} id="products">
            <Products />
          </div>
          <div style={{ padding: 100 }} id="courses">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
