/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../css/homepage.css'
class foot extends React.Component {
  render() {
    return (
      <footer
        id="footer"
        style={{
          backgroundColor: "rgb(255, 255, 255)"
        }}
      >
        <div className="row">
          <div className="col-sm-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col c1">
                  <a href="#header">
                    <button className="btn bt btn-primary btn-block">
                      <b>Top</b>
                    </button>
                  </a>
                </div>
                <div className="col c1">
                  <a href="#recommended">
                    <button className="btn bt btn-primary btn-block">
                      <b>Recommended</b>
                    </button>
                  </a>
                </div>
                <div className="col c1">
                  <a href="#promotion">
                    <button className="btn bt btn-primary btn-block">
                      <b>Promotion</b>
                    </button>
                  </a>
                </div>
                <div className="col c1">
                  <a href="#footer">
                    <button className="btn bt btn-primary btn-block">
                      <b>Contact Us</b>
                    </button>
                  </a>
                </div>
                <div className="col c1">
                  <a href="#header">
                    <button className="btn bt btn-primary btn-block">
                      <b>Cart</b>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="#">Instragram</a>
                </li>
                <li>
                  <a href="#">FaceBook</a>
                </li>
                <li>
                  <a href="#">Line</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>Customer Service</h3>
              <ul>
                <li>Ladprao : 02-123-4567</li>
                <li>Lardpru : 02-123-4567</li>
                <li>Manilaa : 02-123-4567</li>
                <li>Hwangha : 02-123-4567</li>
                <li>Ferizhi : 02-123-4567</li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>About us</h3>
              <p>
                Delicious food comes from the principle of choosing the good
                times. Because we believe that food is delicious, it must come
                from the best ingredients combined with flavors that come from
                abroad. Because he knows no source of good food and good rice
                comes with food Because I cannot know the good size of the meat
                that is suitable for the inclination Because I love and happy to
                serve you. Because you are an important person ...
              </p>
            </div>
          </div>
          <p
            className="copyright"
            style={{
              textAlign: "center"
            }}
          >
            SSP © 2021
          </p>
        </div>
      </footer>
    );
  }
}

export default foot;
