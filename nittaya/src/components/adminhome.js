import React from "react";
import wall from '../picture/homewallpaper.jpg'
import logo from '../picture/logo4.jpg'
import wall2 from '../picture/homewallpaper3.jpg'
class adminhome extends React.Component {
  render() {
    return (
      <div>
        <header
          style={{
            backgroundImage: `url(${wall})`,
            textAlign: "center"
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              padding: "20px",
              width: "auto",
              height: "200px"
            }}
          />
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
            </ul>
            <ul className="navbar-nav ml-auto">
              {}
              <li className="nav-item">
                <a className="nav-link" href="/adminlogin">
                  Logout
                </a>
              </li>
              <form
                className="form-inline"
                action="/action_page.php"
                id="search"
              >
              </form>
            </ul>
          </nav>
        </header>
        <div
          className="row"
          style={{
            justifyContent: "center"
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              background: "rgb(255, 255, 255)",
              padding: "20px",
              borderRadius: "50px",
              marginTop: "15px"
            }}
          >
            ADMIN PANEL
          </h1>
          <div
            className="container"
            style={{
              width: "80%",
              height: "auto",
              margin: 0,
              position: "absolute",
              top: "50%",
              msTransform: "translateY(-50%)",
              transform: "translateY(-50%)",
              backgroundImage: `url(${wall2})`
            }}
          >
            <div
              className="row"
              style={{
                textAlign: "center",
                padding: "50px"
              }}
            >
              <div className="col">
                <form action="/adminuser">
                <button
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    padding: "20px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    borderRadius: "50px",
                    color: "rgb(148, 123, 87)"
                  }}
                >
                  <h1>   USER   </h1>
                </button>
                </form>
              </div>
              <div className="col">
                <form action="/adminproduct">
                <button
                  style={{
                    backgroundColor: "rgb(255, 255, 255)",
                    padding: "20px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    borderRadius: "50px",
                    color: "rgb(148, 123, 87)"
                  }}
                >
                  <h1>PRODUCT</h1>
                </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default adminhome;
