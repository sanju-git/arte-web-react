import React from "react";

const images = ["gal-1", "gal-2", "gal-3", "gal-4", "gal-5", "gal-6"];
class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showImageDialog = (imgName) => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = "/assets/images/" + imgName + ".jpeg";
  };

  closeDialog = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  render() {
    return (
      <div style={{ padding: 100 }}>
        <span className="pink-text">GALLERY</span>
        <h3>PORTFOLIO</h3>
        <hr className="line line-hr-secondary" />
        <div className="row d-flex align-items-center justify-content-evenly">
          {images &&
            images.length >= 1 &&
            images.map((img) => (
              <div
                onClick={() => this.showImageDialog(img)}
                className="col-lg-4 mb-5 container"
              >
                <img
                  src={"/assets/images/" + img + ".jpeg"}
                  alt="Avatar"
                  className="image"
                  style={{ height: 300, width: 300 }}
                  id="myImg"
                />
                <div className="middle">
                  <div className="text">+</div>
                </div>
              </div>
            ))}
        </div>
        <div>
          <div id="myModal" className="modal">
            <span onClick={this.closeDialog} className="close">
              &times;
            </span>

            <img
              style={{ height: 550, width: 550 }}
              className="modal-content"
              id="modal-img"
            />

            <div id="caption"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default GalleryView;
