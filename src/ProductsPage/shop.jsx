import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../home/footer.jsx';
import Footer from '../home/frame7.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import Pagination from './Pagination.jsx';
import './shop.css';
import favoriimg from '../assets/favori.svg';

function Shop() {
  const [shopData, setShopData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [sortedData, setSortedData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/shop')
      .then(response => response.json())
      .then(data => {
        setShopData(data);
        setSortedData(data);
      })
      .catch(error => console.error('Error fetching shop data:', error));
  }, []);

  const handleDropdownChange = (sortType) => {
    let sortedProducts = [...shopData];

    sortedProducts.sort((a, b) => {
      const priceA = a.price ? parseFloat(a.price.replace(/[^\d.-]/g, '')) : 0;
      const priceB = b.price ? parseFloat(b.price.replace(/[^\d.-]/g, '')) : 0;

      if (sortType === "expensiveToCheap") {
        return priceB - priceA;
      } else if (sortType === "cheapToExpensive") {
        return priceA - priceB;
      }
      return 0;
    });

    setSortedData(sortedProducts);
    setCurrentPage(1);
  };

  const renderProductCards = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedData.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
      <div className="product-card-group">
        {currentProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="favorishop"><img src={favoriimg} alt="favori" /></div>
            <img
              className="product-img"
              src={product.img}
              alt={product.text1}
              onClick={() => navigate(`/product/${product.id}`)}
            />
            <p className='text-product-1'>{product.text1}</p>
            <p className='text-product-2'>{product.text2}</p>
            <button className="card-button card-shop">Buy Now</button>
          </div>
        ))}
      </div>
    );
  };

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredData = shopData.filter(product =>
      product.text1.toLowerCase().includes(searchText)
    );
    setSortedData(filteredData);
    setCurrentPage(1);
  };

  const handleCheckboxChange = (event) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;
    let filteredData = [...shopData];

    if (isChecked) {
      filteredData = filteredData.filter(product => product.text3.toLowerCase() === brand.toLowerCase());
    } else {
      filteredData = shopData;
    }

    setSortedData(filteredData);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      <Breadcrumbs />
      <div className="grid-container">
        <div className="left-column">
          <div>
            <div className="accordion accordion-flush" id="accordionFlushExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Brand
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample1">
                  <div className="accordion-body">
                    <input type="text" className="form-control accor-text" placeholder="Search..." onChange={handleSearch} />
                    <br />
                    <div className="left-checkbox">
                      <input type="checkbox" value="Apple" className="checkbox1" onChange={handleCheckboxChange} />Apple<br />
                      <input type="checkbox" value="Samsung" className="checkbox1" onChange={handleCheckboxChange} />Samsung<br />
                      <input type="checkbox" value="Pocco" className="checkbox1" onChange={handleCheckboxChange} />Pocco<br />
                      <input type="checkbox" value="Nokia" className="checkbox1" onChange={handleCheckboxChange} />Nokia<br />
                      <input type="checkbox" value="Xiaomi" className="checkbox1" onChange={handleCheckboxChange} />Xiaomi<br />
                      <input type="checkbox" value="Asus" className="checkbox1" onChange={handleCheckboxChange} />Asus<br />
                      <input type="checkbox" value="Honor" className="checkbox1" onChange={handleCheckboxChange} />Honor<br />
                      <input type="checkbox" value="Realme" className="checkbox1" onChange={handleCheckboxChange} />Realme<br />
                      <input type="checkbox" value="Oppo" className="checkbox1" onChange={handleCheckboxChange} />Oppo<br />
                      <input type="checkbox" value="Motorola" className="checkbox1" onChange={handleCheckboxChange} />Motorola<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion accordion-flush" id="accordionFlushExample2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Battery capacity
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample2">
                  <div className="accordion-body">
                    Placeholder content for battery capacity filter.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Screen type
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample2">
                  <div className="accordion-body">
                    Placeholder content for screen type filter.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Screen diagonal
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample2">
                  <div className="accordion-body">
                    Placeholder content for screen diagonal filter.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Protection class
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample2">
                  <div className="accordion-body">
                    Placeholder content for protection class filter.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    Built-in memory
                  </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample2">
                  <div className="accordion-body">
                    Placeholder content for built-in memory filter.
                  </div>
                </div>
              </div>
            </div>
            {/* Add more accordion items here if needed */}
          </div>
        </div>
        <div className="right-column">
          <div className="shop-header">
            <div className="Number_of_products">Selected Products:<div className='product_of_Number'>{sortedData.length}</div></div>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by Price
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><button className="dropdown-item" onClick={() => handleDropdownChange("expensiveToCheap")}>From Expensive to Cheap</button></li>
                <li><button className="dropdown-item" onClick={() => handleDropdownChange("cheapToExpensive")}>From Cheap to Expensive</button></li>
              </ul>
            </div>
          </div>
          {renderProductCards()}
          <Pagination
            totalPages={Math.ceil(sortedData.length / productsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
