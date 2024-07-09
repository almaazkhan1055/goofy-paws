import React from "react";
import dogfooter from "../../../public/assets/dogfooter.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#1C1C1E] relative md:h-[572px] h-[360px]">
      <div className="py-[65px] text-center">
        <h3 className="text-[28px] opacity-60 text-[#FFFFFF]">
          HIE Global Inc. All Rights Reserved
        </h3>
        <h2 className="font-semibold md:text-[130px]  text-[55px] text-[#ffffff] tracking-wider leading-[80px] md:leading-normal">
          G
          <span
            className="text-[#1C1C1E]"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            O
          </span>
          O
          <span
            className="text-[#1C1C1E]"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            F
          </span>
          Y PA
          <span
            className="text-[#1C1C1E]"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            W
          </span>
          S
        </h2>
      </div>
      <Image
        src={dogfooter}
        alt="doggy"
        className="absolute bottom-0 translate-x-[-50%] left-[50%]"
      />
    </div>
  );
};

export default Footer;
