import React from "react";
import shibainudog from "../../../public/assets/shibainudog.png";
import shibainudog1 from "../../../public/assets/shibainudog1.png";
import pugdog from "../../../public/assets/pugdog.png";
import cartoondog from "../../../public/assets/cartoondog.png";
import IconsContainer from "../iconsContainer";
const HeroContent = () => {
  return (
    <div className="mt-24 grid grid-cols-[2fr,8fr,2fr] p-[50px] md:flex-row flex-col">
      <div className="flex  items-center justify-center border-t-2 border-b-2 border-r-2 border-l-2 md:border-l-0 border-[#1c1c1e40]  md:py-0 py-7">
        <div className="flex items-center gap-2 p-[10px] border-[1px] border-[#1c1c1e20] rounded-full ">
          <div>
            <h2 className="text-[18px] font-medium">Explore Now &#124;</h2>
          </div>
          <IconsContainer
            bgColor="#FFEDD7"
            image={shibainudog}
            width={34}
            height={25}
            padding="p-[2px]"
          />
        </div>
      </div>
      <div className="px-16 py-12 text-[#1C1C1E] border-t-2 border-b-2 border-r-2 border-l-2 md:border-l-0 border-[#1c1c1e40]  text-[22px] text-center leading-[28.6px] flex items-center justify-center font-semibold">
        <h2>
          At Goofy Paws&#44; we understand that your pets are more than just
          animals&#45;they&#39;re family. That&#39;s why we are dedicated to
          providing high&#45;quality&#44; stylish&#44; and functional products
          that make life with your furry friends even more enjoyable.
        </h2>
      </div>
      <div className="flex items-center justify-center border-t-2 border-b-2 border-l-2 md:border-l-0 border-[#1c1c1e40] border-r-2 md:border-r-0  md:py-0 py-7">
        <div className="delivered-imgs flex">
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-white">
            <IconsContainer
              image={shibainudog1}
              padding="py-[6.4px] px-[4px]"
            />
          </div>
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-white">
            <IconsContainer image={pugdog} padding="py-[6.4px] px-[4px]" />
          </div>
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-white">
            <IconsContainer image={cartoondog} padding="py-[6.4px] px-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
