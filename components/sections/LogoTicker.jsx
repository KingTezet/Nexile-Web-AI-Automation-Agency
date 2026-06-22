"use client";

import { motion } from "framer-motion";

const clientLogos = [
  "Chogo Coffee",
  "TechInova",
  "Kopi Senja",
  "Nusa Digital",
  "Griya Properti",
  "Cipta Rasa F&B",
  "EduCipta",
  "Bina Karya",
];

export default function LogoTicker() {
  // Duplicate the array so the marquee loops seamlessly
  const loopLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden bg-[#FAFAFA] py-16 lg:py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-sm font-semibold uppercase tracking-wide text-gray-400"
      >
        Dipercaya oleh brand yang berinovasi.
      </motion.p>

      <div className="relative mt-10 w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent sm:w-40" />

        <motion.div
          className="flex w-max items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopLogos.map((name, idx) => (
            <span
              key={idx}
              className="select-none whitespace-nowrap text-2xl font-bold tracking-tight text-gray-300 transition-colors hover:text-gray-500"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}