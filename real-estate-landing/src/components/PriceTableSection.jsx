import React from "react";

const PriceTableSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Pricing Details</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-right">Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">Base Price</td>
              <td className="p-4 text-right">₹ 1.47 Cr - ₹ 1.71 Cr</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Maintenance Charges (Monthly)</td>
              <td className="p-4 text-right">₹ 2.5 / Sq.Ft</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">Parking Charges</td>
              <td className="p-4 text-right">₹ 5 Lakhs</td>
            </tr>
            <tr>
              <td className="p-4">Club Membership</td>
              <td className="p-4 text-right">₹ 2 Lakhs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PriceTableSection;
