import React from "react";
import wall2 from '../picture/homewallpaper3.jpg'
import wall from '../picture/homewallpaper.jpg'
import logo from '../picture/logo4.jpg'

class adminlogin extends React.Component {
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
            <ul className="navbar-nav ml-auto">
              {}
              <form>
                <li className="nav-item">
                  <a className="nav-link" href="/" id="admin1">
                    Back
                  </a>
                </li>
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
              className="container"
              style={{
                textAlign: "center",
                color: "rgb(148, 126, 85)",
                fontWeight: "bold",
                padding: "50px"
              }}
            >
              <div
                className="container"
                style={{
                  backgroundColor: "antiquewhite",
                  width: "50%",
                  borderRadius: "10px",
                  height: "auto",
                  padding: "20px"
                }}
              >
                <form action = "/adminhome">
                  <h3>Admin</h3>
                  Username:
                  <input type="text" placeholder="admin" />
                  <br />
                  <br />
                  Password:
                  <input type="text" placeholder="****" /> <br />
                  <br />
                  <button
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "chocolate",
                      borderColor: "coral"
                    }}
                  >
                    Submit
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

export default adminlogin;
