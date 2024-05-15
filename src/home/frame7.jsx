import React from "react";
import "./frame7.css"
import logo from "../assets/logo.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";
import Tiktok from "../assets/Tiktok.png";

function Frame7() {
    return (
        <div className="frame7">
            <div className="logo-div">
                <img src={logo} alt="logo" className="logo" />
                <p className="logo-text">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                <div className="logo-div4">
                <img src={Twitter} alt="Twitter" className="Twitter" />
                <img src={Facebook} alt="Facebook" className="Facebook" />
                <img src={Tiktok} alt="Tiktok" className="Tiktok" />
                <img src={Instagram} alt="Instagram" className="Instagram" />        
                </div>
            </div>
            <div className="logo-div">
                <p className="Services">Services</p>
                <p className="Services-text">Bonus program</p>
                <p className="Services-text">Gift cards</p>
                <p className="Services-text">Credit and payment</p>
                <p className="Services-text">Service contracts</p>
                <p className="Services-text">Non-cash account</p>
                <p className="Services-text">Payment</p>
            </div>
            <div className="logo-div">
                <p className="Services">Assistance to the buyer</p>
                <p className="Services-text">Find an order</p>
                <p className="Services-text">Terms of delivery</p>
                <p className="Services-text">Exchange and return of goods</p>
                <p className="Services-text">Guarantee</p>
                <p className="Services-text">Frequently asked questions</p>
                <p className="Services-text">Terms of use of the site</p>
            </div>
           
            </div>
            
    );
    }

    export default Frame7;