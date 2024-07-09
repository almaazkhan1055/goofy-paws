import React from "react";
import Tabs from "../tabs";

const ProductSearch = () => {
  return (
    <>
      <div className="sm:mt-0 mt-12 text-left">
        <h2 className="sm:text-[120px] text-[28px] font-semibold tracking-tighter sm:leading-[120px] sm:mb-2 text-center sm:text-left">
          TOP CATEGORIES AND
        </h2>
        <div className="flex sm:flex-row flex-col sm:gap-12 items-center">
          <h2 className="sm:text-[120px] text-[28px] font-semibold tracking-tighter sm:leading-[120px] sm:mb-2">
            PRODUCTS
          </h2>
          <p className="text-[18px] leading-[28.8px] tracking-[-0.5%] font-medium  text-[#8A8A8E] sm:w-[580px] text-center sm:text-left">
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
