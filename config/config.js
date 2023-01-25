
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import workImage from '../config/univerus.png';


export const navigation = {
	name: "Edmond",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		// {
		// 	title: "Contact",
		// 	link: "#contact",
		// },
		// {
		// 	title: "Links",
		// 	link: "/links",
		// },
	],
}
export const intro = {
	title: "Hey, I'm Edmond!",
	description: "I'm a student studying computer science and an aspiring software developer.",
	image: profile.src,
	buttons: [
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1S2PZEBsjTMUjTu4xxOyqvPHVM_dXQ0tK/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Hi there! My name is Edmond and I am a 2nd year student studying computer science at the British Columbia Institute of Technology (BCIT). I have always been passionate about technology and am excited to pursue a career as a software developer.",
		"I have gained a strong foundation in computer science through my coursework, which has included topics such as data structures, algorithms, and object-oriented programming. I am also constantly learning and improving my skills through online resources and side projects.",
		"In my spare time, I enjoy participating in hackathons and coding challenges, as well as staying up-to-date on the latest technologies and industry trends. I am a hard worker and am always eager to take on new challenges.",
	],
}

export const work = {
	title: "Work Experience",
	cards: [
		{
			workName: "Univerus Software Inc",
			position: "Junior Software Developer Internship",
			duration: "May 2022 - Dec 2022",
			location: "Port Moody, BC",
			description: "During my first internship at Univerus, I was a junior full stack developer working with ASP.Net Core, SQL and React.js. I worked on projects like enabling the functionality to translate 5 production level applications to different languages.  I participated in daily standups and bi-monthly sprint planning sessions, voicing my opinion on team related matters and providing on any issues I felt necessary.",
			workLink: "https://univerus.com/",
			companyLogo: workImage,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Dryvetrack",
			description: "DryveTrack is a one-stop-shop for all of your vehicle maintenance needs. This application tracks vehicles, mileage, warranty information and oil life to maintain vehicular upkeep.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/echen12/dryvetrack-front",
				},
			]
		},
		{
			title: "Communiti",
			description: "Communiti is designed to connect individuals with meaningful volunteering opportunities in their local community. Users can search for opportunities based on their location, availability, and areas of interest, and can also create profiles to track their volunteer hours and accomplishments.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Nandddy/Communiti",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/echen12/portfolio-website",
				},
			]
		}
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:hashirshoaeb@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Edmond Chen"
	// description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	// image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hashirshoaeb",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}