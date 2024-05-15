import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./frame5.css"
import favori from "../assets/favori.svg";

function Frame5() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/frame5')
            .then(response => {
                setCardsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="frame5">
            <p className="f76">Discounts up to -50%</p>
            <div className="row">
                {cardsData.map((card, index) => (
                    <div className={`product-card${card.id}`} key={card.id}>
                          <img src={favori} alt="favori" className="favori3" />
                        <img className="card-img" src={card.img} alt="product" />
                        <h3 className="text1-1">{card.text1}</h3>
                        <p className="text2-1">{card.text2}</p>
                        <button className="card-button12">Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Frame5;
