import React from "react";

const SizingChart = () => {
  const handleSizeClick = (size) => {
      console.log(`Size ${size} clicked`);
  };

  const sizes = ["7", "7.5", "8", "8.5", "9"]; 

  return (
    <div className="sizing-chart">
      <h3 className="pb-3 text-start">Sizing Chart</h3>
      <div className="size-buttons">
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
