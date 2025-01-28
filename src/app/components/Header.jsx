"use client";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    image: "",
    restaurant: "",
    logo: "",
    status: "open",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStatusChange = (status) => {
    setFormData({ ...formData, status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting food data:", formData);
  
    // Fetch existing data from localStorage
    const storedData = localStorage.getItem("foodData");
    let existingData = [];
  
    try {
      // Attempt to parse the stored data
      existingData = JSON.parse(storedData);
      // Ensure existingData is an array
      if (!Array.isArray(existingData)) {
        existingData = []; // Reset to an empty array if it's not an array
      }
    } catch (error) {
      console.error("Error parsing stored data:", error);
      existingData = []; // Reset to an empty array if parsing fails
    }
  
    // Add the new food item to the array
    const updatedData = [...existingData, formData];
  
    // Save the updated array back to localStorage
    localStorage.setItem("foodData", JSON.stringify(updatedData));
  
    toast.success("Food data saved successfully!");
    setFormData({
      name: "",
      rating: "",
      image: "",
      restaurant: "",
      logo: "",
      status: "open",
    });
  
    // Close the modal after submission
    document.getElementById("my_modal_1").close();
  };

  return (
    <>
      <ToastContainer />
      <nav className="flex flex-wrap items-center py-4 pr-32 pl-56 font-bold bg-white shadow-md max-md:px-5">
        <div className="flex grow shrink gap-3 items-center self-stretch my-auto text-3xl tracking-tighter leading-tight text-orange-500 w-[167px]">
          <div className="self-stretch my-auto">
            Food<span className="text-yellow-500">Wagen</span>
          </div>
        </div>

        <button
          className="flex items-center gap-2 bg-[#FF9A0E] hover:opacity-75 text-white font-semibold py-[0.6rem] px-8 rounded-lg text-md"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add Food
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Food</h3>
            <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Food Name"
                className="border p-3 rounded-lg"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="rating"
                placeholder="Food Rating"
                className="border p-3 rounded-lg"
                value={formData.rating}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Food Image Link"
                className="border p-3 rounded-lg"
                value={formData.image}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="restaurant"
                placeholder="Restaurant Name"
                className="border p-3 rounded-lg"
                value={formData.restaurant}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="logo"
                placeholder="Restaurant Logo (Link)"
                className="border p-3 rounded-lg"
                value={formData.logo}
                onChange={handleChange}
                required
              />
              <div className="dropdown dropdown-bottom">
                <div tabIndex={0} role="button" className="btn m-1">
                  Restaurant Status: {formData.status}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <a onClick={() => handleStatusChange("open")}>open</a>
                  </li>
                  <li>
                    <a onClick={() => handleStatusChange("closed")}>closed</a>
                  </li>
                </ul>
              </div>
              <div className="modal-action">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#FF9A0E] hover:opacity-75 text-white font-semibold py-[0.6rem] px-8 rounded-lg text-md"
                >
                  Save food
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-gray-100 hover:opacity-75 text-gray-500 font-semibold py-[0.6rem] px-8 rounded-lg text-md"
                  onClick={() => document.getElementById("my_modal_1").close()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </nav>
    </>
  );
}