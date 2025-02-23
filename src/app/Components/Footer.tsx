"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-12 text-white mt-36">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 px-6 mb-16">
        
        {/* Logo and Description Section */}
        <div className="flex flex-col items-center lg:items-start mb-12 lg:mr-20 w-full lg:w-1/3 text-center lg:text-left">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={900} 
            height={300}
            className="cursor-pointer w-[90%] sm:w-auto"
          />
          <p className="text-lg text-[#6F7B8D] mt-6">
            MacknowSoft Is A Leading Provider Of Innovative Software <br className="hidden sm:block" />
            And AI-Driven Solutions. We Specialize In Transforming <br className="hidden sm:block" />
            Businesses Through Latest Technology.
          </p>
        </div>

        {/* Right Side Content: Company, Services, Others */}
        <div className="flex flex-wrap justify-center lg:justify-between w-full lg:w-2/3 gap-8">
          {/* Company */}
          <div className="text-center lg:text-left w-1/2 md:w-auto">
            <h3 className="text-3xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-xl text-[#6F7B8D]">
              <li className="hover:text-blue-400 cursor-pointer">About</li>
              <li className="hover:text-blue-400 cursor-pointer">Projects</li>
              <li className="hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center lg:text-left w-1/2 md:w-auto">
            <h3 className="text-3xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-xl text-[#6F7B8D]">
              <li className="hover:text-blue-400 cursor-pointer">Website Development</li>
              <li className="hover:text-blue-400 cursor-pointer">Mobile App Development</li>
              <li className="hover:text-blue-400 cursor-pointer">ChatGPT and AI Solutions</li>
              <li className="hover:text-blue-400 cursor-pointer">Cloud-Based Solutions & API Integration</li>
              <li className="hover:text-blue-400 cursor-pointer">Technical Support & Digital Transformation</li>
            </ul>
          </div>

          {/* Others */}
          <div className="text-center lg:text-left w-1/2 md:w-auto">
            <h3 className="text-3xl font-semibold mb-4">Others</h3>
            <ul className="space-y-3 text-xl text-[#6F7B8D]">
              <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="mt-16 mx-auto w-[90%] h-[2px] bg-gradient-to-r from-[#010B19] via-[#517AB2] to-[#010B19]"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6">
        {/* Copyright */}
        <p className="text-gray-500 text-lg text-center md:text-left">
          © MachKnowSoft LLC. All Rights Reserved
        </p>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
          {["X", "Linkedin", "fb", "insta", "tiktok", "wp"].map((icon, index) => (
            <Image
              key={index}
              src={`/Footer/${icon}.png`}
              alt={`${icon} logo`}
              width={50} 
              height={50}
              className="cursor-pointer transition-transform transform hover:scale-110"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
