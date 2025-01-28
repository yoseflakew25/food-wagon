import React from "react";

const FoodCard = ({ name, image, restaurant, logo, rating, status }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-56">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <div className="flex items-center mt-2">
        <img src={logo} alt={restaurant} className="w-8 h-8 rounded-full" />
        <p className="ml-2">{restaurant}</p>
      </div>
      <p className="mt-2">Rating: {rating}</p>
      <p className="mt-2">Status: {status}</p>
    </div>
  );
};

export default FoodCard;