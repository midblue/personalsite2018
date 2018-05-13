module.exports = [
	{
		p: [
			`This is a quick post about a fun project I did while working in Tokyo. It's got a lot of moving parts meshing together to make a nice, self-contained utility.`,
			`So what is it? The idea was to make a tool that would track negative tweet activity about the company's games so that we can detect system downtime, slowdowns, or other issues before they become visible in other metrics.`,
			`As the lead engineer, I got to flex my full-stack muscles on this project. I was also in charge of designing the tool's visuals and interactions.`
		]
	},
	{
		h2: `Frontend`
	},
	{
		img: [
			{
				src: `/posts/monitor/1.jpg`,
				alt: `I changed the tracked games for these screenshots to be more generic, but you get the gist.`
			}
		]
	},
	{
		p: [
			`The client for this Twitter Monitor app uses Vue to generate everything, even as far down as the internals of the SVG graphs! That's right, I got to learn how to hand-code SVGs for this one.`,
		]
	},
	{
		img: [
			{
				src: `/posts/monitor/4.jpg`,
				alt: `Clicking on the timeline opens a detailed view of specific tweets for that period.`
			}
		]
	},
	{
		p: [
			`The frontend is responsive, adapting to phones, desktop, even TV screens – the customer service team keeps a giant TV showing this app 24/7.`,
			`The graphs can be dragged back in time, and the live previews run in an infinite ticker.`
		]
	},
	{
		h2: `Backend`
	},
	{
		img: [
			{
				src: `/posts/monitor/3.jpg`,
				alt: `Options for setting tracking levels and for automatic emailing once it crosses that level.`
			}
		]
	},
	{
		p: [
			`A node server has a few scripts running that handle api calls, tweet fetching, parsing, and saving, and a notification script that emails opted-in users once tweets cross a certain level.`,
			`A mongo database stores counts, tweet information, and user settings. A secondary database stores counts and tweet contents long-term for full data dumps. They're separate to ensure maximum database lookup speed for API requests.`,
			`The whole app spins up in three docker containers running on an AWS EC2 instance.`
		]
	},
	{
		h2: `Possibilities`
	},
	{
		p: [
			`I didn't get a chance to take it much farther, but this tool could be modified slightly to be used in so many different ways! It focuses currently on negative terminology only, but imagine a graph of the ratio of positive vs negative terms over time, or comparing feelings about different characters as balance patches are issued for a game.`
		]
	},
	{
		img: [
			{
				src: `/posts/monitor/2.jpg`,
				alt: `Mobile view drops to 1-column, fixed-height.`
			}
		]
	},
	{
		line: true
	},
	{
		p: [
			`That's it for this one. Thanks for reading!`
		]
	}
]
