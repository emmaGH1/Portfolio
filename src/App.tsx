import React from 'react'

import { Home, About, Skills, Work, Contact } from './pages'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='flex flex-col'>
       <Navbar />
       <Home />
       <About />
       <Skills />
       <Work />
       <Contact />
    </div>
  )
}

export default App