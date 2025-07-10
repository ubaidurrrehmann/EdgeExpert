import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import product1 from "../assets/images/HomeProducst/Product1.png";
import product2 from "../assets/images/HomeProducst/Product2.png";
import product3 from "../assets/images/HomeProducst/Product3.png";
import product4 from "../assets/images/HomeProducst/Product4.png";
import product5 from "../assets/images/HomeProducst/Product5.png";
import product6 from "../assets/images/HomeProducst/Product6.png";
import OurProducts from "../assets/images/Products.jpg";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Edge Banding",
      description:
        "Edge banding is the process of applying a narrow strip of material to the exposed edges of panels (typically made of plywood, MDF, or particleboard) to cover and protect the raw edges and give a finished, aesthetically pleasing look. It also improves durability, moisture resistance, and overall appearance.",
      image: product1,
      alt: "Premium Edge Banding",
      features: ["High durability", "Easy installation", "Premium finish"],
      href: "/products/edge-banding",
    },
    {
      id: 2,
      name: "U-Profile",
      description:
        "Edge Expert U-Profile is a high-quality edge finishing solution designed to provide both protection and an elegant finish to the exposed edges of panels, boards, and furniture components. This U-shaped profile securely grips the edge of a panel, enhancing both appearance and durability without the need for adhesives or complex application methods.",
      image: product2,
      alt: "Professional Edge System",
      features: ["U-Shaped Design", "Tool-Free Installation", "Smooth Finish"],
      href: "/products/u-profile",
    },
    {
      id: 3,
      name: "Edge Stone Tile",
      description:
        "PVC marble tile is usually used to decorate living rooms, bedrooms, halls, and even dining rooms in homes. They can make walls look like marble without the weight and cost of real marble. In commercial spaces such as offices, restaurants, and stores, these sheets can make any room look elegant and professional.",
      image: product3,
      alt: "EdgeMaster Pro",
      features: ["Realistic Marble Appearance", "Lightweight & Durable", "Waterproof & Termite-Proof"],
      href: '/products/edge-stone-tile'
    },
    {
      id: 4,
      name: "Edge Panel",
      description:
        "Transform your space with our exquisite collection of Wall Panels – the perfect blend of elegance, functionality, and modern design. Whether you're enhancing a home interior or designing a commercial space, our wall panels offer a stylish and practical solution to elevate any room.",
      image: product4,
      alt: "Premium Edge Banding",
      features: ["Modern Aesthetic Design", "Easy installation", "Premium finish"],
      href: '/products/edge-panel'
    },
    {
      id: 5,
      name: "Edge Bander & Saw Machine",
      description:
        "An Edge Bander is a specialized woodworking machine designed to apply edge banding materials—such as PVC, ABS, wood veneer, or melamine—onto the exposed edges of wooden panels like MDF, plywood, and particleboard. It enhances both the aesthetic appeal and durability of the final product.",
      image: product5,
      alt: "Professional Edge System",
      features: ["Automatic Feeding System", "End Trimming & Flush Trimming", "Buffing & Polishing Units"],
      href: '/products/machines'
    },
    {
      id: 6,
      name: "Edge Magic and Fixer",
      description:
        "Edge Magic is a high-performance liquid adhesive specially formulated for bonding PVC edge bands, acrylic strips, and laminate trims to MDF, particle board, and other panel surfaces. With its strong initial tack and fast drying formula, Edge Magic ensures a secure, long-lasting hold without the need for clamps or nails.",
      image: product6,
      alt: "EdgeMaster Pro",
      features: ["Smooth application", "Heat and moisture-resistant", "Waterproof & Termite-Proof"],
      href: '/products/magic-fixer'
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[35vh] md:h-[70vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={OurProducts}
          alt="Edge Expert Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center z-20">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Edge Expert Products
          </motion.h1>
        </div>
      </motion.div>

      {/* Product List Section */}
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col gap-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
            >
              {/* Product Image */}
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg transition-all duration-300"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                    filter: "brightness(1.1)",
                  }}
                />
              </motion.div>

              {/* Product Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <motion.h2
                  className="text-xl sm:text-2xl font-bold mb-3"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.name}
                </motion.h2>

                <motion.p
                  className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {product.description}
                </motion.p>

                <motion.ul
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow w-fit self-start hover:bg-blue-700 transition-colors"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#2563eb",
                    boxShadow:
                      "0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -2px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <li>
                    <NavLink
                    to={product.href}
                    >
                      See More
                    </NavLink>
                  </li>
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}