import { AiFillGithub, HiCloudDownload } from "react-icons/all";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`app__navbar text-light-primary ${darkMode ? 'dark:text-dark-primary' : ''}`}>
      <div>
        <span className="font-bold text-lg">Emma</span>
        <span className="font-bold text-xl">.</span>
        <span className="">dev</span>
      </div>

      <ul className="flex">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li className="uppercase mx-4" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <button className="bg-light-secondary dark:bg-dark-secondary flex items-center rounded-md p-2 text-dark-secondary dark:text-light-primary mr-5">
          download resume <HiCloudDownload className="w-5 h-5 ml-3 text-dark-secondary" />
        </button>

        <div className="bg-light-secondary dark:bg-dark-secondary p-2 rounded-full" onClick={toggleDarkMode}>
          {darkMode ? "Light" : "Dark"} mode
        </div>
      </div>
    </div>
  );
};

export default Navbar;
