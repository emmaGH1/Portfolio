import { GetGreetings, UseLottieAnimation } from '../components'
import { heroAnimationData } from '../assets/index'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/all'
import { paragraphs } from '../assets/constants'


const Home = () => {
  const data = JSON.stringify(heroAnimationData)
  
  return (
    <div id='home' className='pt-20 app__page primary'>
       <div className='flex w-full mx-auto md:w-9/10'>
          <div>
            
            <h1 className='ml-5'>
              <GetGreetings className='text-3xl text-light-primary dark:text-dark-primary ' />
            </h1>

            <div className='flex flex-col-reverse md:flex-row '>
                <div className='flex flex-col items-center mx-auto w-5/10'>
                        <h1 className='mb-0 text-5xl font-extrabold text-center uppercase dark:text-dark-accent text-light-secondary font-heading md:mt-32 md:text-left'>Frontend Developer<span className='text-7xl'>.</span></h1>

                        <div className='flex flex-wrap w-full mx-auto text-xl text-center dark:text-dark-primary/50 font-paragraph md:text-start'>
                          {paragraphs.intro}
                        </div>

                        <div className='flex-col hidden mx-auto mt-5 md:flex w-9/10'>
                          <div className='flex justify-center mb-3'>
                            <a href='../../public/Emmanuel_Maduakor_Resume.pdf' target='_blank' download={true} className='flex justify-center p-3 transition-colors rounded-md cursor-pointer bg-light-accent dark:bg-dark-accent hover:bg-dark-accent dark:hover:bg-transparent hover:dark:text-dark-primary dark:hover:underline'>
                                Download resume
                            </a> 
                          </div>
                          <div className='flex justify-center'>
                            <a href="https://github.com/emmaGH1" target='_blank'>
                              <AiFillGithub className='w-10 h-10 mr-1 cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary'/>
                            </a>
                            <a href="https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/" target='_blank'>
                              <AiFillLinkedin className='w-10 h-10 mr-3 cursor-pointer text-light-primary dark:text-dark-primary hover:text-light-secondary hover:dark:text-dark-secondary'/>
                            </a>
                          </div>

                        </div>

                        <div className='flex-col hidden mt-20 md:flex text-light-primary dark:text-dark-primary/80'>
                          <q>Simplicity is the ultimate sophistication.</q>
                          <span className='text-center dark:text-dark-accent text-light-accent'>- Albert Einstein</span>
                        </div>
                </div>
            

                <div className='overflow-hidden'>
                  <UseLottieAnimation data={data} />
                </div>
            </div>

            <div className='flex items-center justify-center mx-auto mt-5 w-9/10 md:hidden'>
              <a href="https://github.com/emmaGH1" target='_blank'>
                <AiFillGithub className='w-6 h-6 mr-1 text-light-primary dark:text-dark-primary'/>
              </a>
              <a href="https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/" target='_blank'>
                <AiFillLinkedin className='w-6 h-6 mr-3 text-light-primary dark:text-dark-primary'/>
              </a>
              <button className='flex p-1 px-2 rounded-md bg-light-accent dark:bg-dark-accent'>
                Download resume
              </button>
            </div>
          </div>
       </div>

    </div>
  )
}

export default Home