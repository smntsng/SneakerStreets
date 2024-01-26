import React from "react";

const ColourChart = (props) => {
    const colors = props.color; 

    return (
        <div className="sizing-chart">
        <h3 className="pb-3 text-start">Colors</h3>
        <div className="size-buttons ">
            {colors.map((color, index) => (
            color === props.chosen ?
            <button
                key={color}
                onClick={() => props.handleSizeClick(color)}
                className="size-button"
                style={{background:'#7C3AED', color:'white'}}
            >
                {color}
            </button>
            :
            <button
                key={index}
                onClick={() => props.handleColorClick(color)}
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
