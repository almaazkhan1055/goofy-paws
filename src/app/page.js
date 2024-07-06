import React from "react";
import NavBar from "../components/navBar";
import ContentWrapper from "@/components/wrapper";
import Hero from "@/components/hero";
import HeroContent from "@/components/heroContent";
import About from "@/components/about";
import ProductSearch from "@/components/productSearch";

const Page = () => {
  return (
    <>
      <ContentWrapper>
        <NavBar />
        <Hero />
        <HeroContent />
        <About />
        <ProductSearch />
      </ContentWrapper>
    </>
  );
};

export default Page;
