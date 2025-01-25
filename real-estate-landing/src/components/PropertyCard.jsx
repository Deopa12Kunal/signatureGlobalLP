import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.price}</p>
        <p className="text-sm text-gray-500 mb-4">{property.features}</p>
        <a
          href={property.link}
          className="block w-full bg-black text-white text-center py-2 rounded hover:bg-opacity-90"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;