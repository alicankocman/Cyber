import React, { useEffect } from "react";
import "./frame0.css";

function Frame0() {
  useEffect(() => {
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

  return <div className="frame0"></div>;
}

export default Frame0;
