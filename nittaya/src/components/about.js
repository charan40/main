/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import logo1 from '../picture/about/June/Me2.jpg';
import logo2 from '../picture/about/Zeen/Profile1.jpg';
import logo3 from '../picture/about/ohm/im12.jpg';
import logo4 from '../picture/about/Boat/me2.jpg';
import logo from '../picture/logo4.jpg'
import '../css/about.css'
class about extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          style={{
            backgroundColor: "rgb(221, 155, 80)"
          }}
        >
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "40px"
              }}
            />
          </a>
          {}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {}
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <form className="form-inline" action="/action_page.php" id="search">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              {}
              <li className="nav-item">
                <a className="nav-link" href="/result">
                  Search
                </a>
              </li>
            </form>
          </ul>
        </nav>
        {}
        <br />
        <br />
        <div className="abimage">
          <div className="row">
            <div
              className="col-sm-6"
              style={{
                textAlign: "center"
              }}
            >
              <a href="http://localhost:3030/june">
                <img  className = "abimg" src={logo1} alt="person1" />
              </a>
              <h2 className = "h22">Aekkaluk Panyacharoensri 6288031</h2>
            </div>
            <div
              className="col-sm-6"
              style={{
                textAlign: "center"
              }}
            >
              <a href="http://localhost:3030/zeen">
                <img className = "abimg" src={logo2} alt="person2" />
              </a>
              <h2 className = "h22">Charan Sirijaturontchai 6288043</h2>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div
              className="col-sm-6"
              style={{
                textAlign: "center"
              }}
            >
              <a href="http://localhost:3030/ohm">
                <img className = "abimg" src={logo3} alt="person3" />
              </a>
              <h2 className = "h22">Detbodi Wetsirikun 6288059</h2>
            </div>
            <div
              className="col-sm-6"
              style={{
                textAlign: "center"
              }}
            >
              <a href="http://localhost:3030/boat">
                <img className = "abimg" src={logo4} alt="person4" />
              </a>
              <h2 className = "h22">Krittitee Nildam 6288099</h2>
            </div>
          </div>
        </div>
        <footer>
          <audio controls autoPlay>
            {}
            <source src="pic/about/sound1.mp3" type="audio/mpeg" />
          </audio>
        </footer>
      </div>
    );
  }
}

export default about;
