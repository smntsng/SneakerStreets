import React from "react";

const ColourChart = (props) => {
    const handleSizeClick = (color) => {
        console.log(`Color ${color} clicked`);
    };

    const sizes = props.color; 

    return (
        <div className="sizing-chart">
        <h3 className="pb-3 text-start">Colors</h3>
        <div className="size-buttons ">
            {sizes.map((color, index) => (
            <button
                key={index}
                onClick={() => handleSizeClick(color)}
                className="size-button"
            >
                {color}
            </button>
            ))}
        </div>
        </div>
    );
};

export default ColourChart;
