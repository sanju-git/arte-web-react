import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h5 className="pink-text">PRODUCTS</h5>
        <h3 style={{ color: "white" }}>OUR PRODUCTS</h3>
        <hr className="line line-hr-secondary" />
      </div>
    );
  }
}

export default Products;
