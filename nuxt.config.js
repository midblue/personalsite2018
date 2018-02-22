module.exports = {
  head: {
    titleTemplate: '%s – Jasper Stephenson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=UA-112989318-1' },
      { src: '/ga.js' },
    ],
  },
  loading: { color: '#FFB400' },
  layoutTransition: {
    name: 'page',
  },
  css: ['./assets/main.scss'],
  build: {
    post: [ 'postPlugins', ],
    styleResources: {
      scss: './assets/variables.scss',
    },
  },
}
