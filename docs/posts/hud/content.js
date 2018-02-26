module.exports = [
	{
		p: [
			`In this post, we'll take a look at the different information that can be communicated through damage indicators, the common styles of indicators we see in modern first-person shooters, and what each of those can mean in terms of a player's experience.`,
			`So why should you care about this? As a game designer, you affect your players' feelings through every decision you make, whether you mean to or not. Understanding the scope of your options, along with the potential feelings that can be created through those options, is crucial to intentionally design the experience of playing your game.`,
			`Good? Good. Let's begin with a few basic definitions.`,
			`<strong>FPS</strong> stands for First-Person Shooter.`,
			`<strong>HUD</strong> is short for Heads-Up Display, or basically the non-game elements that are shown on the player's screen at all times. That usually means things like health, a map, a player's teammates, etc.`,
			`A <strong>damage indicator</strong> is the feedback in a game that appears, often on the HUD, when the player takes damage from an attack.`,
			`Now, let's get into it!`
		]
	},
	{
		h2: `Indicating "You Got Hit!"`
	},
	{
		p: [
			`To start talking about FPS, you've got to look back to where it all began. That's right, I'm talking about classic DOOM. In DOOM, when a player takes damage or picks up a powerup, their entire screen flashes a color to indicate that. This style is where FPS damage indicators began, historically. It doesn't show direction at all, nor does it show the attack's power.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/1.jpg`,
				alt: `A player's screen flashes red when they take damage in DOOM.`,
				source: `"Doom 1 (BFG Edition) - Episode 1" by SilentChaos68`,
				link: `https://youtu.be/nio1jZUaLL0?t=2m24s`
			}
		]
	},
	{
		p: [
			`Almost every modern FPS uses a form of this technique, usually through a screen flash and an accompanying sound.`
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`"You got hit!" is the simplest and most important piece of information that a game can communicate about an attack. Since there is so little information being communicated, there is next to zero mental burden on the player to parse the message being presented to them. Instead, this style of indicator taps into the player's instinctive fight-or-flight reactions, and is a key part of making the player "feel" an attack.`
		]
	},
	{
		h2: `Indicating Attack Direction`
	},
	{
		p: [
			`There are four common categories of direction indicators: screen edge, 2D, 3D, and audio.`
		]
	},
	{
		h3: `Screen Edge Indicators`
	},
	{
		p: [
			`One common approach to showing attack direction is to highlight regions of the screen in the direction of an attack. The general pattern used is of up representing forwards, down representing backwards. The reason for this is that designers are trying to represent 3d space on the 2d plane that is the player's HUD. The direction being communicated with this type of indicator is very vague, so it's often used in tandem with other forms of damage indicator.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/2.jpg`,
				alt: `Halo uses two different indicators to show an attack from behind: A down arrow and a highlighted screen region.`,
				source: `"Halo: Combat Evolved (Full Campaign and Cutscenes)" by MythicTyrant`,
				link: `https://youtu.be/IX9ZyK5L3-A?t=2h55m21s`
			},
			{
				src: `/posts/hud/3.jpg`,
				alt: `A player taking hits from the front in Overwatch. It also uses a combination of 2D indicators and highlighted screen edge.`,
				source: `"Overwatch | How To DOMINATE With New Dva! - T500 Gameplay Coaching" by Overwatch Central`,
				link: `https://youtu.be/HMrvVird7Ng?t=2m16s`
			}
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`This feels very much like the full-screen takeover discussed above, in that it is often felt by the player more than directly seen. This effect is multiplied because the player's eye tends to remain focused in the center of the screen, away from the edges. The vagueness of this style of indicator can be intentionally used, especially in games with a realistic tone, to create a feeling of panic in the player who must now begin to search for the source of damage.`
		]
	},
	{
		line: true
	},
	{
		h3: `2D Indicators`
	},
	{
		p: [
			`2D indicators the clearest communication of attack direction currently in use, and it sees use in a huge variety of FPS genres. Again, up represents forwards, down represents backwards.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/4.jpg`,
				alt: `A player in Left 4 Dead taking a few hits from directly ahead, represented by red arrows facing up.`,
				source: `"Left 4 Dead 2 Expert Hard Eight Mutation No Mercy" by Khomchik`,
				link: `https://youtu.be/pVU7Zw8rsjY?t=8m37s`
			},
			{
				src: `/posts/hud/5.jpg`,
				alt: `An attack from the front in Call Of Duty, shown with a red arrow.`,
				source: `"CALL OF DUTY WW2 Walkthrough Gameplay Part 1 - Normandy - Campaign Mission 1 (COD World War 2)" by theRadBrad`,
				link: `https://youtu.be/edvnX8TwSTI?t=19m15s`
			}
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`Understanding three dimensions from a 2d plane can tough, considering that the player must model up/down to forward/backward.`,
			`That said, this is the simplest and most commonly used form of directional indicator, meaning that it's likely that players will be accustomed to it. It also nicely places specific pieces of information around the center of the screen, right where the player is almost always focused in an FPS.`
		]
	},
	{
		line: true
	},
	{
		h3: `3D Indicators`
	},
	{
		p: [
			`Some games, especially ones that use a lot of verticality in their level design, choose to represent hits on a 3d plane, showing forward and backward on the z-axis inside of the HUD. The game Destiny 2 is a good example of this.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/6.jpg`,
				alt: `A damage indicator showing an attack to the right in Destiny 2.`,
				source: `"DESTINY 2 Walkthrough Part 1 - FIRST 2 HOURS!!! (PS4 Let's Play Commentary)" by TetraNinja`,
				link: `https://youtu.be/du7pJa4cqYE?t=1h45m18s`
			}
		]
	},
	{
		p: [
			`This has its own issues, as it loses the impact of instinctively being registered as simply as a point on a circle on the HUD, and thus requires attention to understand exactly which direction the indicator is trying to communicate before the player can begin to focus on engaging or protecting themselves from the attacker.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/7.jpg`,
				alt: `A damage indicator showing an attack in an unclear direction in Destiny 2.`,
				source: `"DESTINY 2 Walkthrough Part 1 - FIRST 2 HOURS!!! (PS4 Let's Play Commentary)" by TetraNinja`,
				link: `https://youtu.be/du7pJa4cqYE?t=1h45m18s`
			}
		]
	},
	{
		p: [
			`If you're certain about where exactly the attack in that screenshot is coming from, then I am impressed.`
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`Superimposing a 3D object in front of the player to show direction requires the player to parse that object's orientation, which takes much more brainpower than other methods.`,
			`This is the only real way outside of audio to communicate direction in three dimensions, but I have yet to see an effective implementation of it.`
		]
	},
	{
		line: true
	},
	{
		h3: `Audio Indicators`
	},
	{
		p: [
			`Some games choose to represent direction not visually, but audibly.`,
			`Games such as Playerunknown's Battlegrounds and Counter Strike use both the sound of the attack and the sound that the player character makes as it impacts to communicate information to the player. The sound of the shot fired communicates direction, making the ability to parse this audio information a prerequesite for successfully finding the attacker. In fact, in many cases, on-screen attack indicators have no bearing at all on direction.`,
		]
	},
	{
		img: [
			{
				src: `/posts/hud/8.jpg`,
				alt: `A player being shot from the front, with a blood decal randomly placed on the right side of the screen in Playerunknown's Battlegrounds.`,
				source: `"Northernlion and Friends Play - PlayerUnknown's Battlegrounds - Episode 4 [Tony Hawk]" by Northernlion`,
				link: `https://youtu.be/RcQwnTM7yMc?t=6m22s`
			}
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`Of all damage indicators, this is the type that most closely emulates real life. This can mean that a player will feel much more in-the-scene.`,
			`When information is communicated fully through audio, any on-screen effects can be misleading to the player if they aren't fully direction-neutral. Also, since audio is also inherently less precise than an on-screen indicator, it challenges the player to parse the direction and search for the source of damage. This can either result in a feeling of panic if the player fails to parse the information, or in a feeling of satisfaction and mastery if they succeed.`,
			`However, directional audio information simply cannot be parsed out of, say, laptop speakers. It handicaps players who don't have headphones or excellent speakers, and rewards those who are willing to spend the extra cash to buy surround sound systems or headsets. This isn't inherently bad, but it does mean that auditory attack indicators inherently give games a lean toward the hardcore audience.`
		]
	},
	{
		h2: `Indicating Attack Power`
	},
	{
		p: [
			`There are a few ways of showing the intensity of an attack.`,
			`One is direct size of the indicator. Overwatch shows a larger indicator for a larger hit.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/9.jpg`,
				alt: `A strong hit from behind and to the right, indicated on a 2d plane in Overwatch.`,
				source: `"Overwatch: Training Dan - PART 1 - Game Grumps" by GameGrumps`,
				link: `https://www.youtube.com/watch?v=c5qBVmerB7w&t=1267s`
			},
			{
				src: `/posts/hud/10.jpg`,
				alt: `Here a player takes a few small hits from forward-right in Overwatch.`,
				source: `"Overwatch | How To DOMINATE With New Dva! - T500 Gameplay Coaching" by Overwatch Central`,
				link: `https://youtu.be/HMrvVird7Ng?t=2m16s`
			}
		]
	},
	{
		p: [
			`Alternatively, some games will use full-screen takeovers to communicate attack power.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/11.jpg`,
				alt: `A player taking a particularly strong hit in Destiny 2.`,
				source: `"DESTINY 2 Walkthrough Part 1 - FIRST 2 HOURS!!! (PS4 Let's Play Commentary)" by TetraNinja`,
				link: `https://youtu.be/du7pJa4cqYE?t=1h45m18s`
			}
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`There's a delicate balancing act between giving the player useful information and overwhelming them with information. That's when a player's basic instincts become useful – generally, bigger and louder are understood as a harder hit. That can allow designers to build in information about damage taken into the other forms of indicators, as seen in the bar's size changes in Overwatch's directional indicator.`
		]
	},
	{
		h2: `Indicating Remaining Life`
	},
	{
		p: [
			`Some games, such as the Battlefield series, show progressive hits as changes in the color palette onscreen; the player's vision shifts towards grayscale and the edges of the screen vignette more and more as they assume damage.`,
			`These indicators often replace traditional health bars entirely.`
		]
	},
	{
		img: [
			{
				src: `/posts/hud/12.jpg`,
				alt: `A player who has taken a few hits has a bloody screen in Battlefield: Bad Company 2.`,
				source: `"➤ THIS GAME IS *STILL* AMAZING! - Battlefield Bad Company 2" by Westie`,
				link: `https://youtu.be/Adth2zzWYt4?t=7m4s`
			}
		]
	},
	{
		h4: `In terms of player experience:`
	},
	{
		p: [
			`The vague nature of this type of indicator compared to a standard health bar is effective in heightening a player's sense of immersion, and also their feelings of impending doom.`
		]
	},
	{
		h2: `Wrap-up`
	},
	{
		p: [
			`I think that covers most of the basics! We've covered the different information that HUD damage indicators can show, and the impact that each can have on a player's experience.`,
			`Understanding the scope of options lets you, the game designer, make intentional choices about how you want taking damage in your game to feel. For example:`,
		]
	},
	{
		ul: [
			`Using clear and direct indicators that show direction and power without overwhelming the screen can help the player feel more tactically in control of the situation.`,
			`Using screen-distorting effects to indicate major damage and low life can bring the player into the intensity of the moment and induce a sense of disorientation.`,
			`Using vague direction indicators that the player has to parse can heighten an experienced player's feeling of skill and mastery, but it can also make a less experienced player feel disoriented and that the game is being unfair.`
		]
	},
	{
		line: true
	},
	{
		p: [
			`This has only been a look at FPS damage indicators, saying nothing of other genres with interesting and unique takes on communicating attacks such as RPGs, fighting games, MOBAs, and tabletop gaming. Even if you're just a player, I hope you found some insight to take into your next game. Have fun!`
		]
	},
]
