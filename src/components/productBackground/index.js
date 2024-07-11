import Image from "next/image";
import React from "react";

const Product = ({ imgSrc, bgColor, desc }) => {
  return (
    <div className="flex flex-col items-center justify-end sm:h-[487.48px] h-[240px] sm:gap-6 gap-2">
      <div className="relative h-full flex items-end">
        <div
          className="absolute bottom-0 h-[70%] md:w-full w-[100%] rounded-[32px] -z-[1]"
          style={{
            background: bgColor,
          }}
        ></div>
        <Image className="w-full" src={imgSrc} alt={desc} />
      </div>
      <h2 className="text-[28px] font-medium">{desc}</h2>
    </div>
  );
};

export default Product;
