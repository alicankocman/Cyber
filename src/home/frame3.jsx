import React, { useState, useEffect } from "react";
import favori from "../assets/favori.svg";
import axios from 'axios';
import "./frame3.css";

function Frame3() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/frame3')
            .then(response => {
                setCardsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="frame3">
            <div className="tag">
                <input type="button" value="New Arrival" className="tag1" />
                <input type="button" value="Bestseller" className="tag2" />
                <input type="button" value="Featured Products" className="tag3" />
            </div>
            <div className="Products-Grid">
                {cardsData.map(card => (
                    <div className="card" key={card.id}>
                        <img src={favori} alt="favori" className="favori" />
                        <img className="card-img" src={card.img} alt="product" />
                        <h3 className="text1">{card.text1}</h3>
                        <p className="text2">{card.text2}</p>
                        <button className="card-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Frame3;
