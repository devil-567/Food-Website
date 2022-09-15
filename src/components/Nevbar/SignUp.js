import React,{useState} from "react";
import "../Nevbar/SignUp.css"
import Pt_logo from "../image/bikelogo.jpg"
export default function SignUp(){

  const [Email,setEmail]= useState('')
  const [Password,setPassword]= useState('')

  const submitButton =()=>{
    console.log(Email,Password)
  }

    return(
        <>
        <h1 className="heading-name">Welcome To Pizza Territory</h1>
        <div className="container-Login">
          <div className="container-left">
               <img src={Pt_logo} alt="Image"/>
          </div>
          <div className="container-right">
                <div className="container-back">
                  <div className="container-front">
                    <div className="heading-name1">
                    <h2>Member SignUp</h2>
                    </div>
                  
                    <form>
                      Email :<br/>
                      <input type="text" placeholder="Enter Email Address" className="inputtype" value={Email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                      Password :<br/>
                      <input type="password" placeholder="Enter password"    className="inputtype" value={Password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                      <button type="submit" onClick={submitButton}>Submit</button>
                    </form>
                  </div>
                  
                </div>
          </div>
        </div>

      
      </>
    )
}