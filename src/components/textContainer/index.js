import React from "react";

const TextConatiner = ({ textHead, textDesc }) => {
  return (
    <div className="textbox text-center flex flex-col gap-4 items-center justify-center">
      <h2 className="font-semibold text-[56px] md:leading-none leading-[60px]">
        {textHead}
      </h2>
      <h3 className={`font-medium text-lg md:mb-0 mb-5`}>{textDesc}</h3>
    </div>
  );
};

export default TextConatiner;
