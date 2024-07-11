import React from "react";

const TextConatiner = ({ textHead, textDesc1, textDesc2 }) => {
  return (
    <div className="textbox text-center flex flex-col sm:gap-4 gap-6 items-center justify-center">
      <h2 className="font-semibold sm:text-[56px] text-[38px] sm:leading-none leading-[42px] mt-4 sm:mt-0">
        {textHead}
      </h2>
      <div className="text-[#1C1C1E] opacity-[70%] sm:mb-0 mb-6">
        {textDesc1 && (
          <p
            className={`font-medium text-[18px] leading-[22px] sm:leading-[28px]`}
          >
            {textDesc1}
          </p>
        )}
        {textDesc2 && (
          <p
            className={`font-medium text-[18px] leading-[22px] sm:leading-[28px]`}
          >
            {textDesc2}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextConatiner;
