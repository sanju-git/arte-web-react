import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h5 className="pink-text">ABOUT</h5>
        <h3 style={{ color: "white" }}>HEAR ABOUT US</h3>
        <hr className="line line-hr-secondary" />
      </div>
    );
  }
}

export default About;
