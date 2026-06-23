"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fanCards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    rotate: -22,
    x: -260,
    y: 30,
    z: 1,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&q=80",
    rotate: -11,
    x: -135,
    y: 8,
    z: 2,
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    rotate: 0,
    x: 0,
    y: 0,
    z: 3,
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    rotate: 11,
    x: 135,
    y: 8,
    z: 2,
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    rotate: 22,
    x: 260,
    y: 30,
    z: 1,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, rotate: 0, scale: 0.9 },
  show: (custom) => ({
    opacity: 1,
    y: custom.y,
    rotate: custom.rotate,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-[#FAFAFA] px-6 pt-16 pb-32 lg:px-10 lg:pt-20">
      {/* Headline */}
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
        >
          Bangun Website Pintar
          <br />
          & Sistem AI Otomatis.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-base text-gray-500 sm:text-lg"
        >
          Tingkatkan konversi bisnis Anda dengan website super cepat (Next.js) dan efisiensi operasional berbasis AI (n8n).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Konsultasi Gratis
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => document.getElementById("portofolio")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
          >
            Lihat Portofolio
          </button>
        </motion.div>
      </div>

      {/* Fan-out portrait cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto mt-20 flex h-[340px] max-w-5xl items-center justify-center sm:h-[400px] lg:h-[460px]"
      >
        {fanCards.map((card) => (
          <motion.div
            key={card.id}
            custom={card}
            variants={cardVariant}
            style={{
              zIndex: card.z,
              x: card.x,
            }}
            whileHover={{ y: card.y - 16, scale: 1.04, transition: { duration: 0.3 } }}
            className="absolute h-[300px] w-[200px] overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-[360px] sm:w-[240px] lg:h-[420px] lg:w-[280px]"
          >
            <img
              src={card.img}
              alt="Nexile Work"
              className="h-full w-full object-cover"
              draggable={false}
              fetchPriority="high" // <-- TAMBAHKAN INI
            />
          </motion.div>
        ))}

        {/* Floating tag - UI/UX Design (blue) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[8%] top-[12%] z-10 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-lg sm:left-[14%]"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs font-semibold text-gray-800">UI/UX Design</span>
        </motion.div>

        {/* Floating tag - AI Automation (green) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-[8%] bottom-[18%] z-10 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white px-3 py-2 shadow-lg sm:right-[14%]"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold text-gray-800">AI Automation</span>
        </motion.div>
      </motion.div>
    </section>
  );
}