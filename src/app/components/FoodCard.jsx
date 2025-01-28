import React from "react";

const FoodCard = ({ name, image, restaurant, logo, rating, status }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-64 bg-white">
      {/* Food Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      {/* Food Name */}
      <h2 className="text-xl font-bold text-gray-800 truncate">{name}</h2>

      {/* Restaurant Info */}
      <div className="flex items-center mt-3">
        <img
          src={logo}
          alt={restaurant}
          className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
        />
        <p className="ml-2 text-gray-600 font-medium truncate">{restaurant}</p>
      </div>

      {/* Rating and Status */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-yellow-500 text-lg">★</span>
          <p className="ml-1 text-gray-700 font-semibold">{rating}</p>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            status === "open"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;