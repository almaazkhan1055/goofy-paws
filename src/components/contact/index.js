import React from "react";
import TextConatiner from "../textContainer";
import sms from "../../../public/assets/sms.png";
import location from "../../../public/assets/location.png";
import phone from "../../../public/assets/phone.png";
import Image from "next/image";
import paw from "../../../public/assets/paw.png";
import styles from "./Contact.module.css";
import ContentWrapper from "../wrapper";

const contactData = [
  {
    icon: sms,
    text: "woof@goofypaws.org",
  },
  {
    icon: location,
    text: "Lorem ipsum, dolor sit am.",
  },
  {
    icon: phone,
    text: "9875695862",
  },
];
const Contact = () => {
  return (
    <div className="bg-customPurple sm:px-52 px-0 sm:py-20 py-40 relative flex flex-col sm:mb-0 ">
      <ContentWrapper>
        <TextConatiner
          textHead="CONNECT WITH US"
          textDesc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          textDesc2="tempor incididunt ut labore et dolore magna aliq."
        />
        <div className="sm:py-20">
          <div className="flex  sm:flex-row flex-col sm:items-center items-start justify-around sm:gap-10 gap-2">
            {contactData.map((item, index) => {
              return (
                <div
                  className="flex items-center justify-center gap-2 text-lg font-medium"
                  key={index}
                >
                  <Image src={item.icon} alt="item.text" />
                  <h3 className="text-[#1C1C1E] opacity-[70%]">{item.text}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon1} absolute sm:top-[85px] top-0 left-[65px]`}
        />
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon2} absolute sm:top-[175px] sm:left-[155px] top-[50px] left-[160px]`}
        />
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon3} absolute sm:bottom-[70px] sm:right-[150px] bottom-[50px] right-[150px]`}
        />
        <Image
          src={paw}
          alt="paw"
          className={`${styles.pawIcon4} absolute sm:bottom-[50px] bottom-[30px] right-[42px]`}
        />
      </ContentWrapper>
    </div>
  );
};

export default Contact;
