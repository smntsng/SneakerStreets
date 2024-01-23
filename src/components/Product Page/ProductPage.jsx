import React, { useState } from "react";
import "./productpage.css";
import SizingChart from "./SizingChart/SizeChart";
import ProductCard from "../ProductCard/ProductCard";
import Accordion from "../Accordion/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06b754f8-09d3-4a15-a459-e37e955d6d08/air-max-tw-shoes-VMBzzV.png",
    img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87278823-01f6-42ec-9f1e-cd6961842c1f/air-max-tw-shoes-VMBzzV.png",
    img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8518dcbf-fd9f-4cc1-af70-60f1485c5365/air-max-tw-shoes-VMBzzV.png",
    img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/894dc89b-162a-4dfa-bda5-716cd5abb31b/air-max-tw-shoes-VMBzzV.png"
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div className="flex flex-col  lg:flex-row rounded-xl p-5 gap-16 lg:items-start">
        <div className="flex flex-col gap-6 lg:w-2/3">
          <img
            src={activeImg}
            alt=""
            className="img w-full h-full aspect-square object-cover"
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src={images.img1}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-28 h-28 rounded-md cursor-pointer "
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>

        {/* {ABOUT} */}
        <div className="flex flex-col gap-6 lg:w-2/3">
          <div>
            <h2 className=" text-violet-600 font-medium text-start">
              Special Sneakers
            </h2>
            <h1 className="text-start">Nike Air Max TW</h1>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((star) => {
              return <span className="star">&#9733;</span>;
            })}
          </div>
          <h6 className=" text-2xl font-bold text-start">£129.99</h6>
          <div className="flex flex-row items-center">
            <>
              <SizingChart />
            </>
          </div>
          <div className="flex flex-row items-center gap-12 mt-3">
            <div className="flex flex-row items-center">
              <button
                className="upDown bg-gray-200 py-6 px-6 rounded-lg text-violet-800 text-1xl"
                onClick={() => setAmount((prev) => [prev - 1])}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="upDown bg-gray-200 py-6 px-6 rounded-lg text-violet-800 text-1xl"
                onClick={() => setAmount((prev) => [prev + 1])}
              >
                +
              </button>
            </div>
            <button className="blkButton bg-violet-600  text-white py-4 px-16 rounded-xl h-full">
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
           <strong>Colour Shown: Black/Anthracite/Black/Black</strong> 
            </li>
            <li> <strong>Style: DQ3984-003</strong> </li>
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
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
