import React from "react";
import { Expand, Ruler, BuildingIcon } from "lucide-react";

const OverviewSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Property Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4">
          <Expand className="text-primary" size={40} />
          <div>
            <h3 className="font-semibold text-gray-700">Total Area</h3>
            <p className="text-gray-600">1,330 - 1,550 Sq.Ft</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Ruler className="text-primary" size={40} />
          <div>
            <h3 className="font-semibold text-gray-700">Configuration</h3>
            <p className="text-gray-600">3 BHK Apartments</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BuildingIcon className="text-primary" size={40} />
          <div>
            <h3 className="font-semibold text-gray-700">Project Type</h3>
            <p className="text-gray-600">Residential Apartments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
