import React from 'react'
import globe from "../assets/image/seller-banner.png"; // Replace with your actual globe image


const Mainsec = () => {
  return (
    <section className="py-12 md:py-20 bg-cover bg-no-repeat bg-center h-[80vh]"  style={{ backgroundImage: `url(${globe})` }}
>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-[5rem]">
        
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-lg text-gray-700 mb-2">Sell on 1mdm.com</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Reach millions of B2B<br />buyers globally
          </h1>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-700 transition">
              Start selling
            </button>
            <button className="border border-red-500 text-red-500 font-semibold px-6 py-3 rounded-full hover:bg-red-50 transition">
              Chat with consultant
            </button>
          </div>
        </div>


        <div className="md:w-1/2 flex flex-col items-center justify-center relative">
          {/* <img src={globe} alt="Global Network" className="max-w-full w-[400px] md:w-[480px]" /> */}
          

          <div className="text-center md:text-left mt-8 md:mt-0 md:absolute md:right-0 md:top-1/2 md:translate-y-[-50%] space-y-6">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">26,000,000</p>
              <p className="text-gray-600 text-lg">active buyers globally</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">400,000</p>
              <p className="text-gray-600 text-lg">product inquiries daily</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900">200</p>
              <p className="text-gray-600 text-lg">countries and regions represented</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Mainsec

