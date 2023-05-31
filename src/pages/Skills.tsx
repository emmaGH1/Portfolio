import React from 'react'
import { motion } from 'framer-motion';

import { techStacks, toolStack } from '../assets/constants'

const Skills = () => {

  return (
    <div id='skills' className='relative flex flex-col items-center pt-20 mx-auto primary w-full app__page '>
      <div className='text-3xl font-bold text-center md:text-4xl font-heading text-dark-accent md:text-start'>
        <div className='hidden md:flex'>I've been working with these technologies lately
        </div>
        <div className='md:hidden'>Technologies</div>
      </div>
      
      <div className='flex justify-center mx-auto mt-10 w-9/10 md:mt-20 flex-col md:mb-20'>
          <div className='grid grid-cols-3 gap-10 md:w-full dark:text-dark-primary/80 md:grid-cols-4 md:justify-items-center md:content-center md:gap-20'>
              {techStacks.map(each => (
                <div className='flex flex-col items-center justify-center md:block' key={`#${each.name}`}>
                  <img src={each.url} alt={each.name} className='flex justify-center w-10 h-10 mr-2'/>
                  <div className='mt-2 text-center lg:mt-3 md:text-start'>{each.name}</div>
                </div>
              ))}
          </div>
      </div>

      <div className='md:hidden mb-10'>
        <div className='text-3xl font-bold text-center font-heading text-dark-accent mt-16'>Tools</div>
        <div className='grid grid-cols-3 gap-10 md:w-full dark:text-dark-primary/80 md:gap-20 mt-5 mr-1'>
              {toolStack.map(each => (
                <div className='flex flex-col items-center justify-center md:block' key={`#${each.name}`}>
                  <img src={each.url} alt={each.name} className='flex justify-center w-10 h-10'/>
                  <div className='mt-2 flex'>{each.name}</div>
                </div>
              ))}
          </div>
      </div>

    </div>
  )
}

export default Skills