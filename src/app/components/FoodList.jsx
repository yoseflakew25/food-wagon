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
    <div className="mx-32 grid grid-cols-3 gap-8">
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
  );
}