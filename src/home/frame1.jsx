import React, { useState, useEffect } from "react";
import PlayStation from "../assets/PlayStation.png";
import kulaklık from "../assets/kulaklık.png";
import akilligozluk from "../assets/akilligozluk.png";
import MacBookPro14 from "../assets/MacBook Pro 14.png";
import "./frame1.css";

function Frame1() {
  const [fetchData, setFetchData] = useState({ text1: "", text2: "", text3: "", text4: "",text5:"",text6:"",text7:" ",text10:" "});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://localhost:3000/frame1")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setFetchData({ text1: data[0].text1, text2: data[0].text2, text3: data[0].text3, text4: data[0].text4, text5: data[0].text5, text6: data[0].text6, text7: data[0].text7, text10: data[0].text10});
          } else {
            console.error("Products data not found in response:", data);
          }
        })
        .catch((error) => console.error("Error fetching products:", error))
        .finally(() => {
          setLoading(false); 
        });
    };

    fetchProducts();

    return () => {

    };
  }, []); 


  return (
    <div className="frame">
      <div className="container1">
        <div className="container1-1">
          <img src={PlayStation} alt="PlayStation" className="PlayStation" />
          <div className="text-container">
          <h1 className="h1P">{fetchData.text1}</h1>
          <p className="infoP">{fetchData.text2}</p> {/* Diğer yazıyı h1'in altına taşıdık */}
         </div>
        </div>
        <div className="container1-2">
        <img src={kulaklık} alt="kulaklık" className="kulaklık" />
        <div className="text-container2">
        <p className="title-kulaklik">{fetchData.text3}</p>
        <p className="title-kulaklik2">{fetchData.text4}</p>
        </div>
        </div>
      <div className="container1-3">
        <img src={akilligozluk} alt="akilligozluk" className="akilligozluk" />
        <div className="text-container3">
        <p className="akilligozluk1">{fetchData.text5}</p>
        <p className="akilligozluk2">{fetchData.text6}</p>
        </div>
 </div>
      </div>
      <div className="container2">
        <div className="text-container4">
      <p className="macbook1">{fetchData.text7}</p>
      <p className="macbook2">{fetchData.text2}</p>
      </div>
        <img src={MacBookPro14} alt="MacBookPro14" className="MacBookPro14" />
        <button className="shop1">Shop Now</button>
      </div>
    </div>
  );
}

export default Frame1;
