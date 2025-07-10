import React from "react";
import { motion } from "framer-motion";
import EdgeBand from "../assets/images/HomeProducst/Product1.png"

export default function EdgeBanding() {
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
    hero: EdgeBand,
    process: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800",
    materials: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800",
    application: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=800",
    furniture: "https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=1200"
  };

  // Edge banding materials with descriptions
  const materials = [
    {
      name: "PVC Edge Banding",
      description: "Our premium PVC edge banding offers exceptional durability and moisture resistance. Available in over 100 colors and finishes to match any design requirement.",
      features: ["Water-resistant", "Impact-resistant", "UV-stable", "Flexible"]
    },
    {
      name: "ABS Edge Banding",
      description: "Environmentally friendly alternative with superior heat resistance. Ideal for commercial applications where sustainability is a priority.",
      features: ["Eco-friendly", "Heat-resistant", "Chemical-resistant", "Recyclable"]
    },
    {
      name: "Wood Veneer Edge Banding",
      description: "Natural wood veneer edge banding for a premium, authentic appearance. Perfect for high-end furniture and cabinetry.",
      features: ["Natural wood grain", "Premium finish", "Stainable", "Authentic look"]
    },
    {
      name: "Acrylic Edge Banding",
      description: "High-gloss, modern finish that creates a seamless, contemporary look. Ideal for modern design aesthetics.",
      features: ["High-gloss", "Modern appearance", "Color consistency", "Scratch-resistant"]
    }
  ];

  // Application methods
  const applications = [
    {
      name: "Manual Application",
      description: "For small-scale projects and DIY applications, using iron-on methods with pre-glued edge banding."
    },
    {
      name: "Semi-Automatic",
      description: "Hot air or glue pot machines for medium production volumes with consistent quality."
    },
    {
      name: "Fully Automatic",
      description: "High-speed edge banding machines for industrial-scale production with precision trimming and finishing."
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
          alt="Edge Banding Process" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edge Banding Solutions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium finishing for exceptional furniture and cabinetry
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What is Edge Banding?</h2>
            <p className="text-gray-600 mb-4">
              Edge banding is a sophisticated finishing process that involves applying a narrow strip of material to the exposed edges of engineered wood panels such as plywood, MDF, or particleboard. This critical procedure serves multiple purposes beyond mere aesthetics.
            </p>
            <p className="text-gray-600">
              At Edge Expert, we specialize in providing premium edge banding solutions that not only enhance the visual appeal of furniture but also significantly improve durability, moisture resistance, and overall structural integrity of the finished product.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.process} 
              alt="Edge Banding Process" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Purpose Section */}
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
            Purpose of Edge Banding
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Enhanced Aesthetics</h3>
              <p className="text-gray-600 leading-relaxed">
                Edge banding transforms raw, unfinished panel edges into smooth, uniform surfaces that complement the overall design. It creates a seamless appearance that elevates the quality perception of the finished product.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Superior Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                By sealing the exposed edges, edge banding shields the core material from moisture penetration, impact damage, and daily wear. This protective barrier significantly extends the furniture's lifespan and maintains its structural integrity.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Increased Durability</h3>
              <p className="text-gray-600 leading-relaxed">
                Edge banded furniture resists chipping, splintering, and delamination, even in high-traffic environments. This enhanced durability ensures that furniture maintains its appearance and functionality throughout its extended service life.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Materials Section */}
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
          Edge Banding Materials
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.materials} 
              alt="Edge Banding Materials" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-4">
              At Edge Expert, we offer a comprehensive range of edge banding materials to suit every design requirement and budget. Our materials are sourced from industry-leading manufacturers to ensure consistent quality and performance.
            </p>
            <p className="text-gray-600">
              Each material type offers unique advantages in terms of appearance, durability, and application. Our technical experts can help you select the optimal edge banding solution for your specific project needs.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {materials.map((material, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{material.name}</h3>
              <p className="text-gray-600 mb-4">{material.description}</p>
              <div className="flex flex-wrap gap-2">
                {material.features.map((feature, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Methods */}
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
            Application Methods
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <motion.div 
              className="w-full md:w-1/2 order-2 md:order-1"
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Application</h3>
              <p className="text-gray-600 mb-4">
                Edge Expert employs state-of-the-art edge banding technology to ensure precise application with optimal adhesion and finishing. Our advanced equipment allows us to handle projects of any scale with consistent quality.
              </p>
              <p className="text-gray-600">
                From manual application for custom pieces to fully automated processes for large production runs, we have the expertise and equipment to meet your specific requirements.
              </p>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2 order-1 md:order-2"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={images.application} 
                alt="Edge Banding Application" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Common Uses */}
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
          Common Applications
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.furniture} 
              alt="Furniture Applications" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-4">
              Edge banding is an essential component in modern furniture manufacturing and interior design. Its versatility makes it suitable for a wide range of applications across residential, commercial, and institutional settings.
            </p>
            <p className="text-gray-600">
              Our edge banding solutions are used by leading furniture manufacturers, cabinet makers, interior designers, and contractors throughout Pakistan to create durable, aesthetically pleasing products.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Modular Furniture", "Kitchen Cabinets", "Office Desks", "Wardrobes", "Shelving Units"].map((use, index) => (
            <motion.div 
              key={index}
              className="bg-[#2C1668] text-white p-4 rounded-lg text-center flex items-center justify-center min-h-[100px]"
              variants={scaleIn}
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              transition={{ duration: 0.3 }}
            >
              <span className="font-medium">{use}</span>
            </motion.div>
          ))}
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
            Ready to Enhance Your Products?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Contact Edge Expert today to discuss your edge banding requirements and discover how our premium solutions can elevate your furniture and cabinetry.
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