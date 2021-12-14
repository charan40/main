import React from "react";
import p1 from '../picture/homepage/promotion/1.jpg';
import p2 from '../picture/homepage/promotion/2.jpg';
import p3 from '../picture/homepage/promotion/3.jpg';
import p4 from '../picture/homepage/promotion/4.jpg';
import p5 from '../picture/homepage/promotion/5.jpg';
import '../css/homepage.css'

class body6 extends React.Component {
  render() {
    return (
      <div className="row4body">
        {}
        <div className="row">
          <div className="col-sm-4">
            <div className="container">
              <div className="card bg-light text-dark">
                {}
                <img
                  src={p1}
                  alt={1}
                  style={{
                    height: "auto"
                  }}
                />
                <div className="card-body">
                  <h2
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <b>Read more!</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container">
              <div className="card bg-light text-dark">
                {}
                <img
                  src={p2}
                  alt={1}
                  style={{
                    height: "auto"
                  }}
                />
                <div className="card-body">
                  <h2
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <b>Read more!</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container">
              <div className="card bg-light text-dark">
                {}
                <img
                  src={p3}
                  alt={1}
                  style={{
                    height: "auto"
                  }}
                />
                <div className="card-body">
                  <h2
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <b>Read more!</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container c1">
          <a href="#header">
            {}
            <h1
              style={{
                textAlign: "center",
                marginTop: "50px"
              }}
              id="promotion"
            >
              Promotions
            </h1>
          </a>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="container">
              <div className="card bg-light text-dark">
                {}
                <img
                  src={p4}
                  alt={1}
                  style={{
                    height: "auto"
                  }}
                />
                <div className="card-body">
                  <h2
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <b>Read more!</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container">
              <div className="card bg-light text-dark">
                {}
                <img
                  src={p5}
                  alt={1}
                  style={{
                    height: "auto"
                  }}
                />
                <div className="card-body">
                  <h2
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <b>Read more!</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="container">
              <div className="card bg-light text-dark">
                {}
                <img
                  src={p4}
                  alt={1}
                  style={{
                    height: "auto"
                  }}
                />
                <div className="card-body">
                  <h2
                    style={{
                      textAlign: "center"
                    }}
                  >
                    <b>Read more!</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default body6;
