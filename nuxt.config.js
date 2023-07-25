module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Chùa Thiên Quang - Thiên Quang Ni Tự',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { 
    color: '#8c4e5d',
    height: '5px'
  },
  css: [
    '@/assets/css/main.css',
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

