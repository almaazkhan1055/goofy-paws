import React from "react";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";
import HeroImg from "../heroImg";
import bed from "../../../public/assets/bed.png";
import IconsContainer from "../iconsContainer";
import dog1 from "../../../public/assets/dog-1.png";
import home from "../../../public/assets/home.png";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-row  font-semibold md:text-[180px] text-[55px] md:gap-10 gap-0 leading-none md:leading-normal mt-14 md:mt-0">
          <h2>GOOFY</h2>
          <h2 className="italic">PAWS</h2>
        </div>
        <div className="sectionSubRow flex flex-row md:items-start items-start justify-between mt-4 md:mt-0">
          <div className="flex flex-col md:w-[288px] w-[150px] md:gap-6 gap-2 mb-[50px]">
            <div>
              <h2 className="md:text-[22px] text-[10px] md:leading-[30px] text-gray-400 font-medium">
                Goofy Paws Pet Care
                <span className="text-black"> Quality Products</span> for Your
                Cherished Furry Family Members
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <Button text="Shop Now" />
              <CiCircleChevRight className="text-[#703EDB] md:text-[50px] text-[30px]" />
            </div>
          </div>
          <div className="images flex md:flex-row flex-row items-center gap-2 justify-between w-[100px] md:w-[220px]">
            <IconsContainer bgColor="#EAF2FF" image={bed} />
            <IconsContainer bgColor="#FFEBD6" image={dog1} padding="p-[8px]" />
            <IconsContainer bgColor="#EEEEEE" image={home} padding="p-[8px]" />
          </div>
        </div>
        <HeroImg />
      </div>
    </>
  );
};

export default Hero;
