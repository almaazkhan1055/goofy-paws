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
      <div className="relative sm:mt-10 mt-0">
        <h2 className="font-semibold sm:text-[190px] leading-none  text-center text-[55px]">
          GOOFY <span className="italic">PAWS</span>
        </h2>
        <div className="flex flex-col-reverse sm:block">
          <div>
            <div className="sectionSubRow relative flex sm:hidden justify-between gap-4 mt-4 sm:mt-0">
              <div className="flex flex-col sm:gap-6 gap-2 sm:w-[26%] w-full]">
                <div className="">
                  <h2 className="sm:text-[22px] text-[12px] sm:leading-[30px] text-[#8A8A8E] font-medium text-center">
                    Goofy Paws Pet Care
                    <span className="text-[#000]"> Quality Products</span> for
                    Your Cherished Furry Family Members
                  </h2>
                </div>
                <div className="flex items-center gap-6 justify-between">
                  <div className="flex items-center justify-between gap-2">
                    <Button
                      text="Shop Now"
                      padding="px-4 py-2"
                      textSize="6px"
                    />
                    <CiCircleChevRight className="text-[#703EDB] sm:text-[50px] text-[30px]" />
                  </div>
                  <div className="sm:w-[20%] w-[40%]">
                    <div className="flex items-center gap-2 justify-end ">
                      <IconsContainer
                        bgColor="#EAF2FF"
                        image={bed}
                        padding="py-3 px-2"
                      />
                      <IconsContainer
                        bgColor="#FFEBD6"
                        image={dog1}
                        padding="p-3"
                      />
                      <IconsContainer
                        bgColor="#EEEEEE"
                        image={home}
                        padding="p-3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="sm:w-[20%] w-[40%]">
                <div className="flex items-center gap-2 justify-end ">
                  <IconsContainer
                    bgColor="#EAF2FF"
                    image={bed}
                    padding="py-3 px-2"
                  />
                  <IconsContainer
                    bgColor="#FFEBD6"
                    image={dog1}
                    padding="p-3"
                  />
                  <IconsContainer
                    bgColor="#EEEEEE"
                    image={home}
                    padding="p-3"
                  />
                </div>
              </div> */}
            </div>
            <div className="sectionSubRow relative sm:flex hidden justify-between gap-4 mt-4 sm:mt-0 ">
              <div className="flex flex-col sm:gap-6 gap-2 sm:w-[26%] w-[45%]">
                <div className="">
                  <h2 className="sm:text-[22px] text-[12px] sm:leading-[30px] text-[#8A8A8E] font-medium ">
                    Goofy Paws Pet Care <br />
                    <span className="text-[#000]"> Quality Products</span> for
                    Your Cherished Furry Family Members
                  </h2>
                </div>
                <div className="flex items-center gap-6">
                  <Button text="Shop Now" padding="px-4 py-2" textSize="6px" />
                  <CiCircleChevRight className="text-[#703EDB] sm:text-[50px] text-[30px]" />
                </div>
              </div>

              <div className="sm:w-[20%] w-[40%]">
                <div className="flex items-center gap-2 justify-end ">
                  <IconsContainer
                    bgColor="#EAF2FF"
                    image={bed}
                    padding="py-3 px-2"
                  />
                  <IconsContainer
                    bgColor="#FFEBD6"
                    image={dog1}
                    padding="p-3"
                  />
                  <IconsContainer
                    bgColor="#EEEEEE"
                    image={home}
                    padding="p-3"
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
