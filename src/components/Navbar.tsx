import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { BsArrowDown, CgMenuRight, IoCloseSharp, AiOutlineLinkedin, FiGithub } from "react-icons/all";

import { DarkMode, GetGreetings } from './index';

type TargetRefProp = {
  targetRef: React.RefObject<HTMLDivElement>
  toggleShow: boolean
  setToggleShow: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ targetRef, toggleShow, setToggleShow }: TargetRefProp) => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const navLinksArray: string[] = ["home", "about", "skills", "work", "contact"]
  const handleToggle = () => {
    setToggleShow(prev => !prev)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visible, prevScrollPos]);


  return (
    <div className={` ${visible ? 'md:flex' : 'md:hidden'} flex app__navbar text-dark-primary/70 dark:text-light-primary md:bg-white/50 md:dark:bg-white/10 transition-colors`} >
      <div className="flex items-center mt-2 ml-4 md:ml-0 md:mt-0 text-light-primary dark:text-dark-primary/70">
        <span className="font-bold text-xl">Emma</span>
        <span className="hidden sm:flex font-bold text-xl">.</span>
        <span className="hidden sm:flex self-end mb-1">dev</span>
      </div>

     {/* Mobile */}
     <div className="md:hidden relative " ref={targetRef}>
      {/* Menu icon  */}
        <div className="md:hidden bg-light-accent dark:bg-dark-accent rounded-full p-2 flex justify-center items-center mt-2 mr-4 md:mr-0 md:mt-0" onClick={handleToggle}>
            <CgMenuRight className="w-5 h-5 "/>
        </div>

        {/* Sidebar  */}
        <div className={`${toggleShow ? 'flex' : 'hidden'} flex-col fixed app__navbar__mobile-glass-morph w-7/10 right-0 top-0 h-screen dark:text-dark-primary/80`}>
              
              <div className="flex justify-between items-center">
                <DarkMode className="mt-5 ml-3"/>
                <IoCloseSharp className="flex self-end mt-5 mr-5 w-5 h-5" onClick={handleToggle} />     
              </div>

              <div className="flex flex-col w-9/10 mx-auto mt-10">
                <div className="flex flex-col">
                  <div className="flex items-center mt-2 ml-2">
                  <span className="font-bold text-lg">Emma</span>
                  <span className="flex font-bold text-xl">.</span>
                  <span className="flex mt-1">dev</span>
                </div>
              </div>
            <div className="w-full h-[2px] bg-white/50"/>
          </div>

          <ul className="mt-5 ml-5">
            {navLinksArray.map((item: string) => (
              <li key={`link-${item}`} className="uppercase" onClick={handleToggle}>
                <div className="app__navbar-dot mt-2"></div>
                <a href={`#${item}`} >{item}</a>
              </li>
            ))} 
          </ul>

          <div className="text-light-primary flex items-center mt-10 justify-end">
            <a href="https://github.com/emmaGH1" target="_blank"><FiGithub className="w-5 h-5 mr-1"/></a> 
            <a href="https://www.linkedin.com/in/maduakor-emmanuel-5a141b245/"  target="_blank"><AiOutlineLinkedin className="w-5 h-5 mr-2"/></a>
            <a href="/public/Emmanuel_Maduakor_Resume.pdf" download={true}className="bg-light-secondary flex items-center rounded-md p-2 text-dark-secondary mr-5">
             Resume <BsArrowDown className="w-5 h-5 ml-1 text-light-primary bg-light-accent dark:bg-dark-accent rounded-full" />
            </a>
          </div>
        </div>
     </div>

     {/* Tablets and desktops */}
      <ul className="hidden md:flex">
        {navLinksArray.map((item: string) => (
          <li className="uppercase mx-4 flex flex-col justify-center items-center text-light-primary dark:text-dark-primary" key={`link-${item}`}>
            <div className="app__navbar-dot mb-1"></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center">
        <div>
            <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;



