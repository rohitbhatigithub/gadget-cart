import React from "react";

const Button = ({ text, bgColor, textColor, width, handler = () => {} }) => {
    return (
        <button
            onClick={handler}
            className={`${bgColor} ${textColor} my-4 md:my-8 lg:my-8 cursor-pointer hover:scale-105 duration-300 py-2 px-6 md:px-8 rounded-full relative z-10 4{width}  md:w-[12rem] `}
        >
            {text}
        </button>
    );
};

export default Button;
