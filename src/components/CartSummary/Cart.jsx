import React from 'react';
import './Cart.css';


const Cart = () => {
    return(
        <>
        <h1>Checkout</h1>

        <div className='summary'>
        <h2>
            Total:
            {/* need to add price logic here */}
        </h2>

        <button className="checkoutButton"> CHECKOUT</button>
        </div>
    <div className='atcContainer'>
        <div className='atcproducts'>
        <h2>
            Cart
        </h2>

        <div className='products'>
            products that have been added to Cart
            {/* atc logic */}
        </div>
        </div>
        </div>
        </>
    )
}



export default Cart 