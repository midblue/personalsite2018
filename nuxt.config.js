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
      {
        hid: 'description',
        name: 'description',
        content: `UX Engineer Jasper Stephenson — projects, experiments, and more.`,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [],
  },
  loading: false, //{ color: '#555' },
  layoutTransition: {
    name: 'page',
  },
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-112989318-1',
      },
    ],
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
  },
  css: ['./assets/main.scss'],
  build: {
    styleResources: {
      scss: './assets/variables.scss',
    },
  },
  generate: {
    dir: 'docs',
    routes: () => [
      ...posts.map(p => `posts/${p}`),
      // '/404',
    ],
  },
}
