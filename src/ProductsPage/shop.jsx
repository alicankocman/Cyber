import React, { useState, useEffect } from 'react';
import Header from '../home/footer';
import Footer from '../home/frame7.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';
import Pagination from './Pagination.jsx'; // Pagination bileşenini ekleyin
import './shop.css';
import favoriimg from '../assets/favori.svg';

function Shop() {
    const [shopData, setShopData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9); // Sayfa başına gösterilecek ürün sayısı
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        console.log("Fetching data...");
        fetch('http://localhost:3000/shop') // Verilerin bulunduğu bağlantı
            .then(response => response.json())
            .then(data => {
                console.log("Data fetched:", data);
                setShopData(data);
                setSortedData(data);
            })
            .catch(error => console.error('Error fetching shop data:', error));
    }, []); // Boş bağımlılık dizisi, bu useEffect'in yalnızca bir kez çalışmasını sağlar

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
        console.log("Current products for page:", currentProducts);

        return (
            <div className="product-card-group">
                {currentProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="favorishop"><img src={favoriimg} alt="favori" /></div>
                        <img className="product-img" src={product.img} alt={product.text1} />
                        <p className='text-product-1'>{product.text1}</p>
                        <p className='text-product-2'>{product.text2}</p>
                        <button className="card-button card-shop">Buy Now</button>
                    </div>
                ))}
            </div>
        );
    };
const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase(); // Arama metnini küçük harfe dönüştür

    // Arama metniyle eşleşen ürünleri filtrele
    const filteredData = shopData.filter((product) =>
        product.text1.toLowerCase().includes(searchText)
    );

    // Filtrelenmiş veriyi güncelle
    setSortedData(filteredData);

    // Arama yapıldığında ilk sayfaya dön
    setCurrentPage(1);
};

const handleCheckboxChange = (event) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;

    let filteredData = [...shopData];

    if (isChecked) {
        // If checkbox is checked, filter products by brand
        filteredData = filteredData.filter(product => product.text3.toLowerCase() === brand.toLowerCase());
    } else {
        // If checkbox is unchecked, remove brand filter
        filteredData = shopData;
    }

    // Update sortedData with filteredData
    setSortedData(filteredData);
    // Reset to first page when filters change
    setCurrentPage(1);
};

            
    const handlePageChange = (pageNumber) => {
        console.log("Page change triggered. New page number:", pageNumber);
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Header />
            <Breadcrumbs />
            <div className="grid-container">
                <div className="left-column">
                <div>
  <div class="accordion accordion-flush" id="accordionFlushExample1">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Brand
        </button>
      </h2>
      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample1">
        <div className="accordion-body">
          <input type="text" className="form-control accor-text" placeholder="Search..." onChange={handleSearch} />
          <br />
          <div className="left-checkbox">
            <input type="checkbox" value="Apple" className="checkbox1" onChange={handleCheckboxChange} />Apple<br />
            <input type="checkbox" value="Samsung" className="checkbox1" onChange={handleCheckboxChange} />Samsung<br />
            <input type="checkbox" value="Pocco" className="checkbox1" onChange={handleCheckboxChange} />Pocco<br />
            <input type="checkbox" value="Nokia" className="checkbox1" onChange={handleCheckboxChange} />Nokia<br />
            <input type="checkbox" value="Xiamio" className="checkbox1" onChange={handleCheckboxChange} />Xiamio<br />
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

  <div class="accordion accordion-flush" id="accordionFlushExample2">
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
          Batery capacity
        </button>
      </h2>
      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample2">
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.
        </div>
      </div>
    </div>

    {/* Additional accordion items */}
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
          Screen type
        </button>
      </h2>
      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample2">
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          Screen diagonal
        </button>
      </h2>
      <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample2">
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fourth item's accordion body.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
          Protection class
        </button>
      </h2>
      <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample2">
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the fifth item's accordion body.
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingSix">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
          Built-in memory
        </button>
      </h2>
      <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample2">
        <div class="accordion-body">
          Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the sixth item's accordion body.
        </div>
      </div>
    </div>
    {/* End of additional accordion items */}
  </div>
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
                    {/* Pagination bileşenini ekleyin */}
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
