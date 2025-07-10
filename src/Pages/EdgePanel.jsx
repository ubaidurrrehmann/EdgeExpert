import React from "react";
import { motion } from "framer-motion";

export default function EdgePanel() {
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
    hero: "https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&w=1200",
    panel: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800",
    interior: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800",
    commercial: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800"
  };

  // Panel types
  const panelTypes = [
    {
      name: "Decorative Wall Panels",
      description: "Stylish panels with various textures and patterns for aesthetic enhancement of interior spaces.",
      features: ["3D textures", "Sound absorption", "Easy installation", "Customizable designs"]
    },
    {
      name: "Acoustic Panels",
      description: "Specialized panels designed to improve sound quality and reduce noise in residential and commercial spaces.",
      features: ["Noise reduction", "Echo control", "Fire-resistant", "Lightweight"]
    },
    {
      name: "PVC Wall Panels",
      description: "Waterproof, durable panels ideal for bathrooms, kitchens, and other moisture-prone areas.",
      features: ["Waterproof", "Mold-resistant", "Low maintenance", "Heat insulation"]
    },
    {
      name: "Laminated Panels",
      description: "High-quality panels with laminated surfaces offering superior durability and a wide range of finishes.",
      features: ["Scratch-resistant", "UV-resistant", "Stain-resistant", "Variety of finishes"]
    }
  ];

  // Applications
  const applications = [
    {
      title: "Residential",
      description: "Transform living rooms, bedrooms, and entertainment areas with stylish wall panels that add dimension and character.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Commercial",
      description: "Enhance office spaces, reception areas, and conference rooms with professional-looking panels that create a lasting impression.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Hospitality",
      description: "Create memorable experiences in hotels, restaurants, and entertainment venues with distinctive wall treatments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      )
    },
    {
      title: "Retail",
      description: "Stand out from competitors with eye-catching wall panels that enhance brand identity and customer experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  // Benefits
  const benefits = [
    "Quick and easy installation",
    "Cost-effective alternative to traditional wall treatments",
    "Excellent thermal and acoustic insulation",
    "Conceals wall imperfections and uneven surfaces",
    "Adds value to property with minimal investment",
    "Wide range of designs to match any interior style"
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
          alt="Edge Panel Solutions" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edge Panel Solutions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your spaces with innovative wall panel systems
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Innovative Wall Panel Systems</h2>
            <p className="text-gray-600 mb-4">
              Edge Expert's panel solutions offer a revolutionary approach to interior wall treatments, combining aesthetic appeal with practical functionality. Our diverse range of wall panels provides designers, architects, and homeowners with versatile options to enhance any space.
            </p>
            <p className="text-gray-600">
              Whether you're looking to improve acoustics, add visual interest, or create a more comfortable environment, our panel systems deliver exceptional results with minimal installation complexity. From residential living spaces to commercial environments, Edge Panel solutions transform ordinary walls into striking design features.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.panel} 
              alt="Edge Panel System" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Panel Types Section */}
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
            Our Panel Types
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {panelTypes.map((panel, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                variants={scaleIn}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{panel.name}</h3>
                <p className="text-gray-600 mb-6">{panel.description}</p>
                <div className="flex flex-wrap gap-2">
                  {panel.features.map((feature, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Applications Section */}
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
              src={images.interior} 
              alt="Interior Application" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-4">
              Edge Panels are incredibly versatile and can be used in virtually any interior space to enhance aesthetics, improve acoustics, or add insulation. Their ease of installation and wide range of design options make them suitable for both new construction and renovation projects.
            </p>
            <p className="text-gray-600">
              From creating accent walls in residential living rooms to developing comprehensive acoustic solutions for commercial spaces, our panel systems adapt to your specific requirements and design vision.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {app.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{app.title}</h3>
              <p className="text-gray-600">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Installation Process */}
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
            Simple Installation Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Preparation</h3>
              <p className="text-gray-600">
                Clean and prepare the wall surface, ensuring it's dry, smooth, and free of dust or debris. Measure and mark the installation area.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Application</h3>
              <p className="text-gray-600">
                Apply adhesive to the back of the panel or directly to the wall according to the specific panel type. Position the panel carefully on the wall.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Finishing</h3>
              <p className="text-gray-600">
                Press firmly to ensure proper adhesion. Continue with adjacent panels, ensuring proper alignment. Trim edges as needed for a perfect fit.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
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
          Key Benefits
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={fadeIn}
          >
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.commercial} 
              alt="Commercial Application" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
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
            Ready to Transform Your Walls?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Contact Edge Expert today to explore our extensive range of panel solutions and discover how they can enhance your interior spaces.
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