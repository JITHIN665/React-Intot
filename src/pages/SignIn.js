import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Signin() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
  async function loginUser(event){
    event.preventDefault()
    const response=await fetch('http://localhost:3001/login',{
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body: JSON.stringify({
      email,
      password
      })
    })
    const data = await response.json()
      if(data.user){
      alert("login succesful");
      Navigate("/data")
    }
    else{
      alert("enter valid user name or password");
    }
    
    //console.log(data);
  }
   
    let Navigate  = useNavigate();

  return (
    <div>
    <section className="colored-section">
<div className="container-fluid">
<nav className="navbar navbar-expand navbar-dark">
<a className="navbar-brand" href>INTOT</a>
<div className=" navbar-collapse  ">
<ul className="navbar-nav ml-auto d-none d-lg-flex ml-auto ">
  <li className="nav-item ">
  <Link className="Link" to="/"  > <span className="p-4"><img src="assets/images/signup.png" alt="signup"></img></span>Home</Link>
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
{/* Users Data */}
<section id="contact">
<div className="container-consult">
<h5>Welcome Back</h5>
<h2>LOGIN TO THE FUTURE</h2>
</div>
<div className="contact-content">
<div className="row">
<div className="col-lg-6">
{/* form start */}
<div className="container">
  <form onSubmit={loginUser}>
    <label htmlFor="lname">Email</label>
    <input type="text" className="login__input" value={email} onChange={(e)=> setEmail(e.target.value)}  name="email" />
    <label htmlFor="lname">Password</label>
    <input type="password" className="login__input"  value={password} onChange={(e)=> setPassword(e.target.value)}  name="repeatpassword"/>
     <button className="Reg-btn" type="submit">Login</button>

  </form>
  <p><br />
              If you doesn't have an account then <Link to= "/Signup">Register
              </Link>    <br />
              <a href="https://www.linkedin.com/in/jithinraja/">Terms and Condition</a> and <a href="https://www.linkedin.com/in/jithinraja/">Policy Privacy</a>
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
{/* End Users */}
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
  );
}


export default Signin;