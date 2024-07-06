import Image from "next/image";
import React from "react";
import home from "../../../../public/assets/home.png";

const Shelter = ({ bgColor }) => {
  return (
    <div
      className={`rounded-full p-2`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Image src={home} alt="home" className="w-[52.99px] h-[52.99px]" />
    </div>
  );
};

export default Shelter;
