import React from 'react';
import './Cart.css';


const Cart = () => {
    return(
        <>
        <h1>Checkout</h1>

        <div className='total'>
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
        <div className='voucher'>
          <h3>Promo Code</h3>
          <input type="text" id="voucherInput" placeholder="Enter code" />
          <button className="voucherButton">Apply</button>
        </div>
        </div>
        </>
    )
}



export default Cart 