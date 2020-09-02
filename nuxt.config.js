import dotenv from 'dotenv'
import { favLinks } from './config/head'

const dotEnvConfig = {
  filename: `.env.${process.env.NODE_ENV}`,
  path: `.env.${process.env.NODE_ENV}`,
}

const themeColor = `${process.env.NUXT_ENV_THEME_COLOR}`
dotenv.config(dotEnvConfig)

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  server: {
    port: process.env.NUXT_ENV_PORT,
  },
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.NUXT_ENV_APP_TITLE || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.NUXT_ENV_APP_DESCRIPTION || '',
      },
      {
        name: 'yandex-verification',
        content: process.env.NUXT_ENV_YANDEX_VERIFICATIONS,
      },
      // open graph
      {
        property: 'fb:pages',
        content: process.env.NUXT_ENV_FB_PAGES,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'NEFT',
      },
      {
        property: 'og:locale',
        content: 'ru_RU',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.NUXT_ENV_APP_TITLE || '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.NUXT_ENV_APP_DESCRIPTION || '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/opengraf.png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: 816,
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: 420,
      },
      // Bar Color
      {
        name: 'theme-color',
        content: themeColor,
      },
      {
        name: 'msapplication-navbutton-color',
        content: themeColor,
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: themeColor,
      },
    ],
    link: [
      ...favLinks,
      { rel: 'manifest', href: '/manifest.json' },
      // google font
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600;700&display=swap',
      },
    ],
  },
  styleResources: {
    less: ['~/assets/less/variables.less', '~/assets/less/mixins/mixins.less'],
  },
  loading: { color: themeColor },
  /*
   ** Global CSS
   */
  css: [{ src: '~/assets/less/common.less', lang: 'less' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/ga', mode: 'client' },
    { src: '~/plugins/ym', mode: 'client' },
    { src: '~/plugins/axios' },
    { src: '~/plugins/api' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/dotenv', dotEnvConfig],
    '@nuxtjs/style-resources',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sentry',
    '@nuxtjs/svg',
  ],
  sentry: {
    dsn: process.env.NUXT_ENV_SENTRY_DNS,
    config: {
      environment: process.env.NODE_ENV,
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': {
      target: `${process.env.NUXT_ENV_API_URL}`,
      pathRewrite: { '^/api/': '' },
    },
    '/uploads/': {
      target: `${process.env.NUXT_ENV_API_URL}`,
      pathRewrite: { '^/uploads/': '' },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
