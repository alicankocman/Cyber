import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import Shop from './ProductsPage/shop.jsx';
import ProductDetail from "./ProductInfo/ProductsDetail.jsx";
import ShoppingCart from "./Shopping Cart/shopping-cart.jsx";
import StepOne from "./steps/step-one.jsx";
import { CartProvider } from "./Shopping Cart/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/step-one" element={<StepOne />} /> {/* Yeni route eklendi */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
