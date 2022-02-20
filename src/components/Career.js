import React from "react";
import Header from "./Header";
import { MdOutlineHealthAndSafety, MdFamilyRestroom } from "react-icons/md";
import { GiMeditation } from "react-icons/gi";
import OpenPositions from "./OpenPositions";
import Footer from "./Footer";


class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header from={"career"} navChange={false} />
        <div>
          <div style={{ backgroundColor: "black", height: "100%" }}>
            <div>
              <div style={{ padding: 150 }}>
                <h1
                  style={{ letterSpacing: 10, fontSize: "5.75rem" }}
                  className="text-center grad-text"
                >
                  WORK WITH US
                </h1>
                <p
                  style={{ letterSpacing: 3 }}
                  className="text-center text-white mt-3"
                >
                  Join our team to help shape the future of entertainment for
                  passionate fan communities.
                </p>
                <div className="text-center">
                  <a href="#openPositions">
                    <div
                      type="button"
                      className="mt-3 btn btn-lg btn-outline-white"
                    >
                      See All Positions
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid white" }}>
              <div style={{ padding: 100 }}>
                <div>
                  <h4 className="text-white">{"PERKS & BENEFITS"}</h4>
                  <div className="row">
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <MdOutlineHealthAndSafety />
                      </div>
                      <div className="text-white text-center">
                        <h3>Stay healthy</h3>
                        <p>
                          Health, dental, vision, disability, & life insurance,
                          FSA
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <MdFamilyRestroom />
                      </div>
                      <div className="text-white text-center">
                        <h3>Family Matters</h3>
                        <p>
                          Non-birthing parents will be paid 100% for up to 12
                          weeks, Birthing parents will be paid up 100% for up to
                          22 weeks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <GiMeditation />
                      </div>
                      <div className="text-white text-center">
                        <h3>Find Balance</h3>
                        <p>On-site gym & wellness classes</p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <MdFamilyRestroom />
                      </div>
                      <div className="text-white text-center">
                        <h3>Family Matters</h3>
                        <p>
                          Non-birthing parents will be paid 100% for up to 12
                          weeks, Birthing parents will be paid up 100% for up to
                          22 weeks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <MdOutlineHealthAndSafety />
                      </div>
                      <div className="text-white text-center">
                        <h3>Family Matters</h3>
                        <p>
                          Non-birthing parents will be paid 100% for up to 12
                          weeks, Birthing parents will be paid up 100% for up to
                          22 weeks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <GiMeditation />
                      </div>
                      <div className="text-white text-center">
                        <h3>Family Matters</h3>
                        <p>
                          Non-birthing parents will be paid 100% for up to 12
                          weeks, Birthing parents will be paid up 100% for up to
                          22 weeks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <MdFamilyRestroom />
                      </div>
                      <div className="text-white text-center">
                        <h3>Family Matters</h3>
                        <p>
                          Non-birthing parents will be paid 100% for up to 12
                          weeks, Birthing parents will be paid up 100% for up to
                          22 weeks
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 mx-5">
                      <div className="perks-icons text-center">
                        <GiMeditation />
                      </div>
                      <div className="text-white text-center">
                        <h3>Family Matters</h3>
                        <p>
                          Non-birthing parents will be paid 100% for up to 12
                          weeks, Birthing parents will be paid up 100% for up to
                          22 weeks
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid white" }}>
              <div className="mt-5">
                <h1
                  style={{ letterSpacing: 10, fontSize: "5.75rem" }}
                  className="text-center grad-text"
                >
                  OPEN POSITIONS
                </h1>
              </div>
              <div
                id="openPositions"
                style={{ paddingLeft: 130, paddingRight: 130, paddingTop: 100 }}
              >
                <OpenPositions />
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: 100, backgroundColor: "black" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Career;
