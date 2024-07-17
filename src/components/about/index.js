import React from "react";
import dogsleeping from "../../../public/assets/dogsleeping.png";
import cat from "../../../public/assets/cat.png";
import Image from "next/image";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";

const About = () => {
  return (
    <div className="xl:my-40 flex justify-between xl:flex-row flex-col xl:gap-32">
      <div className="left flex flex-col justify-between xl:gap-8 gap-0">
        <div className="text-left">
          <h2 className="xl:text-[100px] text-[50px] font-semibold xl:leading-[120px] leading-none xl:tracking-[2px] tracking-normal xl:my-0 my-5 text-center">
            ABOUT US
          </h2>
        </div>
        <div className="xl:bg-[#FFEDD7] lg:bg-[white] xl:w-[600px] rounded-[32px] flex gap-2 xl:h-[809px] lg:h-[500px] h-[300px] lg:justify-center">
          <Image alt="dogsleeping" src={dogsleeping} />
        </div>
      </div>
      <div className="right flex flex-col justify-between">
        <Image src={cat} alt="cat" className="rounded-[32px]  my-5 xl:mb-0" />
        <div className="gap-4 xl:my-0 my-5">
          <h2 className="font-semibold xl:text-[65px] xl:leading-[55px] leading-[42px] text-[42px] my-5 xl:text-left text-center">
            YOUR PET’S FAVORITE BUDDY
          </h2>
          <div className="my-5 xl:my-0">
            <h2 className="text-[18px] text-[#8A8A8E] xl:leading-[28.8px] leading-[22px] -tracking-[0.5%] xl:text-left text-center my-5 xl:my-0">
              Goofy Paws is a part of the HIE Global Inc. Group, a company
              established in 2009 and headquartered in Phoenix, Arizona, USA.
              Our core specialty is our exclusive line of pet products, designed
              to bring joy and comfort to your furry companions.
            </h2>
            <div className="flex items-center gap-6 xl:mt-5 xl:mb-0 my-5 xl:justify-normal justify-center">
              <Button text="Shop Now" padding="px-4 py-2" />
              <CiCircleChevRight className="text-[#703EDB] xl:text-[50px] text-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
