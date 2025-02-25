"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 w-full">
        {/* Sidebar for Desktop */}
        <motion.div className="hidden md:block w-64 bg-gray-900 text-white">
          <Sidebar />
        </motion.div>

        {/* Main Content */}
        <main className="flex-1 w-full overflow-y-auto bg-gray-100 p-6 relative">
          {children}
        </main>
      </div>
    </div>
  );
}