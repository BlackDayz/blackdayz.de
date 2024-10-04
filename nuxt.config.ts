// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-21',
  ssr: false,
  devtools: { enabled: true },
  srcDir: 'src',
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN,
      appwriteConfig: {
        databaseId: process.env.APPWRITE_DATABASE_ID,
      },
    }
  },
  colorMode: {
    preference: 'dark',
  },
  css: [
    '~/assets/scss/base.scss',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: ['@nuxtjs/i18n', '@nuxt/ui',
  '@nuxt/image', '@nuxt/fonts', '@sentry/nuxt/module'],
  plugins: [
    '~/plugins/sentry.ts',
  ],
  extensions: ['ts', 'js'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'de-DE',
    vueI18n: './vue-i18n.options.ts',
    locales: [
      {
        code: 'de-DE',
        language: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.yaml'
      },
    ],
    compilation: {
      escapeHtml: false,
      strictMessage: false
    }
  },
  build: {
    transpile: ['sharp']
  },
  site: {
    url: 'https://www.blackdayz.de',
    name: 'BlackDayz - Full-Stack Entwickler',
    description: 'Webseiten, Stream Tools und Gameshows.',
  },
})