import React from "react";
import Header from "../home/footer";
import Footer from "../home/frame7";
import "./step-end.css";

function StepEnd() {
    return (
        <>
        <Header />
        <div className="step-end-container">
            <div className="step-end-text">
            <h1>Thank you for your order!</h1>
            <p>Your order has been successfully placed.</p>
            <p>You will receive an email confirmation shortly.</p>
            </div>
            </div>

        <Footer />
        </>
    );
}

export default StepEnd;