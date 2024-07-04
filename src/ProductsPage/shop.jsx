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
  const [favorites, setFavorites] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/shop')
      .then(response => response.json())
      .then(data => {
        setShopData(data);
        setSortedData(data);
      })
      .catch(error => console.error('Error fetching shop data:', error));
      scrollToTop();
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15); // 500ms süre ile yavaşça kaydır
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };


  const handleDropdownChange = (sortType) => {
    console.log("Original shopData:", shopData); // Debug için orijinal shopData'yı göster
  
    try {
      // Filtreleme işlemi
      const filteredShopData = shopData.filter(item => item.text2 !== undefined && item.text2 !== null);
      
      console.log("Filtered shopData:", filteredShopData); // Debug için filtrelenmiş shopData'yı göster
  
      // Sıralama işlemi
      let sortedProducts = [...filteredShopData];
  
      sortedProducts.sort((a, b) => {
        try {
          console.log("Sorting prices...");
          console.log("Price A:", a.text2);
          console.log("Price B:", b.text2);
  
          // Fiyatları karşılaştırmadan önce gerekli işlemleri yapın (örneğin, sayıya dönüştürme veya temizleme)
          const priceA = parseFloat(a.text2.replace(/[^\d.-]/g, '')); // Örnek işlemler
          const priceB = parseFloat(b.text2.replace(/[^\d.-]/g, '')); // Örnek işlemler
  
          if (sortType === "expensiveToCheap") {
            return priceB - priceA;
          } else if (sortType === "cheapToExpensive") {
            return priceA - priceB;
          }
          return 0;
        } catch (error) {
          console.error("Error sorting products:", error);
          return 0; // Hata durumunda 0 döndürün veya uygulama mantığınıza göre işleyin
        }
      });
  
      console.log("Sorted Products:", sortedProducts);
  
      setSortedData(sortedProducts);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error filtering or sorting products:", error);
      // Hata durumunda kullanıcıya hata mesajı göstermek gibi bir işlem yapın
    }
};

  

  const toggleFavorite = (id) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [id]: !prevFavorites[id]
    }));
  };

  const renderProductCards = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedData.slice(indexOfFirstProduct, indexOfLastProduct);

return (
      <div className="product-card-group">
        {currentProducts.map(product => (
          <div key={product.id} className="product-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`favori ${favorites[product.id] ? 'favorite' : ''}`}
              onClick={() => toggleFavorite(product.id)}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
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
