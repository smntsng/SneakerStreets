import sneakers from "../assets/json/sneakers"
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
    
    return(
        <>
            <div style={{ width: '80%', margin: '50px auto'}}>
                <h3 style={{textAlign:'left', marginLeft: '5%'}}>Products</h3>
                <div className="container-fluid">
                    <div className="row">
                    {/* Left column with filters (20%) */}
                    <div className="col-2">
                    {/* Category filter */}
                    <div className="mb-3">
                        <h6>Category</h6>
                        <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        </ul>
                    </div>

                    {/* Price range filter */}
                    <div className="mb-3">
                        <h6>Price Range</h6>
                        <select className="form-select">
                        <option value="">Select</option>
                        <option value="0-50">$0 - $50</option>
                        <option value="51-100">$51 - $100</option>
                        <option value="101-200">$101 - $200</option>
                        </select>
                    </div>

                    {/* Color filter */}
                    <div className="mb-3">
                                <h6>Color</h6>
                                <ul>
                                <li>Red</li>
                                <li>Blue</li>
                                <li>Green</li>
                                </ul>
                            </div>

                            {/* Brands filter */}
                            <div>
                                <h6>Brands</h6>
                                <ul>
                                <li>Nike</li>
                                <li>Adidas</li>
                                <li>Jordan</li>
                                </ul>
                            </div>
                    </div>


                        {/* Right column (80%) */}
                        <div className="col-10"> 
                            <div className="container" style={{marginTop:'0px', minWidth:'100%'}}>
                                <div className="row" style={{margin: '0px'}}>
                                    {sneakers.map( (sneaker, index) => <ProductCard key={index} data={sneaker} popularity={true}/> )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;