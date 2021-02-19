export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    target: 'static',
    titleTemplate: 'Odd Lots',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/credits.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/master.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
    'nuxt-social-meta',
    // https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet'
  ],
  // Only include the layout: https://bootstrap-vue.org/docs#nuxtjs-module
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin' // only include the layout
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // https://github.com/nuxt-community/sitemap-module
  sitemap: {
    hostname: 'https://debutdebut.com' // Domain needs to be set for deployment!
    // gzip: true,
    // exclude: ["/secret", "/admin/**"]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
