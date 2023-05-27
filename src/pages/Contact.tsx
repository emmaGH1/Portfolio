import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { UseLottieAnimation } from '../components';
import { marsAnimationData } from '../assets';
import { BsSendFill } from 'react-icons/all'

interface formValuesProps {
  name: string,
  email: string,
  message: string,
}

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors}, reset } = useForm<formValuesProps>()
  const data = JSON.stringify(marsAnimationData)

  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  
  const onSubmit: SubmitHandler<formValuesProps> = (data) => {
    console.log(data);
    // Perform submission logic here
    emailjs
    .send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        to_name: "Maduakor Emmanuel",
        from_email: data.email,
        to_email: "emma080355@gmail.com",
        message: data.message,
      },
      publicKey
    )
    .then(
      () => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        reset()
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );

  }

  return (
    <div id='contact' className='app__page primary relative'>
      
      <h1 className='mt-20 md:mt-10 text-dark-accent ml-7 '>
        Let's <span className='text-blue-500 '>Connect!</span> 
      </h1>

      <div className='flex flex-col-reverse items-center justify-between mx-auto mt-10 mb-10 lg:w-4/5 lg:flex-row-reverse md:mb-20'>  
          <form
          className="w-4/5 mx-auto md:w-2/4 xl:w-2/6"
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className="w-full mx-auto mb-6">
            <label htmlFor="name" className="block mb-2 text-light-secondary">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              className='w-full px-1 py-2 rounded-md dark:bg-light-secondary focus:outline-none bg-light-accent text-dark-primary lg:py-4'
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="w-full mx-auto mb-6">
            <label htmlFor="email" className="block mb-2 text-light-secondary">
              Email
            </label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className='w-full px-1 py-2 rounded-md dark:bg-light-secondary focus:outline-none bg-light-accent text-dark-primary lg:py-4'
            />
            {errors.email && (
              <span className="text-red-500">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="w-full mx-auto mb-6">
            <label htmlFor="message" className="block mb-2 text-light-secondary">
              Message
            </label>
            <textarea
              {...register('message', { required: true })}
              className='w-full h-20 p-1 px-2 pt-2 rounded-md lg:h-24 dark:bg-light-secondary focus:outline-none bg-light-accent text-dark-primary'
            ></textarea>
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className='w-full p-2 px-5 rounded-md dark:bg-dark-accent dark:text-dark-primary/80 bg-light-secondary text-dark-primary lg:py-3 hover:dark:bg-light-accent flex justify-center items-center hover:bg-light-secondary/80'
          >Send Message <BsSendFill className='ml-2' />
          </button>

          </form>

          <div className='flex w-64 h-64 mx-auto mb-10 overflow-hidden md:w-96 md:h-96 md:mx-0'>
           <UseLottieAnimation data={data}/>
          </div>
      </div>
    </div>
  )
}

export default Contact