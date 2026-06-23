"use client";

import { motion } from "framer-motion";
import { Play, User, Settings, LogOut } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  // href disesuaikan dengan ID section yang sudah dibuat
  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan Kami", href: "#layanan", icon: true },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Paket Harga", href: "#paket-harga" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full bg-[#FAFAFA]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo Baru menggunakan SVG */}
        <a 
          href="#beranda" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("beranda")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2"
        >
          <img src="/images/logo-nexile.svg" alt="Nexile Logo" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">
            Nexile
          </span>
        </a>

        {/* Center nav links dengan Fungsi Smooth Scroll */}
        <nav className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.replace("#", "");
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
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
                  referrerPolicy="no-referrer"
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