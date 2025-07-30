import React, { useState } from "react";
import { ContactRound, Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getActiveItemFromPath = (pathname) => {
    switch (pathname) {
      case "/":
        return "home";
      case "/product":
        return "product";
      case "/gallery":
        return "gallery";
      default:
        return "home";
    }
  };

  const activeItem = getActiveItemFromPath(location.pathname);

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "product", label: "Product", href: "/product" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
  ];

  const contact = () => {
    window.location.href = "https://wa.me/628122082237";
  }

  const handleItemClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center shadow-md bg-white text-accent px-4 py-2 relative">
      <img src="/images/laatansa.png" alt="" className="w-24" />

      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.id} className="relative">
            <a
              href={item.href}
              onClick={handleItemClick}
              className={`relative text-primary hover:text-accent transition-colors duration-300 py-2 block group ${
                activeItem === item.id ? "text-accent" : ""
              }`}
            >
              {item.label}

              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>

              {activeItem === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
              )}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleMenu}
        className="md:hidden p-2 focus:outline-none hover:bg-gray-100 rounded-lg transition-all duration-300"
      >
        {isMenuOpen ? (
          <X size={24} className="text-primary" />
        ) : (
          <Menu size={24} className="text-primary" />
        )}
      </button>

      <div className="hidden md:flex items-center">
        <button onClick={contact} className="flex items-center gap-x-2 bg-primary text-white px-6 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
          <ContactRound />
          <span>Contact</span>
        </button>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-white z-50 shadow-lg md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={item.href}
                onClick={handleItemClick}
                className={`relative text-primary hover:text-accent transition-colors duration-300 py-4 px-6 block group ${
                  activeItem === item.id ? "text-accent bg-gray-50" : ""
                }`}
              >
                {item.label}

                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>

                {activeItem === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
                )}
              </a>
            </li>
          ))}

          <li className="p-4">
            <button onClick={contact} className="flex items-center gap-x-2 justify-center w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300">
              <ContactRound />
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
