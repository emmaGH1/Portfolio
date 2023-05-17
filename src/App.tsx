import React, { useState, useRef} from 'react'

import { Home, About, Skills, Work, Contact } from './pages'

import { Navbar, NavigationDots } from './components/index'

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
    </div>
  )
}

export default App