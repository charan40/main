/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import wall from '../picture/homewallpaper.jpg'
import logo from '../picture/logo4.jpg'
import wall2 from '../picture/homewallpaper3.jpg'
import fish from '../picture/homepage/fish.jpg'
import fish2 from '../picture/homepage/fish2.jpg'
import tom from '../picture/homepage/tomsab.jpg'
import som from '../picture/homepage/somtum.jpg'
import upper2 from '../picture/result/upperback2.jpg'
import men7 from '../picture/result/men7.jpg'
import men6 from '../picture/result/men6.jpg'
import men5 from '../picture/result/men5.jpg'
import men4 from '../picture/result/men4.jpg'
import men3 from '../picture/result/men3.jpg'
import men2 from '../picture/result/men2.jpg'
import men1 from '../picture/result/men1.jpg'
class result extends React.Component {
  render() {
    return (
      <div>
        <header
          style={{
            backgroundImage:`url(${wall})`,
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
                <li className="nav-item">
                  <a className="nav-link" href="/adminlogin" id="admin1">
                    Admin
                  </a>
                </li>
              </form>
            </ul>
          </nav>
        </header>
        <div className="row3body">
          <img src={fish} alt="photo" className="imagess" />
          <div className="overlay">
            <img src={fish2} alt="photo" className="imagess" />
          </div>
        </div>
        <div className="row3body">
          <img src={tom} alt="photo" className="imagess" />
          <div className="overlay">
            <img
              src={som}
              alt="photo"
              className="imagess"
            />
          </div>
        </div>
        <div className="row3body">
          <img src={fish} alt="photo" className="imagess" />
          <div className="overlay">
            <img
              src={tom}
              alt="photo"
              className="imagess"
            />
          </div>
        </div>
        <div className="row3body">
          <img src={fish} alt="photo" className="imagess" />
          <div className="overlay">
            <img
              src={som}
              alt="photo"
              className="imagess"
            />
          </div>
        </div>
        <div className="row3body">
          <img
            src={upper2}
            alt="photo"
            className="imagess"
          />
          <div className="overlay">
            <img src={men7} alt="photo" className="imagess" />
          </div>
        </div>
        <div className="row3body">
          <img src={men6} alt="photo" className="imagess" />
          <div className="overlay">
            <img src={men5} alt="photo" className="imagess" />
          </div>
        </div>
        <div className="row3body">
          <img src={men3} alt="photo" className="imagess" />
          <div className="overlay">
            <img src={men4} alt="photo" className="imagess" />
          </div>
        </div>
        <div className="row3body">
          <img src={men2} alt="photo" className="imagess" />
          <div className="overlay">
            <img src={men1} alt="photo" className="imagess" />
          </div>
        </div>
        <footer>
          <div
            className="row"
            style={{
              height: "auto",
              backgroundImage: `url(${wall2})`
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

export default result;
