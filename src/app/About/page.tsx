import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#0A0F1F] text-white mt-16">
      {/* About Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-[60%] w-full ml-40">
          <h2 className="text-6xl md:text-7xl font-semibold mb-6 mt-16">
            About Machknowsoft
          </h2>
          <p className="text-3xl md:text-4xl leading-relaxed text-gray-300">
            Machknowsoft is a leading provider of innovative software and AI-driven solutions. Established during the COVID-19 pandemic in 2019, our company has been pivotal in empowering startups and enterprises with cutting-edge digital tools. From mobile applications to AI-based systems, we specialize in transforming businesses by embracing the latest technology.
          </p>
        </div>

        {/* Left Floating Image */}
        <div className="absolute bottom-0 right-0">
          <Image
            src="/Aboutus/right.png"
            alt="Right Decorative"
            width={250}
            height={100}
          />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="relative py-16 px-6">
  <div className="max-w-[60%] w-full ml-40">
    <h2 className="text-6xl md:text-7xl font-semibold mb-6 mt-16 flex items-center gap-3">
      Mission and Vision
      <Image src="/Aboutus/mv.png" alt="Mission Icon" width={60} height={50} />
    </h2>
    <p className="text-3xl md:text-4xl leading-relaxed text-gray-300">
      At Machknowsoft, our mission is to deliver software solutions that help startups scale and succeed. We envision a future where every company, regardless of size, has access to the most advanced digital infrastructure and AI-powered tools to drive their growth.
    </p>
  </div>
</section>

      {/* Target Audience Section */}
{/* Target Audience Section */}
<section className="relative py-16 px-6">
  <div className="max-w-[60%] w-full ml-40">
    <h2 className="text-6xl md:text-7xl font-semibold mb-6 mt-16 flex items-center gap-3">
      Target Audience
      <Image src="/Aboutus/Wrap.png" alt="Target Icon" width={50} height={50} />
    </h2>
    <p className="text-2xl md:text-xl text-gray-300">
      We specialize in serving
    </p>
  </div>
</section>


      {/* Full-Width Quality Section */}
      <section className="w-full bg-[#1A2238] py-10 px-6 mb-6 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-3xl md:text-3xl font-semibold text-white mb-">
          Startups: 
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
          Assisting early-stage businesses with tailored software solutions.

          </p>
        </div>
      </section>

      {/* Full-Width Customization Section with Styled Background */}
      <section className="w-full bg-[#1A2238] py-14 px-6 mb-6 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-4xl md:text-4xl font-semibold text-white mb-2">
          Legal Service Providers:
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
          Offering digital solutions for efficient legal operations.

          </p>
        </div>
      </section>

      <section className="w-full bg-[#1A2238] py-14 px-6 mb-6 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-4xl md:text-4xl font-semibold text-white mb-2">
          Smart Cities:
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
          Developing AI and automation systems to support urban innovation.
</p>
        </div>
      </section>

      <section className="w-full bg-[#1A2238] py-14 px-6 mb-16 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-4xl md:text-4xl font-semibold text-white mb-2">
          Companies seeking ChatGPT-based solutions:
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
          Building intelligent customer support systems, chatbots, and conversational AI.

</p>
        </div>
      </section>
    
    
      {/* Our Values Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-[70%] w-full ml-40">
          <h2 className="text-6xl md:text-7xl font-semibold mb-6 mt-16">
            Our Values
          </h2>
          <p className="text-2xl md:text-xl text-gray-300">
            As a software development company, Machknowsoft upholds values of innovation, collaboration, and client-centricity. We continuously strive to stay ahead of the technological curve, offering our clients top-tier solutions built on trust and transparency. Our approach emphasizes:
          </p>
        </div>
      </section>

      {/* Full-Width Quality Section */}
      <section className="w-full bg-[#1A2238] py-10 px-6 mb-6 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-3xl md:text-3xl font-semibold text-white mb-">
            Quality:
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
            Delivering solutions that not only meet but exceed client expectations.
          </p>
        </div>
      </section>

      {/* Full-Width Customization Section with Styled Background */}
      <section className="w-full bg-[#1A2238] py-14 px-6 mb-6 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-4xl md:text-4xl font-semibold text-white mb-2">
            Customization:
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
            Ensuring that every product is tailored to the specific needs of businesses.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#1A2238] py-14 px-6 ">
        <div className="max-w-[60%] w-full ml-40">
          <h3 className="text-4xl md:text-4xl font-semibold text-white mb-2">
          Innovation: 
          </h3>
          <p className="text-2xl md:text-xl text-gray-300">
          Utilizing the latest AI, cloud computing, and mobile technologies to provide state-of-the-art services
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
