// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['./assets/main.css'],
  alias: {
    '~': '.'
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://api.jikan.moe/v4'
    }
  },
  imports: {
    dirs: ['stores']
  }
})
