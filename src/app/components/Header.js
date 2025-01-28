"use client";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <nav className="flex flex-wrap items-center py-4 pr-32 pl-56 font-bold bg-white shadow-md max-md:px-5">
        <div className="flex grow shrink gap-3 items-center self-stretch my-auto text-3xl tracking-tighter leading-tight text-orange-500 w-[167px]">
          <div className="self-stretch my-auto">
            Food<span className="text-yellow-500">Wagen</span>
          </div>
        </div>
       
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
      className="flex items-center gap-2 bg-[#FF9A0E] hover:opacity-75 text-white font-semibold py-[0.6rem] px-8 rounded-lg text-md"
      onClick={() => document.getElementById("my_modal_1").showModal()}
        >
         Add Food
        </button>
        <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Add Food</h3>
    

    <form className="flex flex-col gap-4 my-4" >
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          className="border p-3 rounded-lg"
       
          required
        />

<input
          type="text"
          name="rating"
          placeholder="Food Rating"
          className="border p-3 rounded-lg"
       
          required
        />



<input
          type="text"
          name="image"
          placeholder="Food Image Link"
          className="border p-3 rounded-lg"
       
          required
        />

<input
          type="text"
          name="restaurant"
          placeholder="Restaurant Name"
          className="border p-3 rounded-lg"
       
          required
        />


<input
          type="text"
          name="logo"
          placeholder="Restaurant Logo (Link)"
          className="border p-3 rounded-lg"
       
          required
        />

<div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Restaurant Status</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>open</a></li>
    <li><a>closed</a></li>
  </ul>
</div>


        </form>


    
    <div className="modal-action">
      <form method="dialog" className="flex gap-2">
        {/* if there is a button in form, it will close the modal */}

        <button       className="flex items-center gap-2 bg-[#FF9A0E] hover:opacity-75 text-white font-semibold py-[0.6rem] px-8 rounded-lg text-md"
        >Save food</button>
        <button       className="flex items-center gap-2 bg-gray-100  hover:opacity-75 text-gray-500 font-semibold py-[0.6rem] px-8 rounded-lg text-md"
        >Cancel</button>
      </form>
    </div>
  </div>
</dialog>
      </nav>
    </>
  );
}
