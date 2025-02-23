"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ProjectIdeaForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-[#0F172A]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/imgform.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Header Title */}
      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-12 z-10 text-center">
        Have A Project Idea?
      </h2>

    
      <div className="relative z-10 w-[650px] max-w-full bg-[#0F172A] backdrop-blur-md p-6 md:p-10 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label className="text-xl text-gray-300 block mb-2">Full Name*</label>
            <input
              type="text"
              name="name"
              placeholder="Noor Al-Khalifa"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xl text-gray-300 block mb-2">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label className="text-xl text-gray-300 block mb-2">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                placeholder="+966 55 123 4567"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>
          </div>

          {/* Service Required */}
          <div>
            <label className="text-xl text-gray-300 block mb-2">Service Required*</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white text-lg  outline-none"
            >
              <option value="" disabled>Service select</option>
              <option value="web_dev" className="bg-[#0F172A]">Website Development</option>
              <option value="app_dev" className="bg-[#0F172A]">Mobile App Development</option>
              <option value="ai_solution" className="bg-[#0F172A]">AI & Automation</option>
              <option value="marketing" className="bg-[#0F172A]">Digital Marketing</option>
            </select>
          </div>

          {/* Project Details */}
          <div>
            <label className="text-xl text-gray-300 block mb-2">Project Details*</label>
            <textarea
              name="details"
              placeholder="Tell us more about your idea"
              value={formData.details}
              onChange={handleChange}
              required
              className="w-full p-3 bg-transparent border border-gray-600 rounded-md text-white text-lg placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 outline-none h-28"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-4 rounded-md hover:bg-yellow-600 transition duration-300 shadow-md shadow-yellow-500/50 text-lg"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
