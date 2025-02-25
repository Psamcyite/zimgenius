"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, User, LogOut } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
import Image from "next/image";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="w-full sticky top-0 bg-white dark:bg-gray-900 shadow-md transition">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          ZimGenius
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/jobs" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Jobs
          </Link>
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Dashboard
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 transition">
            {theme === "dark" ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-600" />}
          </button>

          {/* User Profile */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-2">
              <Image src="/vercel.svg" alt="User" width={32} height={32} className="rounded-full" />
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2"
                >
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <User size={16} />
                    Profile
                  </Link>
                  <button className="flex items-center gap-2 px-4 py-2 w-full text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <LogOut size={16} />
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white dark:bg-gray-900 p-4 shadow-md"
          >
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/jobs" className="block py-2">Jobs</Link>
            <Link href="/dashboard" className="block py-2">Dashboard</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
