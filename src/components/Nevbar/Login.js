import React from "react";
import "../Nevbar/Login.css"
import { NavLink } from 'react-router-dom';

import Pt_logo from "../image/bikelogo.jpg"
export default function Login(){
    return(
        <>
        <h1 className="heading-name">Welcome To Pizza Territory</h1>
        <div className="container-Login">
          <div className="container-left">
               <img src={Pt_logo}/>
          </div>
          <div className="container-right">
                <div className="container-back">
                  <div className="container-front">
                    <div className="heading-name1">
                    <h2>Member Login</h2>
                    </div>
                  
                    <form>
                      Email :<br/>
                      <input type="email" placeholder="Enter Email Address" id="input-type"/><br/>
                      Password :<br/>
                      <input type="password" placeholder="Enter password"    id="input-type"/><br/>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                
                    <span className="signup"> <NavLink to ="/signup">Sign Up</NavLink></span>
                      
                </div>
          </div>
        </div>

      
      </>
    )
}