import Image from "next/image";
import React from "react";

const IconsContainer = ({ bgColor, image, width, height, padding }) => {
  return (
    <div
      className={`rounded-full ${padding ? padding : "sm:px-1 sm:py-2.5 p-2"} `}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <Image
        src={image}
        alt="bed"
        width={width ? width : "57.54px"}
        height={height ? height : "42.54px"}
      />
    </div>
  );
};

export default IconsContainer;
// px-1 py-2.5
