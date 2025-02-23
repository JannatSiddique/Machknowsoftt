"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      src: "/cards/script.png",
      alt: "script",
      title: "Website Development",
      description:
        "Custom websites with a focus on user experience and scalability.",
    },
    {
      src: "/cards/mobapp.png",
      alt: "mobapp",
      title: "Mobile App Development",
      description:
        "Intuitive and efficient mobile applications built to fit business needs.",
    },
    {
      src: "/cards/Ai.png",
      alt: "ai",
      title: "ChatGPT and AI Solutions",
      description:
        "AI-driven virtual assistants and chatbots designed for customer service and workflow automation.",
    },
    {
      src: "/cards/teamout.png",
      alt: "team",
      title: "Team Outsourcing",
      description:
        "Providing dedicated teams of software developers and AI experts for your projects.",
    },
    {
      src: "/cards/api.png",
      alt: "api",
      title: "Cloud-Based Solutions & API Integration",
      description:
        "Robust cloud infrastructures and APIs for seamless digital transformation.",
    },
    {
      src: "/cards/techsupport.png",
      alt: "tech",
      title: "Technical Support & Digital Transformation",
      description:
        "Assistance with the latest technologies, including Elasticsearch and cloud integration.",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(Array(cards.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    });

    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [cards.length]);

  return (
    <div>
      <div  className="text-center mt-40 animate-move-up">
        <h2 className="text-7xl font-semibold text-[#FBBF24] mb-4">What we give</h2>
        <h1 className="text-7xl font-semibold text-white mb-32">Core Products & Services</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`card border rounded-2xl p-6 shadow-lg w-[420px] h-[430px] flex flex-col items-start text-left hover:shadow-xl transition-shadow duration-300 outline outline-1 outline-[#FBBF24] ${visibleCards[index] ? 'animate-move-up' : ''}`}
          >
            {/* Align image to left */}
            <div className="flex justify-start w-full ml-6 mb-10 mt-6">
              <Image
                src={item.src}
                alt={item.alt}
                width={80}
                height={50}
                className="object-cover rounded-lg"
              />
            </div>

            
            <h3 className="text-4xl font-semibold text-white ml-4 mb-4 text-left">
              {item.title}
            </h3>
            <p className="text-white leading-relaxed font-normal ml-4 text-lg text-left">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
