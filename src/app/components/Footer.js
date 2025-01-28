"use client";
import Image from "next/image";

export default function Footer() {
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
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </nav>
    </>
  );
}
