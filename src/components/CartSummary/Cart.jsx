import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import BasketItem from '../BasketItem/BasketItem';


const Cart = () => {
    const basketItems = useSelector((state) => state.basket.items);
    return(
        <>
        <h1 className='checkout'>Checkout</h1>
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
            {basketItems.length === 0 ? (
                <p>Your basket is empty</p>
                ) : (
                    <ul>
                        {
                        basketItems.map((item, index) => {
                            console.log(item)
                            return <BasketItem key={index} item={item.item} size={item.size} color={item.color}/>
                        })
                        }
        
                    </ul>
                )}
            </div>
        </div>
        {/* <div className='voucher'>
            <h2>Promo Code</h2>
            <input className='input' type="text" id="voucherInput" placeholder="Enter code" />
            <button className="voucherButton">APPLY</button>
        </div> */}
        </div>
        </>
    )
}



export default Cart 