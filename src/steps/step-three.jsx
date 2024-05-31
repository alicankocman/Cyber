import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./step-three.css";
import Header from "../home/footer";
import Footer from "../home/frame7";
import Location from "../assets/step-img/Location.svg";
import ShippingSvg from "../assets/Shipping.svg";
import Payment3 from "../assets/step-img/Payment3.svg";

function StepThree() {
    const [cartItems, setCartItems] = useState([]);
    const [addressInfo, setAddressInfo] = useState(null);
    const [shipmentMethod, setShipmentMethod] = useState(null);
    const [subtotal, setSubtotal] = useState(0);
    const [estimatedTax, setEstimatedTax] = useState(0);
    const [estimatedShipping, setEstimatedShipping] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const cartData = Cookies.get('cartItems');
        if (cartData) {
            setCartItems(JSON.parse(cartData));
        }

        const selectedAddress = Cookies.get('selectedAddress');
        if (selectedAddress) {
            setAddressInfo(JSON.parse(selectedAddress));
        }

        const shippingMethod = Cookies.get('shippingMethod');
        if (shippingMethod) {
            setShipmentMethod(shippingMethod);
        }

        const subtotalValue = Cookies.get('subtotal');
        if (subtotalValue) {
            console.log("Subtotal value from cookie:", subtotalValue); // Debugging line
            setSubtotal(parseFloat(subtotalValue.replace('$', '')) || 0);
        }

        const estimatedTaxValue = Cookies.get('estimatedTax');
        if (estimatedTaxValue) {
            console.log("Estimated Tax value from cookie:", estimatedTaxValue); // Debugging line
            setEstimatedTax(parseFloat(estimatedTaxValue.replace('$', '')) || 0);
        }

        const estimatedShippingValue = Cookies.get('estimatedShipping');
        if (estimatedShippingValue) {
            console.log("Estimated Shipping value from cookie:", estimatedShippingValue); // Debugging line
            setEstimatedShipping(parseFloat(estimatedShippingValue.replace('$', '')) || 0);
        }

        const totalValue = Cookies.get('total');
        if (totalValue) {
            console.log("Total value from cookie:", totalValue); // Debugging line
            setTotal(parseFloat(totalValue.replace('$', '')) || 0);
        }
    }, []);

    return (
        <>
            <Header />
            <div className="brandcrumb-step-two">
                <div className='step-one'>
                    <img className='img1' src={Location} alt='Location' />
                    <div className='step-one-content'>
                        <p className='text-step2'> Step 1</p>
                        <p className='text-step3'>Address</p>
                    </div>
                </div>
                <div>
                    <div className='step-one'>
                        <img className='img1' src={ShippingSvg} alt='Shipping' />
                        <div className='step-one-content'>
                            <p className='text-step2'> Step 2</p>
                            <p className='text-step3'>Shipping</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='step-one'>
                        <img className='img1' src={Payment3} alt='Payment' />
                        <div className='step-one-content'>
                            <p className='text-step0'> Step 3</p>
                            <p className='text-step1'>Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-step-three">
                <div className="Left-side">
                    <p className="left-side-title">Summary</p>
                    <div className="selected-product">
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div className="cart-item21" key={index}>
                                    <img src={item.img} alt={item.text1} className="product-img21" />
                                    <div className="product-details21">
                                        <p className="product-name21">{item.text1}</p>
                                        <p className="product-price21">{item.text2}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No items in the cart.</p>
                        )}
                    </div>
                    <p className="address-title">Address</p>
                    {addressInfo ? (
                        <div className="address-cookie">
                            <p>{addressInfo.name}: {addressInfo.caption}</p>&nbsp;&nbsp;
                            <p>{addressInfo.street}</p>&nbsp;&nbsp;
                            <p>{addressInfo.city}</p>&nbsp;&nbsp;
                        </div>
                    ) : (
                        <p>No address selected.</p>
                    )}
                    
                    <p className="Shipment-method">Shipment method</p>
                    <p className="Shipment-method2">{shipmentMethod}</p>
                    <p className="Subtotal">Subtotal: <p className="subtotal">${subtotal.toFixed(2)}</p></p>
                    <p className="Estimated-Tax">Estimated Tax: <p className="estimated-tax"> ${estimatedTax.toFixed(2)}</p></p>
                    <p className="Estimated-shipping-Handling">Estimated Shipping & Handling: <p className="esah"> ${estimatedShipping.toFixed(2)}</p></p>
                   <div className="totals"> <p className="Total">Total: <p className="total">${total.toFixed(2)}</p></p> </div>
                    
                </div>
                <div className="Right-side">
                    {/* Add any content you want on the right side here */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default StepThree;
