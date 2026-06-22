"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const masonryImages = [
  {
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=500&q=80",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
    span: "row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=500&q=80",
    span: "row-span-2",
  },
];

export default function Showcase() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
            Portofolio
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Portofolio Kami: Dari Landing Page Hingga Sistem Kompleks.
          </h2>

          <p className="mt-6 max-w-md text-base text-gray-500 sm:text-lg">
            Lihat bagaimana kami mentransformasi bisnis lokal dengan website fungsional dan chatbot cerdas. Kami merancang solusi digital yang berfokus pada performa dan efisiensi operasional.
          </p>

          <button className="mt-8 flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]">
            Lihat Studi Kasus
            <ArrowUpRight className="h-4 w-4" />
          </button>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-2xl font-bold tracking-tight text-gray-900">
                100
              </p>
              <p className="text-sm text-gray-500">Lighthouse Score</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold tracking-tight text-gray-900">
                4.9/5
              </p>
              <p className="text-sm text-gray-500">Kepuasan Klien</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Masonry stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-[480px] grid-cols-2 grid-rows-3 gap-4 sm:h-[560px]"
        >
          {masonryImages.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`${item.span} overflow-hidden rounded-3xl shadow-md`}
            >
              <img
                src={item.src}
                alt="Showcase artwork"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}