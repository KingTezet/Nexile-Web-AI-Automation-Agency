/**
 * Central site configuration.
 * Keeping this in one file means the WhatsApp number / n8n webhook
 * only needs to be updated in a single place.
 */
export const siteConfig = {
  name: "Nexile",
  tagline: "Web & AI Automation Agency",
  description:
    "Transformasi digital untuk bisnis Anda — website cepat, cerdas, dan menghasilkan konversi.",

  // Replace with the real production webhook before launch
  n8nWebhookUrl: "https://your-n8n-instance.com/webhook/lead-capture",

  // Replace with the real business WhatsApp number, format: 62xxxxxxxxxx
  whatsappNumber: "6281234567890",
  whatsappDefaultMessage:
    "Halo, saya ingin konsultasi gratis terkait pembuatan website / automation untuk bisnis saya.",

  social: {
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/company/yourhandle",
    github: "https://github.com/yourhandle",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
};

/** Builds a wa.me link with a pre-filled message. */
export function getWhatsAppLink(customMessage) {
  const message = encodeURIComponent(
    customMessage || siteConfig.whatsappDefaultMessage
  );
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
}
