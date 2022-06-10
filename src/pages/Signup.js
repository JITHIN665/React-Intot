import React,{useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";



function Signup(){
  const[Name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  async function registerUser(event){
  // User Email Mobile and Password Validation Using The Regular Expression
  const emailRegex = /^\S+@\S+\.\S+$/;
   const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
   const phnRegex=/^[6-9]\d{9}$/;
  if(!email.match(emailRegex)){
    alert("please enter valid E-mail");
    return;
  }
    else if (!password.match(passwordRegex)){
    alert("please enter valid password Include A Number, A Letter and A Special Character, Minimum 8 Characters");
     return;
    }
    else if (!phone.match(phnRegex)){
      alert("Enter 10 digits");
      return;
    }
  //  else if((!email.match(emailRegex)) && (!password.match(passwordRegex)) ){
  //   alert("e-mail and psw incorrect");
  //   return;
  //  }
  event.preventDefault()
    const response=await fetch('http://localhost:3001/register',{
      method:'POST',
      headers:{
             'Content-Type':'application/json'
      },
      body: JSON.stringify({
        Name,
        email,
        phone,
        password
      })
    })
    const data = await response.json()
    console.log(data);
     Navigate("/SignIn")
  }
   let Navigate=useNavigate();

 

  
    return(
        <div>
          <section className="colored-section">
              <div className="container-fluid">
              <nav className="navbar navbar-expand navbar-dark">
              <a className="navbar-brand" href>INTOT</a>
              <div className=" navbar-collapse  ">
              <ul className="navbar-nav ml-auto d-none d-lg-flex ml-auto ">
                <li className="nav-item ">
                <Link className="Link" to="/"  > <span className="p-4"><img src="assets/images/signup.png" alt="signup"></img></span>Home</Link>
                  {/*  */}
                </li>
                <li className="nav-item">
                  {/*  */}
                </li>
                <li className="nav-item">
                  {/*  */}
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
                <a href="index.html">TEAM</a>
                <a href="Portfoliyo.html">PORTFOLIO</a>
                <a href="index.html">CONTACT US</a>
              </div>
              </div>
              {/* button end*/}
              </nav>
              </div>
              </section>
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
                <form onSubmit={registerUser}>
                  <label htmlFor="fname">Name</label>
                  <input  type="text" value={Name} onChange={(e)=> setName(e.target.value)} name="Name"  />
                  <label htmlFor="lname">Email</label>
                  <input type="text"  value={email} onChange={(e)=> setEmail(e.target.value)} name="email" />
                  <label htmlFor="lname">Phone Number</label>
                  <input  type="text"   value={phone} onChange={(e)=> setPhone(e.target.value)} name="phone"  />
                  <label htmlFor="lname">Password</label>
                  <input  type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} name="password" />
                  <button className="Reg-btn" type="submit">Register</button>

                </form>
                <p><br />
                            By clicking the Register button,you agree to our <br />
                            <a href="https://www.linkedin.com/in/jithinraja/">Terms and Condition</a> and <a href="https://www.linkedin.com/in/jithinraja/">Policy Privacy</a>
                      
                            Already have an account?<Link to= "/SignIn" style={{textDecoration:"none",paddingLeft:"10px"}}>Login
                                                          </Link>
                        </p>
              </div>
              {/* form end*/}
              </div>
              <div className="col-lg-6">
              <img src="assets/images/form-img.png" className="contact-image" alt="Img" />
              </div>
              </div>
              </div>
              </section>
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
export default Signup;