"use client";
import { motion } from "framer-motion";

const OurJourney = () => {
  return (
    <motion.section
      className="text-white py-16 px-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-[80%] w-full ml-40">
        <h2 className="text-6xl md:text-7xl font-semibold text-white mb-6 mt-16">
          Our Journey
        </h2>
        <p className="text-3xl md:text-4xl leading-relaxed text-gray-300">
          Starting in 2019, amidst the challenges posed by the global pandemic,
          Machknowsoft quickly adapted to the needs of the digital age. We have
          supported international clients, including startups and large-scale
          enterprises in sectors like legal services and fintech. Our ability to
          deliver AI and cloud-based solutions has positioned us as a go-to
          partner for companies embarking on digital transformation journeys.
        </p>
      </div>
    </motion.section>
  );
};

export default OurJourney;
