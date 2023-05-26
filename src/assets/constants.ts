import { TSIcon, JSIcon, ReactIcon, NextJSIcon, ReduxIcon, TailwindIcon, HTMLIcon, CSSIcon} from './index'
import { FaReact} from 'react-icons/all'

import { DevJobs, SpaceTourism, Windbnb } from './index'


interface TechStacksProps {
   name: string,
   url: string
}
interface ProjectProps {
   name: string,
   imageUrl: string,
   liveLink: string,
   githubLink: string,
   description: string
}

export const paragraphs = {
       intro: `I build clean, responsive, and scalable websites.`,
       aboutMe: [
         `Greetings! I'm Emma, a frontend web developer based in Imo, Nigeria.`,
         `💻 I embark on digital quests, wielding the mighty powers of React and TypeScript to conjure enchanting web experiences.`,
         `🚀 With React's modular sorcery and TypeScript's spell of type safety, I weave scalable incantations that bewitch users with their visual splendor.`,
         `🎨 Guided by my keen eye for design, I craft pixel-perfect wonders that leave users spellbound and craving for more.
         `,
         `💡 As a code wizard, I thrive on solving enigmatic puzzles, employing TypeScript's arcane rituals to ensure bug-free spells that defy even the trickiest of errors.`,
         `🌍 In the realm of collaboration, I harmonize with fellow adventurers, leveraging React and TypeScript to conjure powerful enchantments that elevate productivity and code quality.`,
         `🌟 Ever eager to expand my knowledge, I embark on quests to uncover the latest secrets of React and TypeScript, honing my skills to deliver unparalleled web wizardry.`,
       ],
      joke: `✨ Fun Developer Joke: Why did the web developer go broke? Because they lost their domain in a bet!`
   }

export const techStacks = [
      {
         name: 'TypeScript',
         url: TSIcon
      },
      {
         name: 'JavaScript',
         url: JSIcon
      },
      {
         name: 'React',
         url: ReactIcon
      },
      {
         name: 'NextJS',
         url: NextJSIcon
      },
      {
         name: 'Redux Toolkit',
         url: ReduxIcon
      },
      {
         name: 'Tailwind',
         url: TailwindIcon
      },
      {
         name: 'HTML',
         url: HTMLIcon
      },
      {
         name: 'CSS',
         url: CSSIcon
      }
   ]

export const projects: ProjectProps[] = [
   {
      name: 'DevJobs',
      imageUrl: DevJobs,
      liveLink: 'http://dev-jobs-seven-wine.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/DevJobs',
      description: 'Developed DevJobs, a frontend web application for job listings in the tech industry.'
   },
   {
      name: 'WindBnB',
      imageUrl: Windbnb,
      liveLink: 'https://wind-bnb-sepia.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/wind-bnb',
      description: 'I built a responsive web application Wind-BnB, that enables users to search and filter through a database of houses for short stays.'
   },
   {
      name: 'Space Tourism',
      imageUrl: SpaceTourism,
      liveLink: 'https://space-tourism-site-psi.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/space_tourism_site',
      description: 'Created a landing page for space tourism.'
   }
]