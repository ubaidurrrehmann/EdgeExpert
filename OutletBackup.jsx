import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactImage from "../assets/images/Outlets.png";
import OfficeMap from "../components/LocationComp";
import ContactCard from "../components/ContactCard";
// import OfficeMap from "../components/LocationComp";

export default function Outlets() {
  const images = {
    hero: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1200",
    factory1:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600",
    factory2:
      "https://images.unsplash.com/photo-1631467886896-372ebc5abad5?q=80&w=600",
    office:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
    team: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=600",
    products:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  // Outlet animation variants
  const outletAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={ContactImage}
          alt="Edge Expert Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edge Expert Outlets
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Places where you can find our products
          </motion.p>
        </div>
      </motion.div>

      <div className="flex flex-col gap-10 py-10">
        {/* outlet one */}
        <motion.div 
          className="flex flex-col gap-6 px-10 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={outletAnimation}
        >
          <h1 className="text-2xl font-bold text-center underline">
            Karachi Outlet (Liaqatabad)
          </h1>
          <div className="flex md:flex-row flex-col w-full items-center gap-6">
            <motion.div 
              className="flex flex-col justify-center w-full gap-6"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn}>
                <ContactCard title="Email Us" content="info@edgeedpert.com.pk" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (304) 350 0594" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Plot 758, Block 4 Liaquatabad Town, Karachi, Pakistan"
                />
              </motion.div>
            </motion.div>
            <motion.img
              src={images.products}
              alt="Edge Expert Manufacturing"
              className="md:h-[500px] h-[300px] rounded-md w-full object-cover"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div variants={fadeIn}>
            <OfficeMap
              address={"Plot 758, Block 4 Liaquatabad Town, Karachi, Pakistan"}
              title={"Edge Expert Liaqatabad Office"}
              // officeCoordinates={[25.028375029628958, 67.12148959889487]}
              officeCoordinates={[24.908803, 67.045931]}
              scrollWheelZoom={true}
              dragging={true}
              zoomControl={true}
            />
          </motion.div>
        </motion.div>

        {/* outlet two */}
        <motion.div 
          className="flex flex-col gap-6 px-10 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={outletAnimation}
        >
          <h1 className="text-2xl font-bold text-center underline">
          Karachi Outlet (Hyderi)
          </h1>
          <div className="flex md:flex-row flex-col w-full items-center gap-6">
            <motion.div 
              className="flex flex-col justify-center w-full gap-6"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn}>
                <ContactCard title="Email Us" content="info@edgeedpert.com.pk" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321) 229 6855" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Shop# 38, Hyderi Memorial Market, Block E North Nazimabad Town, Karachi, Pakistan"
                />
              </motion.div>
            </motion.div>
            <motion.img
              src={images.products}
              alt="Edge Expert Manufacturing"
              className="md:h-[500px] h-[300px] rounded-md w-full object-cover"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div variants={fadeIn}>
            <OfficeMap
              address={"Shop# 38, Hyderi Memorial Market, Block E North Nazimabad Town, Karachi, Pakistan"}
              title={"Edge Expert Office"}
              officeCoordinates={[24.937153298617464, 67.04100646963516]}
              scrollWheelZoom={true}
              dragging={true}
              zoomControl={true}
            />
          </motion.div>
        </motion.div>

        {/* outlet three */}
        <motion.div 
          className="flex flex-col gap-6 px-10 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={outletAnimation}
        >
          <h1 className="text-2xl font-bold text-center underline">
            Karachi Outlet (Haji Camp)
          </h1>
          <div className="flex md:flex-row flex-col w-full items-center gap-6">
            <motion.div 
              className="flex flex-col justify-center w-full gap-6"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn}>
                <ContactCard title="Email Us" content="info@edgeedpert.com.pk" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (309) 307 0357" /> 
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="14 Siddiq Wahab Rd, Jinnahabad Jinnahabad 2, Karachi, 74400, Pakistan"
                />
              </motion.div>
            </motion.div>
            <motion.img
              src={images.products}
              alt="Edge Expert Manufacturing"
              className="md:h-[500px] h-[300px] rounded-md w-full object-cover"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div variants={fadeIn}>
            <OfficeMap
              address={"14 Siddiq Wahab Rd, Jinnahabad Jinnahabad 2, Karachi, 74400, Pakistan"}
              title={"Edge Expert Office"}
              officeCoordinates={[24.866953368080498, 67.00875481760279]}
              scrollWheelZoom={true}
              dragging={true}
              zoomControl={true}
            />
          </motion.div>
        </motion.div>

        {/* outlet four */}
        <motion.div 
          className="flex flex-col gap-6 px-10 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={outletAnimation}
        >
          <h1 className="text-2xl font-bold text-center underline">
            Karachi Outlet (Manzoor Colony)
          </h1>
          <div className="flex md:flex-row flex-col w-full items-center gap-6">
            <motion.div 
              className="flex flex-col justify-center w-full gap-6"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn}>
                <ContactCard title="Email Us" content="info@edgeedpert.com.pk" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321) 228 7866" />  
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Furniture Market, Shop no 1, Choudhary Rehmat Ali Road, Manzoor Colony Karachi, 75460, Pakistan"
                />
              </motion.div>
            </motion.div>
            <motion.img
              src={images.products}
              alt="Edge Expert Manufacturing"
              className="md:h-[500px] h-[300px] rounded-md w-full object-cover"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div variants={fadeIn}>
            <OfficeMap
              address={"Furniture Market, Shop no 1, Choudhary Rehmat Ali Road, Manzoor Colony Karachi, 75460, Pakistan"}
              title={"Edge Expert Office"}
              officeCoordinates={[24.85461125035728, 67.08691599683046]}
              scrollWheelZoom={true}
              dragging={true}
              zoomControl={true}
            />
          </motion.div>
        </motion.div>

        {/* outlet five */}
        <motion.div 
          className="flex flex-col gap-6 px-10 py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={outletAnimation}
        >
          <h1 className="text-2xl font-bold text-center underline">
            Hyderabad Outlet
          </h1>
          <div className="flex md:flex-row flex-col w-full items-center gap-6">
            <motion.div 
              className="flex flex-col justify-center w-full gap-6"
              variants={staggerChildren}
            >
              <motion.div variants={fadeIn}>
                <ContactCard title="Email Us" content="info@edgeedpert.com.pk" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (310) 300 6141" />   
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="police station, Timber market, Sakhi Peer Rd, Shahi Bazar, Hyderabad, 17000, Pakistan"
                />
              </motion.div>
            </motion.div>
            <motion.img
              src={images.products}
              alt="Edge Expert Manufacturing"
              className="md:h-[500px] h-[300px] rounded-md w-full object-cover"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div variants={fadeIn}>
            <OfficeMap
              address={"police station, Timber market, Sakhi Peer Rd, Shahi Bazar, Hyderabad, 17000, Pakistan"}
              title={"Edge Expert Office"}
              officeCoordinates={[25.39724956070506, 68.37313659684469]}
              scrollWheelZoom={true}
              dragging={true}
              zoomControl={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
