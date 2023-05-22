import React from 'react'
import { BsArrowDownRight, BsArrowRight, BsGithub, VscLinkExternal } from 'react-icons/all'

import { projects } from '../assets/constants'

const Work = () => {
  
  return (
    <div id='work' className='primary-2 h-[1500px] lg:h-[1000px]'>
      <h1 className='mt-16 ml-7 text-dark-accent'>These are some of my works</h1>

      <div className='w-9/10 lg:w-4/5 mx-auto grid lg:grid-cols-2'>
        {
          projects.map((each, index: number) => {
            const { name, description, imageUrl, githubLink, liveLink} = each
            const top = index + 1
            return (
                  <div key={`#${name}`} className='mt-10  dark:bg-light-secondary rounded-xl transition-all w-full lg:w-[470px] cursor-pointer shadow-2xl relative duration-300 app__work' 
                  >

                    <div className='app__work-img'>
                      <img src={imageUrl} alt={name} 
                      className='
                        w-full h-60 object-cover mx-auto pt-5
                      '
                      />
                    </div>

                    <div className='app__work-description'>
                      <div className='flex justify-between items-center w-9/10 mx-auto lg:justify-normal lg:items-start'>
                          <div className='font-bold mt-3 mb-2'>{name}
                          </div>  

                          <div className='flex lg:hidden justify-between'>
                            <a href={githubLink} target='_blank'>
                              <BsGithub className='w-5 h-5 mr-3'/>
                            </a>
                            <a href={liveLink} target='_blank'>
                              <VscLinkExternal className='w-5 h-5'/>
                            </a>
                          </div>                    
                      </div>

                      <div className='flex mx-auto w-9/10 mb-5 dark:text-gray-400 text-gray-700'>{description}
                      </div>
                    </div>

                    <div className='absolute w-full h-full top-0 left-0 right-0 bottom-0 app__work-hover transition duration-300 hidden lg:flex'>
                      <a href={githubLink} target='_blank'>
                        <BsGithub className='w-10 h-10 mr-3 absolute top-36 left-[30%] text-[#313bac] hover:text-[#313bac]/50 transition duration-150'/>
                      </a>
                      <a href={liveLink} target='_blank'>
                        <VscLinkExternal className='w-10 h-10 top-36 absolute right-[30%] text-dark-accent hover:text-dark-accent/30 transition duration-150'/>
                      </a>
                    </div>

                  </div>
            )
          })
        }
      </div>

      <a className='flex justify-center mt-10 underline transition w-3/5 mx-auto hover:text-light-secondary hover:dark:text-dark-accent' href='https://github.com/emmaGH1' target='_blank' >
        See more on Github ...
      </a>

    </div>
  )
}

export default Work