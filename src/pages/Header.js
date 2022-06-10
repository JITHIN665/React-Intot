import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
    <div>
        <div>
          <div className="header">
            <section className="colored-section" id="title">
              <div className="container-fluid">
                <nav className="navbar navbar-expand navbar-dark">
                  <a className="navbar-brand" href>INTOT</a>
                  <div className=" navbar-collapse  ">
                    <ul className="navbar-nav ml-auto d-none d-lg-flex ml-auto ">
                      <li className="nav-item ">
                      <Link className="Link" to="/Signin" > <span className="p-4"><img src="assets/images/login.png" alt="signup"></img></span>Sign In</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="Link" to="/Signup"  > <span className="p-4"><img src="assets/images/signup.png" alt="signup"></img></span>Sign Up</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="."><span className="p-4"><img src="assets/images/search-icon.png" alt="Search" /></span></a>
                      </li>
                    </ul>
                  </div>
                  {/*  navbar button*/}
                  <div className="custom_menu-btn">
                    <button onclick="openNav()">
                      <span className="bar1">
                      </span>
                      <span className="bar2">
                      </span>
                      <span className="bar3">
                      </span>
                    </button>
                  </div>
                  <div id="myNav" className="overlay">
                    <div className="overlay-content">
                      <a href="index.html">HOME</a>
                      <a href="Team.html">TEAM</a>
                      <a href="Portfoliyo.html">PORTFOLIO</a>
                      <a href="Contact.html">CONTACT US</a>
                    </div>
                  </div>
                  {/* button end*/}
                </nav>
              </div>
              {/* slider */}
              <section className=" slider_section position-relative">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active">01</li>
                    <li data-target="#carouselExampleIndicators" data-slide-to={1}>02</li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-3 offset-md-2">
                          <div className="slider_info">
                            <h1>
                              INNOVATIVE <br />
                              <span>
                                SOLUTIONS
                              </span>
                            </h1>
                            <p>
                              We find the best solutions fot you, we redesign your home and work places.
                              Discover why over 5,100 home owners trust initiative
                            </p>
                            <div className="btn">
                              <a href>
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="slider_img">
                            <img src="assets/images/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-3 offset-md-2">
                          <div className="slider_info">
                            <h1>
                              INNOVATIVE <br />
                              <span>
                                SOLUTIONS
                              </span>
                            </h1>
                            <p>
                              We find the best solutions fot you, we redesign your home and work places.
                              Discover why over 5,100 home owners trust initiative
                            </p>
                            <div>
                              <a href>
                                Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <div className="slider_img">
                            <img src="assets/images/slider-img.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_btn">
                    <a className="carousel-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    </a>
                    <a className="carousel-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    </a>
                  </div>
                </div>
              </section>
            </section>
          </div>
         </div>
    </div>
        )
    }
}

export default Header;