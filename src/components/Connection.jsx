import React from 'react';
import bgimg from '../assets/image/footer-banner.png'
const Connection = () => {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgimg})`
        }}
      />
      
      {/* Red Blur Overlay */}
      <div className="absolute inset-0"></div>
      

      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 sm:mb-12 leading-tight">
          Ready to Grow Your Business?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          {/* Start selling button */}
          <button className="bg-white text-red-600 font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]">
            Start selling
          </button>
          
          {/* Chat with consultant button */}
          <button className="border-2 border-white text-white font-semibold px-8 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]">
            Chat with consultant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connection;