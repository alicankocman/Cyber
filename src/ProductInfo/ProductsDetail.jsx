import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../ProductsPage/Breadcrumbs';
import Header from "../home/footer";
import Footer from '../home/frame7';
import RelatedProduct from "../home/frame5";
import Frame1 from './frame1';
import Frame2 from './frame2';
import Frame3 from './frame3';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/shop/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>
      <Breadcrumbs category={product.text3} productName={product.text1} />
      <Frame1 product={product} />
      <Frame2 product={product} />
      <Frame3 product={product} />
      <RelatedProduct/>
      <Footer/>
    </div>
  );
}

export default ProductDetail;
