import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Header from "../home/footer.jsx";
import Footer from "../home/frame7.jsx";
import "./shopping-cart.css";

function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]); // Cart items'ların saklanacağı state
    const [discountCode, setDiscountCode] = useState(""); // Discount code'un saklanacağı state
    const [cardNumber, setCardNumber] = useState(""); // Card number'ın saklanacağı state
    const [estimatedTax, setEstimatedTax] = useState(50); // Estimated tax'in saklanacağı state
    const [estimatedShipping, setEstimatedShipping] = useState(29); // Estimated shipping'in saklanacağı state
    const containerHeight = 596; // Container'ın yüksekliği
    const itemHeight = 100; // Her bir ürünün yüksekliği
    const maxVisibleItems = Math.floor(containerHeight / itemHeight); // Maximum gösterilecek ürün sayısı

    useEffect(() => {
        const cartData = Cookies.get('cartItems'); // cartItems cookie'sinden veriyi al
        if (cartData) {
            // JSON.parse ile string'i objeye dönüştür ve cartItems state'ine ata
            setCartItems(JSON.parse(cartData));
        }
    }, []); // ComponentDidMount benzeri, yalnızca bir kere çalışacak

    // Her ürünün kaç kez seçildiğini hesaplayan fonksiyon
    const countOccurrences = (array, value) => {
        return array.filter((item) => item.id === value.id).length;
    };

    // Ürünü sepetten kaldıran fonksiyon
    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
        Cookies.set('cartItems', JSON.stringify(updatedCart), { expires: 7 }); // Güncellenmiş veriyi Cookies'e kaydet
    };

    // Ürün adedini artıran fonksiyon
    const increaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === productId) {
                return { ...item, quantity: (item.quantity || 0) + 1 }; // Eğer quantity yoksa 0 olarak kabul et
            }
            return item;
        });
        setCartItems(updatedCart);
        Cookies.set('cartItems', JSON.stringify(updatedCart), { expires: 7 }); // Güncellenmiş veriyi Cookies'e kaydet
    };

    // Ürün adedini azaltan fonksiyon
    const decreaseQuantity = (productId) => {
        const updatedCart = cartItems.map((item) => {
            if (item.id === productId && (item.quantity || 0) > 0) { // quantity 0'dan büyükse azaltma işlemi yap
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        Cookies.set('cartItems', JSON.stringify(updatedCart), { expires: 7 }); // Güncellenmiş veriyi Cookies'e kaydet
    };

    // Ürün ekleyen fonksiyon
    const addToCart = (product) => {
        const updatedCart = [...cartItems, { ...product, quantity: 1 }]; // Varsayılan olarak bir adet ekleniyor
        setCartItems(updatedCart);
        Cookies.set('cartItems', JSON.stringify(updatedCart), { expires: 7 }); // Güncellenmiş veriyi Cookies'e kaydet
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.text2.replace('$', '')) || 0; // Fiyatı $ işaretinden temizle ve sayı olarak al
            return total + (price * (item.quantity || 1)); // Miktarı ile çarp ve toplam değeri güncelle
        }, 0).toFixed(2); // Toplamı ondalık basamak olarak gösterme
    };

    const handleApplyDiscount = () => {
        if (discountCode === "helloworld") {
            setEstimatedTax(0); // Discount code "helloworld" ise estimated tax 0 olarak ayarla
        }
        if (cardNumber === "123456789") {
            setEstimatedShipping(0); // Card number "123456789" ise estimated shipping 0 olarak ayarla
        }
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        return (subtotal + estimatedTax + estimatedShipping).toFixed(2);
    };

    return (
        <>
            <Header />
            <div className="main-shopping-cart">
                <div className="main-shopping-cart2">
                    <div className="shopping-cart1">
                        <p className="shopping-title1">Shopping Cart</p>
                        <div className="cart-items-container" style={{ overflowY: "auto", height: `${containerHeight}px` }}>
                            <div className="cart-items-wrapper">
                                {cartItems.slice(0, maxVisibleItems).map((product, index) => (
                                    <div className="flex-shopping" key={index}>
                                        <div className="product-image">
                                            <img style={{width:"90px",height:"90px"}} src={product.img} alt={product.text1} />
                                        </div>
                                        <div className="product-details">
                                            <p className="product-name">{product.text1}</p>
                                            <div className="w-azalt" style={{display:"flex"}}>
                                                <p>Ürün ID: {product.id}</p>
                                                {/* Diğer ürün detaylarını ekleyin */}
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
                            <input type="button" className="order5" value="Checkout"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShoppingCart;
