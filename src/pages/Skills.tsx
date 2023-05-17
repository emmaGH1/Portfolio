import React from 'react'

import { techStacks } from '../assets/constants'

const Skills = () => {
  const { primary, secondary } = techStacks
  return (
    <div id='skills' className='app__page !h-[50vh] primary pt-20 flex flex-col w-9/10 mx-auto items-center relative'>
      <div className='font-subheading font-bold text-3xl text-dark-accent text-center md:text-start'>
        I've been working with these technologies lately
      </div>

      <div className='flex flex-col mx-auto w-3/4 mt-20 dark:text-dark-primary/50'>
        <div className='flex justify-between'>
          {primary.map(each => (
            <div className='flex items-center w-1/5 justify-center' key={`#${each.name}`}>
              <img src={each.url} alt={each.name} className='w-10 h-10 mr-2'/>
              <div className='hidden md:flex'>{each.name}</div>
            </div>
          ))}
        </div>
        <div className='flex justify-between mt-10'>
          {secondary.map(each => (
            <div className='flex items-center w-1/5 justify-center'  key={`#${each.name}`}>
              <img src={each.url} alt={each.name} className='w-10 h-10 mr-2 rounded-full border-0' />
              <div className='hidden md:flex'>{each.name}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills