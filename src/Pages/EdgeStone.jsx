import React from "react";
import { motion } from "framer-motion";

export default function EdgeStone() {
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
    hero: "https://images.unsplash.com/photo-1581430872221-d1cfed785922?q=80&w=1200",
    marble: "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?q=80&w=800",
    bathroom: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800",
    livingRoom: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800"
  };

  // Features of PVC Edge Stone Tile
  const features = [
    {
      title: "Realistic Marble Appearance",
      description: "High-definition printing or lamination provides a natural stone look that's virtually indistinguishable from genuine marble."
    },
    {
      title: "Lightweight & Durable",
      description: "Made from strong yet lightweight PVC material, making installation easier and reducing structural load requirements."
    },
    {
      title: "Waterproof & Termite-Proof",
      description: "Ideal for wet areas like kitchens and bathrooms, with complete resistance to moisture and pests."
    },
    {
      title: "Easy to Install",
      description: "Can be glued or nailed directly onto surfaces with no grouting needed, significantly reducing installation time and cost."
    },
    {
      title: "Low Maintenance",
      description: "Smooth surface is easy to clean and resistant to stains and mold, requiring minimal upkeep compared to natural stone."
    }
  ];

  // Applications
  const applications = [
    {
      name: "Interior Wall Cladding",
      description: "Transform ordinary walls into elegant marble-like surfaces for a fraction of the cost of natural stone."
    },
    {
      name: "Bathroom and Kitchen Walls",
      description: "Perfect for wet areas thanks to waterproof properties and easy cleaning, with no grout lines to harbor mold."
    },
    {
      name: "TV and Feature Walls",
      description: "Create stunning focal points in living spaces with luxurious marble aesthetics without the weight or installation challenges."
    },
    {
      name: "Office and Commercial Interiors",
      description: "Elevate professional environments with sophisticated stone finishes that are durable and cost-effective."
    },
    {
      name: "False Ceilings and Partitions",
      description: "Lightweight nature makes these panels ideal for overhead applications and non-load-bearing dividers."
    }
  ];

  // Comparison table data
  const comparisonData = [
    { feature: "Weight", pvc: "Lightweight", natural: "Heavy" },
    { feature: "Installation", pvc: "Quick and easy", natural: "Time-consuming" },
    { feature: "Cost", pvc: "Budget-friendly", natural: "Expensive" },
    { feature: "Maintenance", pvc: "Low", natural: "High (requires sealing)" },
    { feature: "Waterproof", pvc: "Yes", natural: "No" }
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
          alt="PVC Edge Stone Tile" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PVC Edge Stone Tile
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Luxury marble aesthetics without the premium cost
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What is PVC Edge Stone Tile?</h2>
            <p className="text-gray-600 mb-4">
              PVC Edge Stone Tile, also known as PVC Marble Panels or PVC Marble Wall Panels, are decorative wall and surface coverings made from polyvinyl chloride (PVC) with a marble-like finish. They are designed to replicate the luxurious appearance of natural marble at a more affordable cost, with easier installation and lower maintenance.
            </p>
            <p className="text-gray-600">
              These innovative panels represent the perfect blend of aesthetics and practicality, offering the timeless elegance of marble with the modern benefits of advanced PVC technology. Edge Expert's stone tiles provide an accessible way to achieve premium interior finishes for both residential and commercial spaces.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.marble} 
              alt="PVC Marble Panel" 
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
            {features.map((feature, index) => (
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
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-4">
              The versatility of PVC Edge Stone Tile makes it suitable for a wide range of interior applications. Its combination of aesthetic appeal and practical benefits has made it increasingly popular in modern interior design and architecture.
            </p>
            <p className="text-gray-600">
              From residential bathrooms to commercial office spaces, these panels provide a consistent, high-end appearance without the installation challenges, maintenance requirements, or cost of natural stone materials.
            </p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.bathroom} 
              alt="Bathroom Application" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Standard Sizes */}
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
            Standard Sizes
          </motion.h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">Dimensions</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Thickness: 2.8mm to 3.6mm</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Width: 1220mm (4 feet)</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Length: 2926mm (9.5 feet)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">Design Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Glossy, matte, or textured finishes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Multiple marble patterns</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Custom sizes available</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Popular Marble Patterns</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Carrara", "Onyx", "Travertine", "Calacatta"].map((pattern, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-100 p-3 rounded-lg text-center"
                    whileHover={{ scale: 1.05, backgroundColor: "#EDF2F7" }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-gray-800 font-medium">{pattern}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison with Natural Marble */}
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
          Advantages Over Natural Marble
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
          <motion.div 
            className="w-full md:w-1/2"
            variants={scaleIn}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={images.livingRoom} 
              alt="Living Room with PVC Marble Panels" 
              className="w-full md:h-[500px] h-[300px] rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-6">
              While natural marble has been prized for centuries for its beauty and uniqueness, PVC Edge Stone Tile offers numerous practical advantages that make it an increasingly popular choice for modern interiors.
            </p>
            <p className="text-gray-600">
              Our comparison highlights the key differences between these materials, helping you make an informed decision based on your specific project requirements, budget constraints, and long-term maintenance considerations.
            </p>
          </motion.div>
        </div>
        
        {/* <motion.div 
          className="overflow-x-auto"
          variants={scaleIn}
        >
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead className="bg-[#2C1668] text-white">
              <tr>
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-left">PVC Marble Sheet</th>
                <th className="py-4 px-6 text-left">Natural Marble</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-4 px-6 font-medium">{row.feature}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {row.feature === "Waterproof" && row.pvc === "Yes" ? (
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : null}
                      {row.pvc}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      {row.feature === "Waterproof" && row.natural === "No" ? (
                        <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : null}
                      {row.natural}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div> */}
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
            Transform Your Spaces with PVC Edge Stone Tile
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            Contact Edge Expert today to explore our extensive range of PVC marble panels and discover how they can bring luxury aesthetics to your projects without the premium cost.
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