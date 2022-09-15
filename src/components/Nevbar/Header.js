import React from "react";
import "../Nevbar/Header.css"
import logo from "../image/Pt logo.jpg"
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="top-header">


        <div className="top-logo">
               <img src={logo}/>
        </div>
        <div className="Header">


          <p><NavLink to="/" className="nebVar-Header" >Home</NavLink></p>

          <p><NavLink to="/about" className="nebVar-Header">About</NavLink></p>

          <p><NavLink to="/menu" className="nebVar-Header">Menu</NavLink></p>

          <p><NavLink to="/myorder" className="nebVar-Header">MyOrder(100)</NavLink></p>

          <p><NavLink to="/help" className="nebVar-Header">Help</NavLink></p>

          <p><NavLink to="/login" className="nebVar-Header">Login</NavLink></p>


        </div>
      </div>
    </>
  )
}