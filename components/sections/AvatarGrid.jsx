"use client";

import { motion } from "framer-motion";

// 48 dummy avatar images from Unsplash (random portraits)
const avatarSeeds = [
  "1502685104226-ee32379fefbe",
  "1500648767791-00dcc994a43e",
  "1517841905240-472988babdf9",
  "1544005313-94ddf0286df2",
  "1531746020798-e6953c6e8e04",
  "1438761681033-6461ffad8d80",
  "1506794778202-cad84cf45f1d",
  "1487412720507-e7ab37603c6f",
  "1494790108377-be9c29b29330",
  "1492562080023-ab3db95bfbce",
  "1508214751196-bcfd4ca60f91",
  "1524504388940-b1c1722653e1",
  "1517077304055-6e89abbf09b0",
  "1529626455594-4ff0802cfb7e",
  "1522075469751-3a6694fb2f61",
  "1542909168-82c3e7fdca5c",
  "1546961329-78bef0414d7c",
  "1535713875002-d1d0cf377fde",
  "1573497019940-1c28c88b4f3e",
  "1552058544-f2b08422138a",
  "1539571696357-5a69c17a67c6",
  "1544717297-fa95b6ee9643",
  "1567515004624-219c11d31f2e",
  "1521119989659-a83eee488004",
];

// Build 48 avatars by cycling through seeds with varied crops
const avatars = Array.from({ length: 48 }, (_, i) => {
  const seed = avatarSeeds[i % avatarSeeds.length];
  return `https://images.unsplash.com/photo-${seed}?w=150&h=150&fit=crop&q=80`;
});

export default function AvatarGrid() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-20 lg:px-10 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-block rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 shadow-sm">
          Jejaring Bisnis
        </span>
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Tumbuh dan berkembang bersama kami
        </h2>
        <p className="mt-4 text-base text-gray-500 sm:text-lg">
          Ratusan pemilik bisnis, startup, dan pelaku usaha telah mempercayakan sistem digital mereka kepada Nexile.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.012 },
          },
        }}
        className="mx-auto mt-14 grid max-w-5xl grid-cols-6 gap-3 sm:grid-cols-8 lg:grid-cols-12"
      >
        {avatars.map((src, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.7 },
              show: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.12, zIndex: 10 }}
            className="relative aspect-square overflow-hidden rounded-xl border-2 border-white shadow-sm"
          >
            <img
              src={src}
              alt="Klien dan Partner"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}