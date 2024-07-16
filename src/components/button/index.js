import React from "react";

const Button = ({ text, onClick, padding, textSize }) => {
  return (
    <>
      <button
        className={`bg-[#703EDB] sm:px-6 sm:py-3 text-[#ffffff] sm:text-lg text-[${textSize}] ${padding} rounded-[60px]`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
