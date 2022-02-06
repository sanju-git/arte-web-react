import React from "react";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 style={{ letterSpacing: 5 }} className="text-center">
          TESTIMONIALS
        </h1>
        <p className="text-center">Let's hear from our customers</p>
        <hr classNameName="line line-hr-secondary" />
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
          <div className="col-5">
            <div className="card card-block card-1">
              <div style={{ fontSize: 25, padding: 27 }}>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
                <p className="text-end">- Sanjeev</p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card card-block card-2"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-3"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-4"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-5"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-6"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-7"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-8"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-9"></div>
          </div>
          <div className="col-5">
            <div className="card card-block card-10"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
