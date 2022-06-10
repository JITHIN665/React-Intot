import React from "react";

class Company extends React.Component{
    render(){
        return(
            <div>
            {/* Company */}
          <section className="company-section" id="company">
            <h2>WHY INITIATIVE COMPANY</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem</p>
            <div className="container">
              <div className="row deck">
                <div className="col-md-4">
                  <div className="card">
                    <img src="assets/images/card-img-1.png" alt="card1" />
                    <h5 className="card-text">10 YEARS EXPERIENCE</h5>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div>
                    <a className="new-btn" href>Read More</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <img src="assets/images/card-img-2.png" alt="card1" />
                    <h5 className="card-text">A PRO ARCHITECTS TEAM</h5>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div>
                    <a className="new-btn" href>Read More</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <img src="assets/images/card-img-3.png" alt="card1" />
                    <h5 className="card-text">1000+ HAPPY CUSTOMERS</h5>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div>
                    <a className="new-btn" href>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </div>
        )
    }
}

export default Company;
