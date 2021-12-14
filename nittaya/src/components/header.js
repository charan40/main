import React from "react";
import logo from '../picture/logo4.jpg';
import chicken2 from '../picture/homepage/chcken2.png';
import '../css/homepage.css'

class head extends React.Component {
  render() {
    return (
      <header id="header">
        {}
        {}
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          style={{
            backgroundColor: "rgb(221, 155, 80)"
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "40px"
            }}
          />
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
                Login/Register
              </a>
            </li>
            <form className="form-inline" action="/action_page.php" id="search">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
              />
              <li className="nav-item">
                <a className="nav-link" href="/result">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/adminlogin"
                  id="admin1"
                >
                  Admin
                </a>
              </li>
            </form>
          </ul>
        </nav>
        {}
        <div className="container-fluid headcontainer">
          {}
          <div className="row rowhead">
            <div className="images">
              <img src={chicken2} alt="chicken" /> {}
              <div className="container">
                <a href="#nittaya">
                  {}
                  <button className="btn b1">
                    <img src={logo} alt="logo" className="logo" /> {}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default head;
