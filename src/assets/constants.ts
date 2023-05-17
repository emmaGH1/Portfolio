import { TSIcon, JSIcon, ReactIcon, NextJSIcon, ReduxIcon, TailwindIcon, HTMLIcon, CSSIcon} from './index'

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
       intro: `I specialize in building clean, responsive, and scalable websites.`,
       aboutMe: `Hello and welcome to my portfolio! I'm Emma, a frontend developer with 1.5 years of experience. I'm passionate about crafting beautiful and intuitive user interfaces that make a real impact. I specialize in using technologies like React and Typescript to build clean, scalable and typesafe code that delivers a seamless user experience. In my work, I strive to maintain pixel-perfect designs and a sharp eye for detail. I'm also slowly transitioning to fullstack development to expand my skillset and take on new challenges.`,
    }

export const techStacks = {
   primary: [
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
      }
   ],
   secondary: [
      {
         name: 'Redux Toolkit',
         url: ReduxIcon
      },
      {
         name: 'TailwindCSS',
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
}

export const projects: ProjectProps[] = [
   {
      name: 'DevJobs',
      imageUrl: DevJobs,
      liveLink: 'http://dev-jobs-seven-wine.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/DevJobs',
      description: 'Developed DevJobs, a captivating frontend web application for job listings in the tech industry. Leveraging the power of React and React Context, users can easily search and filter through a vast array of job opportunities. The intuitive interface and comprehensive search filters enable job seekers to find their dream roles with ease.'
   },
   {
      name: 'WindBnB',
      imageUrl: Windbnb,
      liveLink: 'https://wind-bnb-sepia.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/wind-bnb',
      description: 'I built a responsive web application named Wind-BNB that enables users to search and filter through a database of houses for short stays. The application offers a seamless experience for house hunting, allowing users to explore various listings with ease.'
   },
   {
      name: 'Space Tourism',
      imageUrl: SpaceTourism,
      liveLink: 'https://space-tourism-site-psi.vercel.app/',
      githubLink: 'https://github.com/emmaGH1/space_tourism_site',
      description: 'Created a captivating landing page for space tourism, showcasing the wonders of space exploration. Users can immerse themselves in a visually stunning journey, discovering the future of travel beyond our planet. The responsive design ensures an optimal experience across devices, enticing visitors to embark on an out-of-this-world adventure.'
   }
]