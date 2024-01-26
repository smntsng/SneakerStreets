import React, { useState } from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import BasketItem from '../BasketItem/BasketItem';
import BasketProcess from '../Checkout/BasketProcess/BasketProcess';


const Cart = () => {
    const containerStyles = {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        gap: '16px',
        margin: 'auto',
        width: '100%'
    };

    const basketItems = useSelector((state) => state.basket.items);
    // Total Price
    const [totalPrice, setTotalPrice] = useState(0)

    const priceupdateHandler =(newPrice) => {
        setTotalPrice(newPrice);
    }

    return(
        <>
        <div style={{ width: '80%', margin: '50px auto'}}>
        <h3 style={{textAlign:'left', marginLeft: '20px'}}>My Bag</h3>
            <div className="container" style={{marginTop:'0px', minWidth:'100%'}}>
                <div style={containerStyles}>
                    <div style={{ padding: '16px' }}>
                        <div className="row" style={{margin: '0px'}}>
                            {basketItems.length === 0 ? (
                                <p>Your basket is empty</p>
                                ) : (
                                    <ul>
                                        {
                                        basketItems.map((item, index) => {
                                            console.log(item)
                                            return <BasketItem 
                                            key={index} 
                                            item={item.item} 
                                            size={item.size} 
                                            color={item.color} 
                                            priceupdateHandler={priceupdateHandler}/>
                                        })
                                        }
                        
                                    </ul>
                                )}
                        </div>
                    </div>
                    {/* Right Side */}
                    <div style={{ border: '1px solid #c4c4c4', minHeight: '400px', borderRadius:'5px'}}>
                        <BasketProcess total={totalPrice} priceupdateHandler={priceupdateHandler}/>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}



export default Cart 