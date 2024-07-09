import React from "react";
import shibainudog from "../../../public/assets/shibainudog.png";
import shibainudog1 from "../../../public/assets/shibainudog1.png";
import pugdog from "../../../public/assets/pugdog.png";
import cartoondog from "../../../public/assets/cartoondog.png";
import IconsContainer from "../iconsContainer";
const HeroContent = () => {
  return (
    <div className="sm:border-y-[2px] border-[#1c1c1e3f]  sm:grid flex sm:grid-cols-[2fr,6fr,2fr] flex-col sm:place-items-center sm:mt-[60px] mt-40 ">
      <div className="border-x-[2px] border-y-[2px] border-[#1c1c1e3f] sm:py-0 sm:border-0 py-14 px-8">
        <div className="flex items-center gap-2 p-[10px] border-[1px] border-[#1c1c1e20] rounded-full ">
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
      <div className="text-center py-[40px] px-[40px] text-[22px]  border-[#1c1c1e3f] border-x-[2px]">
        <p>
          At Goofy Paws, we understand that your pets are more than just
          animals—they're family. That's why we are dedicated to providing
          high-quality, stylish, and functional products that make life with
          your furry friends even more enjoyable.
        </p>
      </div>
      <div className="border-x-[2px] border-y-[2px] border-[#1c1c1e3f] sm:py-0 sm:border-0 py-14 px-8">
        <div className="delivered-imgs flex">
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
