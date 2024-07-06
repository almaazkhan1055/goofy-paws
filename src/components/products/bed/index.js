import React from "react";
import bed from "../../../../public/assets/bed.png";
import Image from "next/image";

const Bed = ({ bgColor }) => {
  return (
    <div
      className={`rounded-full px-1 py-2.5`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Image src={bed} alt="bed" className="w-[57.54px] h-[42.54px]" />
    </div>
  );
};

export default Bed;
