import React from "react";
// import {FiSearch} from 'react-icons/fi`'
import { BiSearchAlt2 } from "react-icons/bi";
const SearchBox = () => {
  const handleFormSubmit = () => {};
  return (
    <div className="absolute z-30 showdow-md bg-dark-lighten rounded-full left-6 right-6 top-7">
      <form className="relative" onSubmit={handleFormSubmit}>
        <button className="absolute top-1/2 left-5 -translate-y-2 text-gray-500">
          <BiSearchAlt2
            className="cursor-pointer hover:text-black dark:hover:text-white transition duration-300"
            size={20}
          />
        </button>
        <input
          className="w-full rounded-3xl pl-14 pr-7 border-[1px] dark:bg-dark-theme dark:border-gray-500 outline-none py-3 placeholder-gray-500 text-black dark:text-white"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default SearchBox;
