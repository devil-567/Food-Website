import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

import "../Homescreen/Home.css"
import HomScreen from "../Homescreen/Homscreen"
import Footer from "../Footer/Footer";
export default function Home() {
  return (
    <>
    <div className="backcover">
         
        
         <div className="titleName">
              Pizza Territory
         </div> 
         <div className="discover">
            Discover the best food & drinks in Delhi NCR
         </div> 
         <div className="box">
         <form>
          <div className="searchicon">
            
            <input type="text" placeholder="Search for restaurant, cuisine or a dish
             " id="box1"/>
             <i><FontAwesomeIcon icon={faMagnifyingGlass} id="iconsearch"/></i>
          </div>
        </form>
         </div>
       </div>
       <HomScreen/>
       <Footer/>
      
    </>
  )
}