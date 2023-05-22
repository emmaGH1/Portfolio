import React from 'react'

import { techStacks } from '../assets/constants'

const Skills = () => {

  return (
    <div id='skills' className='relative flex flex-col items-center pt-20 mx-auto app__page primary w-9/10'>
      <div className='text-3xl font-bold text-center md:text-4xl font-heading text-dark-accent md:text-start'>
        <div className='hidden md:flex'>I've been working with these technologies lately
        </div>
        <div className='md:hidden'>Technologies</div>
      </div>
      
      <div className='flex justify-center mx-auto mt-10 w-9/10 md:mt-20'>
          <div className='grid grid-cols-3 gap-10 md:w-full dark:text-dark-primary/80 md:grid-cols-4 md:justify-items-center md:content-center md:gap-20'>
              {techStacks.map(each => (
                <div className='' key={`#${each.name}`}>
                  <img src={each.url} alt={each.name} className='flex justify-center w-10 h-10 mr-2'/>
                  <div className='mt-2 lg:mt-3'>{each.name}</div>
                </div>
              ))}
          </div>
      </div>

    </div>
  )
}

export default Skills