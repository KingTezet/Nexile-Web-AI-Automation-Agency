"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Layers,
  Globe2,
  Wallet,
  Users,
  TrendingUp,
  Palette,
  Bot,
  Zap,
  Code2,
  LayoutDashboard
} from "lucide-react";

const visionPoints = [
  {
    icon: Zap,
    title: "Performa Maksimal (Next.js)",
    desc: "Website super cepat dengan skor Lighthouse 100, dioptimasi untuk SEO dan konversi.",
  },
  {
    icon: Bot,
    title: "AI Chatbot & Otomatisasi (n8n)",
    desc: "Sistem cerdas yang melayani pelanggan dan mengurus operasional 24/7 tanpa henti.",
  },
  {
    icon: Layers,
    title: "Dashboard Terpusat",
    desc: "Kelola data pelanggan, reservasi, dan performa bisnis dari satu sistem manajemen ringkas.",
  },
  {
    icon: ShieldCheck,
    title: "Skalabilitas & Keamanan",
    desc: "Arsitektur modern yang aman dan siap menampung lonjakan pengunjung bisnis Anda.",
  },
];

const tabs = {
  FiturWeb: [
    { icon: TrendingUp, label: "SEO Analytics Terintegrasi", size: "lg" },
    { icon: Code2, label: "Clean Code Architecture", size: "sm" },
    { icon: Users, label: "Akses Multi-Admin", size: "sm" },
    { icon: Globe2, label: "Custom Domain & Hosting", size: "md" },
  ],
  FiturAI: [
    { icon: Bot, label: "Auto-Reply WhatsApp Bot", size: "lg" },
    { icon: Sparkles, label: "Kualifikasi Lead Cerdas", size: "sm" },
    { icon: Wallet, label: "Integrasi Payment Gateway", size: "sm" },
    { icon: LayoutDashboard, label: "Sinkronisasi Database", size: "md" },
  ],
};

export default function VisionBento() {
  const [activeTab, setActiveTab] = useState("FiturWeb");

  return (
    <section className="bg-[#FAFAFA] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
            Keunggulan Teknis
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Solusi digital komprehensif untuk skala bisnis apapun.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Icon list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {visionPoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{point.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right: Tabbed bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Tab switcher */}
            <div className="mb-6 inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                    activeTab === tab
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="bento-tab-pill"
                      className="absolute inset-0 rounded-full bg-gray-900"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <span className="relative z-10">{tab === "FiturWeb" ? "Web & Analytics" : "AI & Automation"}</span>
                </button>
              ))}
            </div>

            {/* Bento grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-4"
              >
                {tabs[activeTab].map((item, idx) => {
                  const Icon = item.icon;
                  const isLarge = item.size === "lg";
                  const isMedium = item.size === "md";
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                        isLarge
                          ? "col-span-2 row-span-2 min-h-[220px]"
                          : isMedium
                          ? "col-span-2 min-h-[100px]"
                          : "min-h-[140px]"
                      }`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                        <Icon className="h-5 w-5 text-gray-700" />
                      </span>
                      <p className="mt-4 text-sm font-semibold tracking-tight text-gray-900">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}