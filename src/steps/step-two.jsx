import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./step-two.css";
import Header from "../home/footer";
import Footer from "../home/frame7";
import Location from "../assets/step-img/Location.svg";
import Shipping from "../assets/step-img/Shipping.svg";
import Payment from "../assets/step-img/Payment.svg";

function StepTwo() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const navigate = useNavigate();

    const handleCheckboxChange = (value) => {
        setSelectedOption(value);

        if (value === "free") {
            Cookies.set("shippingMethod", "free");
        } else if (value === "express") {
            Cookies.set("shippingMethod", "8.50 + express");
        } else if (value === "schedule") {
            Cookies.set("shippingMethod", `${selectedDate} + schedule`);
        }
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);

        if (selectedOption === "schedule") {
            Cookies.set("shippingMethod", `${event.target.value} + schedule`);
        }
    };

    const handleBackClick = () => {
        navigate("/step-one");
    };

    const handleNextClick = () => {
        navigate("/step-three");
    };

    return (
        <>
            <Header />
            <div className="brandcrumb-step-two">
                <div className='step-one'>
                    <img className='img1' src={Location} alt='Location' />
                    <div className='step-one-content'>
                        <p className='text-step2'> Step 1</p>
                        <p className='text-step3'>Address</p>
                    </div>
                </div>
                <div>
                    <div className='step-one'>
                        <img className='img1' src={Shipping} alt='Location' />
                        <div className='step-one-content'>
                            <p className='text-step0'> Step 2</p>
                            <p className='text-step1'>Shipping</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='step-one'>
                        <img className='img1' src={Payment} alt='Location' />
                        <div className='step-one-content'>
                            <p className='text-step2'> Step 3</p>
                            <p className='text-step3'>Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="step-two-content">
                <p className="step-two-p-one">Shipping Method</p>
                <div className={`step-two-content-one ${selectedOption === 'free' ? 'selected' : ''}`}>
                    <input 
                        type="checkbox" 
                        id="free" 
                        className="shipping" 
                        value="free" 
                        checked={selectedOption === 'free'}
                        onChange={() => handleCheckboxChange('free')}
                    />
                    <p className="stp1">Free</p>
                    <p className="stp2">Regular shipment</p>
                    <p className="stp3">17 Oct,2023</p>
                </div>
                <div className={`step-two-content-two ${selectedOption === 'express' ? 'selected' : ''}`}>
                    <input 
                        type="checkbox" 
                        id="express" 
                        className="shipping" 
                        value="express" 
                        checked={selectedOption === 'express'}
                        onChange={() => handleCheckboxChange('express')}
                    />
                    <p className="stp1">$8.50</p>
                    <p className="stp2">Get your delivery as soon as possible</p>
                    <p className="stp3">1 Oct,2023</p>
                </div>
                <div className={`step-two-content-three ${selectedOption === 'schedule' ? 'selected' : ''}`}>
                    <input 
                        type="checkbox" 
                        id="schedule" 
                        className="shipping" 
                        value="schedule" 
                        checked={selectedOption === 'schedule'}
                        onChange={() => handleCheckboxChange('schedule')}
                    />
                    <p className="stp1">Schedule</p>
                    <p className="stp4">Pick a date when you want to get your delivery</p>
                    <p className="stp3">
                        <input 
                            type="date" 
                            value={selectedDate} 
                            onChange={handleDateChange}
                        />
                    </p>
                </div>
                <div className="step-two-content-button">
                    <button className="step-two-button1" onClick={handleBackClick}>Back</button>
                    <button className="step-two-button2" onClick={handleNextClick}>Next</button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StepTwo;
