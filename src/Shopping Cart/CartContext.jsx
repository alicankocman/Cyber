import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(0);

    const addToCart = (product) => {
        setCartItems(cartItems + 1);
        
        // Çerezlere mevcut ürün sayısını güncelle
        const existingProducts = JSON.parse(Cookies.get('cartItems') || '[]');
        existingProducts.push(product);
        Cookies.set('cartItems', JSON.stringify(existingProducts));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
