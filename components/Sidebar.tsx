"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, LayoutDashboard, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode with localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

  return (
    <div className="hidden md:flex">
      {/* Sidebar (Hidden on mobile) */}
      <motion.div
        initial={{ width: collapsed ? 64 : 240 }}
        animate={{ width: collapsed ? 64 : 240 }}
        className={`h-screen shadow-md flex flex-col p-4 transition-all 
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-md self-end mb-4 transition 
          ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        {/* Menu Items */}
        <nav className="space-y-4">
          <Link
            href="/"
            className={`flex items-center gap-4 p-2 rounded-md transition
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
          >
            <Home size={20} />
            {!collapsed && <span>Home</span>}
          </Link>
          <Link
            href="/jobs"
            className={`flex items-center gap-4 p-2 rounded-md transition
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
          >
            <Briefcase size={20} />
            {!collapsed && <span>Jobs</span>}
          </Link>
          <Link
            href="/dashboard"
            className={`flex items-center gap-4 p-2 rounded-md transition
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
          >
            <LayoutDashboard size={20} />
            {!collapsed && <span>Dashboard</span>}
          </Link>
        </nav>
      </motion.div>

      {/* Content Area (For Layout Purposes) */}
      <div className="flex-1 p-6">
        {/* Page content will go here */}
      </div>
    </div>
  );
}