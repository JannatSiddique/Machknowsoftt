"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SquareSection = () => {
  const squares = [
    {
      src: "/heximg/bulb.png",
      alt: "growth",
      title: "Innovative Growth Solutions",
      description:
        "At Machknowsoft, we prioritize innovation to deliver forward-thinking solutions tailored to your business needs.",
    },
    {
      src: "/heximg/handshake.png",
      alt: "customer",
      title: "Customer-Centric Approach",
      description:
        "We believe in building long-term partnerships, with a customer-first mindset for future-proof business success.",
    },
    {
      src: "/heximg/setting.png",
      alt: "ai-expertise",
      title: "AI-Powered Expertise",
      description:
        "Leveraging AI-driven technology, we craft solutions that enhance decision-making and streamline processes.",
    },
  ];

  const [visibleSquares, setVisibleSquares] = useState(Array(squares.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleSquares((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    });

    const squareElements = document.querySelectorAll(".square");
    squareElements.forEach((square) => observer.observe(square));

    return () => observer.disconnect();
  }, [squares.length]);

  return (
    <section className="text-white py-16 px-6 relative">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
        Why Choose Machknowsoft?
      </h2>

      {/* Centered Grid Layout */}
      <div className="flex flex-col items-center gap-6">
        
        {/* Top Square (Perfectly Centered) */}
        <div
          className={`square border-2 border-yellow-500 rounded-xl p-6 shadow-lg w-[330px] h-[330px] flex flex-col items-center text-center transition-opacity duration-700 ${
            visibleSquares[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Image src={squares[0].src} alt={squares[0].alt} width={80} height={80} className="mt-4 mb-4" />
          <h3 className="text-2xl font-semibold">{squares[0].title}</h3>
          <p className="text-sm text-gray-300 mt-2">{squares[0].description}</p>
        </div>

        {/* Bottom Two Squares (Centered) */}
        <div className="flex justify-center gap-6 w-full">
  {squares.slice(1).map((square, index) => (
    <div
      key={index}
      className="square border-2 border-yellow-500 rounded-xl p-6 shadow-lg w-[330px] h-[330px] flex flex-col items-center text-center opacity-100 translate-y-0 transition-opacity duration-700"
    >
      <Image src={square.src} alt={square.alt} width={80} height={80} className="mt-4 mb-4" />
      <h3 className="text-2xl font-semibold">{square.title}</h3>
      <p className="text-sm text-gray-300 mt-2">{square.description}</p>
    </div>
  ))}
</div>
</div>
    </section>
  );
};

export default SquareSection;
