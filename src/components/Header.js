import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (this.props.navChange) {
      if (window.scrollY > 80) {
        document.querySelector(".navbar").className =
          "navbar navbar-expand-sm fixed-top dark-nav";
      } else {
        document.querySelector(".navbar").className =
          "navbar navbar-expand-sm fixed-top navbar-light";
      }
    } else {
      document.querySelector(".navbar").className =
        "navbar navbar-expand-sm dark-nav";
    }
  };

  render() {
    let { from } = this.props;
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-expand-sm dark-nav">
            <div className="ml-2 mt-2">
              <NavLink onClick={() => this.setNav("home")} to="/">
                <img
                  className="logo"
                  src={"/assets/images/arte-logo.png"}
                  alt="logo"
                />
              </NavLink>
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
              <NavLink
                className={
                  from === "home" ? "active-nav nav-link" : "option nav-link"
                }
                to="/"
              >
                HOME
              </NavLink>

              <NavLink
                onClick={() => this.setNav("about")}
                className={
                  from === "about-us"
                    ? "active-nav nav-link"
                    : "option nav-link"
                }
                to="/about-us"
              >
                ABOUT
              </NavLink>

              <NavLink
                onClick={() => this.setNav("courses")}
                className={
                  from === "courses" ? "active-nav nav-link" : "option nav-link"
                }
                to="/courses"
              >
                COURSES
              </NavLink>

              <NavLink
                onClick={() => this.setNav("products")}
                className={
                  from === "products"
                    ? "active-nav nav-link"
                    : "option nav-link"
                }
                to="/products"
              >
                PRODUCTS
              </NavLink>

              <NavLink
                onClick={() => this.setNav("career")}
                className={
                  from === "career" ? "active-nav nav-link" : "option nav-link"
                }
                to="/career"
              >
                CAREER
              </NavLink>

              <NavLink
                onClick={() => this.setNav("contact-us")}
                className={
                  from === "contact-us"
                    ? "active-nav nav-link"
                    : "option nav-link"
                }
                to="/contact-us"
              >
                CONTACT US
              </NavLink>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
