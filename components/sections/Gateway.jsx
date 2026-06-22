"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1400&q=80",
  "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=1400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1400&q=80",
];

export default function Gateway() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="bg-[#FAFAFA] px-6 py-20 lg:px-10 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-lg"
      >
        <div className="relative h-[460px] w-full sm:h-[520px] lg:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slides[index]}
              alt="Showcase transformasi digital"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </AnimatePresence>

          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Headline */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-12">
            <h2 className="max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Gerbang Menuju Transformasi Digital.
            </h2>

            {/* Slider navigation */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-transform hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Slide indicator dots */}
          <div className="absolute right-8 top-8 flex items-center gap-1.5 sm:right-12 sm:top-12">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}