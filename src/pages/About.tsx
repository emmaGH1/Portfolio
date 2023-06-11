import React from 'react'
import { motion } from 'framer-motion';

import { UseLottieAnimation } from '../components'
import { paragraphs } from '../assets/constants'
import { windmillAnimationData } from '../assets/index'
import { textMotion } from '../utils';

const About = () => {
  const data = JSON.stringify(windmillAnimationData)
  return (
    <div id='about' className='flex flex-row h-full primary-2 md:flex-col bg-opacity-10'>
      <div className='flex flex-col w-full mx-auto md:w-9/10'>

       <h1 className='mt-20 mb-0 ml-5 text-dark-accent md:mt-16 md:ml-0 '>
        {`<About Me />`}
       </h1>     
      <div className='flex flex-col'>

       <ul className='flex flex-col mx-auto mt-3 mb-10 leading-relaxed font-paragraph dark:text-dark-primary/50 w-9/10'>
         {
          paragraphs.aboutMe.map((each, i) => (
            <motion.li 
            key={i}
            variants={textMotion(i, .2)}
            initial="hidden"
            whileInView="show"

            className='mt-5'>
              {each}
            </motion.li>
          ))
         }
       </ul>

       {/* <div className='hidden mt-10 overflow-hidden md:flex w-96 h-96'>
         <UseLottieAnimation data={data}/>
       </div> */}

      </div>
      </div>
    </div>
  )
}

export default About