import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Outlets from "./Pages/Outlets";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUS";
import Footer from "./components/Footer"; 
import EdgeBanding from "./Pages/EdgeBanding";
import UProfile from "./Pages/UProfile";
import EdgeStone from "./Pages/EdgeStone";
import EdgePanel from "./Pages/EdgePanel";
import BanderSaw from "./Pages/Bander&Saw";
import MagicFixer from "./Pages/EdgeMagicFixer";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/outlets" element={<Outlets />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/products/edge-banding" element={<EdgeBanding />} />
          <Route path="/products/u-profile" element={<UProfile />} />
          <Route path="/products/edge-stone-tile" element={<EdgeStone />} />
          <Route path="/products/edge-panel" element={<EdgePanel />} />
          <Route path="/products/machines" element={<BanderSaw />} />
          <Route path="/products/magic-fixer" element={<MagicFixer />} />
        </Routes>
      </div>

      {/* Optional Footer */}
      <Footer />

      {/* Floating WhatsApp Button - Fixed Position */}
      <a
        href="https://wa.me/923219221400?text=Hi+Edge+Expert+I+am+interested+in+your+services.+Can+we+have+a+meeting?"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button h-16 w-16 fixed bottom-10 right-10 z-50 transition-transform hover:scale-105"
      >
        <img
          src=" https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg "
          alt="Chat on WhatsApp"
          className="h-full w-full object-contain"
        />
      </a>
    </div>
  );
}

export default App;