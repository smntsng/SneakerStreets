import './ProductCard.css'
import hotSale from '../../assets/productImages/hotsale.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const ProductCard = props => {
    // Object destructuring for props
    const { id, image, title, price, brand, styleCode, sizeOption, colourOption, category, stock, specialTag } = props.data;
    let customURL = "/productpage/"+id;
    const [productid, setProductId] = useState(id)

    return(
        <>
                <div className="" style={{display:'contents'}}>
                        <div className="card">
                            <div className='specialTag'>
                                {specialTag && 
                                    <span><img src={hotSale} /></span>
                                }
                            </div>
                            <img className="card-img" src={image[0]} alt="Vans" />
                            <div className="d-flex justify-content-end heart">
                                <a href="#" className="card-link text-danger like">
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
                                    <select className="custom-select mr-1">
                                        <option defaultValue>Color</option>
                                        {colourOption.map( (color, index) => {
                                            return <option key={index} value={index}>{color}</option>
                                        })}
                                        
                                        
                                    </select>
                                    <select className="custom-select ml-1">
                                        <option defaultValue>Size</option>
                                        {sizeOption.map( (size, index) => {
                                            return <option key={index} value={index}>{size}</option>
                                        })}
                                    </select>
                                    <a href="#" className="btn cartBtn mt-3">
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
        </>
    )
}

export default ProductCard;