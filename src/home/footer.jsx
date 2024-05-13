import react from "react";
import "./footer.css"
import "../assets/a.png"
import logo from "../assets/a.png";

function Footer() {
  return (
    <div className="footer">
         <img className="logocyber" src={logo} alt="logo" />
         <form class="form-inline my-2 my-lg-0 form">
      <input class="form-control mr-sm-2" type="search" placeholder="Search " aria-label="Search"></input>
    </form>
    <input type="button" className="btnftr" value={"Home"}></input>
    <input type="button" className="btnftr"  value={"About"}></input>
    <input type="button" className="btnftr" value={"Contact Us"}></input>
    <input type="button" className="btnftr" value={"Blog"}></input> 
    <img className="logo_boyut" src="https://cdn-icons-png.freepik.com/512/73/73814.png"></img>
    <img className="logo_boyut" src="https://annebebekurunleri.elitprosoft.com/image/catalog/lalissa/sepet-icon.png"></img>
    <img className="logo_boyut" src="https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid"></img>

        </div>
  );
}

export default Footer;