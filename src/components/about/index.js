import React from "react";
import dogsleeping from "../../../public/assets/dogsleeping.png";
import cat from "../../../public/assets/cat.png";
import Image from "next/image";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";

const About = () => {
  return (
    <div className="sm:my-40 flex justify-between sm:flex-row flex-col sm:gap-0 gap-10">
      <div className="left flex flex-col justify-between gap-8">
        <div className="text-left">
          <h2 className="sm:text-[100px] text-[50px] font-semibold sm:leading-[120px] leading-none tracking-[2px]">
            ABOUT US
          </h2>
        </div>
        <div className="bg-[#FFEDD7] sm:w-[600px] rounded-[32px] flex gap-2 sm:h-[809px] h-[300px]">
          <Image alt="dogsleeping" src={dogsleeping} />
        </div>
      </div>
      <div className="right flex flex-col justify-between sm:w-[560px]">
        <Image src={cat} alt="cat" className="rounded-[32px]  mb-10 sm:mb-0" />
        <div className="gap-4">
          <h2 className="font-semibold sm:text-[55px] sm:leading-[55px] text-[32px] sm:mb-2 sm:text-left text-center">
            YOUR PET’S FAVORITE BUDDY
          </h2>
          <div>
            <h2 className="text-[18px] text-[#8A8A8E] leading-[28.8px] -tracking-[0.5%] sm:text-left text-center">
              Goofy Paws is a part of the HIE Global Inc. Group, a company
              established in 2009 and headquartered in Phoenix, Arizona, USA.
              Our core specialty is our exclusive line of pet products, designed
              to bring joy and comfort to your furry companions.
            </h2>
            <div className="flex items-center gap-6 mt-5 sm:justify-normal justify-evenly">
              <Button text="Shop Now" padding="px-4 py-2" />
              <CiCircleChevRight className="text-[#703EDB] sm:text-[50px] text-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
