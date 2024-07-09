import React from "react";
import shibainudog from "../../../public/assets/shibainudog.png";
import shibainudog1 from "../../../public/assets/shibainudog1.png";
import pugdog from "../../../public/assets/pugdog.png";
import cartoondog from "../../../public/assets/cartoondog.png";
import IconsContainer from "../iconsContainer";
const HeroContent = () => {
  return (
    <div className="sm:border-y-[2px] border-[#1c1c1e3f]  sm:grid flex sm:grid-cols-[2fr,6fr,2fr] flex-col sm:place-items-center sm:mt-[60px] mt-10 mb-10">
      <div className="border-x-[2px] border-y-[2px] border-[#1c1c1e3f] sm:py-0 sm:border-0 py-14 px-8">
        <div className="flex items-center gap-2 p-[10px] border-[1px] border-[#1c1c1e20] rounded-full justify-center">
          <div>
            <h2 className="text-[18px] font-medium">Explore Now &#124;</h2>
          </div>
          <IconsContainer
            bgColor="#FFEDD7"
            image={shibainudog}
            padding="p-[2px]"
          />
        </div>
      </div>
      <div className="text-center py-[40px] px-[40px] sm:text-[22px] text-[12px]  border-[#1c1c1e3f] border-x-[2px]">
        <p>
          At Goofy Paws&#44; we understand that your pets are more than just
          animals&#45;they&#39;re family. That&#39;s why we are dedicated to
          providing high&#45;quality&#44; stylish&#44; and functional products
          that make life with your furry friends even more enjoyable.
        </p>
      </div>
      <div className="border-x-[2px] border-y-[2px] border-[#1c1c1e3f] sm:py-0 sm:border-0 py-14 px-8">
        <div className="delivered-imgs flex items-center justify-center">
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-[#fff]">
            <IconsContainer
              image={shibainudog1}
              padding="py-[6.4px] px-[4px]"
            />
          </div>
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-[#fff]">
            <IconsContainer image={pugdog} padding="py-[6.4px] px-[4px]" />
          </div>
          <div className="w-20 rounded-full bg-[#FFEDD7] -mr-[1.5rem] border-2 border-[#fff]">
            <IconsContainer image={cartoondog} padding="py-[6.4px] px-[4px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
