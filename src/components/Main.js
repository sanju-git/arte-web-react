import React from "react";
import GalleryView from "./GallerView";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Header from "./Header";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div data-spy="scroll" data-target="navbar">
        <Header from={"home"} navChange={true} />
        <div className="bg-img"></div>
        <div style={{ backgroundColor: "#0f0f0f" }}>
          <div style={{ padding: 100 }} id="gallery">
            <GalleryView />
          </div>
          <div style={{ padding: 100 }} id="gallery">
            <Testimonials />
          </div>
          <div style={{ padding: 100 }} id="courses">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
