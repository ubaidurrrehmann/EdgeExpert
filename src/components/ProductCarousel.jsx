import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "../assets/images/HomeProducst/Product1.png";
import product2 from "../assets/images/HomeProducst/Product2.png";
import product3 from "../assets/images/HomeProducst/Product3.png";
import product4 from "../assets/images/HomeProducst/Product4.png";
import product5 from "../assets/images/HomeProducst/Product5.png";
import product6 from "../assets/images/HomeProducst/Product6.png";

// Product data with random images and lorem ipsum text
const productItems = [
  {
    id: 1,
    title: "Edge Banding",
    description: "Edge banding is the process of applying a narrow strip of material to the exposed edges of panels (typically made of plywood, MDF, or particleboard) to cover and protect the raw edges and give a finished, aesthetically pleasing look. It also improves durability, moisture resistance, and overall appearance",
    image: product1,// "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Premium Edge Banding",
    features: ["High durability", "Easy installation", "Premium finish"],
          href: "/products/edge-banding",
  },
  {
    id: 2,
    title: "U-Profile",
    description: "Edge Expert U-Profile is a high-quality edge finishing solution designed to provide both protection and an elegant finish to the exposed edges of panels, boards, and furniture components. This U-shaped profile securely grips the edge of a panel, enhancing both appearance and durability without the need for adhesives or complex application methods.",
    image: product2,// "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: ["U-Shaped Design", "Tool-Free Installation", "Smooth Finish"],
    href: "/products/u-profile",
  },
  {
    id: 3,
    title: "Edge Stone Tile",
    description: "PVC marble tile is usually used to decorate living rooms, bedrooms, halls, and even dining rooms in homes. They can make walls look like marble without the weight and cost of real marble. In commercial spaces such as offices, restaurants, and stores, these sheets can make any room look elegant and professional.",
    image: product3,// "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: ["Realistic Marble Appearance", "Lightweight & Durable", "Waterproof & Termite-Proof"],
    href: '/products/edge-stone'
  },
  {
    id: 4,
    title: "Edge Panel",
    description: "Transform your space with our exquisite collection of Wall Panels – the perfect blend of elegance, functionality, and modern design. Whether you're enhancing a home interior or designing a commercial space, our wall panels offer a stylish and practical solution to elevate any room.",
    image: product4,// "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Premium Edge Banding",
    features: ["Modern Aesthetic Design", "Easy installation", "Premium finish"],
    href: '/products/edge-panel'
  },
  {
    id: 5,
    title: "Edge Bander & Saw Machine",
    description: "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: product5,// "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: ["Automatic Feeding System", "End Trimming & Flush Trimming", "Buffing & Polishing Units"],
    href: '/products/bander-saw'
  },
  {
    id: 6,
    title: "Edge Magic and Fixer",
    description: "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
    image: product6,// "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: ["Smooth application", "Heat and moisture-resistant", "Waterproof & Termite-Proof"],
    href: '/products/magic-fixer'
  }
];

function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = ((prev) => {
        const next = (prev + 1) % productItems.length;
        setAnimatingIndex(next);
        setDirection(1); // Default direction is from right
        return next;
      })(currentIndex);
      setCurrentIndex(nextIndex);
    }, 6000); // Longer interval for product carousel
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + productItems.length) % productItems.length;
    setDirection(-1); // Set direction to left
    setAnimatingIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % productItems.length;
    setDirection(1); // Set direction to right
    setAnimatingIndex(newIndex);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-gray-50 py-16 overflow-hidden">
      {/* <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2> */}
      
      <div className="flex h-full mx-auto w-full relative">
        {productItems.map((item, index) => (
          <motion.div
            key={index}
            className={`
              flex flex-col md:flex-row items-center gap-8 px-14
              absolute inset-0 transition-all
              ${index === animatingIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
            initial={{ 
              opacity: 0, 
              x: direction > 0 ? 100 : -100 
            }}
            animate={
              index === animatingIndex 
                ? { opacity: 1, x: 0 } 
                : { 
                    opacity: 0, 
                    x: direction > 0 ? -100 : 100 
                  }
            }
            transition={{ duration: 0.7, ease: "linear" }}
          >
            {/* Product Image - Left Side */}
            <div className="w-full md:w-1/2 bg-black rounded-xl">
              <motion.img
                src={item.image}
                alt={item.alt}
                className={`w-full bg-balck object-cover rounded-xl shadow-lg `}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Product Description - Right Side */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-4">
              <motion.h3 
                className="text-2xl font-bold text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {item.description}
              </motion.p>
              
              <motion.ul 
                className="space-y-2 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </motion.ul>
              
              <motion.ul 
                className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <li>
                  <NavLink to={item.href}>
                    Learn More
                  </NavLink>
                </li>
              </motion.ul>
            </div> 
          </motion.div>
        ))}
        
        {/* Chevron Navigation */}
        <motion.button 
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white shadow-md hover:bg-slate-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          aria-label="Previous product"
        >
          <ChevronLeft size={24} />
        </motion.button>
        
        <motion.button 
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center text-white shadow-md hover:bg-slate-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          aria-label="Next product"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
}

export default ProductCarousel; 