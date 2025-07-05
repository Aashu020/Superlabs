import React from "react";

const Videoplay = () => {
  return (
    <div className="isolate">
      <section className="bg-white py-12 px-4 md:px-10 relative z-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900 leading-snug">
          1mdm.com is a leading ecommerce platform that <br className="hidden md:block" />
          helps SMEs go global
        </h2>

        {/* Video and Text */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
          {/* Video Embed */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="w-full bg-gray-100 rounded-md shadow-md overflow-hidden" style={{aspectRatio: '16/9'}}>
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/TN7iJyc5Uks?si=oXl9eNLLpl8ijG9Q"
                title="1MDM Explorer Lift Installation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Text Info */}
          <div className="w-full md:w-1/2 md:space-y-4 lg:space-y-8 text-gray-700 text-lg flex-shrink-0 lg:my-[3rem]">
            <p>
              Connect with millions of business buyers from around the world.
            </p>
            <p>
              Get the tools and know-how to build a successful ecommerce presence for your business.
            </p>
            <p>
              Pocket more from each sale, with take rates as low as 0% in some cases.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videoplay;