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
      transition: { duration: 0.7 },
    },
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

      <div className="flex flex-col py-10 gap-6">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet one */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Karachi Outlet (Manzoor Colony)
              </h1>

              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Email Us"
                  content="info@edgeexpert.com.pk"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321) 228 7866" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content={
                    "Furniture Market, Shop no 1, Manzoor Colony Karachi"
                  }
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet two */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Karachi Outlet (Haji Camp)
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Email Us"
                  content="info@edgeexpert.com.pk"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (309) 307 0357" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="14 Siddiq Wahab Rd, Jinnahabad 2 Karachi, Pakistan"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet three */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Karachi Outlet (Liaqatabad)
              </h1>

              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Email Us"
                  content="info@edgeexpert.com.pk"
                />
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet four */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Karachi Outlet (Hyderi)
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Email Us"
                  content="info@edgeexpert.com.pk"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321) 229 6855" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Shop# 38, Block E North Nazimabad Town, Karachi"
                />
              </motion.div>

              {/* <OfficeMap
    _style={"h-[200px] w-[340px] "}
    address={"Shop# 38, Hyderi Memorial Market, Block E North Nazimabad Town, Karachi, Pakistan"}
    title={"Edge Expert Office"}
    officeCoordinates={[24.937153298617464, 67.04100646963516]}
    scrollWheelZoom={true}
    dragging={true}
    zoomControl={true}
  /> */}
              {/* </div> */}
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet five */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Karachi Outlet (Gizri)
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Email Us"
                  content="info@edgeexpert.com.pk"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321) 229 6855" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Plot 758, Block 4 Liaquatabad Town, Karachi, Pakistan"
                />
              </motion.div>

              {/* <OfficeMap
    _style={"h-[200px] w-[340px] "}
    address={"Shop# 38, Hyderi Memorial Market, Block E North Nazimabad Town, Karachi, Pakistan"}
    title={"Edge Expert Office"}
    officeCoordinates={[24.937153298617464, 67.04100646963516]}
    scrollWheelZoom={true}
    dragging={true}
    zoomControl={true}
  /> */}
              {/* </div> */}
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet six */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Hyderabad Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Email Us"
                  content="info@edgeexpert.com.pk"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (310) 300 6141" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Timber market, Sakhi Peer Rd, Shahi Bazar, Hyderabad, Pakistan"
                />
              </motion.div>

              {/* <OfficeMap
    _style={"h-[200px] w-[340px] "}
    address={"police station, Timber market, Sakhi Peer Rd, Shahi Bazar, Hyderabad, 17000, Pakistan"}
    title={"Edge Expert Office"}
    officeCoordinates={[25.39724956070506, 68.37313659684469]}
    scrollWheelZoom={true}
    dragging={true}
    zoomControl={true}
  /> */}
              {/* </div> */}
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet eight */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Lahore Outlet - I{" "}
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard title="Contact Person" content="Umar" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321) 100 0691" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Beadon Road Road, Lahore."
                />
              </motion.div>

              {/* <OfficeMap
    _style={"h-[200px] w-[340px] "}
    address={"Beadon Road Road, Lahore"}
    title={"Edge Expert Office"}
    officeCoordinates={[24.937153298617464, 67.04100646963516]}
    scrollWheelZoom={true}
    dragging={true}
    zoomControl={true}
  /> */}
              {/* </div> */}
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet nine */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Lahore Outlet - II
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard title="Contact Person" content="Moiz" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (323) 628 6138" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Deffence Road, Shahkam Chowk, Lahore, Pakistan"
                />
              </motion.div>

              {/* <OfficeMap
    _style={"h-[200px] w-[340px] "}
    address={"police station, Timber market, Sakhi Peer Rd, Shahi Bazar, Hyderabad, 17000, Pakistan"}
    title={"Edge Expert Office"}
    officeCoordinates={[25.39724956070506, 68.37313659684469]}
    scrollWheelZoom={true}
    dragging={true}
    zoomControl={true}
  /> */}
              {/* </div> */}
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Lahore Outlet - III
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Abu Bakar"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (321) 100 0695"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Ameer Chowk, Collage Road, Township, Lahore"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Faisalabad Outlet - I
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Faisal"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (301) 670 1780"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Kotwali Road, Faisalabad"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Faisalabad Outlet - II
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Faisal"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (301) 670 1780"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Satyana Road, Faisalabad"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet nine */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Lahore Outlet - II
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard title="Contact Person" content="Salman" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (321)1000694" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Noorbawa, Gali # 2, Gondlawala Road, Gujranwala"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Sialkot Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Touseef"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (300) 647 5547"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Raja Road, Sialkot"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Gujrat Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Ali Butt"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (315) 919 7572"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Sarghoda Road, Gujrat"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet nine */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Rawalpindi Outlet
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard title="Contact Person" content="Naveed" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (344) 773 3487" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Pindora Chungi, Saidpur Road, Rawalpindi"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Islamabad Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Rizwan"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (307) 648 8766"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="F/11, Islamabad."
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Gujrat Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Furqan"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (321) 100 0693"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Sheikh Anwar Market, City Sadar Road, Rawalpindi"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet nine */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">
                Rawalpindi Outlet
              </h1>
              <motion.div variants={fadeIn}>
                <ContactCard title="Contact Person" content="Imran" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard title="Hotline" content="+92 (300) 864 2102" />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  title="Office Address"
                  content="Rathore Plaza, Highcourt Road, Rawalpindi"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full justify-center">
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Lahore Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Wasif"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (320) 047 1828"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Jammu Stop, Bedian Road, Lahore"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              <h1 className="text-2xl font-bold underline">Lahore Outlet</h1>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Noman"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (305) 100 1763"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Rehman Gali No 1, Brandrath Road, Lahore"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex h-flll w-full justify-center items-center">
            {/* outlet seven */}
            <motion.div
              className="flex flex-col gap-6 md:px-10 px-[10px] py-5 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={outletAnimation}
            >
              {/* <h1 className="text-2xl font-bold underline">Lahore Outlet</h1> */}
              <motion.div variants={fadeIn}>
                {/* <ContactCard
                  _style={"w-full flex"}
                  title="Contact Person"
                  content="Noman"
                /> */}
              </motion.div>
              <motion.div variants={fadeIn}>
                {/* <ContactCard
                  _style={"w-full flex"}
                  title="Hotline"
                  content="+92 (305) 100 1763"
                /> */}
              </motion.div>
              <motion.div variants={fadeIn}>
                {/* <ContactCard
                  _style={"w-full flex"}
                  title="Office Address"
                  content="Rehman Gali No 1, Brandrath Road, Lahore"
                /> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
