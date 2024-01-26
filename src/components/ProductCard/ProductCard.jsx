import './ProductCard.css'
import hotSale from '../../assets/productImages/hotsale.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/actions/basketActions';

const ProductCard = props => {

    const dispatch = useDispatch();
    
    const basket = useSelector((state) => state.basket);

    // Use state
    const [size, setSize] = useState(undefined);
    const [color, setColor] = useState(undefined);

    const handleAddToBasket = (item, quantity, size, color) => {
        dispatch(addToBasket({item, quantity, size, color }));
        setColor(undefined);
        setSize(undefined);
    };

    // Color and Size handlers
    const handleSizeChange = (event) => {
        let newSize = event.target.value;
        if(newSize === 'Size') {newSize = undefined}
        setSize(newSize)
    };

    const handleColorChange = (event) => {
        let newColor = event.target.value;
        if(newColor === 'Color') {newColor = undefined}
        setColor(newColor)
    };

    // Object destructuring for props
    const { id, image, title, price, brand, styleCode, sizeOption, colourOption, category, stock, specialTag, popularity } = props.data;
    let customURL = "/productpage/"+id;
    const [productid, setProductId] = useState(id)

    return(
        <>
                <div className="" style={{display:'contents'}}>
                        <div className="card">
                            <div className='specialTag'>
                                { !props.popularity &&
                                specialTag && 
                                    <span><img src={hotSale} /></span>
                                }
                                {
                                    props.popularity &&
                                    <span style={{padding: '15px'}}> <FontAwesomeIcon icon={faFireFlameCurved} /> {popularity} </span>
                                }

                            </div>
                            <img className="card-img" src={image[0]} alt="Vans" />
                            <div className="d-flex justify-content-end heart">
                                <a href="#" className="card-link like">
                                    <i className="fas fa-heart"></i>
                                    <FontAwesomeIcon icon={faHeart} />
                                    {/* Heart Icon  */}
                                </a>
                            </div>
                            <div className="card-body">
                            <Link to={customURL} className="nav-link" >  
                                <h4 className="card-title">{title}</h4>
                            </Link>
                                <h6 className="card-brand mb-2 text-muted">{brand}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Style: {styleCode}</h6>
                                <div className="options d-flex flex-fill">
                                    <div className="price text-success">
                                        <h5 className="mt-4">
                                            £{price}
                                        </h5>
                                    </div>
                                </div>
                                <div className="buy d-flex justify-content-between align-items-baseline">
                                    <select className="custom-select mr-1"
                                            value={color}
                                            onChange={handleColorChange}>
                                        <option defaultValue>Color</option>
                                        {colourOption.map( (colorNo, index) => {
                                            return <option key={index} value={colorNo}>{colorNo} </option>
                                        })}
                                        
                                        
                                    </select>
                                    <select className="custom-select ml-1"
                                            value={size}
                                            onChange={handleSizeChange}>
                                        <option defaultValue>Size</option>
                                        {sizeOption.map( (sizeNo, index) => {
                                            return <option key={index} value={sizeNo}>{sizeNo}</option>
                                        })}
                                    </select>
                                    <button onClick={() => handleAddToBasket(productid,1, size, color)} 
                                    className="hovButton btn cartBtn mt-3 bg-violet-600"
                                    disabled={!size || !color}>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
        </>
    )
}

export default ProductCard;