// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-21',
  ssr: true,
  devtools: { enabled: true },
  srcDir: 'src',
  runtimeConfig: {
    public: {
      sentryDsn: process.env.SENTRY_DSN,
      appwriteConfig: {
        databaseId: process.env.APPWRITE_DATABASE_ID,
      },
      storyblokVersion: process.env.STORYBLOK_VERSION || 'published',
    }
  },
  colorMode: {
    preference: 'dark',
  },
  css: [],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    '@sentry/nuxt/module',
    '@storyblok/nuxt',
  ],
  plugins: [
    '~/plugins/sentry.ts',
  ],
  extensions: ['ts', 'js'],
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
    global: true,
  },
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'no_prefix',
    defaultLocale: 'de-DE',
    vueI18n: './vue-i18n.options.ts',
    locales: [
      {
        code: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.yaml'
      },
      {
        code: 'en-US',
        name: 'English',
        file: 'en-US.yaml'
      }
    ],
    compilation: {
      escapeHtml: false,
      strictMessage: false
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  vite: {
    build: {
      terserOptions: {
        mangle: {
          properties: {
            keep_quoted: true, // Prevent mangling of quoted property names
          },
        },
      },
    }
  },
  build: {
    transpile: ['sharp'],
  },
  // @ts-expect-error 'site' does not exist in type 'NuxtConfig'
  site: {
    url: 'https://www.blackdayz.de',
    name: 'BlackDayz - Full-Stack Entwickler',
    description: 'Webseiten, Stream Tools und Gameshows.',
  },
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
    ]
  },
  storyblok: {
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    devtools: true,
    apiOptions: {
      region: 'eu',
    }
  },
})