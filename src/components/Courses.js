import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Header from "./Header";

const courses = [
  { name: "course 1" },
  { name: "course 2" },
  { name: "course 3" },
  { name: "course 4" },
];
class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header from={"courses"} navChange={false} />
        <div style={{ padding: 50 }}>
          <div>
            <h5 className="pink-text"> EXPLORE OUR COURSES</h5>
            <hr className="line pink-line-hr-secondary" />
          </div>
          <div>
            {courses.map((course) => (
              <div className="card p-3 my-3">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src={"/assets/images/gal-5.jpeg"}
                      alt="Avatar"
                      className="image"
                      style={{ height: 170, width: 250 }}
                      id="myImg"
                    />
                  </div>
                  <div className="col-md-7">
                    <h5>{course.name}</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <p
                      style={{
                        color: "#6a6f73",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontSize: 15,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div className="rating-star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
