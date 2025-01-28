import * as React from "react";

export const DeliveryOption = ({ icon, label, isActive }) => {
  return (
    <div className={`flex gap-2.5 items-start px-6 py-2.5 rounded-lg ${
      isActive ? 'bg-orange-500 bg-opacity-10' : ''
    } max-md:px-5`}>
      <div className={`font-black ${isActive ? 'text-orange-500' : 'text-neutral-500'}`}>
        {icon}
      </div>
      <div className={`font-bold ${isActive ? 'text-orange-500' : 'text-neutral-500'}`}>
        {label}
      </div>
    </div>
  );
};