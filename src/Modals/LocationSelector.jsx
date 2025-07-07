import React from 'react';

const cities = [
  "Mumbai", "Delhi-NCR", "Bengaluru", "Hyderabad", "Ahmedabad",
  "Chandigarh", "Pune", "Chennai", "Kolkata", "Kochi"
];

function LocationSelector({ onClose, onCitySelect }) {
  return (
<div className=' fixed inset-0 z-50 bg-black/40'>
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[800px] bg-white shadow-lg rounded-md p-6 z-50  ">
        <input
          type="text"
          placeholder="Search for your city"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <div className="text-red-500 mb-4  text-center cursor-pointer hover:underline">
          📍 Detect my location
        </div>
        <div className="text-center font-semibold mb-4">Popular Cities</div>
        <div className="grid grid-cols-5 gap-4 text-center">
          {cities.map(city => (
            <div
              key={city}
              onClick={() => onCitySelect(city)}
              className="flex flex-col items-center text-sm cursor-pointer hover:text-red-500 transition"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-full mb-2" /> {/* Replace with icon */}
              {city}
            </div>
          ))}
        </div>
        <div className="text-center text-red-500 mt-6 cursor-pointer hover:underline" onClick={onClose}>
          View All Cities
        </div>
      </div>
</div>
  );
}

export default LocationSelector;
