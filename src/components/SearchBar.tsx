import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="relative min-cllmd:flex-grow max-cllmd:max-w-[178px]">
      <input
        type="text"
        placeholder="Search here..."
        className="w-full py-4 px-4 bg-gray-100 rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
      />
      <IoSearchOutline 
        className="absolute right-3 max-cllmd:hidden top-1/2 transform -translate-y-1/2 text-gray-500 text-xl pointer-events-none"
      />
    </div>
  );
};

export default SearchBar;