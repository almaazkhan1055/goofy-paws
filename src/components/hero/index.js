import React from "react";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";
import bed from "../../../public/assets/bed.png";
import IconsContainer from "../iconsContainer";
import dog1 from "../../../public/assets/dog-1.png";
import home from "../../../public/assets/home.png";
import Image from "next/image";
import dogNeckBelt from "../../../public/assets/dogNeckBelt.png";
import petCloth from "../../../public/assets/petCloth.png";
import dogCat from "../../../public/assets/dogCat.png";

const Hero = () => {
  return (
    <>
      <div className="relative mt-10">
        <h2 className="font-semibold sm:text-[190px] leading-none  text-center text-[55px] mt-14 sm:mt-0">
          GOOFY <span className="italic">PAWS</span>
        </h2>
        <div className="flex flex-col-reverse sm:block">
          <div>
            <div className="sectionSubRow relative flex justify-between gap-4 mt-4 sm:mt-0">
              <div className="flex flex-col sm:gap-6 gap-2 sm:w-[20%] w-[40%]">
                <div className="">
                  <h2 className="sm:text-[22px] text-[12px] sm:leading-[30px] text-[#8A8A8E] font-medium ">
                    Goofy Paws Pet Care
                    <span className="text-[#000]"> Quality Products</span> for
                    Your Cherished Furry Family Members
                  </h2>
                </div>
                <div className="flex items-center gap-6">
                  <Button text="Shop Now" padding="p-2" textSize="9px" />
                  <CiCircleChevRight className="text-[#703EDB] sm:text-[50px] text-[30px]" />
                </div>
              </div>

              <div className="sm:w-[20%] w-[40%]">
                <div className="flex items-center gap-2 justify-end ">
                  <IconsContainer bgColor="#EAF2FF" image={bed} />
                  <IconsContainer
                    bgColor="#FFEBD6"
                    image={dog1}
                    padding="p-[8px]"
                  />
                  <IconsContainer
                    bgColor="#EEEEEE"
                    image={home}
                    padding="p-[8px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end sm:mt-[-260px] mt-[-14px]">
            <div className="flex justify-end">
              <Image src={dogNeckBelt} alt="dogNeckBelt" />
            </div>
            <div className="flex sm:ml-[40px] ml-[10px] items-end">
              <Image src={dogCat} alt="dogcat" />
            </div>
            <div className="flex">
              <Image src={petCloth} alt="petCloth" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
