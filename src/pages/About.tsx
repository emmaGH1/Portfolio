import React from 'react'

import { UseLottieAnimation } from '../components'
import { paragraphs } from '../assets/constants'
import { windmillAnimationData } from '../assets/index'

const About = () => {
  const data = JSON.stringify(windmillAnimationData)
  return (
    <div id='about' className='app__page  bg-light-primary-2 dark:bg-dark-primary-2 text-light-primary dark:text-dark-primary flex flex-row md:flex-col '>
      <div className='w-full md:w-9/10 mx-auto flex flex-col'>

       <h1 className='text-dark-accent mb-0 md:mt-20 mt-10 ml-5 md:ml-0  '>
        {`<About Me />`}
       </h1>     
      <div className='flex md:flex-row-reverse md:justify-between mx-auto'>

       <p className='w-9/10 md:w-2/4 mt-3 md:mt-5 leading-8 md:leading-9 font-paragraph flex md:self-center dark:text-dark-primary/50 md:text-lg mx-auto'>
         {paragraphs.aboutMe}
       </p>

       <div className='flex overflow-hidden w-96 h-96 mt-10'>
         <UseLottieAnimation data={data}/>
       </div>

      </div>
      </div>
    </div>
  )
}

export default About