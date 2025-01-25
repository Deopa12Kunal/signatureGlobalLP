import React from "react";

const AboutPropertySection = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        About the Property
      </h2>
      <div className="bg-gray-100 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          Signature Global Daxin Vistas represents a pinnacle of modern urban
          living, offering meticulously designed 3 BHK apartments that blend
          comfort, style, and functionality. Located in a prime urban corridor,
          these residences provide an unparalleled living experience with
          world-class amenities and strategic connectivity.
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Modern architectural design</li>
              <li>High-quality construction materials</li>
              <li>Sustainable living features</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Project Vision</h3>
            <p className="text-gray-700">
              To create a harmonious living environment that meets the evolving
              needs of modern urban families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPropertySection;
