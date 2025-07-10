import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 bg-gradient-to-r from-[#EAE510] via-[#9FCC8B] to-[#6EBADB]">
      {/* Main Content */}
      <div className="=max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-xs leading-relaxed text-slate-600">
            We deal in latest desings of Edge Store Tile, Edge Bending, PVC U-Trim (U-Profile), Glues and Edge Banders and Saw Machines
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-slate-800 font-semibold text-sm mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/products" className="hover:text-white">Products</NavLink></li>
            <li><NavLink to="/outlets" className="hover:text-white">Outlets</NavLink></li>
            <li><NavLink to="/about-us" className="hover:text-white">About Us</NavLink></li>
            <li><NavLink to="/contact-us" className="hover:text-white">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" font-semibold text-sm mb-4 text-slate-800">Contact Us</h3>
          <p className="text-sm leading-relaxed text-slate-600">
            Plot No K240 & K241, Phase II,<br></br> SITE Superhighway, Karachi
          </p>
          <p className="text-slate-600 mt-2 text-sm">Email: info@edgeexpert.com.pk</p>
          <p className="text-sm text-slate-600">Phone: +92 (213) 641 0300</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-slate-800 font-semibold text-sm mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-slate-600">
            <a href="https://www.facebook.com/edgeexpertofficial" target="_blank" className="hover:text-white"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/edgeexpertofficial" target="_blank" className="hover:text-white"><Instagram size={18} /></a>
            {/* <a href="#" target="_blank" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" target="_blank" className="hover:text-white"><Linkedin size={18} /></a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-xs py-6 bg-gray-900">
        &copy; {new Date().getFullYear()} Edge Expert. All rights reserved.
      </div>
    </footer>
  );
}
