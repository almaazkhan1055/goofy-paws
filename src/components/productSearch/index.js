import React from "react";
import Tabs from "../tabs";

const ProductSearch = () => {
  return (
    <>
      <div className="relative md:mt-0 mt-12">
        <h2 className="md:text-[105px] text-[42px] font-semibold tracking-tighter md:leading-[120px] leading-[50px] mb-6 md:mb-2">
          TOP CATEGORIES AND PRODUCTS
        </h2>
        <div className="text-[18px] leading-[28.8px] tracking-[-0.5%] font-medium md:w-[600px] md:absolute top-[137px] right-0 text-[#8A8A8E]">
          Discover premium pet products at Goofy Paws. Our high-quality items
          range from stylish accessories to durable toys. Browse our top
          categories to keep your furry friends happy and healthy.
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default ProductSearch;
