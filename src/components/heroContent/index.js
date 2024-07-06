import Image from "next/image";
import React from "react";
import shibainudog from "../../../public/assets/shibainudog.png";
import shibainudog1 from "../../../public/assets/shibainudog1.png";
import pugdog from "../../../public/assets/pugdog.png";
import cartoondog from "../../../public/assets/cartoondog.png";
const HeroContent = () => {
  return (
    <div className="md:mt-[600px] mt-32 flex h-[217px] md:flex-row flex-col">
      <div className="flex  items-center justify-center border-t-2 border-b-2 border-r-2 border-[#1c1c1e40] px-[60px] md:py-0 py-7">
        <div className="flex items-center gap-2 py-[10px] px-4 border-[1px] border-[#1c1c1e20] rounded-full w-[204px]">
          <div>
            <h2 className="text-[18px] font-medium">Explore Now |</h2>
          </div>
          <div className="bg-[#FFEDD7] rounded-full">
            <Image src={shibainudog} alt="shibainudog" />
          </div>
        </div>
      </div>
      <div className="p-8 text-[#1C1C1E] border-t-2 border-b-2 border-r-2 border-[#1c1c1e40] md:w-[848px] text-[16px] text-center leading-[28.6px] flex items-center justify-center font-semibold">
        <h2>
          At Goofy Paws, we understand that your pets are more than just
          animals—they're family. That's why we are dedicated to providing
          high-quality, stylish, and functional products that make life with
          your furry friends even more enjoyable.
        </h2>
      </div>
      <div className="flex items-center justify-center border-t-2 border-b-2 border-[#1c1c1e40] border-r-2 md:border-r-0  md:py-0 py-7">
        <div className="delivered-imgs flex px-[60px]">
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-white">
            <Image src={shibainudog1} alt="dog photo" />
          </div>
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-white p-2">
            <Image src={pugdog} alt="dog photo" />
          </div>
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-white p-2">
            <Image src={cartoondog} alt="dog photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
