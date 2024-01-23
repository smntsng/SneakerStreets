import React from 'react';
import './Cart.css';


const Cart = () => {
    return(
        <>
        <h1>Checkout</h1>

        <div className='total'>
        <h2>
            Total: price logic
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
            add to cart logic
            {/* atc logic */}
        </div>
        </div>
        <div className='voucher'>
          <h2>Promo Code</h2>
          <input type="text" id="voucherInput" placeholder="Enter code" />
          <button className="voucherButton">Apply</button>
        </div>
        </div>
        </>
    )
}



export default Cart 