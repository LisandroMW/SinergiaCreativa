import React from "react";
import "./CustomButton.css"

function CustomButton({ text, onClick }) {
    return (
        <button className="custom-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomButton