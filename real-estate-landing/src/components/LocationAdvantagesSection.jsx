import React from "react";
import { MapPin, Building, Bus, School, Heart } from "lucide-react";

const LocationAdvantagesSection = () => {
  const advantages = [
    {
      icon: MapPin,
      title: "Excellent Connectivity",
      description: "Close to major highways and transportation routes",
    },
    {
      icon: Building,
      title: "Commercial Proximity",
      description: "Near major business and employment centers",
    },
    {
      icon: Bus,
      title: "Public Transportation",
      description: "Multiple bus routes and metro stations nearby",
    },
    {
      icon: School,
      title: "Educational Institutions",
      description: "Reputed schools and colleges in the vicinity",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Multiple hospitals and healthcare centers close by",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Location Advantages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advantages.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 text-primary">
              <Icon size={48} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationAdvantagesSection;
