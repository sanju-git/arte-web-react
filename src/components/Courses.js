import React from "react";

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h5 className="pink-text">COURSES</h5>
        <h3 style={{ color: "white" }}>OUR COURSES</h3>
        <hr className="line line-hr-secondary" />
      </div>
    );
  }
}

export default Courses;
