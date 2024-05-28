// Footer.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from "../Shopping Cart/CartContext";
import "./footer.css";
import logo from "../assets/a.png";
import Cart from "../assets/Cart.svg";

function Footer() {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    const handleHomeButtonClick = () => {
        navigate("/");
    };

    const handleCartButtonClick = () => {
        navigate("/shopping-cart");
    };

    return (
        <div className="footer">
            <img className="logocyber" src={logo} alt="logo" />
            <form className="form-inline my-2 my-lg-0 form">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Ara" />
            </form>
            <input type="button" className="btnftr a" value={"Home"} onClick={handleHomeButtonClick} />
            <input type="button" className="btnftr b" value={"About"} />
            <input type="button" className="btnftr c" value={"Contact Us"} />
      <input type="button" className="btnftr d" value={"Blog"} />
      <img className="logo_boyut" src="https://cdn-icons-png.freepik.com/512/73/73814.png" />
      <div className="cart-container">
                <img src={Cart} alt="Cart" onClick={handleCartButtonClick} />
                <span className="cart-count">{cartItems}</span> {/* Sepet öğe sayısını gösterin */}
            </div>
      <img className="logo_boyut" src="https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid" />
  
        </div>
    );
}

export default Footer;
