"use client";

import Image from "next/image"; // <--- INI BARIS PENYELAMATNYA
import { motion } from "framer-motion";
import { Trophy, GraduationCap, Code2, Rocket } from "lucide-react";

export default function Founder() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          
          {/* Left: Teks & Informasi SEO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 space-y-8"
          >
            <div>
              <span className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
                Founder & Tech-Creative
              </span>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Moch Sugih Nugraha
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                Saya adalah seorang Tech-Creative yang memadukan desain antarmuka presisi (UI/UX) dengan arsitektur teknis berkinerja tinggi. Memiliki fondasi keilmuan IT yang solid dari Rekayasa Perangkat Lunak (RPL) dan disiplin Informatika di Universitas Sebelas April (UNSAP), saya merancang solusi digital yang berfokus penuh pada konversi bisnis.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                Pendekatan saya sangat <strong>metric-oriented</strong>. Mulai dari mengoptimalkan arsitektur Next.js untuk mencapai performa Lighthouse 100, mengimplementasikan otomatisasi AI (n8n) yang memangkas waktu operasional manual hingga lebih dari 40%, hingga mengeksekusi Growth Strategy terukur untuk berbagai bisnis lokal seperti Chogo Coffee. Setiap baris kode yang ditulis harus memberikan dampak finansial dan efisiensi yang nyata.
              </p>
            </div>

            {/* Badges / Quick Facts */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-50">
                  <GraduationCap className="h-5 w-5 text-gray-700" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Latar Belakang IT</p>
                  <p className="text-sm font-semibold text-gray-900">Informatika & Rekayasa PL</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-50">
                  <Code2 className="h-5 w-5 text-gray-700" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Keahlian Spesifik</p>
                  <p className="text-sm font-semibold text-gray-900">UI/UX & AI Automation</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-50">
                  <Trophy className="h-5 w-5 text-gray-700" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Rekam Jejak</p>
                  <p className="text-sm font-semibold text-gray-900">20+ Eksekusi Proyek Digital</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-50">
                  <Rocket className="h-5 w-5 text-gray-700" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Tech Stack Andalan</p>
                  <p className="text-sm font-semibold text-gray-900">Next.js, Figma, n8n</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Foto Profil */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-4 border-white shadow-xl">
  <Image
    src="/images/sugih.webp"
    alt="Moch Sugih Nugraha - Tech-Creative & Web Developer"
    width={400}
    height={500}
    className="h-full w-full object-cover grayscale transition-transform duration-500 hover:scale-105 hover:grayscale-0"
    draggable={false}
  />
</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}