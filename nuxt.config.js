require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#5C99EA' },
  watch: ['~/.env'],
  css: [{ src: '~/assets/style/global-style/style.scss', lang: 'scss' }],
  router: {
    middleware: ['clearValidationErrors']
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue2-google-maps',
    '~/plugins/vue2-perfect-scrollbar',
    '~/plugins/mixins/validation',
    '~/plugins/mixins/settings',
    '~/plugins/filters/vue2-filters',
    '~/plugins/filters/currency',
    '~/plugins/directives'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/router',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    'bootstrap-vue/nuxt',
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],
  buildModules: ['@nuxtjs/dotenv', '@nuxtjs/moment'],
  axios: {
    proxy: process.env.AXIOS_PROXY === 'true',
    proxyHeaders: true,
    https: process.env.API_HTTPS === 'true',
    progress: true,
    debug: process.env.AXIOS_DEBUG === 'true'
  },
  proxy: [
    (process.env.API_HTTPS === 'true' ? 'https://' : 'http://') +
      process.env.API_HOST +
      ':' +
      process.env.API_PORT +
      process.env.API_PREFIX
  ],
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    extractCSS: true,
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vue: {
    config: {
      productionTip: process.env.NODE_ENV === 'production',
      devtools: process.env.NODE_ENV !== 'production'
    }
  }
}
