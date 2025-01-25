import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-[#F7E7CE]">
                Home
              </a>
              <a href="#projects" className="block hover:text-[#F7E7CE]">
                Projects
              </a>
              <a href="#about" className="block hover:text-[#F7E7CE]">
                About
              </a>
              <a href="#contact" className="block hover:text-[#F7E7CE]">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                123 Real Estate St, City
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                +1 234 567 890
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={16} />
                info@realestate.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F7E7CE]">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#F7E7CE]">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#F7E7CE]">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#F7E7CE]">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
