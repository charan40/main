/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import somtum from '../picture/homepage/somtum.jpg';
import '../css/homepage.css'
class body2 extends React.Component {
  render() {
    return (
      <div className="row2body">
        <div className="container-fluid">
          <div className="row">
            <div className="col c1">
              {}
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
              <a href="#footer">
                <button className="btn bt btn-primary btn-block">
                  <b>Cart</b>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="container contain1" id="nittaya">
          {}
          <article>
            <h1
              style={{
                fontFamily: "cursive",
                color: "#000"
              }}
            >
              <b>From Nittaya</b>
            </h1>
            <p
              style={{
                color: "black",
                background: "blanchedalmond",
                opacity: "0.8",
                borderRadius: "10px",
                padding: "10px 10px 10px 10px"
              }}
            >
              Delicious food comes from the principle of choosing the good
              times. Because we believe that food is delicious, it must come
              from the best ingredients combined with flavors that come from
              abroad. Because he knows no source of good food and good rice
              comes with food Because I cannot know the good size of the meat
              that is suitable for the inclination Because I love and happy to
              serve you. Because you are an important person ...
            </p>
          </article>
          <img
            src={somtum}
            alt="picture"
            className="imgr2"
            style={{
              borderRadius: "50px"
            }}
          />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default body2;
