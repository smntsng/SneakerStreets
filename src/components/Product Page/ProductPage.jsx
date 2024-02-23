import React, { useState } from "react";
import "./productpage.css";
import SizingChart from "./SizingChart/SizeChart";
import ProductCard from "../ProductCard/ProductCard";
import Accordion from "../Accordion/Accordion";
import sneakers from '../../assets/json/sneakers'
import { useParams } from "react-router-dom";
import ColourChart from "./ColourChart/ColourChart";
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../../redux/actions/basketActions';

const ProductPage = () => {

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  // Use state
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(undefined);
  const [color, setColor] = useState(undefined);

  const handleAddToBasket = (item, quantity, size, color) => {
      dispatch(addToBasket({item, quantity, size, color }));
      setSize(undefined);
      setColor(undefined);
      setAmount(1)
  };

  // Color and Size handlers
  const handleSizeClick = (size) => {
    setSize(size)
  };

  const handleColorClick = (color) => {
    setColor(color)
  };

  // Get ID from URL
  const params = useParams();

  let product = sneakers.filter( (data) => {
    return data.id == params.id;
  })

  const { id, image, title, price, brand, styleCode, sizeOption, colourOption, category, stock, specialTag } = product[0];
  const [activeImg, setActiveImage] = useState(image[0]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(image[0])
  }, [params.id]);

  return (
    <div style={{ width: '96%', margin: '50px auto', maxWidth: '1400px' }}>
      <div className="flex flex-col  lg:flex-row rounded-xl p-5 gap-16 lg:items-start" >
        <div className="flex flex-col gap-6 lg:w-2/3">
          <img
            src={activeImg}
            alt=""
            className="img w-full h-full aspect-square object-cover"
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src={image[1]}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(image[1])}
            />
            <img
              src={image[2]}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(image[2])}
            />
            <img
              src={image[3]}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(image[3])}
            />
            <img
              src={image[4]}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(image[4])}
            />
          </div>
        </div>

        {/* {ABOUT} */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          <div>
            <h2 className="brand text-violet-600 font-medium text-start ">
              {brand}
            </h2>
            <h1 className="text-start">{title}</h1>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              return <span key={index} className="star">&#9733;</span>;
            })}
          </div>
          <h6 className=" text-2xl font-bold text-start">£{price}</h6>
          <div className="flex flex-row items-center">
              <SizingChart size={sizeOption} chosen={size} handleSizeClick={handleSizeClick}/>
          </div>
          <div className="flex flex-row items-center">
              <ColourChart color={colourOption} chosen={color} handleColorClick={handleColorClick}/>
          </div>
          <div className="flex flex-row items-center gap-12 mt-3">
            <div className="flex flex-row items-center">
              <button
                className="hovButton bg-gray-200 py-6 px-6 rounded-lg text-violet-800 text-1xl"
                onClick={() => {
                  if (amount === 1) {return}
                  setAmount((prev) => prev - 1)}}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="hovButton upDown bg-gray-200 py-6 px-6 rounded-lg text-violet-800 text-1xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button 
            onClick={() => handleAddToBasket(id , amount , size, color)} 
            className="hovButton btn cartBtn mt-3 bg-violet-600 py-4 px-16 rounded-xl"
            disabled={size === undefined || color === undefined} >
              Add to Cart
            </button>
          </div>
          <p className="text-start">
            So you're in love with the classic look of the '90s, but you've got
            a thing for today's fast-paced culture. Meet the Air Max TW.
            Inspired by the treasured franchise that brought Nike Air cushioning
            to the world and laid the foundation for the track-to-street
            aesthetic, its eye-catching design delivers a 1–2 punch of comfort
            and fashion. Ready to highlight any 'fit, its lightweight upper
            pairs angular and organic lines to create an entrancing haptic
            effect. The contrasting colourways make it easy to style. And if
            you're ready for the next step, the 5 windows underfoot deliver a
            modern edge to visible Air cushioning. <br />
            <li className="pt-3 pb-2">
              <strong>Colour Shown: {colourOption[0]} </strong> 
            </li>
            <li> <strong>Style: {styleCode}</strong> </li>
          </p>
          <>
            <Accordion />
          </>
        </div>
      </div>

      {/* {RELATED PRODUCTS} */}

      <div className="flex flex-col justify-between lg:flex-row rounded-xl p-5 gap-16 lg:items-center">
        <div className="flex flex-col">
          <>
            <h4 className="containerHeading text-start pb-3">More to Love</h4>
            <div className="container justify-start">
              <div className="row">
                {sneakers.map( (sneaker, index) => <ProductCard key={index} data={sneaker}/> )}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
