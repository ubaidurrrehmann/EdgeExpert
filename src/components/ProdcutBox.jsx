import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import product1 from "../assets/images/HomeProducst/Product1.png";
import product2 from "../assets/images/HomeProducst/Product2.png";
import product3 from "../assets/images/HomeProducst/Tile.png";
import product4 from "../assets/images/HomeProducst/Product4.png";
import product5 from "../assets/images/HomeProducst/Product5.png";
import product6 from "../assets/images/HomeProducst/Product6.png";
import product7 from "../assets/images/HomeProducst/EdgeMagic.png";
import product8 from "../assets/images/HomeProducst/HotGlue.png";
import product9 from "../assets/images/HomeProducst/LiquidGlu.png";
import EdgeFixer from "../assets/images/HomeProducst/EdgeFixer.png";
import EdgeMagic from "../assets/images/HomeProducst/EdgeMagic.png";
import SuperEdgeFixer from "../assets/images/HomeProducst/SuperEdgeOriginalFixer.png";
import SuperEdgeMagic from "../assets/images/HomeProducst/SuperEdgeOriginalMagic.png";

import AutomaticEdgeBandar from "../assets/images/HomeProducst/AutomaticEdgeBandar.png";
import AutomaticEdgeBandar2 from "../assets/images/HomeProducst/AutomaticEdgeBandar2.png";
import SawingMachine from "../assets/images/HomeProducst/SawingMachine.png";
import SemiAutomaticBanding from "../assets/images/HomeProducst/Semi-AutomaticBanding.png";
import SemiAutomaticBanding2 from "../assets/images/HomeProducst/Semi-AutomaticBanding2.png";
import SewingTable from "../assets/images/HomeProducst/SewingTable.png";
import SlidingTablePanelSaw from "../assets/images/HomeProducst/SlidingTablePanelSaw.png";

