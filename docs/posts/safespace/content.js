module.exports = [
  {
    p: [
      `<a href="https://discordapp.com/oauth2/authorize?client_id=605039242309140483&scope=bot&permissions=76800" target="_blank">Add Safespace to your server!</a>`,
    ],
  },
  {
    p: [
      `"Go back to where you came from" is dominating headlines as I write this post; it seems like unabashed vitriol and prejudice is in fashion in the late '10s. I get sad reading the news lately, and when I get sad about a situation, I want to make things to change it. So, I built a bot that tracks hate speech and hate speech users across the whole Discord platform. How? Why? Read on to find out.`,
    ],
  },
  {
    line: true,
  },
  {
    p: [`I was recently inspired by a Reddit bot.`],
  },
  {
    img: [
      {
        src: `/posts/safespace/a.jpg`,
      },
    ],
  },
  {
    p: [
      `It searches through any given user's comment history on Reddit for the N word, and calls them out publicly. I thought this was a fantastic idea. In order to make a tolerant, accepting community, it's important to hold people accountable for their words and to make a clear statement that hate speech is not okay.`,
      `Then I thought about <a href="https://www.dailydot.com/parsec/bocchi-smash-bros-racial-slur/" target="_blank">this recent debacle</a> in the Super Smash Brothers scene. An up-and-coming competitor was caught using racial slurs in Discord.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/b.jpg`,
      },
    ],
  },
  {
    p: [
      `She was summarily cancelled, and rightly so.`,
      `However, these messages in the screenshot had to be manually searched for. Who knows how much hate speech is being ignored on Discord simply because no one has ever bothered to look for it?`,
    ],
  },
  {
    line: true,
  },
  {
    p: [
      `...Hang on, doesn't that sound like something a bot could do? That thought get me started, and before long I saw a few opportunities:`,
    ],
  },
  {
    ol: [
      `Reddit is a massive ecosystem where everything is public, but on Discord there are many discrete servers, making it easy for hate speech users to hide. Wouldn't it be cool to make a bot that can keep track of hate speech users across the entire Discord system?`,
      `The Reddit bot was by request only. Wouldn't it be nicer to have automatic tracking of hate speech in your server, without having to know who exactly to look up?`,
      `On top of that, wouldn't it be great if you could be alerted when a hate speech user joins your server, or when someone in your server uses hate speech elsewhere?`,
    ],
  },
  {
    p: [`With those main design goals, I got to work.`],
  },
  {
    h2: `Clarity and Confrontation`,
  },
  {
    p: [
      `When someone uses hate speech on a server using SafeSpace, the bot immediately logs the infraction, deletes the message, and replies sternly.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/2.png`,
      },
    ],
  },
  {
    p: [`The admins of that server are also notified immediately.`],
  },
  {
    img: [
      {
        src: `/posts/safespace/1.png`,
      },
    ],
  },
  {
    p: [
      `Admins of other servers that user is in (that are also running SafeSpace) are notified 24 hours later, unless the offender has been forgiven by their admin in that time.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/3.png`,
      },
    ],
  },
  {
    p: [
      `On the other end, if a normal server member wants to check on hate speech users in the server, they can.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/7.png`,
      },
    ],
  },
  {
    p: [
      `They also have the power to see exactly what hate speech their fellow server member has used, and when.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/6.png`,
      },
    ],
  },
  {
    h3: `Tracking Across Servers`,
  },
  {
    p: [
      `SafeSpace keeps a server-agnostic database of offenders. That alone sets it apart from most moderation bots, because it can warn admins and other members about hate speech users even if they haven't used hate speech in that specific server yet.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/4.png`,
      },
    ],
  },
  {
    p: [
      `The beauty of this bot lies in the fact that the more servers use it, the better it gets at rooting out hate speech users across the entire Discord network. With every server added, the more likely a hate speech user is to be caught, and the more servers can be notified when their members use hate speech, and the more servers will know when a hate speech user joins.Its effectiveness scales exponentially with adoption, so <a href="https://discordapp.com/oauth2/authorize?client_id=605039242309140483&scope=bot&permissions=76800" target="_blank">add it to your server!</a> You never know what it might catch.`,
    ],
  },
  {
    h3: `Leaving No Stone Unturned`,
  },
  {
    p: [
      `When SafeSpace is added to a server, it searches the chat history for hate speech. These past infractions are also quietly saved.`,
    ],
  },
  {
    h3: `Treading Softly`,
  },
  {
    p: [
      `Not every user in the server needs to have someone else's hate speech paraded around in front of their face; in fact, this will likely strike a more negative tone in the server overall. In cases such as hate speech by a server member in a different server, or a tracked offender joining the server, the bot only messages the server admin, and allows them to use their own discretion toward the offender.`,
      `Words have context, and there will always be times when an infraction shouldn't be treated harshly. That's why the bot also allows server admins to forgive users for hate speech used on their server.`,
    ],
  },
  {
    img: [
      {
        src: `/posts/safespace/5.png`,
      },
    ],
  },
  {
    line: true,
  },
  {
    p: [
      `<a href="https://discordapp.com/oauth2/authorize?client_id=605039242309140483&scope=bot&permissions=76800" target="_blank">Add SafeSpace to your Discord server now!</a>`,
      `If you're curious, the whole project is open source, so you can <a href="https://github.com/midblue/safespace-bot" target="_blank">check out the repository on Github</a>.`,
      `If you're feeling generous, you could also <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=EPH9CL25C3LLA" target="_blank">donate to help out with server costs.</a> :)`,
      `Also, if you liked this bot, check out my <a href="https://www.jasperstephenson.com/posts/timezonebot">Timezone Bot for Discord!</a>`,
      `Thanks for reading!`,
    ],
  },
]
