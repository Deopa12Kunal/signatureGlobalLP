import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import whatsapp from "../assets/images/icons/whatsapp.png";

const WhatsAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2"
      >
        <X size={16} />
      </button>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-green-600"
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-6 h-6"
        />
        <span>Contact Us on WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppPopup;