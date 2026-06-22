"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const footerColumns = [
  {
    title: "Layanan",
    links: ["Web Development", "AI Automation", "UI/UX Design", "IT Consultant"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Kami", "Portofolio", "Studi Kasus", "Kontak"],
  },
  {
    title: "Sumber Daya",
    links: ["Blog", "Dokumentasi API", "Pusat Bantuan", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 sm:col-span-3 lg:col-span-2"
          >
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-900">
                <span className="h-3 w-3 rounded-full bg-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                Nexile
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Bangun Website Pintar & Sistem AI Otomatis. Transformasi digital untuk bisnis yang siap berskala.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Link columns */}
          {footerColumns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h4 className="text-sm font-semibold tracking-tight text-gray-900">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Nexile. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ in Sumedang, Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}