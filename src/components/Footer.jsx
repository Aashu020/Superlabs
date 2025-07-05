import React from 'react';
import logo from "../assets/image/logo-white.png"

const Footer = () => {
  return (
    <>
    <footer className="bg-black text-white py-8 px-4 sm:py-10 sm:px-6 md:px-8 lg:px-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          
          <div className="col-span-1 sm:col-span-2 md:col-span-1 space-y-3 sm:space-y-4">
            <img src={logo} className="h-8 sm:h-10 md:h-12 w-auto" alt="Logo"/>
            <p className="text-xs sm:text-sm text-gray-400">One Medical Devices Market Place</p>
          </div>
          
         
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Platform</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Sell on iMDM</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Our Story</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-white transition-colors cursor-pointer">Brands</li>
            </ul>
          </div>
          
          
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Press Room</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
              <li className="hover:text-white transition-colors cursor-pointer">Images & B-roll</li>
            </ul>
            
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Policies</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Delivery Information</li>
            </ul>
          </div>
          
         
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Reach Us</h3>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Corporate Information</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

     {/* <div className="mt-8 sm:mt-10 md:mt-12 pt-6 bg-white sm:pt-8 border-t border-gray-800"> */}
     <div className=" text-xs sm:text-sm md:text-xl text-gray-400 py-5">
       <p className="mb-2 sm:mb-0 text-center">© 2025 1MDM ⚡ by SuperLabs</p>
     </div>
   {/* </div> */}
    </>
  );
};

export default Footer;