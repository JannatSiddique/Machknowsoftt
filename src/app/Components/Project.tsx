"use client"
import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="mb-16"> 
      <h2 className="text-5xl md:text-6xl font-semibold text-white mb-8 mt-32 text-center">
        Key Achievements
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mt-16 mb-16">
        {/* Left Card */}
        <div className="w-[650px] p-6 relative">
          <div className="w-full h-[250px] bg-gray-800 rounded-2xl overflow-hidden flex justify-center items-center mb-6">
            <Image
              src="/cards/project.jpg"
              alt="script"
              width={420}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-left">
              SHWRA.SA – Legal Services Platform for Saudi Arabia
            </h3>
            <p className="text-base md:text-lg text-white text-left">
              Machknowsoft Successfully Collaborated With SHWRA.SA, A Premier Digital Legal 
              Service Platform In Saudi Arabia. SHWRA Provides Legal Consultations And Services.
            </p>
            <a href="#" className="text-[#FBBF24] font-semibold mt-4 inline-block">
              Check Full Project
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-[650px] p-6 mt-32 relative">
          <div className="w-full h-[250px] bg-gray-800 rounded-2xl overflow-hidden flex justify-center items-center mb-6">
            <Image
              src="/cards/project.jpg"
              alt="script"
              width={420}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4 text-left">
              GETDAL.COM – Fintech Solution
            </h3>
            <p className="text-base md:text-lg text-white text-left">
              In Partnership With GETDAL.COM, Machknowsoft Designed And Deployed A Cutting-Edge 
              Fintech Solution That Serves As A Secure Platform For Financial Transactions.
            </p>
            <a href="#" className="text-[#FBBF24] font-semibold mt-4 inline-block">
              Check Full Project
            </a>
          </div>
        </div>
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-12">
        <a href="/projects" className="bg-blue-900 text-white font-light text-xl py-3 px-6 rounded-full shadow-md">
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
