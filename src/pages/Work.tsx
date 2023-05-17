import React from 'react'
import { BsGithub, VscLinkExternal } from 'react-icons/all'

import { projects } from '../assets/constants'

const Work = () => {
  return (
    <div id='work' className='primary-2 h-[1500px] lg:h-[1000px]'>
      <h1 className='mt-16 ml-7 text-dark-accent'>These are some of my works</h1>

      <div className='flex flex-col mx-auto gap-7 w-9/10'>
        {
        projects.map((project) => {
          const { name, imageUrl, liveLink, githubLink, description } = project
          return (
            <div className='flex flex-col justify-between w-full lg:flex-row text-light-secondary dark:text-dark-secondary'>
              <img src={imageUrl} alt={name} className='h-40 bg-cover w-96' />
              <div className='flex flex-col lg:ml-10'>
                <div className='mt-2 text-2xl underline font-sub-heading text-light-primary dark:text-dark-primary/90 lg:my-2'>{name}</div>
                <div className='flex-wrap lg:leading-5 text-ellipsis'>{description}</div>
                <div className='flex mt-5'>
                  <a href={liveLink} target='_blank' className='hover:text-dark-accent'>
                    <VscLinkExternal className='w-5 h-5 mr-3'/>
                  </a>
                  <a href={githubLink} target='_blank' className='hover:text-dark-accent'>
                    <BsGithub className='w-5 h-5' />
                  </a>
                </div>
              </div>
              
            </div>
          )
        })
        }
      </div>

      <div className='flex justify-center mt-10'>
        <a href="https://github.com/emmaGH1" target='_blank' className='px-2 py-2 rounded-lg lg:px-5 lg:py-3 bg-dark-accent text-light-primary dark:text-dark-primary/80'>View more projects</a>
      </div>
    </div>
  )
}

export default Work