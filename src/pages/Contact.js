import React from "react";

class Contact extends React.Component{
    render (){
        return(
            <div>
          {/* contact form*/}
          <section id="contact">
            <div className="container-consult">
              <h5>Don't Hesitate To Ask</h5>
              <h2>FREE CONSULTATION</h2>
            </div>
            <div className="contact-content">
              <div className="row">
                <div className="col-lg-6">
                  {/* form start */}
                  <div className="container">
                    <form action="#">
                      <label htmlFor="fname">Name</label>
                      <input type="text" id="fname" name="firstname" />
                      <label htmlFor="lname">Email</label>
                      <input type="text" id="email" name="lastname" />
                      <label htmlFor="lname">Phone Number</label>
                      <input type="text" id="lname" name="lastname" />
                      <label htmlFor="subject">Message</label>
                      <textarea id="subject" name="subject" style={{height: '200px'}} defaultValue={""} />
                      <input type="submit" defaultValue="SEND" />
                    </form>
                  </div>
                  {/* form end*/}
                </div>
                <div className="col-lg-6">
                  <img src="assets/images/form-img.png" className="contact-image" alt="" />
                </div>
              </div> 
            </div>
          </section>
          {/* ++++++++++++++++++++ */}
          {/* why*/}
          <section className="Why">
            <div className="container">
              <h2>WHY CHOOSE US?</h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at
                its layout. The point of using LoremIt is a long established fact that a reader will be distracted by the
                readable
                content of a page when looking at its layout. The point of using Lorem
              </p>
            </div>
          </section>
          {/* end why*/}
            </div>
        )
    }
}

export default Contact;