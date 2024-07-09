import React from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

const VideoDesc = () => {
  return (
    <div className="flex gap-4 items-center justify-center text-[#FFFFFF] absolute z-10 top-[10px] left-0 px-5 sm:w-[310px] text-[14px] ">
      <MdOutlinePlayCircle className="h-[54px] w-[54px]" />
      <h3>tempor incididunt ut labore et dolore magna aliq.</h3>
    </div>
  );
};

export default VideoDesc;
