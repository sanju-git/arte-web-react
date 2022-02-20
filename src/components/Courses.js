import React from "react";
import { FaBookReader, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import Header from "./Header";

const courses = [
  {
    name: "Lorem ipsum dolor sit amet, consectetur",
    rating: 5,
    category: "Face care",
    lessons: 5,
    rate: 599,
  },
  {
    name: "course 2",
    rating: 4.5,
    category: "Skin care",
    lessons: 3,
    rate: 699,
  },
  { name: "course 3", rating: 4, category: "Hair care", lessons: 4, rate: 449 },
  {
    name: "Lorem ipsum dolor sit amet, consectetur",
    rating: 4.25,
    category: "Face care",
    lessons: 6,
    rate: 699,
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur",
    rating: 4.25,
    category: "Face care",
    lessons: 6,
    rate: 699,
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur",
    rating: 4.25,
    category: "Face care",
    lessons: 6,
    rate: 699,
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur",
    rating: 4.25,
    category: "Face care",
    lessons: 6,
    rate: 699,
  },
  {
    name: "Lorem ipsum dolor sit amet, consectetur",
    rating: 4.25,
    category: "Face care",
    lessons: 6,
    rate: 699,
  },
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
        <div>
          <div style={{ padding: 50 }}>
            <h2 className="text-center pink-text"> FEATURED COURSES</h2>
            <p style={{ letterSpacing: 3 }} className="text-center pink-text">
              Discover Your Perfect Program In Our Courses
            </p>
          </div>
          <div style={{ backgroundColor: "#f4f6fa" }}>
            <div style={{ padding: 50 }} className="row">
              <div>
                <h2>Featured courses</h2>
              </div>
              {courses.map((course) => (
                <div className="col-md-4">
                  <div className="card course-card my-3">
                    <div className="p-2">
                      <div>
                        <img
                          src={"/assets/images/gallery/gal-2.jpeg"}
                          alt="Avatar"
                          className="course-image"
                          id="myImg"
                          style={{ borderRadius: 5 }}
                        />
                      </div>
                      <div className="p-1">
                        <span
                          className="grey-text mt-1"
                          style={{
                            marginLeft: 3,
                          }}
                        >
                          {course.category}
                        </span>
                        <h4
                          className="mt-1"
                          style={{
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            minHeight: 56,
                          }}
                        >
                          {course.name}
                        </h4>
                        <div className="d-flex align-items-center">
                          <div className="rating-star">
                            <FaStar />
                            &nbsp; &nbsp;
                            <FaStar />
                            &nbsp; &nbsp;
                            <FaStar />
                            &nbsp; &nbsp;
                            <FaStar />
                            &nbsp; &nbsp;
                            <FaStarHalfAlt />
                          </div>
                          <div style={{ marginTop: 3, marginLeft: 20 }}>
                            <span
                              className="grey-text"
                              style={{
                                fontSize: "0.800rem",
                              }}
                            >
                              5.45 (5.8k+ reviews)
                            </span>
                          </div>
                        </div>
                        <div className="d-flex mt-1 justify-content-between">
                          <div className="grey-text d-flex">
                            <div>
                              <FaBookReader />
                            </div>
                            <div style={{ marginTop: 3, marginLeft: 5 }}>
                              <span>{course.lessons + " lessons"}</span>
                            </div>
                            <div className="ml-2" style={{ marginTop: 1 }}>
                              <BsClock />
                            </div>
                            <div
                              style={{
                                fontSize: "0.800rem",
                                marginLeft: 4,
                                marginTop: 6,
                              }}
                            >
                              <span>8h 22m</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <h5>{"₹" + course.rate}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
