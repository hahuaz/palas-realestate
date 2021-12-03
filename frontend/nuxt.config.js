import axios from 'axios'
const strapiUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:1337'
    : process.env.STRAPI_URL

const getDynamicRoutes = async () => {
  const { data } = await axios.get(`${strapiUrl}/konuts`)
  const routes = data.map((konut) => `/ilanlar/${konut.id}`)
  return routes
}

export default {
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    routes: getDynamicRoutes,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Palas Emlak',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Palas Emlak is realestate agency which is serve more than 60 client and located at İstanbul.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/brand.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],

    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/main.css',

    '@splidejs/splide/dist/css/themes/splide-default.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    { src: '~/plugins/splide.client.js' },
    { src: '~/plugins/google-maps.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: strapiUrl,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  tailwindcss: {
    jit: true,
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  env: {},
  loading: '~/components/loading.vue',
  layoutTransition: 'page',
  publicRuntimeConfig: {
    gmaps: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      libraries: undefined,
    },
  },
}
