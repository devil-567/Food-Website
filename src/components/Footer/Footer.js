import React from 'react';
import Last from "../image/down image.jpg"
import "../Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
            <div className='footer_back'>
                <div className='footer'>
                    <div className='ordernow_footer'>
                        <p>Order Now</p>
                        <span><NavLink to ="/deals" className="footer-style">Deals</NavLink></span><br />
                        <span><NavLink to ="/pizza"  className="footer-style">Pizza</NavLink></span><br />
                        <span><NavLink to ="/drinks"  className="footer-style">Drinks</NavLink></span>

                       
                    </div>
                    <div className='about_footer'>
                        <p>About</p>
                        <span><NavLink to ="/aboutus" className="footer-style">About us</NavLink></span><br/>

                        

                    </div>
                    <div className='ourpolicies_footer'>
                        <p>Our Policies</p>
                        <span><NavLink to ="/privacy" className="footer-style">Privacy</NavLink></span><br/>
                        <span><NavLink to ="/terms_conditions" className="footer-style">terms & Conditions</NavLink></span><br/>
                        <span><NavLink to ="/responsible_disclosure" className="footer-style">Responsible Disclosure</NavLink></span><br/>
                        <span><NavLink to ="/faq_help"  className="footer-style">FAQs & Help</NavLink></span>


                        

                    </div>
                    <div className='visitpizza_footer'>
                        <p>Visit Pizza Territory</p>
                        <span><NavLink to ="/location"  className="footer-style">Locate a store <FontAwesomeIcon icon={faLocationDot}/></NavLink></span>

                        


                    </div>
                </div>
                <div className='feedback'>
                    <div className='feedback_pera'>
                        <p>Help us in serving you better</p>
                    </div>
                    <div className='feedback_button'>
                        <button><NavLink to ="/feedback"  className="footer-style">Give Feedback</NavLink></button>
                    </div>
                    <div className='folllow_us '>
                         <a>Follow Us</a>
                         <span>
                            <p> <FontAwesomeIcon icon={faFacebook}/></p>
                            <p> <FontAwesomeIcon icon={faInstagram} /></p>
                            <p> <FontAwesomeIcon icon={faTwitter} /></p>
                            <p> <FontAwesomeIcon icon={faWhatsapp} /></p>
                         </span>
                    </div>
                </div>
                <div className='lastfooter_containet'>
                     <p>Order a delicious pizza on the go, anywhere, anytime. Pizza Hut is happy to assist you with your home delivery. Every time you order, you get a hot and fresh pizza delivered at your doorstep in less than</p>
                     <p>thirty minutes. *T&C Apply.</p>
                     <p>Hurry up and place your order now!</p>
                     <p>© 2022 Pizza Hut India. All rights reserved. License Number: 10017011004220</p>

                </div>
                <div className='lastimage_footer'>
                    <img src={Last} id="image2"/>
                </div>
            </div>
        </>
    )
}
export default Footer;





