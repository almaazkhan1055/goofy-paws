import React from "react";

const Button = ({ text, padding }) => {
  return (
    <>
      <button
        className={`bg-[#703EDB] sm:px-6 sm:py-3 text-[#ffffff] sm:text-lg text-[10px] ${
          padding ? padding : "sm:p-5 p-1.5"
        } rounded-[60px]`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

// className={`rounded-full ${padding ? padding : "sm:px-1 sm:py-2.5 p-2"} `}