// Product data with random images and lorem ipsum text
const productItems = [
  {
    id: 1,
    title: "Edge Stone Tile",
    description:
      "PVC marble tile is usually used to decorate living rooms, bedrooms, halls, and even dining rooms in homes. They can make walls look like marble without the weight and cost of real marble. In commercial spaces such as offices, restaurants, and stores, these sheets can make any room look elegant and professional.",
    image: product3, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: [
      "Realistic Marble Appearance",
      "Lightweight & Durable",
      "Waterproof & Termite-Proof",
    ],
    href: "/products/edge-stone-tile",
  },
  {
    id: 2,
    title: "PVC Edge Banding",
    description:
      "Edge banding is the process of applying a narrow strip of material to the exposed edges of panels (typically made of plywood, MDF, or particleboard) to cover and protect the raw edges and give a finished, aesthetically pleasing look. It also improves durability, moisture resistance, and overall appearance",
    image: product1, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Premium Edge Banding",
    features: ["High durability", "Easy installation", "Premium finish"],
    href: "/products/edge-banding",
  },
  {
    id: 3,
    title: "U-Profile",
    description:
      "Edge Expert U-Profile is a high-quality edge finishing solution designed to provide both protection and an elegant finish to the exposed edges of panels, boards, and furniture components. This U-shaped profile securely grips the edge of a panel, enhancing both appearance and durability without the need for adhesives or complex application methods.",
    image: product2, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: ["U-Shaped Design", "Tool-Free Installation", "Smooth Finish"],
    href: "/products/u-profile",
  },
  {
    id: 4,
    title: "Edge Panel",
    description:
      "Transform your space with our exquisite collection of Wall Panels – the perfect blend of elegance, functionality, and modern design. Whether you're enhancing a home interior or designing a commercial space, our wall panels offer a stylish and practical solution to elevate any room.",
    image: product4, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Premium Edge Banding",
    features: [
      "Modern Aesthetic Design",
      "Easy installation",
      "Premium finish",
    ],
    href: "/products/edge-panel",
  },

  {
    id: 5,
    title: "Automatic Edge Bander Machine",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: AutomaticEdgeBandar, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },
  {
    id: 6,
    title: "Edge Bander Machine",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: AutomaticEdgeBandar2, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },
  {
    id: 7,
    title: "Panel Saw Machine",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: SlidingTablePanelSaw, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },
  {
    id: 5,
    title: "Sawing Machine",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: SawingMachine, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },
  {
    id: 6,
    title: "Sawing Table",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: SewingTable, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },
  {
    id: 7,
    title: "Semi-Automatic Edge Banding Machines",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: SemiAutomaticBanding, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },
  {
    id: 7,
    title: "Semi-Automatic Edge Banding Machines",
    description:
      "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
    image: SemiAutomaticBanding2, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "Professional Edge System",
    features: [
      "Automatic Feeding System",
      "End Trimming & Flush Trimming",
      "Buffing & Polishing Units",
    ],
    href: "/products/machines",
  },

  // {
  //   id: 8,
  //   title: "Hot Melt Glue",
  //   description:
  //     "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
  //   image: product8, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
  //   alt: "EdgeMaster Pro",
  //   features: [
  //     "Smooth application",
  //     "Heat and moisture-resistant",
  //     "Waterproof & Termite-Proof",
  //   ],
  //   href: "/products/magic-fixer",
  // },
  // {
  //   id: 9,
  //   title: "Edge Fixer",
  //   description:
  //     "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
  //   image: product7, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
  //   alt: "EdgeMaster Pro",
  //   features: [
  //     "Smooth application",
  //     "Heat and moisture-resistant",
  //     "Waterproof & Termite-Proof",
  //   ],
  //   href: "/products/magic-fixer",
  // },
  {
    id: 10,
    title: "Edge Fixer",
    description:
      "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
    image: EdgeFixer, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: [
      "Smooth application",
      "Heat and moisture-resistant",
      "Waterproof & Termite-Proof",
    ],
    href: "/products/magic-fixer",
  },
  {
    id: 11,
    title: "Super Edge Orignal Fixer",
    description:
      "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
    image: SuperEdgeFixer, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: [
      "Smooth application",
      "Heat and moisture-resistant",
      "Waterproof & Termite-Proof",
    ],
    href: "/products/magic-fixer",
  },
  {
    id: 12,
    title: "Edge Magic",
    description:
      "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
    image: EdgeMagic, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: [
      "Smooth application",
      "Heat and moisture-resistant",
      "Waterproof & Termite-Proof",
    ],
    href: "/products/magic-fixer",
  },
  {
    id: 13,
    title: "Super Edge Original Magic",
    description:
      "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
    image: SuperEdgeMagic, // "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=600",
    alt: "EdgeMaster Pro",
    features: [
      "Smooth application",
      "Heat and moisture-resistant",
      "Waterproof & Termite-Proof",
    ],
    href: "/products/magic-fixer",
  },
];

export default function ProductBox() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320; // Approximate card width
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-gray-50 py-16 relative">
      <div className="container mx-auto px-4 relative">
        {/* Left Arrow */}
        {/* {showLeftArrow && ( */}
        <motion.button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 ml-2 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("left")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </motion.button>
        {/* )} */}

        {/* Right Arrow */}
        {/* {showRightArrow && ( */}
        <motion.button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-white shadow-lg hover:bg-blue-700 mr-2 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll("right")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </motion.button>
        {/* )} */}

        {/* Horizontal Scrolling Container */}
        <div
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          ref={scrollRef}
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {productItems.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[320px] sm:w-[300px] md:w-[375px] px-3 snap-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <NavLink to={product.href}>
                <motion.div
                  className="group relative h-96 rounded-lg overflow-hidden cursor-pointer "
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image */}
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tl from-[#f6f7fa]/20 via-[#f6f7fa]/30 to-[#f7f6fa]/40 opacity-0 group-hover:opacity-100 transition-all duration-700"
                    aria-hidden="true"
                  />
                  {/* Overlay with transparency that changes color on hover */}
                  {/* <motion.div
                    className="absolute inset-0 bg-blue-900 bg-opacity-60"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ 
                      backgroundColor: "#2563eb", // Changes to a different blue shade
                      opacity: 0.7,
                      transition: { duration: 0.3 }
                    }}
                  /> */}

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-start p-6 text-white">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {product.title}
                    </motion.h3>

                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      whileHover={{ height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-gray-100 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <ul className="space-y-1 mb-4">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-xs flex items-center">
                            <span className="mr-1 text-green-300">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <motion.div
                        className="inline-block bg-white text-blue-900 py-1 px-4 rounded text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
