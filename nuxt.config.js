export default {
   mode: 'universal',
   /*
    ** Headers of the page
    */
   head: {
      title: 'iBox - Welcome to iBox',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description || ''
         }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
   },
   /*
    ** Customize the progress-bar color
    */
   loading: { color: '#fff' },
   /*
    ** Global CSS
    */
   css: [],
   /*
    ** Plugins to load before mounting the App
    */
   plugins: [],
   /*
    ** Nuxt.js dev-modules
    */
   buildModules: [
      '@nuxt/typescript-build',
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      '@nuxtjs/tailwindcss'
   ],
   /*
    ** Nuxt.js modules
    */
   modules: [
      // Doc: https://github.com/nuxt-community/dotenv-module
      '@nuxtjs/dotenv',
      'nuxt-i18n'
   ],
   i18n: {
      baseUrl: 'http://ihealthybox.online',
      seo: true,
      locales: [
         {
            code: 'en',
            iso: 'en-GB',
            name: 'English'
         },
         {
            code: 'es',
            iso: 'es-ES',
            name: 'Spanish'
         }
      ],
      defaultLocale: 'es',
      vueI18n: {
         fallbackLocale: 'es',
         messages: {
            es: require('./locales/es.json'),
            en: require('./locales/en.json')
         }
      }
   },
   /*
    ** Build configuration
    */
   build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {}
   }
};
