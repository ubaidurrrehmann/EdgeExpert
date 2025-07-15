import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
// import logo2 from "../assets/images/EEBackground.jpg";///Users/ubaidrehman/Repositories/edge-expert/src/

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pages = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Outlets", href: "/outlets" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // You can tweak 20 to your liking
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <nav
    //   className={`w-full fixed top-0 z-50 transition-all duration-300 ${
    //     isScrolled ? "backdrop-blur-sm shadow-md border-b border-b-red-600" : "bg-transparent"
    //   }`}
    // >
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 bg-transparent`}
    >
      <div 
        className="=max-w-7xl mx-auto px-4 py-3 flex justify-between items-center"
        
      >
        {/* Logo */}
        <a href="https://www.edgeexpert.com.pk/" className="flex px-4 py-3 items-center space-x-2">
          <img src={logo} alt="Logo" className="=w-14 sm:h-36 h-16 object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex py-5 bg-black/40 rounded-md =px-8 =py-5">
        <ul className="hidden md:flex space-x-6 text-[14px] font-medium text-white tracking-wide uppercase px-8">
          {pages.map((page) => (
            <li key={page.name}>
              <NavLink
                to={page.href}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive ? "underline font-bold text-white hover:text-white bg-white/40 px-3 py-2 rounded-md" : "font-semibold text-slate-300 hover:text-red-600 hover:text-white"
                  }`
                }
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className={`md:hidden px-4 space-y-2 text-[12px] font-medium tracking-wide uppercase bg-gradient-to-r from-[#EAE510] via-[#9FCC8B] to-[#6EBADB] =bg-white flex flex-col justify-center pb-4`}>
          {/* 6EBADB,9FCC8B,EAE510 */}
          {pages.map((page) => (
            <li key={page.name} className="flex border-b border-b-gray-200">
              <NavLink
                to={page.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex pt-3 transition-colors duration-200 h-10 ${
                    isActive ? "text-blue-800" : "text-gray-500 hover:text-blue-600"
                  }`
                }
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}