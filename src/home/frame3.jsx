import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { CartContext } from '../Shopping Cart/CartContext';
import "./frame3.css";

function Frame3() {
    const [cardsData, setCardsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState('New Arrival');
    const { addToCart } = useContext(CartContext);
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/frame3')
            .then(response => {
                setCardsData(response.data);
                setFilteredData(response.data.slice(0, 8)); // Default to New Arrival (first 8 items)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        switch (category) {
            case 'New Arrival':
                setFilteredData(cardsData.slice(0, 8));
                break;
            case 'Bestseller':
                axios.get('http://localhost:3000/shop')
                    .then(response => {
                        setFilteredData(response.data.slice(0, 8));
                    })
                    .catch(error => {
                        console.error('Error fetching shop data:', error);
                    });
                break;
            case 'Featured Products':
                axios.get('http://localhost:3000/shop')
                    .then(response => {
                        setFilteredData(response.data.slice(-8));
                    })
                    .catch(error => {
                        console.error('Error fetching shop data:', error);
                    });
                break;
            default:
                setFilteredData(cardsData.slice(0, 8));
        }
    }, [category, cardsData]);

    const toggleFavorite = (id) => {
        setFavorites(prevFavorites => ({
            ...prevFavorites,
            [id]: !prevFavorites[id]
        }));
    };

    return (
        <div className="frame3">
            <div className="tag">
                <input type="button" value="New Arrival" className="tag1" onClick={() => setCategory('New Arrival')} />
                <input type="button" value="Bestseller" className="tag2" onClick={() => setCategory('Bestseller')} />
                <input type="button" value="Featured Products" className="tag3" onClick={() => setCategory('Featured Products')} />
            </div>
            <div className="Products-Grid">
                {filteredData.map(card => (
                    <div className="card" key={card.id}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`favori ${favorites[card.id] ? 'favorite' : ''}`}
                            onClick={() => toggleFavorite(card.id)}
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <img className="card-img" src={card.img} alt="product" />
                        <h3 className="text1">{card.text1}</h3>
                        <p className="text2">{card.text2}</p>
                        <button className="card-button" onClick={() => addToCart(card)}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Frame3;
