import { TSIcon, JSIcon, ReactIcon, NextJSIcon, ReduxIcon, TailwindIcon, HTMLIcon, CSSIcon, ChatGptIcon, GitIcon, ReactRouterIcon} from './index'
import { FaReact} from 'react-icons/all'

import { DevJobs, SpaceTourism, Windbnb, DashboardAnalytics } from './index'

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
         `Greetings! I'm Emma, a frontend web developer based in Imo, Nigeria 🌍. Currently, I'm studying Geology at the Federal University of Technology, Owerri (FUTO) 🎓.`,
         `When it comes to web development, my passion lies in crafting captivating experiences that leave users impressed and engaged ✨. I pay close attention to my work, ensuring that I make the best out of it 🎨.`,
         `I thrive on problem-solving and tackling challenges head-on, making sure that the code is reliable and free of pesky bugs 💡. Collaboration is key to my work—I love working with others to boost productivity and deliver high-quality results 🚀`,
         `I am a big football fan😁.  PS: In my book, Cristiano Ronaldo is the 🐐 (Greatest of All Time)!.
         `,
         `I also love watching anime, the way their captivating stories and vibrant characters ignite my imagination. 💫`,
         `I have a perpetual thirst for knowledge and a genuine curiosity to connect with people from diverse cultures. The opportunity to expand my understanding and engage with individuals from various backgrounds truly excites me. I believe that continuous learning and fostering meaningful connections are essential for personal and professional growth. 🏁`
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

   export const toolStack = [
      {
         name: 'Git',
         url: GitIcon
      },
      {
         name: 'ChatGPT',
         url: ChatGptIcon
      },
      {
         name: 'React Router',
         url: ReactRouterIcon
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
      name: 'Dashboard Analytics',
      imageUrl: DashboardAnalytics,
      liveLink: 'https://geepayhq-analytics-dashboard.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/geepayhq-analytics-dashboard',
      description: 'Participating in an online hackathon, where I was tasked with creating a visually appealing and responsive design for an analytics dashboard.'
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