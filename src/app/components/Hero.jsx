import * as React from "react";
import { DeliveryOption } from "./DeliveryOption";
import { SearchBar } from "./SearchBar";
import Image from 'next/image';

const deliveryOptions = [
  { icon: "motorcycle", label: "Delivery", isActive: true },
  { icon: "shopping-bag", label: "Pickup", isActive: false }
];

export const Hero = () => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-16 pt-24 bg-yellow-500 max-md:px-5">
      <div className="ml-9 w-full max-w-[1552px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-8 mr-0 max-md:max-w-full">
              <div className="self-start text-2xl leading-tight text-white rounded-2xl max-md:max-w-full">
                Within a few clicks, find meals that are accessible near you
              </div>
              <div className="flex overflow-hidden flex-col mt-8 w-full rounded-2xl shadow-md max-md:max-w-full">
                <div className="flex flex-wrap gap-2 items-start p-6 w-full text-lg leading-none whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full">
                  {deliveryOptions.map((option, index) => (
                    <DeliveryOption
                      key={index}
                      icon={option.icon}
                      label={option.label}
                      isActive={option.isActive}
                    />
                  ))}
                </div>
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd79d7c160f8a2e5f6d63b773d51b0881129835a4f71c2519bd5adb89353cb96?placeholderIfAbsent=true&apiKey=da0e5699a0964f23ab3a2091e7f935a3"
              alt="Food delivery illustration"
              className="object-contain grow w-full aspect-[1.47] max-md:max-w-full"
              width={500}
              height={340}
            />
          </div>
        </div>
      </div>
    </div>
  );
};