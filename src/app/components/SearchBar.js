import * as React from "react";

export const SearchBar = () => {
  return (
    <form className="flex flex-col justify-center p-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-3 items-center pt-2 pb-2 pl-4 h-full text-lg leading-snug rounded-lg basis-20 bg-neutral-100 min-w-[240px] text-neutral-400 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8dd4e7bc2370678eb4738c0dc27e34195227acf9fcecfc1dc197417e9d9fbf8?placeholderIfAbsent=true&apiKey=da0e5699a0964f23ab3a2091e7f935a3"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
          <label htmlFor="foodSearch" className="sr-only">Food search</label>
          <input
            type="text"
            id="foodSearch"
            placeholder="What do you like to eat today?"
            className="bg-transparent border-none outline-none w-full"
          />
        </div>
        <button 
          type="submit"
          className="flex gap-2.5 justify-center items-center px-12 py-5 my-auto leading-none text-center rounded-lg bg-orange-500 max-md:px-5">
          <span className="self-stretch my-auto text-sm font-black text-white">
            SEARCH
          </span>
          <span className="self-stretch my-auto text-lg font-bold text-white">
            Find Food
          </span>
        </button>
      </div>
    </form>
  );
};