"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const storedData = localStorage.getItem("foodData");
    if (storedData) {
      setFoodItems(JSON.parse(storedData)); // Parse and set the food items
    }
  }, []);

  return (
    <div className="mx-32 flex flex-col gap-2 justify-center items-center py-16">
      <h2 className="font-bold text-2xl my-4">Featured Restaurants</h2>
      <div className="grid grid-cols-3 gap-8  justify-center items-center">

      {foodItems.length > 0 ? (
        foodItems.map((item, index) => (
          <FoodCard
            key={index} // Use index as key (consider using a unique identifier if available)
            name={item.name} // Pass the food name to FoodCard
            image={item.image}
            restaurant={item.restaurant}
            logo={item.logo}
            rating={item.rating}
            status={item.status}
          />
        ))
      ) : (
        <p>No food items found. Add some food to see them here!</p>
      )}
            </div>

    </div>
  );
}