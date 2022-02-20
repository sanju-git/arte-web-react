import React from "react";
import Header from "./Header";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header from={"products"} navChange={false} />
        <div style={{ backgroundColor: "white", padding: 50 }}>
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <h3 className="pink-text">OUR PRODUCTS</h3>
            </div>
          </div>
          <div className="brush-bg-img">
            <div
              style={{ height: "70vh" }}
              className="d-flex align-items-center justify-content-center"
            >
              <div>
                <h1 className="text-white">FACE BRUSHES</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="prod-desc" style={{ padding: 50, marginTop: 50 }}>
          <div>
            <div className="d-flex align-items-center justify-content-center">
              <h3>Face brush</h3>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h2>Professional Makeup Brush</h2>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <div>
              <img src="/assets/images/brush.png" alt="brush" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-2">
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
