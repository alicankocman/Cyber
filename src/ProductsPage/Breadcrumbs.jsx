import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

function Breadcrumbs({ category, productName }) {
  const location = useLocation();

  return (
    <div className="breadcrumbs">
      <p>
        <Link to="/">Home</Link>
        {" >"}
        <Link
          to=""
          className={location.pathname.startsWith("/catalog") ? "active" : ""}
        >
          Catalog
        </Link>
        {" >"}
        <Link
          to="/shop"
          className={location.pathname === "/shop" ? "active" : ""}
        >
          Smartphones
        </Link>
        {category && " >"}
        {category && (
          <Link to={``}>{category}</Link>
        )}
        {productName && " > "}
        {productName && (
          <span className="active">{productName}</span> 
        )}
      </p>
    </div>
  );
}

export default Breadcrumbs;
