"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { usePathname } from "next/navigation"; 

const Navbar = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const [activeTab, setActiveTab] = useState(""); 

  return (
    <nav className="bg-[#0A0F1F] top-4 left-0 w-full z-50 py-6 ">
      <div className="container mx-auto flex justify-between items-center w-[85%]">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={400} height={50} className="cursor-pointer" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-white text-xl font-medium ml-6">
          <li className={`relative hover:text-yellow-500 ${activeTab === "services" ? "border-b-4 border-yellow-500" : ""}`} onClick={() => setActiveTab("services")}>
            <Link href="/">Services</Link>
          </li>

          <li
            className={`relative hover:text-yellow-500 ${activeTab === "projects" ? "border-b-4 border-yellow-500" : ""}`}
            onClick={() => {
              setActiveTab("projects");
              setActiveSection("projects"); // Set active section to show project image
            }}
          >
            <Link href="/Project">Projects</Link>
          </li>

          <li className={`hover:text-yellow-500 ${activeTab === "about" ? "border-b-4 border-yellow-500" : ""}`} onClick={() => setActiveTab("about")}>
            <Link href="/About">About us</Link>
          </li>
        </ul>

        {/* "Get in Touch" Button */}
        <Link href="/contact">
          <button className="hidden lg:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            <span>Get in touch</span>
            <FiArrowUpRight className="text-xl" />
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-[#020617] shadow-md py-5 px-6 absolute w-full left-0 top-[100%]">
          <ul className="space-y-4 text-white text-lg font-medium">
            <li className="hover:text-yellow-500">
              <Link href="/#services" scroll={false} onClick={() => setMenuOpen(false)}>Services</Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/#projects" scroll={false} onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li className="hover:text-yellow-500">
              <Link href="/about" onClick={() => setMenuOpen(false)}>About us</Link>
            </li>
            <li>
              <Link href="/contact">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get in touch</span>
                  <FiArrowUpRight className="text-xl" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
