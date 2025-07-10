import React from "react";
import { motion } from "framer-motion";
import EdgeMagic from "../assets/images/HomeProducst/Product6.png"
import Fixer from "../assets/images/Fixer.jpg"


export default function MagicFixer() {
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
    hero: EdgeMagic,// "https://images.unsplash.com/photo-1589939706166-aea0f8738315?q=80&w=1200",
    product: Fixer,
    application: EdgeMagic, //"https://images.unsplash.com/photo-1581092160607-ee22731c2eaf?q=80&w=800",
    result: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=800"
  };

  // Product features
  const features = [
    {
      title: "Superior Bonding Strength",
      description: "Formulated with advanced polymer technology for exceptional adhesion to a wide range of materials including wood, PVC, ABS, and melamine.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Quick Setting Time",
      description: "Achieves initial bond in minutes and full strength in hours, significantly reducing production time compared to conventional adhesives.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Heat & Moisture Resistant",
      description: "Maintains bond integrity in challenging environments, including high humidity areas and surfaces exposed to temperature fluctuations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Gap-Filling Formula",
      description: "Unique formulation expands slightly to fill small gaps and imperfections, ensuring a secure bond even on uneven surfaces.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Crystal Clear Finish",
      description: "Dries completely transparent, making it ideal for visible joints and ensuring a professional, seamless appearance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      title: "Low VOC Formula",
      description: "Environmentally responsible formulation with low volatile organic compounds, making it safer for workers and indoor environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Applications
  const applications = [
    "Edge banding repair and installation",
    "Furniture assembly and repair",
    "Cabinet construction and installation",
    "Decorative panel attachment",
    "Trim and molding installation",
    "Laminate bonding and repair"
  ];

  // Product variants
  const variants = [
    {
      name: "Edge Magic Fixer Standard",
      size: "250ml",
      description: "Perfect for general woodworking and furniture assembly applications.",
      color: "Crystal Clear"
    },
    {
      name: "Edge Magic Fixer Professional",
      size: "500ml",
      description: "Designed for professional cabinet makers and furniture manufacturers.",
      color: "Crystal Clear"
    },
    {
      name: "Edge Magic Fixer Quick Set",
      size: "250ml",
      description: "Ultra-fast setting formula for time-sensitive projects and repairs.",
      color: "Crystal Clear"
    },
    {
      name: "Edge Magic Fixer Precision",
      size: "100ml with applicator tip",
      description: "Specialized applicator for detailed work and precise edge repairs.",
      color: "Crystal Clear"
    }
  ];

  // Usage steps
  const steps = [
    {
      title: "Surface Preparation",
      description: "Ensure surfaces are clean, dry, and free from dust, grease, or loose particles."
    },
    {
      title: "Application",
      description: "Apply a thin, even layer of Edge Magic Fixer to one surface using the precision applicator."
    },
    {
      title: "Assembly",
      description: "Join the surfaces together within 3-5 minutes of application, applying firm, even pressure."
    },
    {
      title: "Clamping",
      description: "For optimal results, clamp or secure the bonded materials for 30-60 minutes."
    },
    {
      title: "Curing",
      description: "Allow 24 hours for the adhesive to fully cure before subjecting the bond to stress or load."
    }
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
          alt="Edge Magic Fixer Adhesive" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edge Magic Fixer
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced adhesive solution for perfect edge bonding
          </motion.p>
        </div>
      </motion.div>

      {/* Introduction Section */}
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Revolutionary Adhesive Technology</h2>
            <p className="text-gray-600 mb-4">
              Edge Magic Fixer is a premium-grade adhesive specifically formulated for the furniture and woodworking industry. This innovative solution provides exceptional bonding strength for edge banding applications, furniture assembly, and various woodworking projects.
            </p>
            <p className="text-gray-600">
              Developed with advanced polymer technology, Edge Magic Fixer delivers superior adhesion, rapid setting times, and remarkable durability. Its unique formula ensures a strong, long-lasting bond between various materials, including wood, PVC, ABS, melamine, and laminate surfaces.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.product} 
              alt="Edge Magic Fixer Product" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features */}
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
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
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

      {/* Applications */}
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
              src={images.application} 
              alt="Edge Magic Fixer Application" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-6">
              Edge Magic Fixer's versatility makes it an essential product for a wide range of woodworking and furniture manufacturing applications. Its specialized formula is particularly effective for edge banding operations, where it creates permanent bonds between edge tapes and panel substrates.
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

      {/* Product Variants */}
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
            Product Variants
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {variants.map((variant, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-4 bg-blue-600 rounded-full mb-6"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{variant.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-3">{variant.size} • {variant.color}</p>
                <p className="text-gray-600">{variant.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How to Use */}
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
          How to Use
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={fadeIn}
          >
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.result} 
              alt="Edge Magic Fixer Results" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Technical Specifications */}
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
            Technical Specifications
          </motion.h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="min-w-full">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Base</td>
                  <td className="py-4 px-6">Advanced Polymer Blend</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Color</td>
                  <td className="py-4 px-6">Crystal Clear when dry</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Working Time</td>
                  <td className="py-4 px-6">3-5 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Initial Setting Time</td>
                  <td className="py-4 px-6">30-60 minutes</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Full Cure Time</td>
                  <td className="py-4 px-6">24 hours</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Temperature Resistance</td>
                  <td className="py-4 px-6">-30°C to +120°C</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Water Resistance</td>
                  <td className="py-4 px-6">Excellent</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 bg-blue-50 font-semibold text-gray-800">Shelf Life</td>
                  <td className="py-4 px-6">24 months (unopened)</td>
                </tr>
              </tbody>
            </table>
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
            Experience the Magic
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Transform your woodworking and furniture projects with Edge Magic Fixer. Contact us today to order or learn more about our revolutionary adhesive solution.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}