import React from "react";

const Button = ({ text, padding }) => {
  return (
    <>
      <button
        className={`bg-[#703EDB] md:px-6 md:py-3 text-white md:text-lg text-[10px] ${
          padding ? padding : "md:p-5 p-1.5"
        } rounded-[60px]`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

// className={`rounded-full ${padding ? padding : "md:px-1 md:py-2.5 p-2"} `}
