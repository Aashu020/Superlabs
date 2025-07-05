import React, { useState } from 'react';
import customImage from '../assets/image/custom.png';
import advImage from '../assets/image/adv.png';
import dataImage from '../assets/image/data.png';
import lastImage from '../assets/image/last.png';

const Content = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Set up a store that showcases your brand",
      description: "Differentiate yourself from the competition with a full store dedicated to your products– no coding or design skills necessary!",
      activeMenuItem: "Custom storefront",
      img: customImage
    },
    {
      id: 2,
      title: "Increase exposure by up to 120% with a suite of smart advertising tools.",
      description: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
      activeMenuItem: "Advertising tools",
      img: advImage
    },
    {
      id: 3,
      title: "Make data-driven decisions with comprehensive analytics",
      description: "Track your performance, understand customer behavior, and optimize your strategies with detailed insights and reporting tools.",
      activeMenuItem: "Data and analytics",
      img: dataImage
    },
    {
      id: 4,
      title: "Provide exceptional customer support at scale",
      description: "Build trust and loyalty with integrated support tools that help you respond quickly and efficiently to customer inquiries.",
      activeMenuItem: "Customers support",
      img: lastImage
    }
  ];

  const menuItems = [
    "Custom storefront",
    "Advertising tools", 
    "Data and analytics",
    "Customers support"
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gray-50 py-8 px-4 sm:py-12 md:py-16 lg:py-20 sm:px-6 md:px-8 lg:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
        
          <div className="w-full lg:w-64 xl:w-72 mb-8 lg:mb-0 lg:mr-8 xl:mr-12">
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                    currentSlideData.activeMenuItem === item
                      ? 'bg-white text-red-600 font-semibold border-l-4 border-red-500 shadow-sm'
                      : 'text-gray-700 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 sm:gap-8 xl:gap-12">
            
              <div className="w-full xl:w-1/2">
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8'>
                  <div className='space-y-4 sm:space-y-6 flex-1'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                      {currentSlideData.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                      {currentSlideData.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <img 
                      src={currentSlideData.img} 
                      alt={currentSlideData.activeMenuItem} 
                      className='h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] object-contain'
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Content;