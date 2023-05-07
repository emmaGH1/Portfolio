import React from 'react'
import { GetGreetings, UseLottieAnimation } from '../components'
import { animationData, ResumeIcon } from '../assets/index'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/all'

const Home = () => {
  const data = JSON.stringify(animationData)
  return (
    <div id='home' className='app__page bg-light-primary dark:bg-dark-primary pt-20 '>
       <div className='w-full md:w-9/10 mx-auto flex'>
          <div>
            
            <h1 className='ml-5'>
              <GetGreetings className='text-3xl text-light-primary dark:text-dark-primary ' />
            </h1>

            <div className='flex flex-col-reverse md:flex-row'>
                <div className='w-5/10 flex flex-col items-center mx-auto'>
                        <h1 className='dark:text-dark-accent text-light-secondary font-extrabold uppercase text-5xl md:mt-32 mb-0 text-center md:text-left'>Frontend Developer<span className='text-7xl'>.</span></h1>

                        <div className='text-xl dark:text-dark-primary/50  font-paragraph flex w-full mx-auto flex-wrap text-center md:text-start'>
                        I'm Emma, I specialize in building clean, responsive, and scalable websites.
                        </div>

                        <div className='flex mt-5 w-9/10 mx-auto justify-center items-center'>
                          <AiFillGithub className='mr-1 w-10 h-10 text-light-primary dark:text-dark-primary'/>
                          <AiFillLinkedin className='mr-3 w-10 h-10 text-light-primary dark:text-dark-primary'/>
                          <button className='flex bg-light-accent dark:bg-dark-accent p-2 px-3 rounded-md'>
                            Download resume
                          </button>
                        </div>
                </div>
            

                <div className='overflow-hidden'>
                  <UseLottieAnimation data={data} />
                </div>
            </div>

            <div className='flex mt-5 w-9/10 mx-auto justify-center items-center md:hidden'>
              <AiFillGithub className='mr-1 w-6 h-6 text-light-primary dark:text-dark-primary'/>
              <AiFillLinkedin className='mr-3 w-6 h-6 text-light-primary dark:text-dark-primary'/>
              <button className='flex bg-light-accent dark:bg-dark-accent p-1 px-2 rounded-md'>
                Download resume
              </button>
            </div>
          </div>
       </div>

    </div>
  )
}

export default Home