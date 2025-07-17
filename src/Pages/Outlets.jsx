import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactImage from "../assets/images/Outlets.png";
import OfficeMap from "../components/LocationComp";
import ContactCard from "../components/ContactCard";
import BaseModal from "../components/BaseModal";
// import OfficeMap from "../components/LocationComp";

export default function Outlets() {
  const [selectedOutlet, setSelectedOutlet] = useState(null)
  const outlets = [
    {
      outelet: "Karachi Outlet (Manzoor Colony)",
      person: "Waseem Arain",
      hotline: "+92 (321) 228 7866",
      address: "Furniture Market, Shop no 1, Manzoor Colony Karachi",
      officeCoordinates: [24.85457230994398, 67.08693745334169],
    },
    {
      outelet: "Karachi Outlet (Haji Camp)",
      person: "Arif Gujjar",
      hotline: "+92 (309) 307 0357",
      address: "14 Siddiq Wahab Rd, Jinnahabad 2 Karachi, Pakistan",
      officeCoordinates: [24.86715289689183, 67.00873603800088],
    },
    {
      outelet: "Karachi Outlet (Liaquatabad)",
      person: "Adil Arain",
      hotline: "+92 (304) 350 0594",
      address: "Plot 758, Block 4 Liaquatabad Town, Karachi, Pakistan",
      officeCoordinates: [24.909009994368567, 67.04593259567278],
    },
    {
      outelet: "Karachi Outlet (Hyderi)",
      person: "Waseem Arain",
      hotline: "+92 (321) 229 6855",
      address:
        "Shop# 38, Hyderi Memorial Market, Block E North Nazimabad Town, Karachi",
      officeCoordinates: [24.93730893530276, 67.04168238217964],
    },
    {
      outelet: "Karachi Outlet (Gizri)",
      person: "Mehtab",
      hotline: "+92 (345) 327 5272",
      address: "Not Received",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Hyderabad Outlet",
      person: "Zain",
      hotline: "+92 (310) 300 6141",
      address: "Timber market, Sakhi Peer Rd, Shahi Bazar, Hyderabad, Pakistan",
      officeCoordinates: [25.39724956070506, 68.37313659684469],
    },
    {
      outelet: "Edge Expert Warehouse Lahore",
      person: "Muhammad Kashif",
      hotline: "+92 (321) 741 7143",
      address:
        "Near Al-Rahim Garden, Quaid e Azam Interchange, Dera Gujran, Lahore",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Lahore Outlet - I",
      person: "Umar",
      hotline: "+92 (321) 100 0691",
      address: "Beadon Road Road, Lahore",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Lahore Outlet - II",
      person: "Moiz",
      hotline: "+92 (323) 628 6138",
      address: "Deffence Road, Shahkam Chowk, Lahore, Pakistan",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Lahore Outlet - III",
      person: "Abu Bakar",
      hotline: "+92 (321) 100 0695",
      address: "Ameer Chowk, Collage Road, Township, Lahore",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Lahore Outlet - IV",
      person: "Wasif",
      hotline: "+92 (320) 047 1828",
      address: "Jammu Stop, Bedian Road, Lahore",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Lahore Outlet - V",
      person: "Noman",
      hotline: "+92 (305) 100 1763",
      address: "Rehman Gali No 1, Brandrath Road, Lahore",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Gujranwala Outlet",
      person: "Salman",
      hotline: "+92 (321) 100 0694",
      address: "Noorbawa, Gali # 2, Gondlawala Road, Gujranwala",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Faisalabad Outlet - I",
      person: "Faisal",
      hotline: "+92 (301) 670 1780",
      address: "Kotwali Road, Faisalabad",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Faisalabad Outlet - II",
      person: "Faisal",
      hotline: "+92 (301) 670 1780",
      address: "Satyana Road, Faisalabad",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Sialkot Outlet",
      person: "Touseef",
      hotline: "+92 (300) 647 5547",
      address: "Raja Road, Sialkot",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Gujrat Outlet",
      person: "Ali Butt",
      hotline: "+92 (315) 919 7572",
      address: "Sarghoda Road, Gujrat",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Islamabad Outlet",
      person: "Rizwan",
      hotline: "+92 (307) 648 8766",
      address: "F/11, Islamabad",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Edge Expert Warehouse Rawalpindi",
      person: "Tauqeer Ahmen",
      hotline: "+92 (321) 741 7143",
      address: "Main Service Road, Near Imam Bargah, Shakrial, Rawalpindi",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Rawalpindi Outlet - I",
      person: "Naveed",
      hotline: "+92 (344) 773 3487",
      address: "Pindora Chungi, Saidpur Road, Rawalpindi",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Rawalpindi Outlet - II",
      person: "Imran",
      hotline: "+92 (300) 864 2102",
      address: "Rathore Plaza, Highcourt Road, Rawalpindi",
      officeCoordinates: "Not Received",
    },
    {
      outelet: "Rawalpindi Outlet - III",
      person: "Furqan",
      hotline: "+92 (321) 100 0693",
      address: "Sheikh Anwar Market, City Sadar Road, Rawalpindi",
      officeCoordinates: "Not Received",
    },
  ];

  const [showMap, setMap] = useState(false);

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
      transition: { duration: 0.7 },
    },
  };

  const toggleMap = (item) => {
    console.log("map", item);
    setSelectedOutlet(item)
    setMap(!showMap);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <BaseModal isOpen={showMap} onClose={() => setMap(false)}>
        <h2 className="text-xl font-bold mb-4">{selectedOutlet?.outelet}</h2>
        {/* <p className="mb-4">You can place any content here.</p> */}
        {
          selectedOutlet?.officeCoordinates === "Not Received" ? 
          <div className="h-full w-full flex items-center justify-center font-bold " >Data not provided</div>
          :
          <OfficeMap
          address={selectedOutlet?.address}
          title={selectedOutlet?.outelet}
          // officeCoordinates={[selectedOutlet?.officeCoordinates[0],selectedOutlet?.officeCoordinates[1]]} 
          officeCoordinates={selectedOutlet?.officeCoordinates} 
          scrollWheelZoom={true}
          dragging={true}
          zoomControl={true}
        />
        }
      </BaseModal>

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

      {/* <div className="flex flex-col py-10 gap-6"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 md:px-10">
        {outlets.map((outlet, index) => (
          <motion.div
            key={outlet.address}
            className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={outletAnimation}
          >
            <h1 className="text-2xl font-bold underline">{outlet.outelet}</h1>

            <motion.div variants={fadeIn}>
              <ContactCard title="Contact Person" content={outlet.person} />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ContactCard title="Hotline" content={outlet.hotline} />
            </motion.div>
            <motion.div
              onClick={()=>toggleMap(outlet)}
              className="md:w-3/4 w-full hover:cursor-pointer"
              variants={fadeIn}
            >
              <ContactCard
                _style={"w-full"}
                title="Office Address"
                content={outlet.address}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}