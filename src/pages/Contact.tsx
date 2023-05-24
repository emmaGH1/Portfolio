import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { UseLottieAnimation } from '../components';
import { marsAnimationData } from '../assets';

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
    <div id='contact' className='app__page primary'>
      
      <h1 className='mt-20 md:mt-10 text-dark-accent ml-7 '>
        Let's <span className='text-blue-500 '>Connect!</span> 
      </h1>

      <div className='mt-10 lg:flex mx-auto lg:w-4/5 justify-between items-center lg:flex-row-reverse'>  
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
              className='w-full py-2 rounded-md dark:bg-light-secondary focus:outline-none bg-light-accent text-dark-primary lg:py-4 px-1'
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
              className='w-full py-2 rounded-md dark:bg-light-secondary focus:outline-none bg-light-accent text-dark-primary lg:py-4 px-1'
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
              className='w-full h-20 lg:h-24 p-1 rounded-md dark:bg-light-secondary focus:outline-none bg-light-accent text-dark-primary px-2 pt-2'
            ></textarea>
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className='w-full p-2 px-5 rounded-md dark:bg-dark-accent dark:text-dark-primary/80 bg-light-secondary text-dark-primary lg:py-3 hover:dark:bg-light-accent'
          >Send Message
          </button>

          </form>

          <div className='hidden md:flex overflow-hidden w-96 h-96 '>
           <UseLottieAnimation data={data}/>
          </div>
      </div>

    </div>
  )
}

export default Contact