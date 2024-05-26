import React from "react";
import "./frame1.css";
import detail from "../assets/shop/detail1.svg";
import detail2 from "../assets/shop/detail2.svg";
import detail3 from "../assets/shop/detail3.svg";
import detail4 from "../assets/shop/detail4.svg";
import detail5 from "../assets/shop/detail5.svg";
import detail6 from "../assets/shop/detail6.svg";
import delivery from "../assets/shop/Delivery.svg";
import stock from "../assets/shop/Stock.svg";
import Guaranteed from "../assets/shop/Guaranteed.svg";
function Frame1({ product }) {
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="frame-1">
          <div className="img-frame1">
            <div className="small-img-frame1">
                <img src={product.img} alt={product.text1} />
                <img src={product.img} alt={product.text1} />
                <img src={product.img} alt={product.text1} />
                <img src={product.img} alt={product.text1} />
            </div>
            <div className="big-img-frame1">
            <img className="big-img" src={product.img} alt={product.text1} />
            </div>
          </div>
          <div className="text-frame1">
            <h2>{product.text1}</h2>
            <div className="price-frame1">
            <p className="price">{product.text2}</p><del className="delprice">1603$</del>
            </div>
            <div className="btn-frame1-color">
                <p className="color-select">Select color :</p>
                <input type="button" style={{backgroundColor:"black"}} className="btn-frame1" />
                <input type="button" style={{backgroundColor:"#781DBC"}} className="btn-frame1" />
                <input type="button" style={{backgroundColor:"#E10000"}} className="btn-frame1" />
                <input type="button" style={{backgroundColor:"#E1B000"}} className="btn-frame1" />
                <input type="button" style={{backgroundColor:"#E8E8E8"}} className="btn-frame1" />
                </div>
        <div className="tabs-memory">
        <input type="button" className="memory-button" value={"128GB"}></input>
        <input type="button" className="memory-button" value={"256GB"}></input>
        <input type="button" className="memory-button" value={"512GB"}></input>
        <input type="button" className="memory-button" value={"1TB"}></input>
        </div>
        <div class="btn-frame1">
    <div class="detail-button">
        <div className="detail-img">
        <img src={detail} alt="detail" />
</div>
<div className="detail-text">
       <p>{product.text4}</p>
        <p>{product.text5}</p> 
</div>
    </div>
    <div class="detail-button"><div className="detail-img">
        <img src={detail2} alt="detail" />
</div>
<div className="detail-text">
       <p>{product.text6}</p>
        <p>{product.text7}</p> 
</div></div>
    <div class="detail-button"><div className="detail-img">
        <img src={detail3} alt="detail" />
</div>
<div className="detail-text">
       <p>{product.text8}</p>
        <p>{product.text9}</p> 
</div></div>
</div>
<div class="btn-frame1">
    <div class="detail-button2">
    <div className="detail-img">
        <img src={detail4} alt="detail" />
</div>
<div className="detail-text">
       <p>{product.text10}</p>
        <p>{product.text11}</p> 
</div>
    </div>
    <div class="detail-button2">
    <div className="detail-img">
        <img src={detail5} alt="detail" />
</div>
<div className="detail-text">
       <p>{product.text12}</p>
        <p>{product.text13}</p> 
</div>
    </div>
    <div class="detail-button2">
    <div className="detail-img">
        <img src={detail6} alt="detail" />
</div>
<div className="detail-text">
       <p>{product.text14}</p>
        <p>{product.text15}</p> 
</div>
    </div>
    
</div>
<div className="detail-info">
        <p>
        Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...
        </p>
            </div>
            <div className="btn-frame7">
            <button className="add-to-cart">Add to Wishlist</button>
            <button className="buy-now">Add to Card</button>
            </div>
            <div className="btn-frame8">
<div className="delivery">
    <img src={delivery} alt="delivery" />
</div>
<div className="detail-text0">
       <p>Free Delivery</p>
        <p>1-2 day</p> 
</div>
<div className="stock">
    <img src={stock} alt="stock" />
</div>
<div className="detail-text0">
       <p>In Stock</p>
        <p>Today</p> 
</div>
<div className="guaranteed">
    <img src={Guaranteed} alt="guaranteed" />
</div>
<div className="detail-text0">
       <p>Guaranteed</p>
        <p>1 year</p> 
</div>

                </div>
            </div>
            </div>
    );
}

export default Frame1;
