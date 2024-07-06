import Image from "next/image";
import React from "react";
import dogNeckBelt from "../../../public/assets/dogNeckBelt.png";
import dogCat from "../../../public/assets/dogCat.png";
import petCloth from "../../../public/assets/petCloth.png";

const HeroImg = () => {
  return (
    <div className="flex items-end md:absolute top-[158px] right-[16px] gap-4">
      <div>
        <Image src={dogNeckBelt} alt="dogneckbelt" className="w-[350px]" />
      </div>
      <div>
        <Image src={dogCat} alt="dogcat" />
      </div>
      <div>
        <Image src={petCloth} alt="petcloth" className="w-[300px]" />
      </div>
    </div>
  );
};

export default HeroImg;
