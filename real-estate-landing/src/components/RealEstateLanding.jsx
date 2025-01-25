import React from "react";
import Header from "./Header";
import ImageSlider from "./ImageSlider";
import PropertyCard from "./PropertyCard";
import ContactForm from "./ContactForm";
import WhatsAppPopup from "./WhatsAppPopup";
import Footer from "./Footer";
import OverviewSection from "./OverviewSection";
import PriceTableSection from "./PriceTableSection";
import AmenitiesSection from "./AmenitiesSection";
import LocationAdvantagesSection from "./LocationAdvantagesSection";
import AboutPropertySection from "./AboutPropertySection";

import slide1 from "../assets/images/slider/slide1.webp";
import slide3 from "../assets/images/slider/slide3.webp";
import proj3 from "../assets/images/slider/proj3.jpg";

const RealEstateLanding = () => {
  const properties = [
    {
      id: 1,
      title: "Signature Global Daxin Vistas",
      price: "1.47 Cr - 1.71 Cr",
      features: "3039 Units, 3BHK 1330-1550 Sq.Ft",
      image: [slide1],
      link: "https://kprimus.in",
    },
    // ... other properties remain the same
  ];

  return (
    <div className="min-h-screen bg-[#EAEAEA]">
      <Header />
      <ImageSlider />

      <OverviewSection />
      <PriceTableSection />
      <AmenitiesSection />
      <LocationAdvantagesSection />

      {/* Existing Properties Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <AboutPropertySection />

      {/* Existing Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Location</h2>
            <div className="w-full h-64 bg-gray-200 rounded">
              <div className="w-full h-full flex items-center justify-center">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppPopup />
      <Footer />
    </div>
  );
};

export default RealEstateLanding;
