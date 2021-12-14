/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import fish2 from '../picture/homepage/fish2.jpg';
import somtum from '../picture/homepage/somtum.jpg';
import '../css/homepage.css'

class body5 extends React.Component {
  render() {
    return (
      <div className="row5body">
        {}
        <img src={fish2} alt="photo" className="imagess" />
        <div className="overlay">
          <img src={somtum} alt="photo" className="imagess" />
        </div>{" "}
        {}
      </div>
    );
  }
}

export default body5;
