import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { CartContext } from '../Shopping Cart/CartContext';
import "./frame5.css";

function Frame5() {
    const [cardsData, setCardsData] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/frame5')
            .then(response => {
                setCardsData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [id]: !prevFavorites[id]
        }));
    };

    return (
        <div className="frame5">
            <p className="f76">Discounts up to -50%</p>
            <div className="row">
                {cardsData.map((card) => (
                    <div className={`product-card product-card-${card.id}`} key={card.id}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`favori ${favorites[card.id] ? 'favorite' : ''}`}
                            onClick={() => toggleFavorite(card.id)}
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <img className="card-img" src={card.img} alt="product" />
                        <h3 className="text1-1">{card.text1}</h3>
                        <p className="text2-1">{card.text2}</p>
                        <button className="card-button12" onClick={() => addToCart(card)}>Shop Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Frame5;
