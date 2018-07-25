module.exports = [
	{
		p: [
			`Research is a broad topic. When I joined a Tokyo game company's research division in 2017, my teammates only did technical research — patents, hardware tests, and peer reviewed publications. Then there was me: the only person at the entire 2000+ employee company who had "UX" in their job title. This is the story of a project I led which helped bring UX research to the table.`,
		]
	},
	{
		aside: {
			title: `A word on Tokyo's UX Scene`,
			text: [
				`UX in Tokyo is young but thriving! There are many companies looking for UX designers, and the meetup & skill-sharing scene is active in both Japanese and English. That said, in this early stage (just as in the U.S.), most hiring managers don't really know what a UX designer does. They've just heard the term, and they often hire a UX designer or two to "bring UX to the company." The company in question here was one of these. Thus...`,
			]
		}
	},
	{
		p: [
			`One of my main goals was to introduce user-centered thinking and creation methods to other employees, many of whom had never heard of UX before. Luckily, my teammates were curious and excited to see what UX research and design were about, even if they didn't have any experience in it.`,
			`We heard that the employee-facing internal app used by thousands of company employees was up for a redesign — dropping an ancient tech stack and moving towards a more dynamic and useful tool built on React. The internal app was mostly made up of one-off tools for teams, meaning that the existing app felt like a hodgepodge of buttons and links to unrelated tools. A simple re-skin, as was initially suggested, would do nothing to simplify the clutter. Also, the team had hopes to sell the internal app post-redesign as an enterprise product.`,
			`We saw our opportunity at once. We could both support the internal app team in a meaningful way <strong>and</strong> help our colleagues understand the power of user-centered thinking. After a brief kickoff with the team's leaders, we had the contacts and the go-ahead we needed to start the collaboration.`
		]
	},
	{
		h2: `Initial Challenges`
	},
	{
		h4: `Lack of an experienced UX team`
	},
	{
		p: [
			`Great, we wanted to bring UX into the company at large. There was only one problem: we didn't have a UX team. It was mostly just me and one coworker who I was <a href="https://www.jasperstephenson.com/posts/mentor" target="_blank">mentoring in UX methodologies</a> as fast as we were using them. We both also worked primarily on other projects, and had to sneak extra hours during the day to do user testing and ideation. We addressed this by staying nimble and keeping our interviews short and dense. Bringing the internal app team into our interviews and synthesis also allowed us to save time by using the outputs of our collaboration.`
		]
	},
	{
		h4: `UI ≠ UX`
	},
	{
		p: [
			`There was a good deal of mislabeling UX as UI in the beginning of the project. The internal app team's interaction design lead in particular was hooked on Google's material design guidelines, and didn't give much credence to any research findings that suggested that a Google-approved UI element — for example, a hamburger menu on left-side nav on desktop — might not be the best choice for users in our specific case.`
		]
	},
	{
		img: [
			{
				src: `/posts/internalapp/3.jpg`,
				alt: `For example, this element seen in use in Google Keep.`,
				link: 'https://keep.google.com'
			}
		]
	},
	{
		p: [
			`To work through this, we did an exercise with him where we ran through common use cases for a few Google products, digging deeper into why that specific UI pattern might be appropriate for users in that situation. We then ran through the same exercise with our internal app wireframes to demonstrate how the expectations and context of use might change for our users. Eventually, he began to broaden his understanding that good experience design was about more than just which UI elements were in use.`
		]
	},
	{
		h2: `Approach`
	},
	{
		img: [
			{
				src: `/posts/internalapp/1.jpg`,
				alt: `A few interviews' worth of categorized notes.`,
			}
		]
	},
	{
		p: [
			`After a brief competitive analysis phase, we began conducting exploratory interviews with different types of employees to see how, why, and when they used the existing internal app. We also asked open-ended questions about daily life at the office to sniff out more needs that the internal app could enable or simplify. We also introduced a card sort to help determine what users cared about in the app. We spent a good chunk of time after each interview debriefing to make sure we captured needs, thoughts, feelings, actions, and other ideas.`
		]
	},
	{
		img: [
			{
				src: `/posts/internalapp/2.jpg`,
				alt: `Groupings by concept, created in collaboration with the internal app team.`,
			}
		]
	},
	{
		p: [
			`We also invited in the internal app team to participate in each major step so that they could own the process and the information just as much as we did. They especially responded to a grouping exercise where we took collected notes from each interview and found common themes. As always, there will be some low-hanging fruit in any UX project, and the internal app team leader specifically called out a few that he spotted during this exercise, which felt like the biggest win of our project so far. Getting leaders to step outside of thinking in terms of business goals and empathize with users for a moment was a huge step.`
		]
	},
	{
		h2: `Outputs & Outcomes`
	},
	{
		img: [
			{
				src: `/posts/internalapp/4.jpg`,
			}
		]
	},
	{
		p: [
			`We knew we needed to design our outputs to promote trust from people unused to receiving this type of information. Thus, for our physical outputs, we chose to go with a shareable document with a format that allowed for a strong, simple hierarchy of information so that the key points were unmistakable.`,
			`In addition, we made a one-pager of our design pillars that could be used separately from the denser contents so that it could be referred to quickly and easily. That one-pager can now be found taped to walls around the project space, and the language within is often referred to in internal meetings.`,
			`Of course, all the documents in the world are worth nothing if no one reads them or knows how to use them, so we also took the time to show how they could be used to inform the design of the app. We sat down with the interaction designers who were working on wireframes, and together found ways of designing different screens of the app to answer user needs.`
		]
	},
	{
		img: [
			{ src: `/posts/internalapp/a.jpg` },
			// { src: `/posts/internalapp/b.jpg` },
			{ src: `/posts/internalapp/c.jpg` },
		]
	},
	{
		p: [
			`This step was easy, because the supporting research was broken into clear categories and goals. Immediately, we could see the effect of this thinking being brought into wireframe iterations as the interaction design team shifted tone and began presenting their work in terms of specific user needs being addressed.`
		]
	},
	{
		line: true
	},
	{
		p: [
			`As a direct product of our collaboration, our baseline research gained trust from the designers and team leaders. From there, it diffused to the rest of the internal app team where it remains a guideline for creating the service going forward.`,
			`Although still far from our goal of implementing true user research and testing across the gamut of our company's projects, we at least succeeded in the first step: introducing user-centered thinking to a team that's never before used it in their workflow.`
		]
	}
]