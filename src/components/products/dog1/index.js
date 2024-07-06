import Image from "next/image";
import React from "react";
import dog1 from "../../../../public/assets/dog-1.png";

const Dog1 = ({ bgColor }) => {
  return (
    <div
      className={`rounded-full p-2`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Image src={dog1} alt="dog1" className="w-[49.97px] h-[49.97px]" />
    </div>
  );
};

export default Dog1;
