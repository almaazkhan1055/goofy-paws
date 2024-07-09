import React from "react";
import doghousebed from "../../../public/assets/doghousebed.png";
import DogBowl from "../../../public/assets/DogBowl.png";
import CatBowl from "../../../public/assets/CatBowl.png";
import Image from "next/image";
import Product from "../productBackground";

const products = [
  {
    img: doghousebed,
    desc: "DOG HOUSE BED",
    bgColor: "#FFF1E2",
  },
  {
    img: DogBowl,
    desc: "DOG BOWL",
    bgColor: "#FFE2E1",
  },
  {
    img: CatBowl,
    desc: "CAT BOWL",
    bgColor: "#E3E2E0",
  },
];

const ProductSection = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:gap-6 mb-[60px]">
      {products.map((product, index) => (
        <Product
          key={index}
          bgColor={product.bgColor}
          imgSrc={product.img}
          desc={product.desc}
        />
      ))}
    </div>
  );
};

export default ProductSection;
