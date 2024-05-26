import React from "react";
import "./frame3.css";
function Frame3({ product }) {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="frame-3">
            <h3>{product.text1}</h3>
            <p>Price: {product.text2}</p>
        </div>
    );
}


export default Frame3;