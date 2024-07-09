import React from "react";
import dogsleeping from "../../../public/assets/dogsleeping.png";
import cat from "../../../public/assets/cat.png";
import Image from "next/image";
import Button from "../button";
import { CiCircleChevRight } from "react-icons/ci";

const About = () => {
  return (
    <div className="my-40 flex justify-between md:flex-row flex-col md:gap-0 gap-10">
      <div className="left flex flex-col justify-between gap-8">
        <div className="text-left">
          <h2 className="md:text-[120px] text-[50px] font-semibold md:leading-[120px] leading-none tracking-[2px]">
            ABOUT US
          </h2>
        </div>
        <div className="bg-[#FFEDD7] md:w-[600px] w-[384px] rounded-[32px] flex gap-2 md:h-[809px] h-[300px]">
          <Image alt="dogsleeping" src={dogsleeping} />
        </div>
      </div>
      <div className="right flex flex-col justify-between md:w-[560px] w-[384px]">
        <Image src={cat} alt="cat" className="rounded-[32px]  mb-10 md:mb-0" />
        <div className="gap-4">
          <h2 className="font-semibold text-[55px] mb-6 md:mb-2 md:leading-none leading-[50px]">
            YOUR PET’S FAVORITE BUDDY
          </h2>
          <div>
            <h2 className="text-[18px] text-[#8A8A8E] leading-[28.8px] -tracking-[0.5%]">
              Goofy Paws is a part of the HIE Global Inc. Group, a company
              established in 2009 and headquartered in Phoenix, Arizona, USA.
              Our core specialty is our exclusive line of pet products, designed
              to bring joy and comfort to your furry companions.
            </h2>
            <div className="flex items-center gap-6 mt-5">
              <Button text="Shop Now" padding="p-2" />
              <CiCircleChevRight className="text-[#703EDB] md:text-[50px] text-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
