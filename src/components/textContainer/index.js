import React from "react";

const TextConatiner = ({ textHead, textDesc1, textDesc2 }) => {
  return (
    <div className="textbox text-center flex flex-col gap-4 items-center justify-center">
      <h2 className="font-semibold sm:text-[56px] text-[42px] sm:leading-none leading-[45px]">
        {textHead}
      </h2>
      <div className="text-[#1C1C1E] opacity-[70%]">
        {textDesc1 && (
          <p className={`font-medium text-lg sm:mb-0 mb-5`}>{textDesc1}</p>
        )}
        {textDesc2 && (
          <p className={`font-medium text-lg sm:mb-0 mb-5`}>{textDesc2}</p>
        )}
      </div>
    </div>
  );
};

export default TextConatiner;
