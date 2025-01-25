import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slide1 from "../assets/images/slider/slide1.webp";
import slide3 from "../assets/images/slider/slide3.webp";
import slide5 from "../assets/images/slider/slide5.jpg";
import slide6 from "../assets/images/slider/slide6.jpg";
import slide7 from "../assets/images/slider/slide7.jpg";
import slide8 from "../assets/images/slider/slide8.jpg";
import slide9 from "../assets/images/slider/slide9.jpg";
import slide10 from "../assets/images/slider/slide10.jpg";



const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide3,slide7,slide5,slide6,slide8,slide9,slide10];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] mt-16 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
