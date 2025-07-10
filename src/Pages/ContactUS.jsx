import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import ContactImage from "../assets/images/Contact.jpg";
import OfficeMap from "../components/LocationComp";

export default function ContactUs() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-between">
      {/* hero section */}
      <motion.div 
        className="relative bg-black w-full md:h-[600px] h-[300px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={ContactImage}
          alt="Contact Us"
          className="w-full md:h-[600px] h-[300px] object-cover opacity-40"
        />
        <motion.strong 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white absolute md:bottom-50 bottom-30 md:left-40 left-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          CONTACT US
        </motion.strong>
      </motion.div>

      {/* contact form */}
      <motion.div 
        className="md:pl-40 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scaleIn}
      >
        <ContactForm />
      </motion.div>

      {/* office map */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="w-full"
      >
        <OfficeMap 
          address={"Plot No K240 & K241, Phase II,SITE Superhighway, Karachi"} 
          title={"Edge Expert Office"} 
          officeCoordinates={[25.028375029628958, 67.12148959889487]}
          scrollWheelZoom={false} 
          dragging={false}
          zoomControl={false}
        /> 
      </motion.div>
      <motion.span 
        className="text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        For all inquiries, please write to info@edgeexpert.com.pk
      </motion.span>
      {/* <div className="w-full flex text-gray-300 bg-red-400">
        <Footer />
      </div> */}
    </div>
  );
}
