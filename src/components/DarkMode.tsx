import { useEffect, useState } from "react";

import { MdDarkMode, MdLightMode } from 'react-icons/all'

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    const preferredMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(preferredMode)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.body.classList.toggle('dark', newMode)
  }
  
  return (
    <div onClick={toggleDarkMode}>
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </div>
  )
}

export default DarkMode