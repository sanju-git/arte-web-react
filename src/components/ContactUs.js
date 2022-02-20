import React from "react";
import Header from "./Header";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaRegBuilding } from "react-icons/fa";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header from={"contact-us"} navChange={false} />
        </div>
        <div
          style={{ backgroundColor: "black", height: "100%", width: "100%" }}
        >
          <div className="row">
            <div
              style={{ height: "70vh" }}
              className="col-lg-6 d-flex align-items-center justify-content-center text-white"
            >
              <div>
                <h1>CONTACT US</h1>
              </div>
            </div>
            <div style={{ backgroundColor: "black" }} className="col-lg-6">
              <div
                style={{ height: "70vh" }}
                className="col-lg-6 d-flex align-items-center justify-content-center text-white"
              >
                <div>
                  <div>
                    <FiMail />
                    &nbsp;
                    <span>sanjavsn@gmail.com</span>
                  </div>
                  <div>
                    <FiPhone />
                    &nbsp;
                    <span>8110855090</span>
                  </div>
                  <div>
                    <FaRegBuilding />
                    &nbsp;
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUs;
