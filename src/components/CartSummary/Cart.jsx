import React from 'react';
import './Cart.css';
import { useSelector } from 'react-redux';
import BasketItem from '../BasketItem/BasketItem';


const Cart = () => {
    const containerStyles = {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        gap: '16px',
        margin: 'auto',
        width: '100%'
    };

    const basketItems = useSelector((state) => state.basket.items);
    return(
        <>
        <div style={{ width: '80%', margin: '50px auto'}}>
        <h3 style={{textAlign:'left', marginLeft: '20px'}}>Your Basket</h3>
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
                                            return <BasketItem key={index} item={item.item} size={item.size} color={item.color}/>
                                        })
                                        }
                        
                                    </ul>
                                )}
                        </div>
                    </div>
                    <div style={{ border: '1px solid #ccc', padding: '16px' }}>

                    </div>
                </div>

            </div>
        </div>
        </>
    )
}



export default Cart 