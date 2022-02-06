import React from "react";
import GalleryContainer from "./GalleryContainer";
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

        <div style={{ padding: 50, backgroundColor: "#f5f5f7" }} id="gallery">
          <GalleryContainer />
        </div>
        <div style={{ padding: 100 }}>
          <Testimonials />
        </div>
        <div style={{ padding: 100 }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
