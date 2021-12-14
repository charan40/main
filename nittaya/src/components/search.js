import React from "react";
import wall2 from '../picture/homewallpaper3.jpg'
import wall from '../picture/homewallpaper.jpg'
import logo from '../picture/logo4.jpg'
import '../css/search.css'
class search extends React.Component {
  render() {
    return (
      <div>
        <header
          style={{
            backgroundImage: `url(${wall})`,
            textAlign: "center"
          }}
        >
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
                  Login
                </a>
              </li>
              <form
                className="form-inline"
                action="/action_page.php"
                id="search"
              >
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
              </form>
            </ul>
          </nav>
        </header>
        <div className="row">
          <div className="container">
            <div className="con">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="flex-container">
            <label>
              <input
                type="text"
                placeholder="Ahead to Menu Gallery"
                style={{
                  textAlign: "center",
                  height: "auto",
                  width: "960px"
                }}
                id="add"
              />
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form action="/result">
              <button className="btn bt btn-primary btn-block">GO</button>
            </form>
          </div>
        </div>
        <footer>
          <div
            className="row"
            style={{
              height: "auto",
              backgroundImage: `url(${wall2})`,
              marginTop: "10%"
            }}
          >
            <div className="col-sm-12">
              <div
                className="container"
                style={{
                  textAlign: "center",
                  padding: "20px"
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "10%"
                  }}
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default search;
