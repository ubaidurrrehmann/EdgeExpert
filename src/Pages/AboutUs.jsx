import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import FactoryImage from "../assets/images/Factory.png"

export default function AboutUs() {
  // Sample images - replace with actual company images when available
  const images = {
    hero: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=1200",
    factory1: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600",
    factory2: "https://images.unsplash.com/photo-1631467886896-372ebc5abad5?q=80&w=600",
    office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
    team: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=600",
    products: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600"
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
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
          src={images.hero} 
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
            About Edge Expert
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Pakistan's Leading Provider of PVC and Interior Finishing Solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Company Overview */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Company</h2>
            <p className="text-gray-600 mb-4 text-justify">
            Edge Expert is a leading the market of manufacturing and supply of high-quality interior solutions in Pakistan. Specializing in premium <span className="font-bold text-[14px] ">PVC Edge Banding</span>, <span className="font-bold text-[14px] ">3D PVC U-profile/U-Trim</span>, <span className="font-bold text-[14px] ">Saw Machines and Banding Machines</span>, <span className="font-bold text-[14px] ">Wall Panels</span>, and <span className="font-bold text-[14px] ">Edge Stone Tile</span>, we are committed to delivering exceptional products designed to elevate both aesthetics and functionality in every space. 
            </p>
            <p className="text-gray-600 mb-4 text-justify">
            With a focus on innovation and quality, our PVC Edge Banding solutions provide durability and a seamless finish, while our 3D PVC U-Profile/U-Trim offer a modern, stylish touch to interior designs. We also supply state-of-the-art Saw Machines and Banding Machines that ensure precision and efficiency for professionals in the woodworking and furniture industries.
            Our wall panels and Edge Stone Tile are ideal for those looking to add elegance to their interiors with practical and long-lasting materials. At Edge Expert, we take pride in offering a wide range of products that cater to various applications, from commercial projects to residential spaces.
            </p>
            <p className="text-gray-600 text-justify">
            Proudly serving customers across Pakistan, we are dedicated to providing timely delivery, exceptional service, and high-quality solutions that meet industry standards. Trust Edge Expert to bring your interior design visions to life with products that stand the test of time.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={FactoryImage} 
              alt="Edge Expert Products" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-800"
              variants={fadeIn}
            >
              Our Mission & Vision
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Mission Statement</h3>
              <p className="text-gray-600 leading-relaxed">
                At Edge Expert, our mission is to deliver superior-quality PVC and
                interior finishing solutions that combine innovation, durability, and
                design excellence. We are committed to supporting furniture makers,
                interior professionals, and construction teams by providing reliable
                products, personalized service, and a seamless supply
                experience—ensuring every edge meets the highest standards of
                craftsmanship.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Vision Statement</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Pakistan's most trusted and innovative brand in the PVC and
                wood-based interior solutions industry, recognized for setting new
                benchmarks in quality, sustainability, and customer satisfaction, while
                continuously expanding our reach across local and global markets.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Products */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeIn}
        >
          Our Product Range
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Edge Banding",
              description: "High-quality edge banding solutions for furniture and interior applications."
            },
            {
              title: "UProfile",
              description: "Innovative U-shaped edge profiles for superior edge protection and finishing."
            },
            {
              title: "Edge Stone Tile",
              description: "Realistic marble-look PVC tiles for elegant wall decoration."
            },
            {
              title: "Edge Panel",
              description: "Stylish wall panels that combine functionality with modern design."
            },
            {
              title: "Edge Bander & Saw Machine",
              description: "Professional machinery for efficient edge banding application."
            },
            {
              title: "Edge Magic and Fixer",
              description: "High-performance adhesives for secure bonding of edge materials."
            }
          ].map((product, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={scaleIn}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Facilities */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={fadeIn}
          >
            Our Facilities
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="relative overflow-hidden rounded-lg h-64"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={images.factory1} 
                alt="Edge Expert Factory" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Manufacturing Plant</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg h-64"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={images.factory2} 
                alt="Edge Expert Production Line" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Production Line</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative overflow-hidden rounded-lg h-64"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={images.office} 
                alt="Edge Expert Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Corporate Office</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Team</h2>
            <p className="text-gray-600 mb-4">
              Behind Edge Expert's success is our dedicated team of professionals who bring expertise, passion, and commitment to every aspect of our operations. From our skilled production staff to our knowledgeable sales team, we work together to ensure that we deliver products that exceed our customers' expectations.
            </p>
            <p className="text-gray-600">
              Our leadership team combines decades of industry experience with a forward-thinking approach, driving innovation and maintaining our position at the forefront of the PVC and interior solutions industry in Pakistan.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.team} 
              alt="Edge Expert Team" 
              className="w-[80%] self-center md:h-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={fadeIn}
          >
            Why Choose Edge Expert
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes ensure superior products."
              },
              {
                title: "Innovation",
                description: "Continuous investment in R&D to develop cutting-edge solutions."
              },
              {
                title: "Customer Support",
                description: "Dedicated team providing personalized service and technical assistance."
              },
              {
                title: "Nationwide Reach",
                description: "Extensive distribution network ensuring timely delivery across Pakistan."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-slate-600 text-white"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={fadeIn}
          >
            Ready to Transform Your Projects?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Discover how Edge Expert's premium solutions can elevate your furniture and interior designs.
          </motion.p>
          <motion.ul 
            className="w-52 justify-self-center bg-white text-blue-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <li>
              <NavLink to={"/contact-us"}>
            Contact Us Today
            </NavLink>
            </li>
          </motion.ul>
        </div>
      </motion.section>
    </div>
  );
}
