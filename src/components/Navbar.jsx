import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import img from "../assets/image/1mdm.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-white text-sm text-gray-700 border-b border-gray-300 px-4 py-2 flex flex-col md:flex-row items-center justify-between">
        <div>
          <span className="text-gray-500 text-sm text-[16px]">
            World's Largest Medical Equipment Market Place
          </span>
        </div>
        <div className="space-x-2 flex justify-start md:justify-end text-[19px] mt-2 md:mt-0 md:text-[17px]">
          <a href="#" className="hover:underline">
            My account
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-col md:flex-row md:items-center justify-between py-4 relative">
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <img src={img} alt="1MDM Logo" className="lg:h-15 lg:w-auto h-10 w-18" />
          </div>

          <div className="md:hidden absolute right-4 top-6">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } mt-4 md:mt-0 flex-col md:flex md:flex-row gap-4 text-sm text-gray-600 justify-center md:justify-end text-[17px]`}
          >
            <a href="#" className="hover:text-red-600">
              About Us
            </a>
            <a href="#" className="hover:text-red-600">
              Our Story
            </a>
            <a href="#" className="hover:text-red-600">
              Sell on 1MDM
            </a>
            <a href="#" className="hover:text-red-600">
              Pricing
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
