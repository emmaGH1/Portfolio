import React, { useState, useRef} from 'react'


import { Navbar, NavigationDots } from './components/index'
import { About, Contact, Footer, Home, Skills, Work } from './pages'

const App = () => {
  const [toggleShow, setToggleShow] = useState<boolean>(false)
  const targetRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!targetRef.current?.contains(event.target as Node)) {
      setToggleShow(false)
    } 
  };



  return (
      <div className='flex flex-col selection:bg-black/10 selection:dark:bg-white/10' onClick={handleClickOutside}>
        <Navbar toggleShow={toggleShow} setToggleShow={setToggleShow} targetRef={targetRef} />
        <NavigationDots />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </div>
  )
}

export default App