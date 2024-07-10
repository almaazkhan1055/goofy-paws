"use client";

import React, { useState } from "react";
import shibainudog2 from "../../../public/assets/shibainudog2.png";
import cat1 from "../../../public/assets/cat1.png";
import human from "../../../public/assets/human.png";
import Image from "next/image";

const productButton = [
  {
    text: "FOR YOUR DOG",
    img: shibainudog2,
  },
  {
    text: "FOR YOUR CAT",
    img: cat1,
  },
  {
    text: "FOR YOU",
    img: human,
  },
];

const Tabs = () => {
  const [currentselected, setcurrentselected] = useState(0);

  const handleClick = (index) => {
    setcurrentselected(index);
  };
  return (
    <>
      <div className="flex items-center justify-center sm:gap-10 gap-2 font-medium text-base sm:leading-[32px] sm:tracking-[0.75px] text-center cursor-pointer sm:mt-20 my-5 scrollbar-hidden transition duration-300 ease-out sm:my-10">
        {productButton.map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            currentselected={index}
            className={
              currentselected === index
                ? "border-2 border-[#610BEF] bg-[#7e46f751] px-6 py-4 rounded-full text-black text-[18px] transition duration-300 ease-in-out"
                : "font-medium text-[18px] rounded-full leading-[32px] tracking-[0.75px] text-center text-black sm:px-6 sm:py-4"
            }
          >
            <div className="flex items-center sm:justify-center sm:gap-3 text-[10px] font-medium leading-3 sm:text-lg sm:leading-normal">
              <Image src={item.img} alt={item.text} />
              {item.text}
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
