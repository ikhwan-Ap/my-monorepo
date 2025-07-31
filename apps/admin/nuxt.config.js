export default defineNuxtConfig({
  // Mode rendering
  ssr: false, // Admin biasanya SPA (no SSR)

  // Direktori publik
  app: {
    baseURL: '/', // Bisa diganti jika dipasang di subfolder
    head: {
      title: 'Admin Panel',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt Admin Dashboard' },
      ],
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module' // opsional
  ],

  // Auto import composables
  imports: {
    dirs: ['composables']
  },

  // Runtime Environment
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001/api'
    }
  },

  // Vite config (opsional)
  vite: {
    server: {
      port: 3000
    }
  }
})
