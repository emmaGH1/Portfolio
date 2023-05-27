import React from 'react'

const Footer = () => {
  return (
    <div className='dark:bg-dark-primary-2 bg-primary-2 text-light-primary dark:text-dark-primary/80 py-5'>
        <div className='flex flex-col w-9/10 mx-auto'>
            <div className='flex mb-2 self-end'>
                Made With React + Typescript 💖
            </div>
            <div>
                Created by <span className='font-bold text-dark-accent'>Maduakor Emmanuel</span>
            </div>
        </div>
    </div>
  )
}

export default Footer