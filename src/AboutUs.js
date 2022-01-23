import React from "react";
import Header from "./components/Header";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">
          <Header from="about-us" navChange={false} />
        </div>
        <div style={{ marginTop: 1 }}>
          <div className="pink-bg" style={{ padding: 45 }}>
            <div>
              <h4 className="text-white">ABOUT US</h4>
              <hr className="line line-hr-secondary" />
            </div>
            <div className="about-bg-img mt-2"></div>
          </div>
        </div>
        <div style={{ padding: 70 }} className="row">
          <div className="col-md-2">
            <h4>WHO WE ARE</h4>
          </div>
          <div className="col-md-3">
            <div>
              <h4>WHAT MAKES UP M·A·C</h4>
            </div>
            <div>
              <p>
                M·A·C is the world’s leading professional makeup authority
                because of our unrivalled expertise in makeup ARTISTRY.
              </p>
              <p>
                M·A·C celebrates diversity and INDIVIDUALITY – we are for All
                Ages, All Races, All Sexes. M·A·C is a proud COMMUNITY of
                professional makeup artists working together to bring our vision
                to life.
              </p>
              <p>
                M·A·C is at the forefront of fashion TRENDSETTING, collaborating
                with leading talents from fashion, art and popular culture. Our
                Artists create trends backstage at fashion weeks around the
                world.
              </p>
              <p>
                M·A·C believes in SOCIAL RESPONSIBILITY, with initiatives such
                as VIVA GLAM and the M·A·C AIDS Fund at the heart and soul of
                our unique culture.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <h4>BIRTH OF A CULT: FROM WOW TO NOW!</h4>
            </div>
            <div>
              <p>
                All Ages, All Races, All Sexes… A professional makeup brand
                setting trends backstage at fashion weeks around the world.
                Today, M·A·C means so many things to its millions of fans in
                every corner of the planet, but a global beauty phenomenon has
                to begin somewhere.
              </p>
              <p>
                Make-Up Art Cosmetics started life in Toronto, Canada. Makeup
                artist and photographer Frank Toskan and salon owner Frank
                Angelo became frustrated by the lack of makeup that photographed
                well, so they decided to create their own.
              </p>
              <p>
                At first, they made the cosmetics in their kitchen and sold them
                straight from the salon to fellow makeup artists, as well as
                models and photographers. Soon, stylists and fashion editors got
                in on the action.
              </p>
              <p>
                As the magazine credits racked up and word-of-mouth popularity
                grew, the duo launched M·A·C in March 1984 from a counter in a
                Toronto department store.
              </p>
              <p>
                Their approach was chic utility, with the makeup coming in black
                pots rather than compacts.
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <h4>BIRTH OF A CULT: FROM WOW TO NOW!</h4>
            </div>
            <div>
              <p>
                All Ages, All Races, All Sexes… A professional makeup brand
                setting trends backstage at fashion weeks around the world.
                Today, M·A·C means so many things to its millions of fans in
                every corner of the planet, but a global beauty phenomenon has
                to begin somewhere.
              </p>
              <p>
                Make-Up Art Cosmetics started life in Toronto, Canada. Makeup
                artist and photographer Frank Toskan and salon owner Frank
                Angelo became frustrated by the lack of makeup that photographed
                well, so they decided to create their own.
              </p>
              <p>
                At first, they made the cosmetics in their kitchen and sold them
                straight from the salon to fellow makeup artists, as well as
                models and photographers. Soon, stylists and fashion editors got
                in on the action.
              </p>
              <p>
                As the magazine credits racked up and word-of-mouth popularity
                grew, the duo launched M·A·C in March 1984 from a counter in a
                Toronto department store.
              </p>
              <p>
                Their approach was chic utility, with the makeup coming in black
                pots rather than compacts.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
