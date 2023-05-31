import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='py-5 shadow-md bg-light-primary-2 dark:bg-dark-primary-2 text-light-primary dark:text-dark-primary/80'>
        <div className='flex justify-center mx-auto w-9/10 lg:justify-end'>
            <div>
                <span>Created by</span>  <span className='font-bold'>Maduakor Emmanuel  </span> © {currentYear}
            </div>
        </div>
    </div>
  )
}

export default Footer