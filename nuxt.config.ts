export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  modules: ['@nuxtjs/i18n', '@nuxt/fonts', '@vueuse/nuxt', '@vercel/analytics/nuxt'],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0b0b0d' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      script: [
        {
          // Dark by default; only an explicit "light" choice switches, applied before first paint
          innerHTML:
            "(function(){try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}})()",
          tagPosition: 'head',
        },
      ],
    },
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    baseUrl: 'https://donisamalo.com',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'id', language: 'id-ID', name: 'Indonesia', file: 'id.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      redirectOn: 'root',
    },
  },

  fonts: {
    families: [
      { name: 'Geist', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Geist Mono', provider: 'google', weights: [400, 500] },
      { name: 'Instrument Serif', provider: 'google', weights: [400], styles: ['normal', 'italic'] },
    ],
  },
})
