import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton';
import MobileMenu from './MobileMenu';
import { IoMenuOutline } from 'react-icons/io5';

const Header = () => {

  return (
    <header className="sticky top-0 z-50 max-clumd:z-0  bg-white shadow-sm ml-[330px] max-cmd:ml-[250px] max-cllmd:ml-[50px] max-csm:ml-[20px] max-csm:mt-[30px]">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-gray-800">Snapshot</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 flex-grow justify-end max-w-2xl ml-4">
          <SearchBar />
          <ProfileButton />
        </div>

      </div>

    </header>
  );
};

export default Header;