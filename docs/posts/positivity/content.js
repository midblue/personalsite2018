module.exports = [
	{
		p: [
			`This is a project that was born out of frustration and self-disgust. Born out of feeling dejected, and worthless, and never wanting to come back. It turns out that going to a Super Smash Bros. Melee tournament isn't always as cheery as it sounds.`,
			`No matter how friendly the competition, losing out 0-2 in a tournament sucks. Like, <i>really</i> sucks. Even if you don't consider yourself a competitive player, it's the kind of thing that hits you in a strange spot of pride that you didn't know you had. When I found myself in that position, wanting to run and hide even while I was among friends, all I could think was, "I have to do something about this."`,
			`This is about searching for redemption for all of us down there, bravely grinding away in the loser's side of the bracket. This is a story of positivity, and of gradual growth, and of being proud of what you achieved, even if you lost 0-2. This is one for the underdogs.`
		]
	},
	{
		line: true,
	},
	{
		aside: {
			title: `Wait, Super Smash <strong><i>What!?</i></strong>`,
			text: [
				`<strong>Super Smash Bros. Melee</strong> is a video game released by Nintendo in 2001. It's gained prominence as a 1v1 competitive esport in the years since its release, and you can find tournaments ranging from 10 to 2000 players all over the world. The weekly meetup I go to most often is called Friday Night Melee at Tokyo Game Bar in Akihabara, Tokyo.`,
			]
		}
	},
	{
		p: [
			`Yeah, yeah, that all sounds dramatic, and I've defined a problem. But how the heck do I start to approach this as a project?`,
			`A tool meant to help people absolutely has to be based in understanding of those people's feelings. With that in mind, I decided that I needed to conduct some user interviews, and to do that, I needed to go to the source.`
		]
	},
	{
		h2: `So.`
	},
	{
		p: [
			`So there I was, the guy at the Friday Night Super Smash Brothers meetup conducting user interviews while playing games. It's the only form of user interview I've ever done where I couldn't look my interviewee in the eye; we were always both too focused on the game onscreen.`,
			`This was quite a challenge. On the one hand, I have to do all of the standard interview things like keep the conversation flowing in a direction that gives me useable insights into what I want to know. On the other hand, I have to actively play the game and try to put up a good challenge so they'd feel engaged and want to keep playing. All the while, I have to memorize their answers long enough to scramble for my notepad after the interview and scribble down what I had just heard as reliably as possible. <strong>It was the most engaged and human set of interviews I've ever done.</strong>`
		]
	},
	{
		img: [
			{
				src: `/posts/positivity/5.jpg`,
				alt: `My standard interview setup.`,
			}
		]
	},
	{
		p: [
			`Traditional interviews can sometimes feel like a struggle to inject humanity into the conversation. Here, though, we were communicating through the game on a competitive and fun level, with the push and pull of the game providing a natural flow of tension and resolution to the conversation. It felt like a scene from a movie, where the main characters duel while trading quips. It made for a fantastically engaging set of interviews, and a relaxed and open set of interviewees.`,
			`My interview topics focused on a few key points of interest:`
		]
	},
	{
		ul: [
			`<strong>In the Moment:</strong> What factors shape a player's feelings and actions after a loss? Do those feelings change over time?`,
			`<strong>Pride:</strong> What makes a player feel good about their own performance at a tournament? What makes a win or a loss particularly impactful?`,
			`<strong>Social:</strong> What kinds of rivalries or friendships exist in your relationship with this game? How does it feel to see your peers succeed or fail?`
		]
	},
	{
		h2: `Getting Real`
	},
	{
		p: [
			`Something that stood out in my initial research was when players would tell me things like "well, I lost to him, but he always wins around here. He even beat [a top player] once." I started to think about how I could surface that kind of background information for players who weren't regulars in the scene and might be discouraged to lose to players they have no context around. I also realized that tournament bracket data probably contains a lot of opportunity for tracking a player's growth and achievements over time.`,
			`With that in mind, I started by seeing what kind of data was available from the tournament's online bracket API. I kicked off a github repository called simply "positivity."`
		]
	},
	{
		img: [
			{
				src: `/posts/positivity/a.jpg`,
				alt: `First github commit. Gotta start somewhere.`,
			}
		]
	},
	{
		p: [
			`Without worrying about style, I just wanted to get information on the page to see how it felt to play with point systems and what kind of information I could surface from the data.`
		]
	},
	{
		img: [
			{
				src: `/posts/positivity/b.jpg`,
				alt: `You can see how aesthetics really took a back seat to just putting things on the screen.`,
			}
		]
	},
	{
		aside: {
			title: `// dev side note`,
			text: [
				`The API for our tournament bracket system doesn't have a field for tournament host! I want to automatically find all tournaments from a specific tournament series, so I use Phantom.js to render the tournament page on my Node server so I can parse out the host's username once it gets AJAXed in after page load. Now, the user doesn't have to manually enter every tournament they've ever been in.`,
			]
		}
	},
	{
		h2: `Prototype Testing`
	},
	{
		p: [
			`Laptop in hand, I went back to the meetup on a snowy January evening, ready to run some live demos. It's always amazing how just sharing a prototype or running an interview can kickstart motivation.`
		]
	},
	{
		img: [
			{
				src: `/posts/positivity/i.jpg`,
				alt: `The version of the prototype I showed to players that night.`,
			}
		]
	},
	{
		p: [
			`I heard from a player named Michael, who told me about his emotional experiences as a world-class Yu-Gi-Oh card game player. A guy who goes by "h0p" told me in a clear and calculated tone about his self-improvement notebook that he always writes in after matches.`,
			`Having heard from them and many others about how they engage with competitive situations, I was energized. I sat down and sketched out some key user groups targeted specifically toward differences in competitiveness, rivalries, and feelings post-tournament.`,
			`Those groups are:`
		]
	},
	{
		h3: `The Analyst`
	},
	{
		ul: [
			`doesn't take any player more or less seriously than another`,
			`often studies past performances`,
			`always focuses on personal improvement`,
			`driven by desire for personal ability`,
			`almost like playing alone in a crowd`,
			`not particularly social`,
			`mindful of their emotions and keeps them in check`
		]
	},
	{
		h3: `The Emotional Player`
	},
	{
		ul: [
			`driven mostly by a desire to WIN`,
			`rates players mentally as "should beat" or "tough to beat"`,
			`very disheartened by losses to "should beat" players`,
			`quick to mention past triumphs`,
			`very likely to feel rivalry`,
			`goes with the flow of their emotions`
		]
	},
	{
		h3: `The Community Player`
	},
	{
		ul: [
			`not especially competitive`,
			`it's not <i>cool</i> to be overly competitive`,
			`doesn't see themself as a fantastic player`,
			`goes to tournaments for fun + social reasons & likes to know people there`,
			`very engaged in the community`,
			`quick to mention personal achievements`
		]
	},
	{
		line: true
	},
	{
		p: [
			`I got to work modifying my app to answer each of their needs. For example:`,
			`<strong>The Analyst</strong> focuses on always leveling up. I added a graph to show cumulative points that by nature cannot ever go down. I also grouped points into a few different categories (based on participation versus based on achievements) so analysts can always feel like they're growing in some way.`,
			`<strong>The Emotional Player</strong> feels the impact of their victory or defeat based on the skill of their opponent. To answer this, I highlight when their opponent plays particularly well at a specific event, as well as showing the relative strength of their opponent based on historical data, taking this opportunity to either congratulate the emotional player when they topple a giant, or to console them with the fact that their opponent is actually really good.`,
			`<strong>The Community Player</strong> likes to put themselves alongside the other players in their scene. I  added an easy way for a player to graph any friend or rival's points side-by-side with their own, showing exactly when each player went to different tournaments and how their achievements match up.`,
			`I also threw in a few quality-of-life improvements such as in-app tournament search.`
		]
	},
	{
		img: [
			{
				src: `/posts/positivity/k.jpg`,
				alt: `What things looked like after those adjustments.`,
			}
		]
	},
	{
		aside: {
			title: `// dev side note`,
			text: [
				`<strong>Respect. Your. Data. </strong>`,
				`Every day I continue to learn the value of a solid data hierarchy. If I had started this project thinking more about the structure and flexible usability of my data, my entire development time would have been cut in half, and I would be able to focus better on improvements for the user, rather than on wrangling unwieldy object properties.`,
				`Also, understanding proper object and array referencing as well as how to safely duplicate data can save you hours of headaches. <i>Hours.</i>`,
				`Since I was dealing with multiple APIs at once, I ended up structuring my backend similar to how graphQL works, delegating generic requests to a set of  middleware "concept" handlers (players, tournaments, etc). Those get necessary data from lower-level service-specific handlers that take care of the data fetching, parsing, and (where necessary) server-side rendering.`
			]
		}
	},
	{
		h2: `Cliffhanger!`
	},
	{
		p: [
			`It's a bit of a cliffhanger to leave it here, but that's where this positivity project is at, currently. It remains a work in progress, so keep an eye out for updates coming this year!`,
			`My future goals for it include:`
		]
	},
	{
		ul: [
			`Host it live and make it accessible to anyone`,
			`Add <a href="http://smash.gg" target="_blank">smash.gg</a> bracket compatibility`,
			`Interview multiple users over the span of a few tournaments to see how successful the targeted encouragement has been`,
			`Find new ways of analyzing data to present varying types of encouragement to players depending on their recent success/failure`,
			`Actually put my graphic design degree to work to make it look somewhat less awful`
		]
	},
	{
		p: [
			`Thanks for reading!`
		]
	}
]
