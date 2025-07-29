// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: "https://rismandev.site/hitungsaham/",
    head: {
      title:
        "HitungSaham - Kalkulator & Alat Bantu Perhitungan Saham Terlengkap",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          id: "description",
          name: "description",
          content:
            "HitungSaham adalah aplikasi web revolusioner yang menyediakan berbagai kalkulator dan alat bantu untuk semua jenis perhitungan saham. Mulai dari valuasi, analisis rasio, proyeksi dividen, hingga manajemen portofolio. Permudah keputusan investasi Anda dengan HitungSaham.",
        },
        { name: "format-detection", content: "telephone=no" },

        // Open Graph / Facebook Meta Tags
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://www.hitungSaham.com/" }, // Ganti dengan URL domain Anda
        {
          property: "og:title",
          content:
            "HitungSaham - Kalkulator & Alat Bantu Perhitungan Saham Terlengkap",
        },
        {
          property: "og:description",
          content:
            "Permudah keputusan investasi saham Anda dengan HitungSaham. Kalkulator valuasi, rasio keuangan, dividen, dan manajemen portofolio lengkap dalam satu platform.",
        },
        {
          property: "og:image",
          content: "https://www.hitungSaham.com/images/og-image.jpg",
        }, // Ganti dengan URL gambar OG Anda

        // Twitter Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://www.hitungSaham.com/" }, // Ganti dengan URL domain Anda
        {
          name: "twitter:title",
          content:
            "HitungSaham - Kalkulator & Alat Bantu Perhitungan Saham Terlengkap",
        },
        {
          name: "twitter:description",
          content:
            "Alat bantu hitung saham lengkap untuk valuasi, rasio, dividen, dan manajemen portofolio. Tingkatkan analisis investasi Anda dengan HitungSaham.",
        },
        {
          name: "twitter:image",
          content: "https://www.hitungSaham.com/images/twitter-image.jpg",
        }, // Ganti dengan URL gambar Twitter Anda

        // Keywords (optional but can be useful for context)
        {
          name: "keywords",
          content:
            "kalkulator saham, hitung saham, valuasi saham, rasio keuangan, dividen saham, analisis saham, investasi saham, manajemen portofolio, alat bantu saham",
        },

        // Author and Publisher
        { name: "author", content: "Nama Perusahaan Anda / Nama Anda" },
        { name: "publisher", content: "Nama Perusahaan Anda" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  devtools: { enabled: false },
});
