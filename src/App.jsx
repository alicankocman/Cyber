// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import Shop from './ProductsPage/shop.jsx';
import ProductDetail from "./ProductInfo/ProductsDetail.jsx"; // Import the ProductDetail component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
}

export default App;
