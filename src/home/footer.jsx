import React from "react";
import { useNavigate } from 'react-router-dom'; // useNavigate hook'unu import ettik
import "./footer.css";
import logo from "../assets/a.png";

function Footer() {
  const navigate = useNavigate(); // useNavigate hook'unu kullandık

  const handleHomeButtonClick = () => {
    navigate("/"); // Ana sayfaya yönlendirme işlemi
  };

  return (
    <div className="footer">
      <img className="logocyber" src={logo} alt="logo" />
      <form className="form-inline my-2 my-lg-0 form">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
      <input type="button" className="btnftr" value={"Home"} onClick={handleHomeButtonClick} />
      <input type="button" className="btnftr" value={"About"} />
      <input type="button" className="btnftr" value={"Contact Us"} />
      <input type="button" className="btnftr" value={"Blog"} />
      <img className="logo_boyut" src="https://cdn-icons-png.freepik.com/512/73/73814.png" />
      <img className="logo_boyut" src="https://annebebekurunleri.elitprosoft.com/image/catalog/lalissa/sepet-icon.png" />
      <img className="logo_boyut" src="https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid" />
    </div>
  );
}

export default Footer;
