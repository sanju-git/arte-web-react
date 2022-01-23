import React from "react";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h5 className="pink-text">Testimonials</h5>
        <h3 style={{ color: "white" }}>What our customers says</h3>
        <hr className="line line-hr-secondary" />
      </div>
    );
  }
}

export default Testimonials;
