import React from "react";
import Header from "./Header";

class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header from={"career"} navChange={false} />
        <div style={{ marginTop: 50 }}>
          <h5 className="pink-text">CAREER</h5>
          <h3 style={{ color: "white" }}>WORK WITH US</h3>
          <hr className="line line-hr-secondary" />
        </div>
      </div>
    );
  }
}

export default Career;
