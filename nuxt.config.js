const posts = [
  ...require('./static/writingorder'), 
  ...require('./static/projectorder'),
]
module.exports = {
  head: {
    titleTemplate: '%s – Jasper Stephenson',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `Jasper Stephenson's personal site for projects, breakdowns, and more.` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [],
  },
  loading: false,//{ color: '#555' },
  layoutTransition: {
    name: 'page',
  },
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-112989318-1'
    }]
  ],
  css: ['./assets/main.scss'],
  build: {
    post: [ 'postPlugins', ],
    styleResources: {
      scss: './assets/variables.scss',
    },
  },
  generate: {
    dir: 'docs',
    routes: () => [
      ...posts.map(p => `posts/${p}`),
      // '/404',
    ]
  },
}
