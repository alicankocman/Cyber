// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cartData = Cookies.get('cartItems');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }
    }, []);

    const addToCart = (product) => {
        const updatedCartItems = [...cartItems];
        const existingProductIndex = updatedCartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            updatedCartItems[existingProductIndex].quantity += 1;
        } else {
            updatedCartItems.push({ ...product, quantity: 1 });
        }

        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 7 });
    };

    const decreaseQuantity = (productId) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === productId) {
                const newQuantity = item.quantity - 1;
                if (newQuantity <= 0) {
                    return null; // Quantity 0 veya daha azsa, ürünü kaldırmak için null döndürüyoruz
                }
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(Boolean); // null olmayan tüm öğeleri filtreliyoruz
        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 7 });
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCartItems);
        Cookies.set('cartItems', JSON.stringify(updatedCartItems), { expires: 7 });
    };

    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
