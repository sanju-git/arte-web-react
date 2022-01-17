import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="mx-2 social-icons">
            <a
              href="https://www.instagram.com/arte_makeup_academy/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="mx-2 social-icons">
            <a
              href="https://business.facebook.com/artemakeupacademy/?__xts__[0]=68.arc..."
              target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
