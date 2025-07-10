import React from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Crousel";
import ContactForm from "../components/ContactForm";
import CounterBox from "../components/CounterBox";
import ProductCarousel from "../components/ProductCarousel";
import ProductBox from "../components/ProdcutBox";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      {/* Hero Carousel */}
      <div className="w-full bg-black">
        <Carousel />
      </div>

      

      {/* Product Box Section */}
      <div className="flex w-full sm:h-[70vh] h-[60vh] items-center bg-gray-50">
      <ProductBox />
      </div>
      
      {/* Product Carousel Section */}
      {/* <div className="flex w-full sm:h-[80vh] h-[110vh]">
      <ProductCarousel />
      </div> */}

      {/* Contact Section */}
      <div className="w-full flex items-center justify-center px-4 md:px-20 py-12">
        <ContactForm />
      </div>

    </div>
  );
}
