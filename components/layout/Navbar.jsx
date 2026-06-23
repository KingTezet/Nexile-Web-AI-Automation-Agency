"use client";

import { motion } from "framer-motion";
import { Play, User, Settings, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  const navLinks = [
    { label: "Beranda", id: "beranda" },
    { label: "Layanan Kami", id: "layanan", icon: true },
    { label: "Portofolio", id: "portofolio" },
    { label: "Paket Harga", id: "paket-harga" },
    { label: "Tech Stack", id: "tech-stack" },
    { label: "Kontak", id: "kontak" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-[#FAFAFA]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <button onClick={() => scrollToSection("beranda")} className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Nexile
          </span>
        </button>

        {/* Center nav links */}
        <nav className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              {link.icon && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-900">
                  <Play className="h-2 w-2 fill-white text-white" />
                </span>
              )}
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => (session ? signOut() : signIn())}
            aria-label={session ? "Sign out" : "Sign in"}
            title={session ? `Signed in as ${session.user?.name || session.user?.email}` : "Sign in"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
          >
            {session ? (
              session.user?.image ? (
                <img
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                <LogOut className="h-4 w-4" />
              )
            ) : (
              <User className="h-4 w-4" />
            )}
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