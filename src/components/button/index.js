import React from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="bg-[#703EDB] px-6 py-3 text-white text-lg rounded-[60px]">
        {text}
      </button>
    </>
  );
};

export default Button;
