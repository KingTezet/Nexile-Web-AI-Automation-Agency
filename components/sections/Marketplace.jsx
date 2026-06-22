"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

const marketplaceItems = [
  {
    title: "Company Profile Pro",
    artist: "Next.js & Tailwind",
    price: "Rp 2.5 Jt",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&q=80",
  },
  {
    title: "WhatsApp AI Assistant",
    artist: "n8n Automation",
    price: "Rp 1.5 Jt",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
  },
  {
    title: "Landing Page Konversi",
    artist: "UI/UX & Copywriting",
    price: "Rp 1.5 Jt",
    img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=500&q=80",
  },
  {
    title: "Custom Web Dashboard",
    artist: "Sistem Manajemen Kompleks",
    price: "Custom",
    img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=500&q=80",
  },
];

export default function Marketplace() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FAFAFA] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
              Katalog Layanan
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Pilih Solusi Sesuai Kebutuhan Anda.
            </h2>
          </motion.div>

          {/* Carousel nav buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-sm transition-transform hover:scale-105"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {marketplaceItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative flex-shrink-0 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
              style={{ width: "280px" }}
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  draggable={false}
                />
                <button
                  aria-label="Save artwork"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.artist}</p>
                </div>
                <span className="shrink-0 whitespace-nowrap rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-900">
  {item.price}
</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}