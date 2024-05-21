import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN,
      lastFMUsername: process.env.LASTFM_USERNAME,
      lastFMApiKey: process.env.LASTFM_API_KEY,
    }
  },
  css: [
    '~/assets/scss/base.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BlackDayz - Developer',
    },
  },
  modules: ['@nuxtjs/i18n', "@nuxt/image"],
  plugins: [
    '~/plugins/bootstrap.client.ts',
    '~/plugins/fontawesome.ts',
    { src: '@/plugins/aos', mode: 'client' }
  ],
  nitro: {
    plugins: [
      '~/server/plugins/sentry.ts',
    ],
  },
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
    defaultLocale: 'de',
    locales: [
      {
        code: 'de',
        iso: 'de',
        name: 'Deutsch',
        file: 'de.json'
      }
    ],
    compilation: {
      escapeHtml: false,
      strictMessage: false
    },
  },
  vite: {
    build: {
      sourcemap: true,
    },
    plugins: [sentryVitePlugin({
      sourcemaps: {
        assets: ['./.output/public', './.output/server'],
        ignore: ['node_modules'],
      },
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: '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',
      telemetry: false,
    })],
  }
})