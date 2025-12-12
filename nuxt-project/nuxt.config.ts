// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],
  css: ['./assets/main.css'],
  alias: {
    '~': '.'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml', '/robots.txt']
    }
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
