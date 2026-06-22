"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    title: "Otomatisasi AI yang Menghemat Waktu",
    desc: "Ubah proses operasional manual menjadi sistem otomatis (n8n) yang berjalan 24/7 tanpa henti.",
    img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=80",
    size: "lg",
  },
  {
    title: "Desain UI/UX Presisi",
    desc: "Rancangan antarmuka yang intuitif dan berfokus pada konversi pengguna.",
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80",
    size: "sm",
  },
  {
    title: "Performa Web Super Cepat",
    desc: "Skor Lighthouse maksimal dengan Next.js untuk pengalaman akses tanpa jeda.",
    img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=500&q=80",
    size: "sm",
  },
  {
    title: "Dari Konsep Menjadi Eksekusi",
    desc: "Kami mendampingi transformasi digital bisnis Anda mulai dari wireframe hingga deployment.",
    img: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=700&q=80",
    size: "lg",
  },
];

export default function StoryCards() {
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
            Metodologi
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Setiap baris kode membawa dampak besar.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stories.map((story, idx) => {
            const isLarge = story.size === "lg";
            return (
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
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg ${
                  isLarge ? "sm:col-span-2" : ""
                }`}
              >
                <div
                  className={`flex flex-col ${
                    isLarge ? "sm:flex-row" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isLarge
                        ? "h-56 w-full sm:h-auto sm:w-1/2"
                        : "h-48 w-full"
                    }`}
                  >
                    <img
                      src={story.img}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      draggable={false}
                    />
                  </div>

                  <div
                    className={`flex flex-1 flex-col justify-between p-7 ${
                      isLarge ? "sm:p-9" : ""
                    }`}
                  >
                    <div>
                      <h3
                        className={`font-bold tracking-tight text-gray-900 ${
                          isLarge ? "text-2xl sm:text-3xl" : "text-xl"
                        }`}
                      >
                        {story.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-500 sm:text-base">
                        {story.desc}
                      </p>
                    </div>

                    <button className="mt-6 flex w-fit items-center gap-1.5 text-sm font-semibold text-gray-900 transition-opacity hover:opacity-60">
                      Lihat detail
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}