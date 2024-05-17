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

    // Dropdown değişikliği işlemini burada tanımlayın
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
      
        setSortedData(sortedProducts); // Update sortedData with sortedProducts
        setCurrentPage(1); // Reset page to first page
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
                    
                </div>
                <div className="right-column">
                    <div className="shop-header"> 
                        <div className="Number_of_products">Selected Products:<div className='product_of_Number'>{shopData.length}</div></div>
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
