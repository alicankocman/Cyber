import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./frame4.css"

function Frame4() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/frame4')
            .then(response => {
                setCardsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="frame4">
            <div className="big-banner1">
                {cardsData.map(card => (
                    card.id === "1" && (
                        <div key={card.id}>
                            <img className="card-img4" src={card.img} alt="product" />
                            <h3 className="text10">{card.text1}</h3>
                            <p className="text20">{card.text2}</p>
                            <button className="card-button00">Shop Now</button>
                        </div>
                    )
                ))}
            </div>
            <div className="big-banner2">
                {cardsData.map(card => (
                    card.id === "2" && (
                        <div key={card.id}>
                             <img className="card-img4" src={card.img} alt="product" />
                            <h3 className="text10">{card.text1}</h3>
                            <p className="text20">{card.text2}</p>
                            <button className="card-button00">Shop Now</button>
                        </div>
                    )
                ))}
            </div>
            <div className="big-banner3">
                {cardsData.map(card => (
                    card.id === "3" && (
                        <div key={card.id}>
                             <img className="card-img4" src={card.img} alt="product" />
                            <h3 className="text10">{card.text1}</h3>
                            <p className="text20">{card.text2}</p>
                            <button className="card-button00">Shop Now</button>
                        </div>
                    )
                ))}
            </div>
            <div className="big-banner4">
                {cardsData.map(card => (
                    card.id === "4" && (
                        <div key={card.id}>
                             <img className="card-img4" src={card.img} alt="product" />
                            <h3 className="text11">{card.text1}</h3>
                            <p className="text20">{card.text2}</p>
                            <button className="card-button01">Shop Now</button>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default Frame4;
