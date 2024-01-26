import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import sneakers from '../../assets/json/sneakers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BasketItem = (props) => {    
    const [amount, setAmount] = useState(1);
    let product = sneakers.filter( (data) => {
        return data.id == props.item;
    })
    console.log(product)
    let customURL = "/productpage/"+props.item;

    return (
        <div className="" style={{display:'contents'}}>
            <div className="card" style={{
                                display: 'flex',
                                flexDirection: 'row',
                                width: '100%',
                                height: '160px',
                                margin: '10px'
                            }}>
            <img className="card-img" src={product[0].image[0]} alt={product[0].title} style={{width:'160px'}}/>
                <div className="card-body">
                    <Link to={customURL} className="nav-link" >  
                        <h4 className="card-title" style={{minHeight:'20px'}}>{product[0].title}</h4>
                    </Link>
                        <h6 className="card-brand mb-2 text-muted">{product[0].brand}</h6>
                        <div className="options d-flex flex-fill">
                            <div className="price text-success" style={{position:'absolute', right:'20px', top:'0px'}}>
                                <h5 className="mt-4">
                                    £{product[0].price}
                                </h5>
                            </div>
                            <p style={{fontSize: '9px !important'}}>Colour: {props.color} | Size: {props.size}</p>
                        </div>

                        {/* Incraese quantity */}
                        <div className="flex flex-row items-center gap-4 mt-2">
                            <div className="flex flex-row items-center">
                                <button
                                    className="upDown bg-gray-200 py-2 px-4 rounded-md text-violet-800 text-1"
                                    onClick={() => setAmount((prev) => prev - 1)}
                                    >
                                        -
                                    </button>
                                <span className="py-4 px-6 rounded-lg">{amount}</span>
                                    <button
                                        className="upDown bg-gray-200 py-2 px-4 rounded-md text-violet-800 text-1"
                                        onClick={() => setAmount((prev) => prev + 1)}
                                    >
                                    +
                                </button>
                            </div>
                            <button className="text-black py-2 px-2 rounded-md" style={{background: 'transparent !important', textDecoration: 'underline'}}>
                            Remove
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasketItem;