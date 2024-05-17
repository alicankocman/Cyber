import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

function Breadcrumbs() {
    const location = useLocation();

    return (
        <div className="breadcrumbs">
            <p>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link> {" > "}
                <Link to="" className={location.pathname.startsWith("/catalog") ? "active" : ""}>Catalog</Link> {" > "}
                <Link to="/shop" className={location.pathname === "/shop" ? "active" : ""}>Smartphones</Link>
            </p>
        </div>
    );
}

export default Breadcrumbs;
