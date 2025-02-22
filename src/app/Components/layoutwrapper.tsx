"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <>
      <Navbar setActiveSection={setActiveSection} />
      {children}
    </>
  );
}
