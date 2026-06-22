"use client";

import { motion } from "framer-motion";
import { Play, User, Settings } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { label: "Beranda", href: "#" },
    { label: "Layanan Kami", href: "#", icon: true },
    { label: "Portofolio", href: "#" },
    { label: "Paket Harga", href: "#" },
    { label: "Tech Stack", href: "#" },
    { label: "Kontak", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-[#FAFAFA]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Nexile
          </span>
        </a>

        {/* Center nav links */}
        <nav className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.icon && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-900">
                  <Play className="h-2 w-2 fill-white text-white" />
                </span>
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            aria-label="User account"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
          >
            <User className="h-4 w-4" />
          </button>
          <button
            aria-label="Settings"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}