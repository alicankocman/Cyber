import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../home/footer.jsx";
import Footer from "../home/frame7.jsx";
import { CartContext } from '../Shopping Cart/CartContext';
import "./shopping-cart.css";

function ShoppingCart() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext); // decreaseQuantity burada eklendi
    const [discountCode, setDiscountCode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [estimatedTax, setEstimatedTax] = useState(50);
    const [estimatedShipping, setEstimatedShipping] = useState(29);
    const containerHeight = 596;
    const itemHeight = 100;
    const maxVisibleItems = Math.floor(containerHeight / itemHeight);

    const increaseQuantity = (productId) => {
        addToCart({ id: productId });
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.text2.replace('$', '')) || 0;
            return total + (price * item.quantity);
        }, 0).toFixed(2);
    };

    const handleApplyDiscount = () => {
        if (discountCode === "helloworld") {
            setEstimatedTax(0);
        }
        if (cardNumber === "123456789") {
            setEstimatedShipping(0);
        }
        updateCookies();
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        return (subtotal + estimatedTax + estimatedShipping).toFixed(2);
    };

    const handleCheckout = () => {
        navigate("/step-one");
    };

    const updateCookies = () => {
        Cookies.set('subtotal', `$${calculateSubtotal()}`, { expires: 7 });
        Cookies.set('estimatedTax', `$${estimatedTax.toFixed(2)}`, { expires: 7 });
        Cookies.set('estimatedShipping', `$${estimatedShipping.toFixed(2)}`, { expires: 7 });
        Cookies.set('total', `$${calculateTotal()}`, { expires: 7 });
    };

    useEffect(() => {
        updateCookies();
    }, [cartItems, estimatedTax, estimatedShipping]);

    return (
        <>
            <Header />
            <div className="main-shopping-cart">
                <div className="main-shopping-cart2">
                    <div className="shopping-cart1">
                        <p className="shopping-title1">Shopping Cart</p>
                        <div className="cart-items-container" style={{ overflowY: "auto", height: `${containerHeight}px` }}>
                            <div className="cart-items-wrapper">
                                {cartItems.map((product, index) => (
                                    <div className="flex-shopping" key={index}>
                                        <div className="product-image">
                                            <img style={{width:"90px",height:"90px"}} src={product.img} alt={product.text1} />
                                        </div>
                                        <div className="product-details">
                                            <p className="product-name">{product.text1}</p>
                                            <div className="w-azalt" style={{display:"flex"}}>
                                                <p>Ürün ID: {product.id}</p>
                                                <button type="button" className="increase" onClick={() => increaseQuantity(product.id)}>+</button>
                                                <p className="item">{product.quantity || 1}</p>
                                                <button type="button" className="decrease" onClick={() => decreaseQuantity(product.id)}>-</button>
                                                <p className="price-card">{product.text2}</p>
                                                <button className="btn-remove" onClick={() => removeFromCart(product.id)}>X</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="shoppingcart2-content">
                        <p className="orderstitle">Order Summary</p>
                        <div className="order-content">
                            <p className="order1">Discount code / Promo code</p>
                            <input
                                type="text"
                                className="order2"
                                placeholder="&nbsp;&nbsp;Code"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                            />
                            <p style={{marginTop:"24px"}} className="order1">Your bonus card number</p>
                            <input
                                type="text"
                                className="order2"
                                placeholder="&nbsp;&nbsp;Enter Card Number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                            <input type="button" className="order3" value="Apply" onClick={handleApplyDiscount} />
                            <div style={{display:"flex"}}>
                                <p className="order4">Subtotal</p>
                                <p style={{fontWeight:"bold"}}>${calculateSubtotal()}</p>
                            </div>
                            <div style={{display:"flex"}}>
                                <p className="price-card1">Estimated Tax</p>
                                <p style={{fontWeight:"bold"}}>${estimatedTax.toFixed(2)}</p>
                            </div>
                            <div style={{display:"flex"}}>
                                <p className="price-card1">Estimated shipping & Handling</p>
                                <p style={{fontWeight:"bold"}}>${estimatedShipping.toFixed(2)}</p>
                            </div>
                            <div style={{display:"flex"}}>
                                <p className="order4">Total</p>
                                <p style={{fontWeight:"bold"}}>${calculateTotal()}</p>
                            </div>
                            <input type="button" className="order5" value="Checkout" onClick={handleCheckout} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShoppingCart;
