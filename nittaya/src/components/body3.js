/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import fish from '../picture/homepage/fish.jpg';
import tomsab from '../picture/homepage/tomsab.jpg';
import '../css/homepage.css'

class body3 extends React.Component {
  render() {
    return (
      <div className="row3body">
        <img src={fish} alt="photo" className="imagess" />
        <div className="overlay">
          <img src={tomsab} alt="photo" className="imagess" />
        </div>
      </div>
    );
  }
}

export default body3;
