import React from 'react'
import { GetGreetings, UseLottieAnimation } from '../components'
import { heroAnimationData } from '../assets/index'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/all'
import { paragraphs } from '../assets/constants'

const Home = () => {
  const data = JSON.stringify(heroAnimationData)
  
  return (
    <div id='home' className='app__page bg-light-primary dark:bg-dark-primary pt-20'>
       <div className='w-full md:w-9/10 mx-auto flex'>
          <div>
            
            <h1 className='ml-5'>
              <GetGreetings className='text-3xl text-light-primary dark:text-dark-primary ' />
            </h1>

            <div className='flex flex-col-reverse md:flex-row '>
                <div className='w-5/10 flex flex-col items-center mx-auto'>
                        <h1 className='dark:text-dark-accent text-light-secondary font-extrabold font-heading uppercase text-5xl md:mt-32 mb-0 text-center md:text-left'>Frontend Developer<span className='text-7xl'>.</span></h1>

                        <div className='text-xl dark:text-dark-primary/50  font-paragraph flex w-full mx-auto flex-wrap text-center md:text-start'>
                          {paragraphs.intro}
                        </div>

                        <div className='hidden md:flex flex-col mt-5 w-9/10 mx-auto'>
                          <div className='flex justify-center mb-3'>
                            <a href='../../public/Emmanuel_Maduakor_Resume.pdf' target='_blank' download={true} className='flex bg-light-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-transparent hover:dark:text-dark-primary dark:hover:underline rounded-md cursor-pointer transition-colors w-1/4 justify-center p-3'>
                                Download resume
                            </a> 
                          </div>
                          <div className='flex justify-center'>
                            <a href="https://github.com/emmaGH1" target='_blank'>
                              <AiFillGithub className='mr-1 w-10 h-10 text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary cursor-pointer'/>
                            </a>
                            <a href="https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/" target='_blank'>
                              <AiFillLinkedin className='mr-3 w-10 h-10 text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary cursor-pointer'/>
                            </a>
                          </div>

                        </div>

                        <div className='hidden md:flex flex-col mt-20 text-light-primary dark:text-dark-primary/80'>
                          <q>Simplicity is the ultimate sophistication.</q>
                          <span className='text-center dark:text-dark-accent text-light-accent'>- Albert Einstein</span>
                        </div>
                </div>
            

                <div className='overflow-hidden'>
                  <UseLottieAnimation data={data} />
                </div>
            </div>

            <div className='flex mt-5 w-9/10 mx-auto justify-center items-center md:hidden'>
              <a href="https://github.com/emmaGH1" target='_blank'>
                <AiFillGithub className='mr-1 w-6 h-6 text-light-primary dark:text-dark-primary'/>
              </a>
              <a href="https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/" target='_blank'>
                <AiFillLinkedin className='mr-3 w-6 h-6 text-light-primary dark:text-dark-primary'/>
              </a>
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