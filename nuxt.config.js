const path = require('path')
const middleware = ['meta']
require('dotenv').config()
if(process.env.NO_LOGIN){
  middleware.push('auth')
}
export default {
  srcDir: 'src/',
  mode: 'spa',
  router: {
    mode: 'hash',
    middleware,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // 
      { rel: 'stylesheet', href: 'https://deepexi-serverless.oss-cn-shenzhen.aliyuncs.com/generatecode-style/reset.css' },
      { rel: 'stylesheet', href: 'https://deepexi-serverless.oss-cn-shenzhen.aliyuncs.com/generatecode-style/global.css' },
      { rel: 'stylesheet', href: 'https://deepexi-serverless.oss-cn-shenzhen.aliyuncs.com/serverless-ui/serverless-ui.css' }
    ],
    script: [
      { src: 'http://serverless-platform.oss-cn-shenzhen.aliyuncs.com/materials/24/cdn/serverless-material.umd.js' },
      { src: 'https://deepexi-serverless.oss-cn-shenzhen.aliyuncs.com/serverless-ui/serverless-ui.umd.min.js' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css',
    '@/static/iconfont/iconfont.css',
    '@/assets/global.less',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/svg',
    '@/plugins/element-ui',
    '@/plugins/serverless-ui',
    '@/plugins/axios',
    '@/plugins/v-charts'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    publicPath: process.env.PUBLIC_PATH || '/_nuxt/',
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      svgRule.exclude = [path.join(__dirname, 'src/static/svg')] 
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [path.join(__dirname, 'src/static/svg')],
        options: {
          symbolId: "[name]"
        }
      })

    }
  }
}
