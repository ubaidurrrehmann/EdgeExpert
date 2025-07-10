import React from "react";
import { motion } from "framer-motion";
import SawMachine from "../assets/images/HomeProducst/Product5.png"

export default function BanderSaw() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  // Sample images
  const images = {
    hero: SawMachine,// "https://images.unsplash.com/photo-1581091014534-898e874e4a35?q=80&w=1200",
    edgeBander: SawMachine,//"https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=800",
    panelSaw: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800",
    workshop: "https://images.unsplash.com/photo-1572015124294-488267231e35?q=80&w=800"
  };

  // Edge Bander features
  const edgeBanderFeatures = [
    {
      title: "Automatic Feeding System",
      description: "Precisely feeds panel and edge tape, ensuring consistent application and reducing manual handling."
    },
    {
      title: "Glue Application",
      description: "Applies EVA/hot-melt glue uniformly on the panel edge for optimal adhesion and durability."
    },
    {
      title: "End Trimming & Flush Trimming",
      description: "Cuts excess tape and smooths edges for a clean, professional finish on all sides."
    },
    {
      title: "Buffing & Polishing Units",
      description: "Provides a high-quality finished look with smooth, polished edges ready for immediate use."
    },
    {
      title: "Corner Rounding",
      description: "Optional feature for softening sharp corners, enhancing both safety and aesthetics."
    }
  ];

  // Edge Bander types
  const edgeBanderTypes = [
    {
      name: "Manual Edge Bander",
      description: "Basic operations suitable for small shops and low-volume production. Cost-effective solution for occasional edge banding needs.",
      suitable: "Small woodworking shops, DIY enthusiasts"
    },
    {
      name: "Semi-Automatic Edge Bander",
      description: "Offers more control with faster output. Balances automation with affordability for medium-sized operations.",
      suitable: "Medium-sized furniture workshops, cabinet makers"
    },
    {
      name: "Fully Automatic Edge Bander",
      description: "Ideal for large-scale furniture production with high-speed operation and minimal operator intervention.",
      suitable: "Large furniture manufacturers, industrial production lines"
    }
  ];

  // Panel Saw features
  const panelSawFeatures = [
    {
      title: "Sliding Table",
      description: "Ensures smooth, guided movement of large panels for precise, straight cuts with minimal effort."
    },
    {
      title: "Main & Scoring Blades",
      description: "Scoring blade prevents chipping of laminated surfaces, ensuring clean cuts on both sides of the panel."
    },
    {
      title: "Angle and Tilt Cutting",
      description: "Adjustable for precision bevel and miter cuts, expanding the range of possible applications."
    },
    {
      title: "Digital Readouts",
      description: "Available on advanced models for highly accurate measurements and repeatable cuts."
    }
  ];

  // Panel Saw types
  const panelSawTypes = [
    {
      name: "Vertical Panel Saw",
      description: "Saves valuable floor space while offering efficient straight vertical and horizontal cuts. Ideal for shops with limited space.",
      suitable: "Small to medium workshops, sign makers"
    },
    {
      name: "Horizontal (Sliding Table) Panel Saw",
      description: "Offers high precision and versatility with the ability to handle a wide range of cutting operations.",
      suitable: "Furniture manufacturers, cabinet shops, production facilities"
    }
  ];

  // Applications
  const applications = [
    "Office and modular furniture",
    "Kitchen cabinets and wardrobes",
    "Commercial interior panels",
    "Retail fixtures and displays",
    "Educational and healthcare furniture",
    "Residential built-ins and shelving"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src={images.hero} 
          alt="Woodworking Machinery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edge Bander & Panel Saw
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional woodworking machinery for precision cutting and edge finishing
          </motion.p>
        </div>
      </motion.div>

      {/* Edge Bander Section */}
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Edge Bander Machine</h2>
            <p className="text-gray-600 mb-4">
              An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.
            </p>
            <p className="text-gray-600">
              At Edge Expert, we offer a comprehensive range of edge banding machines to suit operations of all sizes, from small workshops to large-scale manufacturing facilities. Our machines combine precision engineering with user-friendly controls to deliver consistently excellent results.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.edgeBander} 
              alt="Edge Bander Machine" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Edge Bander Features */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={fadeIn}
          >
            Edge Bander Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {edgeBanderFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-blue-600 font-bold text-2xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Edge Bander Types */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeIn}
        >
          Types of Edge Banders
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {edgeBanderTypes.map((type, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{type.name}</h3>
              <p className="text-gray-600 mb-4">{type.description}</p>
              <div className="mt-auto">
                <span className="text-sm font-semibold text-blue-600">Best for:</span>
                <p className="text-gray-700 italic">{type.suitable}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Panel Saw Section */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              className="w-full md:w-1/2 order-2 md:order-1"
              variants={scaleIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Panel Saw (Sliding Table Saw)</h2>
              <p className="text-gray-600 mb-4">
                A Panel Saw, also known as a Sliding Table Saw, is used to accurately cut large panels and boards into smaller sizes. It is a staple in furniture manufacturing, cabinetry, and wood-based panel processing.
              </p>
              <p className="text-gray-600">
                Edge Expert offers high-precision panel saws that combine robust construction with advanced features to ensure accurate, clean cuts every time. Our machines are designed to handle a wide range of materials and thicknesses, making them versatile additions to any woodworking operation.
              </p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 order-1 md:order-2"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={images.panelSaw} 
                alt="Panel Saw" 
                className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Panel Saw Features */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeIn}
        >
          Panel Saw Key Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {panelSawFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              className="flex gap-6 items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Panel Saw Types */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            variants={fadeIn}
          >
            Types of Panel Saws
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {panelSawTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{type.name}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="mt-auto">
                  <span className="text-sm font-semibold text-blue-600">Best for:</span>
                  <p className="text-gray-700 italic">{type.suitable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Combined Applications */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          variants={fadeIn}
        >
          Applications
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.workshop} 
              alt="Workshop Application" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-6">
              In a modern modular furniture setup, Panel Saws are used for precise cutting of board panels, and Edge Banders are used for finishing and sealing the edges—ensuring a professional, durable, and visually appealing product.
            </p>
            <ul className="space-y-3">
              {applications.map((app, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{app}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-[#2C1668] text-white"
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
            Upgrade Your Woodworking Capabilities
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Contact Edge Expert today to explore our range of high-quality edge banders and panel saws. Our experts can help you select the perfect machines for your production needs.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Consultation
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}