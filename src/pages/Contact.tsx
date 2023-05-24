import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

interface formValuesProps {
  name: string,
  email: string,
  message: string,
}

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors}, reset } = useForm<formValuesProps>()

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
      
      <h1 className='mt-16 text-dark-accent ml-7 '>
        Let's Connect!
      </h1>

      <div className=''>  
          <form
          className="w-4/5 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
          >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-light-secondary">
              Name
            </label>
            <input
              {...register('name', { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-light-accent text-dark-primary focus:outline-none focus:ring focus:border-light-accent"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-light-secondary">
              Email
            </label>
            <input
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full px-4 py-2 rounded-lg bg-light-accent text-dark-primary focus:outline-none focus:ring focus:border-light-accent"
            />
            {errors.email && (
              <span className="text-red-500">
                Please enter a valid email address
              </span>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-light-secondary">
              Message
            </label>
            <textarea
              {...register('message', { required: true })}
              className="w-full px-4 py-2 rounded-lg bg-light-accent text-dark-primary focus:outline-none focus:ring focus:border-light-accent max-h-64"
            ></textarea>
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 transition-colors duration-300 rounded-lg bg-dark-accent text-light-primary hover:bg-light-accent hover:text-dark-primary"
          >Send Message
          </button>

          </form>
      </div>

    </div>
  )
}

export default Contact