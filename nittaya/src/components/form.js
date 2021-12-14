import React from "react";
import p1 from '../picture/homepage/recommended_menu/1.jpg';
import p2 from '../picture/homepage/recommended_menu/2.jpg';
import p3 from '../picture/homepage/recommended_menu/3.jpg';
import p4 from '../picture/homepage/recommended_menu/4.jpg';
import p5 from '../picture/homepage/recommended_menu/5.jpg';
import p6 from '../picture/homepage/recommended_menu/6.jpg';
import p7 from '../picture/homepage/recommended_menu/7.jpg';
import p8 from '../picture/homepage/recommended_menu/8.jpg';
import '../css/homepage.css'

class form extends React.Component {
  render() {
    return (
      <form
        action
        method="POST"
        style={{
          textAlign: "center"
        }}
      >
        <div className="row4body" id="recommended">
          <div className="row">
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img src={p1} alt={1} />
                  <div className="card-body">
                    <button id="cart1">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img src={p2} alt={2} />
                  <div className="card-body">
                    <button id="cart2">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img src={p3} alt={4} />
                  <div className="card-body">
                    <button id="cart3">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img src={p4} alt={3} />
                  <div className="card-body">
                    <button id="cart4">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
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
              >
                Recommended Menu
              </h1>
            </a>
          </div>
          <div className="row">
            <div className="col-sm-3">
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
                    <button id="cart5">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img
                    src={p6}
                    alt={2}
                    style={{
                      height: "auto"
                    }}
                  />
                  <div className="card-body">
                    <button id="cart6">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img src={p7} alt={4} />
                  <div className="card-body">
                    <button id="cart7">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="container">
                <div className="card bg-light text-dark">
                  {}
                  <img src={p8} alt={3} />
                  <div className="card-body">
                    <button id="cart8">
                      <h2
                        style={{
                          textAlign: "center"
                        }}
                      >
                        <b>Add to cart</b>
                      </h2>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default form;
