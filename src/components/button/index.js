import React from "react";

const Button = ({ text, padding, textSize }) => {
  return (
    <>
      <button
        className={`bg-[#703EDB] sm:px-6 sm:py-3 text-[#ffffff] sm:text-lg text-[${textSize}] ${padding} rounded-[60px]`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

// className={`rounded-full ${padding ? padding : "sm:px-1 sm:py-2.5 p-2"} `}
