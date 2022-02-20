import React from "react";
import Header from "./Header";
import GalleryData from "./../models/GalleryData.json";
import Popup from "./Popup";

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  componentDidMount() {
    let view = window.location.pathname;
    view = view.substring(view.indexOf("y") + 2);
    let gallery = GalleryData.find((o) => o.name === view);
    this.setState({ gallery });
  }

  openPopup = (img) => {
    this.setState({ img, showPopup: true });
  };

  hidePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    let { gallery = {}, showPopup, img } = this.state;
    let images = gallery.images;
    return (
      <div>
        <div className="row">
          <Header from="home" navChange={false} />
        </div>
        <div>
          <div style={{ padding: "100px 100px 30px 100px" }}>
            <div className="d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h3>GIVE GOOD FACE</h3>
                <div>
                  <p>
                    Flaunt your makeup skills by mentioning @maccosmeticsindia
                    on your photo and you could be featured on our site!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f8f7f7",
              padding: 120,
              width:"100%"
            }}
          >
            <div className="row">
              {images &&
                images.length >= 1 &&
                images.map((img) => (
                  <div
                    style={{
                      marginTop: 1,
                      marginBottom: 1,
                    }}
                    className="col-lg-2 gallery-image-container"
                    onClick={() => this.openPopup(img)}
                  >
                    <div>
                      <img
                        src={"/assets/images/gallery/" + img}
                        alt="Avatar"
                        className="image"
                        style={{ height: 270, width: 270 }}
                        id="myImg"
                      />
                      <div className="middle">
                        <div>
                          <p
                            style={{
                              textDecoration: "underline",
                              fontWeight: "bolder",
                            }}
                          >
                            View
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {showPopup && <Popup show={true} img={img} onHide={this.hidePopup} />}
      </div>
    );
  }
}
export default GalleryView;
