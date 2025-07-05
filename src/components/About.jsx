import React, { useState, useEffect } from 'react';
import img1 from "../assets/image/img1.jpg"
import img2 from "../assets/image/img2.jpg"
import img3 from "../assets/image/img3.jpg"
import img4 from "../assets/image/img4.jpg"

const SlideComponent = () => {
  const slides = [
    {
      id: 1,
      content: "Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentation and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.",
      img: img1 
    },
    {
      id: 2,
      content: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line",
      img: img2 
    },
    {
      id: 3,
      content: "LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.",
      img: img3 
    },
    {
      id: 4,
      content: "International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA",
      img: img4
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); 
    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className='bg-gray-300 py-[3rem] px- 1rem] md:px-[3rem]'>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-md">
      
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center">
          <span className="text-red-500 text-4xl mr-2">“</span>
          <p className="text-gray-600 text-sm md:text-base lg:text-xl leading-relaxed">
            {slides[currentSlide].content}
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-end">
        <img
          src={slides[currentSlide].img}
          alt={`Slide ${slides[currentSlide].id}`}
          className="rounded-2xl object-cover w-full md:w-64 lg:w-[500px] h-[500px]"
        />
      </div>
    </div>
    </div>
  );
};

export default SlideComponent;