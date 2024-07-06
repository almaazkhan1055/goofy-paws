import React from "react";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";
import Bed from "../products/bed";
import Dog1 from "../products/dog1";
import Shelter from "../products/shelter";
import HeroImg from "../heroImg";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="flex md:flex-row flex-col font-semibold md:text-[186px] text-[80px] md:gap-10 gap-0 leading-none md:leading-normal mt-14 md:mt-0">
          <h2>GOOFY</h2>
          <h2 className="italic">PAWS</h2>
        </div>
        <div className="sectionSubRow flex md:flex-row flex-col items-start justify-between">
          <div className="flex flex-col w-[288px] gap-6 md:my-0 my-5">
            <div>
              <h2 className="text-[22px] text-gray-400 font-medium">
                Goofy Paws Pet Care{" "}
                <span className="text-black">Quality Products</span> for Your
                Cherished Furry Family Members
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <Button text="Shop Now" />
              <CiCircleChevRight className="text-[#703EDB] text-[50px]" />
            </div>
          </div>
          <div className="images flex items-center gap-2">
            <Bed bgColor="#EAF2FF" />
            <Dog1 bgColor="#FFEBD6" />
            <Shelter bgColor="#EEEEEE" />
          </div>
        </div>
        <HeroImg />
      </div>
    </>
  );
};

export default Hero;
