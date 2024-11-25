import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="min-h-screen lg:-mt-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to My Tech Blog
            </h1>
            <p className="text-lg md:text-xl opacity-60">
            I built this blog website using Next.js, shadcn/ui, and Sanity.io, combining Next.js for performance, shadcn/ui for sleek components, and Sanity.io for flexible content management.  </p>
            <button className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg 
                             hover:bg-yellow-400 transition duration-300">
              Explore Blog
            </button>
          </div>
          
          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:-mt-10 ">
            <Image 
              src="/hero.png" 
              alt="Man using laptop"
              height={550}
              width={450}
              className="md:m-20 lg:h-[600px] lg:w-[600px] rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
