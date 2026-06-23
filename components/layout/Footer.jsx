"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="kontak" className="border-t border-gray-100 bg-white px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Kolom 1: Brand & Deskripsi */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <a
              href="#beranda"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("beranda")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2"
            >
              {/* Logo SVG Baru di Footer */}
              <img src="/images/logo-nexile.svg" alt="Nexile Logo" className="h-8 w-auto" />
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                Nexile
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Tech-Creative Agency spesialis Frontend Development, UI/UX Design, dan AI Automation.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com/sugihnugrahaa" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/moch-sugih-nugraha" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/KingTezet" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Kolom 2: Layanan Spesifik */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-sm font-semibold tracking-tight text-gray-900">
              Layanan Utama
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <button onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  UI/UX Design
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  Frontend Development
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("layanan")?.scrollIntoView({ behavior: "smooth" })} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  AI Automation (n8n)
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Kolom 3: Info Kontak Asli */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h4 className="text-sm font-semibold tracking-tight text-gray-900">
              Hubungi Saya
            </h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                <a href="mailto:mochsugihnugraha@gmail.com" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  mochsugihnugraha@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 shrink-0" />
                <span className="text-sm text-gray-500">
                  Sumedang, Jawa Barat, Indonesia
                </span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nexile. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ in Sumedang.
          </p>
        </div>
      </div>
    </footer>
  );
}