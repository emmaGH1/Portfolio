import { useEffect, useState } from "react";
import ToggleComponent from "./ToggleComponent";

type DarkModeProps = {
  className?: string
}

const DarkMode = ({ className }: DarkModeProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const preferredMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(preferredMode);
    document.body.classList.toggle('dark', preferredMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
  };

  return (
    <div className={className}>
      <ToggleComponent DarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default DarkMode;
