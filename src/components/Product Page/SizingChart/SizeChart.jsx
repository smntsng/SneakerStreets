import React from "react";

const SizingChart = (props) => {
  const sizes = props.size; 
  

  return (
    <div className="sizing-chart">
      <h3 className="pb-3 text-start">Sizing Chart</h3>
      <div className="size-buttons ">
        {sizes.map((size) => (
          size === props.chosen ?
          <button
            key={size}
            onClick={() => props.handleSizeClick(size)}
            className="hovButton size-button"
            style={{background:'#7C3AED', color:'white'}}
          >
            {size}
          </button>
          :
          <button
            key={size}
            onClick={() => props.handleSizeClick(size)}
            className="hovButton size-button"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizingChart;
