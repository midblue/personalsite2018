module.exports = [
	{
		p: [
			`(<a href="https://github.com/midblue/timezone-bot" target="_blank">Check out this project on Github</a>)`,
			`My closest friends from my school days and I keep in touch regularly through <a href="https://discordapp.com" target="_blank">Discord</a>, a Slack-esque chat tool focused around gaming. As we've gotten older, we've begun to spread out all over the world, which that means that many of us live in vastly different time zones. Very often we resort to googling what time it is in Japan, or in Oregon, or in North Carolina. I decided that there had to be a simple way to ease our timezone woes that wouldn't require trips to the browser, or even knowing where a person was currently located.`,
			`Thus, with the goal of helping our group communicate and understand each others' context better, criteria for success emerged.`
		]
	},
	{
		ol: [
			`Provide accurate timezone information for specific users passively, without being asked,`,
			`Allow users to manage their own timezone,`,
			`Work consistently across channels and through server restarts,`,
			`(Most importantly,) Don't be annoying, and`,
			`Stay entirely free to run.`
		]
	},
	{
		h2: `Getting Started`
	},
	{
		p: [
			`Luckily for me, Discord has a handy bot API that lets me hook into incoming messages and send replies (among other things), and there are nice libraries such as <a href="https://discord.js.org/#/" target="_blank">Discord.js</a> that make bot programming easier.`
		]
	},
	{
		img: [{
			src: `/posts/timezonebot/2.png`,
			alt: `Checking up on what time it is for everyone.`,
		}]
	},
	{
		p: [
			`I established some basic commands such as !set <location>, !all/!users , !time <user, city, or country>, and of course, !help. These allow for direct interaction with the bot, but the real core of the bot comes in when users @-message one another and the bot chimes in with the current time in the recipient's location. With those features, I had goals #1 and #2 down.`,
			`For #3, I implemented an in-memory redis store for { locationName: timezone } pairs with a 24-hour expiration time (since timezones can change, think Daylight Savings Time), and a MYSQL database for static coordinate data and user settings.`
		]
	},
	{
		h2: `How to Avoid Being Annoying`
	},
	{
		img: [{
			src: `/posts/timezonebot/3.jpg`,
			alt: `I'm always here, buzzing around your head!`,
			source: `Danilo Batista on Unsplash`,
			link: `https://unsplash.com/photos/ljDl1LoPxRY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
		}]
	},
	{
		p: [
			`Bots in a chat channel can be like flies hanging around the edges of your conversation, often serving more as a distraction than a help. Thus, it was imperative to me that my timezone bot be very careful about when it sends messages and how it chooses to interpret messages from humans. There were two major steps I took to make the bot "just work" without a learning curve, and to minimize unuseful messages.`
		]
	},
	{
		h3: `Timely Messaging`
	},
	{
		p: [
			`There are only certain times when users need to know their chat partner's time zone. For example, they don't need to know it when the user is in a very close-by timezone to them. They also usually don't need to know it when they're already in conversation with that person, or when they're not talking directly to that person. With that in mind, I implemented a system that would interject with a user's timezone ONLY if:`
		]
	},
	{
		ol: [
			`The sender directly messaged the recipient using @`,
			`The sender's timezone is more than 2 hours apart from the targeted recipient`,
			`The recipient has not sent a message and the recipient's timezone has not been announced in the channel in the past hour`
		]
	},
	{
		p: [
			`This created a nice balance of avoiding unnecessary notifications while passively providing context to conversations across countries.`
		]
	},
	{
		img: [{
			src: `/posts/timezonebot/1.png`,
			alt: `A user in Japan messages a user in Raleigh.`,
		}]
	},
	{
		h3: `Input Consciousness`
	},
	{
		p: [
			`Early tests showed that most of my American friends guessed their timezone codes (PDT, JST, etc) incorrectly. On top of that, many of these codes overlap! In response, I removed the need to know the code at all, utilizing the <a href="https://developers.google.com/maps/documentation/geocoding/start" target="_blank">Google Geocoding API</a> to instead get latitude and longitude coordinates from a natural-language place name. Those coordinates then feed into the <a href="https://developers.google.com/maps/documentation/timezone/start" target="_blank">Google Timezone API</a> to give me back the current timezone in the location they specified. The end result is that instead of using "!set PDT" to set a member's timezone to Pacific Daylight Time (who can remember if it's daylight savings time or not anyway??), now simply typing the location's name would successfully set the user to their current time zone, i.e. "!set portland" or "!set vancouver". The same system works for checking times in those locations.`
		]
	},
	{
		img: [{
			src: `/posts/timezonebot/4.png`,
			alt: `An example of setting time zone by semantic name.`,
		}]
	},
	{
		p: [
			`Another common issue found in testing was in checking the time zone of a specific user by name. Some members of our channel have apostrophes and other difficult-to-remember characters in their names, and typing another user's name perfectly proved to be tricky. Thus, I implemented a fuzzy search to find the most similar name to the entered text. For example a user named "It's Me, Phil!" could be found with the command "!user its me phil" or even "!user itz me ph".`
		]
	},
	{
		h2: `Finally: Freedom!`
	},
	{
		p: [
			`As cool as this bot is, I'm not interested in paying big bucks in API fees to make all these timezone checks. To address that, the bot caches all past semantic location checks and location/coordinate pairs to minimize API calls. On a long enough timeline, the bot will encounter very few never-before-seen location requests, dropping API calls for location coordinates to near zero. We also have built-in hard limits before the call volume crosses into paid territory.`,
			`For the server, had I not already had a dedicated server running on hand, I would have looked into using AWS to run my bot, calling simple lambda scripts to handle message events. As it is, I'm lucky enough to have a simple server setup in-house, so that hasn't been an issue.`
		]
	},
	{
		line: true
	},
	{
		img: [{
			src: `/posts/timezonebot/5.jpg`,
			source: `Shalom Mwenesi on Unsplash`,
			link: `https://unsplash.com/photos/107PMV1f1R0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
		}]
	},
	{
		p: [
			`Based on my community's reaction, I'd say that this bot has helped our multinational group communicate better, and managed to add to the conversation without distracting from it.`,
			`The source of this project is publicly available <a href="https://github.com/midblue/timezone-bot" target="_blank">here</a>. Feel free to take a look, or even spin up a copy for your own Discord channel! Thanks for reading!`
		]
	},
]
