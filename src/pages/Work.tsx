import React from 'react'
import { BsGithub, VscLinkExternal } from 'react-icons/all'
import { motion } from 'framer-motion';
import { projects } from '../assets/constants'
import { fadeIn } from '../utils'

const Work = () => (
    <div id='work' className='primary-2 :h-full'>
      <h1 className='mt-16 ml-7 text-dark-accent'>These are some of my works</h1>

      <div className='grid mx-auto w-9/10 lg:w-4/5 lg:grid-cols-2'>
        {
          projects.map((each, i: number) => {
            const { name, description, imageUrl, githubLink, liveLink} = each
            return (
                  <motion.div key={`#${name}`} className='mt-10 dark:bg-light-secondary/10 rounded-xl transition-all w-full lg:w-[470px] cursor-pointer shadow-2xl relative duration-300 app__work' initial='hidden' whileInView='show' variants={fadeIn(i)} viewport={{ once: true }}
                  >

                    <div className='app__work-img'>
                      <img src={imageUrl} alt={name} 
                      className='object-cover w-full pt-5 mx-auto h-60'
                      />
                    </div>

                    <div className='app__work-description'>
                      <div className='flex items-center justify-between mx-auto w-9/10 lg:justify-normal lg:items-start'>
                          <div className='mt-3 mb-2 font-bold'>{name}
                          </div>  

                          <div className='flex justify-between lg:hidden'>
                            <a href={githubLink} target='_blank'>
                              <BsGithub className='w-5 h-5 mr-3'/>
                            </a>
                            <a href={liveLink} target='_blank'>
                              <VscLinkExternal className='w-5 h-5'/>
                            </a>
                          </div>                    
                      </div>

                      <div className='flex mx-auto mb-5 text-gray-700 w-9/10 dark:text-dark-primary/70'>{description}
                      </div>
                    </div>

                    <div className='absolute top-0 bottom-0 left-0 right-0 hidden w-full h-full transition duration-300 app__work-hover lg:flex'>
                      <a href={githubLink} target='_blank'>
                        <BsGithub className='w-10 h-10 mr-3 absolute top-36 left-[30%] text-[#313bac] hover:text-[#313bac]/50 transition duration-150'/>
                      </a>
                      <a href={liveLink} target='_blank'>
                        <VscLinkExternal className='w-10 h-10 top-36 absolute right-[30%] text-dark-accent hover:text-dark-accent/30 transition duration-150'/>
                      </a>
                    </div>

                  </motion.div>
            )
          })
        }
      </div>

      <a className='flex justify-center w-3/5 mx-auto mt-20 mb-10 underline transition hover:text-light-secondary hover:dark:text-dark-accent' href='https://github.com/emmaGH1' target='_blank' >
        See more on Github ...
      </a>

    </div>
  )


export default Work