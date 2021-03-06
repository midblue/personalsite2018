module.exports = [
	{
		p: [
			`Game UX is on the rise!`,
			`In the past ten years, starting as side events to major game industry events such as GDC, we've seen conferences like the Game UX Summit (<a href="http://toronto.ubisoft.com/2017/10/game-ux-summit/" target="_blank">2017</a> | <a href="https://gameuxsummiteurope.com/" target="_blank">2018</a>) and the <a href="http://gamesurconf.com/" target="_blank">Games User Research Conference</a> spring up to advance the discipline of game UX.`,
			`The number of <a href="https://sinclair.work/uxlist/" target="_blank">game companies hiring in UX roles</a> is also climbing sharply.`
		]
	},
	{
		img: [
			{
				src: '/posts/gameux/1.jpg',
				alt: 'The main stage at the 2017 Game UX Summit',
				link: 'http://toronto.ubisoft.com/2017/10/game-ux-summit/'
			}
		]
	},
	{
		p: [
			`But what the heck <i>is</i> game UX? Don't we just apply the same principles we use in web and app contexts to a game and call it a day?`,
			`The answer is: no, not always. I'm writing this post to discuss a few key ways in which it's very different.`,
			`That's is not to say that traditional UX approaches have no place in game UX. In fact, it's crucial to start from a base of existing knowledge when experimenting with new tools and forms of thinking.`,
			`Rather, my goal with this post is to highlight a few of the game-UX-specific methods that I see repeatedly in case studies as well as in my own experience, and to analyze just how they are different from website and app UX design standards.`,
			`Let's get started!`
		]
	},
	{
		h2: 'User Testing'
	},
	{
		p: [
			`First off, let's think about user testing. The biggest variance in user testing a game versus an app or website comes in the size and length of tests. App and website usage is usually goal-based – once the goal is accomplished, the session usually ends. Oppositely, gameplay can last for hours at a time and is often much more exploratory and collaborative. To answer this, test environments expand and test durations lengthen dramatically.`,
			`For example, In <a href="https://www.wired.com/2007/08/ff-halo-2/?currentPage=all" target="_blank">an article</a> about the user testing of Halo 3, it was noted that the Microsoft UX team "...analyzed more than 3,000 hours of Halo 3." This is a gargantuan number compared to most UX tests, but it makes sense when the scope of varied experiences and flows embedded in a major game is taken into consideration. Each individual test session likely lasted a period of several hours, something that's nearly unheard of in the app/website space. We'll get into exactly how analysis can be done on such a huge dataset a bit later.`,
			`As for the scope of a single test, there's a definite trend toward higher concurrent player numbers. For example, Riot Games <a href="https://nexus.leagueoflegends.com/en-us/2018/01/the-human-side-of-emotes/" target="_blank">recently announced</a> a new testing lab where over 60 players can participate in a test at once! `
		]
	},
	{
		img: [
			{
				src: '/posts/gameux/2.jpg',
				alt: `One of six testing rooms in Riot's user testing lab.`,
				link: `https://nexus.leagueoflegends.com/en-us/2018/01/the-human-side-of-emotes/`
			}
		]
	},
	{
		p: [
			`It's also worth noting that Researchers are often testing for different metrics. Where an app might use time to task completion or frequency of mistakes made by users to judge a design's merits, game UX researchers might use different metrics – such as the tone of communication with other players, players' progress at X minute intervals, or even players' heart rates and eye movements – to gain insight into how successful a level or interaction is.`,
			`On that note...`
		]
	},
	{
		h2: `Data Gathering & Analysis`
	},
	{
		p: [
			`Considering the massive amount of data that user testing for games can create, how are these game UX teams possibly analyzing that mountain of information in a useful way?`,
			`The answer lies in custom analytics and built-in data capturing and visualization tools.`,
			`Take a game like Destiny 2, where overworld levels are fairly freeform, and allow players to roam and interact without major restriction. How would useful information be gleaned out of, say, a 3-hour playtest with 15 players?`
		]
	},
	{
		img: [
			{
				src: '/posts/gameux/3.jpg',
				alt: `Bungie's map-overlaid playtest feedback system.`,
				link: 'https://www.youtube.com/watch?v=izZcrG4WqGI'
			}
		]
	},
	{
		p: [
			`Bungie's team took several approaches to data gathering here, but the one I want to highlight here is this: they gave players a 3-button panel with three feelings: 'awesome', 'lost', and 'frustrated'. Testers were instructed to press the accompanying button when they felt that way in the test.`,
			`Bungie's dev team had actually built this button system into the game, such that when a button was pressed, the player's location on the map was recorded as well. Using this data, the test team could make simple heatmaps of player emotions (as seen in the image above), which could be very easily shown and explained to the level design team, who could then rapidly iterate on problem areas in the map.`
		]
	},
	{
		line: true
	},
	{
		p: [
			`These kinds of built-in analytics tools allow UX research teams to parse the information they want, in the format they want. Thus, it follows that UX and development teams are linked on a much deeper level than is often found in web and app UX. If the UX team doesn't seek help from their devs in gathering key data, they will end up spending more time manually parsing raw data and less time understanding it.`,
			`Just for fun, here's another example of built-in analytics aiding in level design.`,
			`When Microsoft's UX team was doing user testing on Halo 3's Jungle level, they got their development team to build in a new system just for data allocation. Each tester's location would be marked on a map by a colored dot at five minute intervals – red for five minutes, pink for ten minutes, and so on. When all playtesters' locations were overlaid onto the same map, it was rapidly apparent where exactly in levels players were getting lost.` 
		]
	},
	{
		img: [
			{
				src: '/posts/gameux/4.jpg',
				alt: `Each playtest outputs one dot of each color at the player's location every five minutes. Eventually, it looks like this.`,
				link: 'https://www.wired.com/2007/08/ff-halo-2/?currentPage=all'
			}
		]
	},
	{
		p: [
			`If, as in the image above, all the dots lined up nicely, it was a hint that the level had a good flow from zone to zone.`
		]
	},
	{
		h2: `Intentional Challenge`
	},
	{
		img: [
			{
				src: '/posts/gameux/5.jpg',
				link: 'https://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758'
			}
		]
	},
	{
		p: [
			`"Don't make me think" is a well-established UX catchphrase.`,
			`<strong>It doesn't apply for game UX.</strong>`,
			`Instead, when designing for games, "don't make me think" becomes "don't waste my effort."`
		]
	},
	{
		img: [
			{
				src: '/posts/gameux/6.jpg',
				alt: 'A puzzle in The Witness.',
				link: 'https://www.gamepur.com/guide/21923-witness-walkthrough-part-10-swamp-submerged-rooms-and-laser-beam.html'
			}
		]
	},
	{
		p: [
			`Obviously the systems, menus, and controls must work intuitively. However, games necessarily involve challenging the player to think, learn, and grow in a way that most web or app projects try to avoid.`,
			`As The Witness' director Jonathon Blow puts it, game designers need to "respect the player as an intelligent person who can figure things out, and who wants to discover things or come to understand more things than they knew at the start of the game."`,
			`Designing for intentional challenge isn't something UX designers are often used to, but designing for the satisfaction of accomplishing a task is. That means that your ability as a UX designer to optimize fun and satisfaction in difficult systems combined with a game designer's eye for mechanics and world-building will come together to make a game that's both satisfying AND challenging to play.`
		]
	},
	{
		line: true
	},
	{
		p: [
			`There are, of course, many other ways that UX adapts for a game environment – such as the scale of prototypes (think Steam's Early Access program) and designing for multiple different user perspectives on the same scene – but that's for another article. (Part 2? Maybe!)`,
			`I also want to take a moment to mention just how few articles and breakdowns about game UX are actually being published. <a href="https://sinclair.work/uxlist/" target="_blank">It's clear</a> that UX is being pursued in game companies worldwide, so let's continue to advance the discipline! I encourage more game UX teams to write about the challenges and solutions they encounter in their work, so that we can all benefit and make better games.`,
			`Thanks for reading!`
		]
	}
]
