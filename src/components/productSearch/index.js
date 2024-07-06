import React from "react";
import Tabs from "../tabs";

const ProductSearch = () => {
  return (
    <>
      <div className="relative">
        <h2 className="md:text-[120px] text-[50px] font-semibold tracking-tighter md:leading-[120px]">
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
