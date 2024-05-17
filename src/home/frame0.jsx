import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./frame0.css";

function Frame0() {
  const [fetchData, setFetchData] = useState({ text1: "", text2: "", text3: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = () => {
      fetch("http://localhost:3000/frame0")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data) && data.length > 0) {
            setFetchData({ text1: data[0].text1, text2: data[0].text2, text3: data[0].text3 });
          } else {
            console.error("Products data not found in response:", data);
          }
        })
        .catch((error) => console.error("Error fetching products:", error));
    };

    fetchProducts();

    function handleScroll() {
      const scrolled = window.scrollY;
      const frame = document.querySelector(".frame0");
      frame.style.backgroundPosition = "right+120 bottom " + (-scrolled * 0.5) + "px"; /* Resmin pozisyonunu güncelledik */
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="frame0">
      <div className="text-container">
        <p className="text-1">{fetchData.text1}</p>
        <p className="text-2">{fetchData.text2}</p>
        <p className="text-3">{fetchData.text3}</p>
        <button className="shop" onClick={() => navigate('/shop')}>Shop Now</button>
      </div>
    </div>
  );
}

export default Frame0;
