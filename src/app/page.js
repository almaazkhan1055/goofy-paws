import React from "react";
import NavBar from "../components/navBar";
import ContentWrapper from "@/components/wrapper";
import Hero from "@/components/hero";
import HeroContent from "@/components/heroContent";
import About from "@/components/about";
import ProductSearch from "@/components/productSearch";
import ProductSection from "@/components/productsSection";
import Social from "@/components/social";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <>
      <ContentWrapper>
        <NavBar />
        <Hero />
        <HeroContent />
        <About />
        <ProductSearch />
        <ProductSection />
        <Social />
      </ContentWrapper>
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
