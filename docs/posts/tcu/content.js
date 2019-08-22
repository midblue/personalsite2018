module.exports = [
  {
    p: [
      `<a href="https://www.travelingcircusofurbanism.com/" target="_blank">Visit the Traveling Circus of Urbanism here!</a>`,
    ],
  },
  {
    p: [
      `It makes sense, right? Urbanism is the study of places and the people who live in them, so of course it would have a 'sense of place'. The thing is, though, that much of the current discourse — essays, interviews, event reports — tends to exist in a bubble; just the one report about the one city, or the event series only in the one building, and so on and so forth. What about all the other urbanism-related topics in that city? In that country? In that continent? I was lucky enough to lead the design (ux, interaction, and visual) and full-stack development on a new responsive platform that puts urban narratives and practices in context with one another, globally.`,
    ],
  },
  {
    line: true,
  },
  {
    img: [
      {
        src: `/posts/tcu/1.jpg`,
        alt: `Writer Mariko Sugita speaking at an event for The Guardian in Tokyo`,
      },
    ],
  },
  {
    p: [
      `Traveling Circus of Urbanism's lead writer, Mariko Sugita, is an urbanist. In every city she visits, she finds stories, interviews, and locations that expose the unique urban fabric of that place. Each of these is inextricably linked to its geographical position, and has relationships and ties to other spaces, districts, and cities around it. In fact, geographic context is what gives an article on urbanism its relevance to the larger discourse. This was the founding concept that our team struck out with to build a new platform for global urban narratives and practices.`,
    ],
  },
  {
    h2: `Every Story is Better With Context`,
  },
  {
    img: [
      {
        src: `/posts/tcu/2.png`,
        alt: `One of Traveling Circus of Urbanism's city pages. <a href="https://www.travelingcircusofurbanism.com/mexico city/" target="_blank">See it live!</a>`,
      },
    ],
  },
  {
    p: [
      `The one type of diagram that makes the most sense to an urbanist is a map. Everything they do, from planning a city to designing a house to charting migration, happens on a map. We decided to meet urbanists where they already are: we made a huge map. Specifically, a huge map designed to help place each article within the context of all articles in the surrounding area.`,
    ],
  },
  {
    aside: {
      title: `Bonus!`,
      text: [
        `This layout also has the added benefit of naturally forming a sort of "unofficial travel guide for urbanists" who might want to visit these areas — all the points of urban interest are mapped!`,
      ],
    },
  },
  {
    h2: `A New Way to Browse`,
  },
  {
    mp4: {
      src: `/posts/tcu/3.mp4`,
      alt: `The map is fully interactive, and is linked with the content and navigation. <a href="https://www.travelingcircusofurbanism.com/arcosanti/arcosanti/" target="_blank">Try it!</a>`,
    },
  },
  {
    p: [
      `Of course, if you can <i>see</i> other locations that have urbanist content, of course those locations need to be interactive as well! I put a lot of work into making zooming, clustering, hovering, and other microinteractions feel as natural as possible.`,
    ],
  },
  {
    mp4: {
      src: `/posts/tcu/4.mp4`,
      alt: `Hovering over the name of a location focuses the map on that location. <a href="https://www.travelingcircusofurbanism.com/rome/Introduction/" target="_blank">Try it!</a>`,
    },
  },
  {
    p: [
      `There are multiple heavily intertwined discovery paradigms at play here. When a user clicks/taps on the map, the content changes to match. When they hover or click/tap on the content, the map moves and highlights. When they go to an article, the whole map zooms to fit its locations. Wherever the user interacts with the website, the content and map stay right in sync with them, becoming one single experience instead of two side-by-side ones.`,
      `This also means that no matter what type of browsing the user feels most comfortable with — clicking on the map, browsing a list, or searching directly — the whole site is accessible and interactive from there.`,
    ],
  },
  {
    h2: `Bi-Directional UX`,
  },
  {
    p: [
      `Our writers write in both English and Japanese. They're not developers (obviously), and they need an easy, distraction-free, previewable publishing environment that can handle anything they throw at it. In other words, this project isn't just about the UX of the <i>reader</i>; we need to focus just as much on the UX of the <i>writer</i>.`,
      `We decided against Wordpress or any existing content management platform for various performance, cost, and inflexibility reasons, opting instead to wholly custom-code our own content management system. (It's based on <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>, for anyone who's curious.)`,
    ],
  },
  {
    img: [
      {
        src: `/posts/tcu/5.jpg`,
        alt: `One of our writers' workspace`,
      },
    ],
  },
  {
    p: [
      `Our system has been developed over more than a year of usage > feedback > revision cycles. It's always evolving to stretch the limit of what our authors can create.`,
      `It includes:`,
    ],
  },
  {
    ul: [
      `Platform-agnostic writing using markdown`,
      `Dead-simple map locations and polygons`,
      `Fine-grained publishing controls for each language`,
      `Live previews`,
      `Live, automatic image versioning & scaling`,
      `Automatic language-specific SEO for every post`,
    ],
  },
  {
    h2: `Onward and Upward!`,
  },
  {
    img: [
      {
        src: `/posts/tcu/6.jpg`,
        alt: `Our first zine!`,
      },
    ],
  },
  {
    p: [
      `Traveling Circus of Urbanism continues to be one of the most rewarding projects I've worked on. In addition to continually updating the website, we've also recently expanded into making <a href="https://www.travelingcircusofurbanism.com/zine/" target="_blank">zines!</a> The zine-making process is enough of a story for its own post, though, so I won't address it here too much. Keep an eye out for a post about it!`,
    ],
  },
  {
    line: true,
  },
  {
    p: [
      `That's it for now! I'll keep updating this post as <a href="https://www.travelingcircusofurbanism.com/" target="_blank">Traveling Circus of Urbanism</a> continues to evolve and update.`,
    ],
  },
]
