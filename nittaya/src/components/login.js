/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../picture/logo4.jpg';
import logo2 from '../picture/homewallpaper3.jpg';
import '../css/index1.css'

class login extends React.Component {
  
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <img src={logo}  className = "imgm"alt="logo2" />
          </div>
        </div>
        {}
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          style={{
            backgroundColor: "rgb(221, 155, 80)"
          }}
        >
          <a className="navbar-brand" href="#">
            <img className = "imgm"
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
              <a className="nav-link" href="/register">
                Register
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
        {}
        <div className="row">
          <div className="container" id="containpadding">
            <form action="/login" method="POST">
              <h1
                style={{
                  textAlign: "center",
                  color: "cornsilk",
                  padding: "3px",
                  backgroundImage: {logo2},
                  border: "none",
                  borderRadius: "100px"
                }}
              >
                Login
              </h1>
              <br />
              <label>
                <h3
                  style={{
                    color: "cornsilk"
                  }}
                >
                    Username :{" "}
                </h3>
              </label>
              <input
                type="text"
                placeholder=" Username "
                style={{
                  borderRadius: "50px"
                }}
                id="user1"
                name="user12"
                required
              />
              <br />
              <label>
                <h3
                  style={{
                    color: "cornsilk"
                  }}
                >
                    Password  :{" "}
                </h3>
              </label>
              <input
                type="password"
                placeholder=" ******* "
                style={{
                  borderRadius: "50px"
                }}
                id="pass1"
                name="pass12"
                required
              />
              <br />
              <br />
              <div className="container c1">
                <div className="center">
                  <button className="btn12" id="login1">
                    ok
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {}
      </div>
    );
  }
}

export default login;
