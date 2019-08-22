[Visit the Traveling Circus of Urbanism here!](https://www.travelingcircusofurbanism.com/)

It makes sense, right? Urbanism is the study of places and the people who live in them, so of course it would have a 'sense of place'. The thing is, though, that much of the current discourse — essays, interviews, event reports — tends to exist in a bubble; just the one report about the one city, or the event series only in the one building, and so on and so forth. What about all the other urbanism-related topics in that city? In that country? In that continent? I was lucky enough to lead the design (ux, interaction, and visual) and full-stack development on a new responsive platform that puts urban narratives and practices in context with one another, globally.

---

![Something]()

[Mariko Sugita](), Traveling Circus of Urbanism's lead writer, is an urbanist. In every city she travels to, she finds stories, interviews, and locations that expose the unique urban fabric of that place. Each of these is inextricably linked to its geographical position, and has relationships and ties to other spaces, districts, and cities around it. In fact, geographic context is what gives an article on urbanism its relevance to the larger discourse. This was the founding concept that our team struck out with to build a new platform for global urban narratives and practices.


## Every Story is Better With Context

![A map of Vancouver with map markers](.jpg)
-- [See it for yourself!](https://www.travelingcircusofurbanism.com/vancouver/)

The one type of diagram that makes the most sense to an urbanist is a map. Everything they do, from planning a city to designing a house to charting migration, happens on a map. We decided to meet urbanists where they already are: we made a huge map. Specifically, a huge map designed to help place each article within the context of all articles in the surrounding area.
(This also has the added benefit of naturally forming a sort of 'unofficial travel guide for urbanists' who might want to visit these areas — all the points of urban interest are mapped!)


## A New Way to Browse

![Zooming to a new location)(.gif) (click into a cluster then into a post)

Of course, if you have a way to _see_ what other locations have posts, of course it needs to be interactive as well! I put a lot of work into making zooming, clustering, hovering, and other microinteractions feel as natural as possible.

![Hovering to highlight a location)(.gif)
-- See it for yourself! https://www.travelingcircusofurbanism.com/yogyakarta/communityarchitecture
There are multiple heavily intertwined discovery paradigms at play here. When a user clicks/taps on the map, the content changes to match. When they hover or click/tap on the content, the map moves and highlights. When they go to an article, the whole map zooms to fit its locations. Wherever the user interacts with the website, the content and map stay right in sync with them, becoming one single experience instead of two side-by-side ones.
This also means that no matter what type of browsing the user feels most comfortable with — clicking on the map, browsing a list, or searching directly — the whole site is accessible and interactive from there.


## Bi-Directional UX

Our writers write in both English and Japanese. They're not developers (obviously), and they need an easy, distraction-free, previewable publishing environment that can handle anything they throw at it. In other words, this project isn't just about the UX of the _reader_; we need to focus just as much on the UX of the _writer_.
We decided against Wordpress or any existing content management platform for various performance, cost, and inflexibility reasons, opting instead to wholly custom-code our own content management system. (It's based on [Nuxt](), for anyone who's curious.)

![One of our writers' workstations](.jpg)
Our system has been developed over more than a year of usage > feedback > revision cycles. It's always evolving to stretch the limit of what our authors can create.
It includes:
- platform-agnostic writing using markdown
- dead-simple map locations and polygons
- fine-grained publishing controls for each language
- live previews
- live, automatic image versioning & scaling
- automatic language-specific SEO for every post


## Transitioning to Print

![TCU Zine Vol.0](.jpg)
We've also recently expanded into making [zines](https://www.travelingcircusofurbanism.com/zine) using some content from the website and some new content. That's enough of a story for its own post, so keep an eye out for it!

---

That's it for now! I'll keep updating this post as Traveling Circus of Urbanism continues to evolve and update — it seems to do so very often.






1. Telling geographical stories in a geographical way
2. How to make browsing feel fun, visual, and exploratory
3. Making posting in two languages be lightweight and flexible

Key posts:
https://www.travelingcircusofurbanism.com/yogyakarta/communityarchitecture
https://www.travelingcircusofurbanism.com/rome/Introduction
https://www.travelingcircusofurbanism.com/arcosanti/arcosanti
https://www.travelingcircusofurbanism.com/montreal/habitat67

## Cheap as Free
Statically generated
Github pages
Keep costs down as the site is getting started
