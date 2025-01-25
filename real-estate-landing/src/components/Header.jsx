import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/icons/logo.jpeg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md text-gray-800 z-50 transition-all duration-300 ease-in-out">
      <nav className="container mx-auto px-4 py-3 h-full flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Real Estate Logo"
            className="h-16 w-16 rounded-full object-cover transition-transform hover:scale-110"
          />
          <div className="text-2xl font-extrabold tracking-tight text-primary">
            Signature Global
          </div>
        </div>

        <button
          className="md:hidden text-gray-600 hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex space-x-6 items-center">
          {[
            { name: "Home", id: "" },
            { name: "Projects", id: "projects" },
            { name: "About", id: "about" },
            { name: "Contact Us", id: "contact" },
          ].map(({ name, id }) => (
            <a
              key={name}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
            >
              {name}
              <span className="absolute bottom-[-3px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 z-40 pt-24 px-6 space-y-6 animate-fade-in">
          <button
            className="absolute top-6 right-6 text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
          {[
            { name: "Home", id: "" },
            { name: "Projects", id: "projects" },
            { name: "About", id: "about" },
            { name: "Contact Us", id: "contact" },
          ].map(({ name, id }) => (
            <a
              key={name}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="block text-xl text-gray-800 font-semibold py-3 border-b border-gray-200 hover:text-primary transition-colors"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
