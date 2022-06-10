import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div>
                
          {/* info section */}
          <section className="info">
            <div className="container info_content">
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>
                          About Us
                        </h5>
                        <ul>
                          <li>
                            <a href>
                              It is a long established
                            </a>
                          </li>
                          <li>
                            <a href>
                              fact that a reader will be
                            </a>
                          </li>
                          <li>
                            <a href>
                              distracted by the read
                            </a>
                          </li>
                          <li>
                            <a href>
                              able LoremIt is a long es
                            </a>
                          </li>
                          <li>
                            <a href>
                              tablished fact that a
                            </a>
                          </li>
                          <li>
                            <a href>
                              reader will be distracted
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5>
                          Contact Us
                        </h5>
                        <ul>
                          <li>
                            <a href>
                              It is a long established
                            </a>
                          </li>
                          <li>
                            <a href>
                              fact that a reader will be
                            </a>
                          </li>
                          <li>
                            <a href>
                              distracted by the read
                            </a>
                          </li>
                          <li>
                            <a href>
                              able LoremIt is a long es
                            </a>
                          </li>
                          <li>
                            <a href>
                              tablished fact that a
                            </a>
                          </li>
                          <li>
                            <a href>
                              reader will be distracted
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form_container mt-5">
                      <form action>
                        <input type="email" placeholder="Enter Your email" />
                        <button type="submit">
                          SUBSCRIBE
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info_img-box">
                      <img src="assets/images/map.png" alt="" />
                    </div>
                    <div className="d-flex justify-content-end pr-5">
                      <div className="social-box">
                        <a href>
                          <img src="assets/images/fb.png" alt="" />
                        </a>
                        <a href>
                          <img src="assets/images/twitter.png" alt="" />
                        </a>
                        <a href>
                          <img src="assets/images/linkedin1.png" alt="" />
                        </a>
                        <a href>
                          <img src="assets/images/instagram1.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end info*/}
          {/* footer */}
          <section className="footer">
            <div>
              <hr className="hr-footer" />
            </div>
            <p>
              ©2022 All Rights Reserved. Design by
              <a href="https://www.linkedin.com/in/jithinraja/">JITHINRAJ</a>
            </p>
          </section>
            </div>
        )
    }
}

export default Footer;