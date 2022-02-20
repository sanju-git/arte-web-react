import React from "react";
import { useNavigate } from "react-router-dom";
import GalleryData from "./../models/GalleryData.json";

function GalleryContainer() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ letterSpacing: 5 }} className="pink-text text-center">
        GALLERY
      </h1>
      <p className="text-center pink-text">
        Lorem ipsum dolor sit amet, consectetur
      </p>
      <div className="row mt-3 d-flex align-items-center justify-content-center">
        {GalleryData.map((sec) => (
          <div className="col-lg-3 mx-5">
            <div
              className="con-1"
              onClick={() => navigate("gallery/" + sec.name)}
            >
              <div className="image-container">
                <img
                  src={"/assets/images/gallery/" + sec.thumbnail}
                  alt="Avatar"
                  className="image"
                  style={{ height: 400, width: 350 }}
                  id="myImg"
                />

                <div className="middle">
                  <div>
                    <p style={{ color: "white" }}>{sec.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ textTransform: "uppercase", fontWeight: "bolder" }}
              className="text-center mt-2"
            >
              <h5 style={{ fontWeight: "bolder", color: "black" }}>
                {sec.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div style={{ color: "black" }} className="mt-3">
        <p className="text-center">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt"
        </p>
        <p className="text-center">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default GalleryContainer;
