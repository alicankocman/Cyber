import "./frame6.css"
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Frame6() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/frame6')
            .then(response => {
                setCardsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="frame6">
  {cardsData.map((card, index) => (
                    <div className={`product-card${card.id}`} key={card.id}>   
                        <img className="card-img1" src={card.img1} alt="product" />         
                        <img className="card-img3" src={card.img3} alt="product" />                
                        <img className="card-img2" src={card.img2} alt="product" />
                        <img className="card-img6" src={card.img5} alt="product" />
                        <p className="bgs">Big Summer Sale</p>
                        <p className="infos">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                        <button className="card-button123">Shop Now</button>
                        <img className="card-img5" src={card.img4} alt="product" />
                    </div>
                     ))}
            </div>
    );
    }

    export default Frame6;