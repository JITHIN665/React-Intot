
import React from "react";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
function Datas(){
    const [details,setDetails]=useState([{
        Name:'',
        email:"",
        phone:"",

    }])
    useEffect(()=>{
        fetch("/data").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setDetails(jsonRes));
    })

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
                {/* */}
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
            <section className="User-Data">
            <h1>User Data</h1>
                  {
                      details.map(Data=>
                      <div>
                      <div id="Card-body" className="card" style={{width: '18rem'}}>
                          <img className="card-img-top" src="assets/images/team-1.png" alt="Card image" />
                          <div className="card-body">
                            <h5 className="card-title">{Data.Name}</h5>
                            <p className="card-text">{Data.email}</p>
                            <p className="card-text">{Data.phone}</p>
                          </div>
                      </div>
                      </div>
                      )
                  }  
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

)}
export default Datas;
