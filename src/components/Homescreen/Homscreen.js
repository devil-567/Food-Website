import "../Homescreen/Homscreen.css"
import React from 'react'
import FImage from "../image/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash.jpg"
import SImage from "../image/shourav-sheikh-a66sGfOnnqQ-unsplash (1).jpg"
function HomScreen()
{
    return(
        <>
        <h1 className="middlewareText">Our Most Popular Deals</h1>
        <div className='middle_image'>
            <div >
                <img src={FImage} className='firstImage' />
            </div>
            <div >
                <img src={SImage} className='secondImage'/>
                
            </div>
        </div>
        <div className='details_button '>
            <button>View All Deals</button>

        </div>
         
         </>

    )
}
export default HomScreen;