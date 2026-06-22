# Agency Website — Web & AI Automation

Struktur Next.js 14 (App Router) untuk landing page agency, fokus konversi (lead gen), showcase portfolio, dan pricing.

## Cara Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Status Komponen

| Komponen | Status | Lokasi |
|---|---|---|
| `layout.js` | ✅ Selesai | `app/layout.js` |
| `page.js` | ✅ Selesai (composition) | `app/page.js` |
| Navbar (sticky + blur) | ✅ Selesai | `components/layout/Navbar.jsx` |
| Hero | ✅ Selesai | `components/sections/Hero.jsx` |
| LogoTicker (marquee) | ✅ Selesai | `components/sections/LogoTicker.jsx` |
| BentoPortfolio | ✅ Selesai | `components/sections/BentoPortfolio.jsx` |
| Features | 🚧 Placeholder — tahap berikutnya | `components/sections/Features.jsx` |
| Pricing | 🚧 Placeholder — tahap berikutnya | `components/sections/Pricing.jsx` |
| Workflow | 🚧 Placeholder — tahap berikutnya | `components/sections/Workflow.jsx` |
| FAQ | 🚧 Placeholder — tahap berikutnya | `components/sections/FAQ.jsx` |
| Footer (fat footer) | 🚧 Placeholder — tahap berikutnya | `components/layout/Footer.jsx` |

## Sebelum Production

1. **Ganti placeholder image** di `public/images/portfolio/` dengan screenshot/mockup proyek asli (rekomendasi ukuran 1200×900 untuk item besar, rasio 1:1 untuk item kecil di grid bento).
2. **Update `lib/config.js`**:
   - `whatsappNumber` → nomor WhatsApp bisnis asli (format `62xxxxxxxxxx`, tanpa simbol `+`).
   - `n8nWebhookUrl` → URL webhook n8n produksi (untuk form lead capture nanti).
   - `social` → link Instagram/LinkedIn/GitHub asli.
3. Update `app/layout.js` → `metadataBase` URL ke domain produksi asli.
4. Tambahkan favicon (`app/icon.png` atau `app/favicon.ico`) — Next.js App Router otomatis mendeteksinya.

## Catatan Teknis

- **Font**: Menggunakan `next/font/google` (Inter, Lexend, JetBrains Mono) — otomatis self-hosted, tidak ada request ke Google saat runtime, `font-display: swap` mencegah CLS.
- **Animasi**: Semua transisi Framer Motion hanya memakai `transform` dan `opacity` sesuai requirement Lighthouse — tidak ada animasi pada `width`/`height`/`margin` yang memicu layout shift.
- **Image**: Bento grid pakai `next/image` dengan `fill` + `sizes` yang sudah disesuaikan breakpoint, jadi browser tidak men-download gambar lebih besar dari yang ditampilkan.
- **Aksesibilitas**: Skip-to-content link, `aria-label` di semua tombol ikon, fokus keyboard terlihat jelas (`focus-visible`), `prefers-reduced-motion` dihormati di `globals.css`.
- **Build tervalidasi**: Project ini sudah di-build (`npm run build`) dan lolos tanpa error sebelum dikirim.
