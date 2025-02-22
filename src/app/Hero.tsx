import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#0A0F1F] min-h-screen animate-move-up overflow-visible relative">
      <main className="flex flex-col md:flex-row items-center w-[85%] mx-auto gap-y-10 md:gap-x-16 pt-16">
        {/* Left Side Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-4">
            Where Innovation Meets Digital Transformation
          </h1>
          <p className="text-white text-3xl mb-6 font-light">
            Leading the transformation of businesses <br /> with tailored software and AI solutions that <br /> drive measurable results
          </p>

          <div className="flex space-x-6">
            <button className="bg-yellow-600 shadow-2xl font-semibold text-black text-3xl px-7 py-7 w-64 mt-8 flex items-center justify-center rounded-full">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 animate-upDown overflow-visible">
          <Image src="/Hero.png" alt="laptop" width={800} height={400} />
        </div>
      </main>

      <div className="bg-[#010F23] py-8 h-25 mt-16 w-full mx-auto">
  <div className="flex items-center space-x-32 ml-32">
    {/* Left Logo (Dal Logo) */}
    <div className="flex items-center">
      <Image
        src="/hero3.png"  
        alt="shwra Logo"
        width={100}
        height={90}      
      />
    </div>


    {/* Right Logo (Shawra Logo) */}
    <div className="flex items-center">
      <Image
        src="/hero2.png"  
        alt="Shawra Logo"
        width={150}
        height={100}
      />
    </div>
  </div>
</div>


        </div>
      
  );
};

export default HeroSection;
