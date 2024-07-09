import React from "react";
import Tabs from "../tabs";

const ProductSearch = () => {
  return (
    <>
      <div className="md:mt-0 mt-12 text-left">
        <h2 className="md:text-[120px] text-[42px] font-semibold tracking-tighter md:leading-[120px] leading-[50px] mb-6 md:mb-2">
          TOP CATEGORIES AND
        </h2>
        <div className="flex gap-12 items-center">
          <h2 className="md:text-[120px] text-[42px] font-semibold tracking-tighter md:leading-[120px] leading-[50px] mb-6 md:mb-2">
            PRODUCTS
          </h2>
          <p className="text-[18px] leading-[28.8px] tracking-[-0.5%] font-medium  text-[#8A8A8E] w-[580px]">
            Discover premium pet products at Goofy Paws. Our high-quality items
            range from stylish accessories to durable toys. Browse our top
            categories to keep your furry friends happy and healthy.
          </p>
        </div>
        <Tabs />
      </div>
    </>
  );
};

export default ProductSearch;
