import React from "react";

const SizingChart = (props) => {
  const handleSizeClick = (size) => {
      console.log(`Size ${size} clicked`);
  };

  const sizes = props.size; 

  return (
    <div className="sizing-chart">
      <h3 className="pb-3 text-start">Sizing Chart</h3>
      <div className="size-buttons ">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className="size-button"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizingChart;
