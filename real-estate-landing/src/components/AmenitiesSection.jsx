import React from "react";
import * as LucideIcons from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { icon: "Dumbbell", name: "Fitness Center", color: "text-red-500" },
    { icon: "Droplet", name: "Swimming Pool", color: "text-blue-500" },
    { icon: "Car", name: "Parking", color: "text-yellow-500" },
    { icon: "Wifi", name: "High-Speed Internet", color: "text-green-500" },
    { icon: "Shield", name: "24/7 Security", color: "text-purple-500" },
    { icon: "Leaf", name: "Landscaped Gardens", color: "text-teal-500" },
    { icon: "Elevator", name: "Elevator", color: "text-pink-500" },
    { icon: "CirclePlay", name: "Kids Play Area", color: "text-orange-500" },
    { icon: "Basketball", name: "Sports Facilities", color: "text-indigo-500" },
  ];

  return (
    <section className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {amenities.map(({ icon, name, color }) => {
          const IconComponent = LucideIcons[icon];
          if (!IconComponent) {
            console.error(`Icon "${icon}" not found in lucide-react`);
            return null;
          }
          return (
            <div key={name} className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-full mb-2">
                <IconComponent
                  className={`${color}`}
                  size={40}
                  aria-label={name}
                />
              </div>
              <p className="text-center text-sm">{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AmenitiesSection;
