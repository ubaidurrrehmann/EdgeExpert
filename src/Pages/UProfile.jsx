import React from "react";
import { motion } from "framer-motion";

export default function UProfile() {
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
    hero: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200",
    profile: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800",
    application: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
    furniture: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800"
  };

  // U-Profile applications
  const applications = [
    {
      name: "Modular Furniture",
      description: "Provides clean, professional edges for modular furniture components, enhancing both aesthetics and durability."
    },
    {
      name: "Cabinet Doors",
      description: "Creates a finished look on cabinet doors while protecting edges from impact and moisture damage."
    },
    {
      name: "Worktops & Countertops",
      description: "Offers a seamless finish and protection for high-traffic horizontal surfaces."
    },
    {
      name: "Display Units",
      description: "Enhances the appearance and longevity of retail fixtures and commercial displays."
    }
  ];

  // U-Profile advantages
  const advantages = [
    {
      title: "Tool-Free Installation",
      description: "Simply clips onto panel edges without requiring adhesives, heat, or specialized equipment."
    },
    {
      title: "Versatile Protection",
      description: "Compatible with various panel materials including MDF, particleboard, and plywood."
    },
    {
      title: "Enhanced Safety",
      description: "Covers sharp edges, making furniture safer for homes with children and high-traffic commercial spaces."
    },
    {
      title: "Consistent Finish",
      description: "Provides uniform appearance across all edges, regardless of panel core material."
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
          alt="U-Profile Edge Finishing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            U-Profile Solutions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative edge protection with effortless installation
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What is U-Profile?</h2>
            <p className="text-gray-600 mb-4">
              Edge Expert U-Profile is a high-quality edge finishing solution designed to provide both protection and an elegant finish to the exposed edges of panels, boards, and furniture components. This U-shaped profile securely grips the edge of a panel, enhancing both appearance and durability without the need for adhesives or complex application methods.
            </p>
            <p className="text-gray-600">
              Unlike traditional edge banding that requires adhesives and specialized equipment, our U-Profile solution offers a quick, clean installation process that delivers professional results with minimal effort. It's the perfect solution for both manufacturing environments and on-site installations.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.profile} 
              alt="U-Profile Edge Protection" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Key Features Section */}
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
            Key Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">U-Shaped Design</h3>
              <p className="text-gray-600">
                Our unique U-shaped profile provides snug, form-fitting coverage that securely grips panel edges without slipping or detaching. This design ensures consistent protection and appearance across all applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tool-Free Installation</h3>
              <p className="text-gray-600">
                Eliminate the need for specialized equipment, adhesives, or heat application. Our U-Profiles simply clip onto panel edges, significantly reducing installation time and complexity while maintaining professional results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Durable Material</h3>
              <p className="text-gray-600">
                Manufactured using flexible yet impact-resistant PVC, ABS, or aluminum, our U-Profiles offer exceptional durability and longevity even in high-traffic or commercial environments.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smooth Finish</h3>
              <p className="text-gray-600">
                Our U-Profiles provide a clean, professional appearance that enhances the overall aesthetic appeal of furniture and fixtures. Available in various colors and finishes to match any design requirement.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Protective Barrier</h3>
              <p className="text-gray-600">
                U-Profiles create an effective barrier against moisture, impact damage, and daily wear and tear, significantly extending the life of furniture and panel components.
              </p>
            </motion.div>
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
              src={images.application} 
              alt="U-Profile Applications" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-4">
              Edge Expert U-Profiles are incredibly versatile, suitable for a wide range of applications across residential, commercial, and industrial settings. Their ease of installation and professional finish make them the preferred choice for furniture manufacturers, contractors, and DIY enthusiasts alike.
            </p>
            <p className="text-gray-600">
              From kitchen cabinets to retail displays, our U-Profiles provide consistent protection and aesthetic enhancement for any panel edge application.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{app.name}</h3>
              <p className="text-gray-600">{app.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Sizes & Colors */}
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
            Available Sizes & Colors
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <motion.div 
              className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Panel Thickness Options</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">16mm (5/8")</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">18mm (3/4")</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">19mm (3/4")</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">22mm (7/8")</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">25mm (1")</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom sizes available upon request</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md"
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Finish Options</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Solid colors (white, black, gray, beige, etc.)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Woodgrain finishes (oak, maple, walnut, cherry, etc.)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Metallic finishes (silver, brushed aluminum, etc.)</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Gloss, matte, and textured options</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Custom colors available to match specific requirements</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Advantages */}
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
          Advantages of U-Profile
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div 
              key={index}
              className="flex gap-4 items-start"
              variants={fadeIn}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-blue-600 text-white"
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
            Ready to Simplify Your Edge Finishing?
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Contact Edge Expert today to explore our U-Profile solutions and discover how they can enhance your furniture and panel finishing process.
          </motion.p>
          <motion.button 
            className="bg-white text-blue-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Samples
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}