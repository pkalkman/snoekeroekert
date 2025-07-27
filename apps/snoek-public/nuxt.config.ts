// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    port: 8200,
  },
  components: true,
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    '~/assets/css/main.css'
  ],
})
