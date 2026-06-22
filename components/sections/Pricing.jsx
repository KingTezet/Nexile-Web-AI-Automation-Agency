"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Web Basic",
    price: "Rp 1,5 Jt",
    period: "/proyek",
    desc: "Cocok untuk bisnis lokal dan personal branding yang butuh kehadiran digital.",
    features: [
      "1 Halaman Landing Page",
      "Desain Responsif & Modern",
      "Integrasi Tombol WhatsApp",
      "Bantuan Setup Hosting",
    ],
    popular: false,
  },
  {
    name: "Growth & AI",
    price: "Rp 3,5 Jt",
    period: "/proyek",
    desc: "Solusi lengkap untuk konversi maksimal dan otomatisasi operasional.",
    features: [
      "Hingga 5 Halaman Custom",
      "Integrasi AI Chatbot (n8n)",
      "Performa Lighthouse 100",
      "Dashboard Manajemen Lead",
      "Gratis Domain & Hosting 1 Thn",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "/kesepakatan",
    desc: "Sistem berskala besar dengan arsitektur khusus untuk perusahaan Anda.",
    features: [
      "Pengembangan Web App Penuh",
      "Otomatisasi Workflow (n8n)",
      "Integrasi Payment Gateway",
      "Dedicated Account Manager",
      "Prioritas Support 24/7",
    ],
    popular: false,
  },
];

export default function Pricing() {
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
            Paket Harga
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Investasi Digital Anda
          </h2>
          <p className="mt-4 text-base text-gray-500 sm:text-lg">
            Pilihan paket transparan yang disesuaikan untuk skala dan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-lg ${
                plan.popular
                  ? "border-gray-900 lg:scale-105"
                  : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                  Paling Laris
                </span>
              )}

              <h3 className="text-lg font-semibold tracking-tight text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{plan.desc}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>

              <button
                className={`mt-6 w-full rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                  plan.popular
                    ? "bg-gray-900 text-white"
                    : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                }`}
              >
                Mulai Proyek
              </button>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <Check className="h-3 w-3 text-gray-700" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}