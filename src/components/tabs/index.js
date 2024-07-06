"use client";

import React, { useState } from "react";
import shibainudog2 from "../../../public/assets/shibainudog2.png";
import cat1 from "../../../public/assets/cat1.png";
import human from "../../../public/assets/human.png";
import Image from "next/image";

const Tabs = () => {
  const [currentselected, setcurrentselected] = useState(0);

  const handleClick = (index) => {
    setcurrentselected(index);
  };
  return (
    <>
      <div className="flex items-center justify-center md:gap-10 gap-2 font-medium text-base md:leading-[32px] md:tracking-[0.75px] text-center cursor-pointer md:mt-20 mt-2 overflow-x-auto scrollbar-hidden transition duration-300 ease-out">
        {[
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
        ].map((item, index) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            currentselected={index}
            className={
              currentselected === index
                ? "border-2 border-[#610BEF] bg-[#7e46f751] md:px-6 md:py-4 md:rounded-full rounded-xl text-black text-[18px] transition duration-300 ease-in-out"
                : "font-medium text-[18px] rounded-full leading-[32px] tracking-[0.75px] text-center text-black px-6 py-4"
            }
          >
            <div className="flex md:flex-row flex-col items-center justify-center gap-3">
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
