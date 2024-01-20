import React, { useState } from "react";
import "./productpage.css";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06b754f8-09d3-4a15-a459-e37e955d6d08/air-max-tw-shoes-VMBzzV.png",
    img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87278823-01f6-42ec-9f1e-cd6961842c1f/air-max-tw-shoes-VMBzzV.png",
    img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8518dcbf-fd9f-4cc1-af70-60f1485c5365/air-max-tw-shoes-VMBzzV.png",
    img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/894dc89b-162a-4dfa-bda5-716cd5abb31b/air-max-tw-shoes-VMBzzV.png"
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <div className="flex flex-col justify-between lg:flex-row rounded-xl p-5">
      <div className="flex flex-col gap-6">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover"
        />
        <div className="flex flex-row justify-between h-24">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer "
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer "
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer "
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer "
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* {ABOUT} */}
      <div className="flex flex-col p-5">
        <div>
          <span className=" text-violet-600 font-medium">
            {" "}
            Special Sneakers
          </span>
          <h1>Nike Air Max 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            eligendi facere debitis vitae voluptate sed illo, consequuntur,
            pariatur minus reiciendis quisquam, quia rem quo porro dolor quaerat
            sequi numquam? Nobis.
          </p>
          <h6 className=" text-2xl font-bold">£129.99</h6>
          <div>
            <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-1xl">
              -
            </button>
            <span className="py-4 px-6 rounded-lg">1</span>
            <button className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-1xl">
              +
            </button>
          </div>
          <button className="bg-violet-600 text-white px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;