import sneakers from "../assets/json/sneakers";
import ProductCard from "../components/ProductCard/ProductCard";
import React from 'react';
import SearchBar from "../components/SearchBar/Search";


const Products = () => {
  return (
    <>
    
      <div style={{ width: '80%', margin: '100px auto' }}>
        <h1 className="mb-3" style={{ textAlign: 'center', marginLeft: '5%' }}>Browse All Products</h1>
        <div className="m-4"><SearchBar /></div>
        <div className="container-fluid mt-5">
          <div className="row">
            {/* Left column with filters (20%) */}
            <div className="col-2">
              {/* Category filter */}
              <div className="mt-3">
                <h4><strong>Category</strong></h4>
                <select className="form-select">
                  <option value="">Select</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>

              {/* Price range filter */}
              <div className="mt-3">
                <h4><strong>Price Range</strong></h4>
                <select className="form-select" >
                  <option value="">Select</option>
                  <option value="0-50">£0 - £50</option>
                  <option value="51-100">£51 - £100</option>
                  <option value="101-200">£101 - £200</option>
                  <option value="101-200">£201 - £300</option>
                </select>
              </div>

              {/* Color filter */}
              <div className="mt-3">
                <h4><strong>Color</strong></h4>
                <select className="form-select">
                  <option value="">Select</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                </select>
              </div>

              {/* Brands filter */}
              <div className="mt-3">
                <h4><strong>Brands</strong></h4>
                <select className="form-select">
                  <option value="">Select</option>
                  <option value="Nike">Nike</option>
                  <option value="Adidas">Adidas</option>
                  <option value="Jordan">Jordan</option>
                </select>
              </div>
            </div>

            {/* Right column (80%) */}
            <div className="col-10">
              <div className="container" style={{ marginTop: '0px', minWidth: '100%' }}>
                <div className="row" style={{ margin: '0px' }}>
                  {sneakers.map((sneaker, index) => (
                    <ProductCard key={index} data={sneaker} popularity={true} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;