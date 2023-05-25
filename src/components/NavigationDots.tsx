import { useState, useEffect } from "react";

const NavigationDots = () => {
  const [active, setActive] = useState<string>("home");
  const navList: string[] = ["home", "about", "skills", "work", "contact"];

  const handleClick = (item: string) => {
    setActive(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      const maxScroll = documentHeight - windowHeight;
      const pageHeight = maxScroll / navList.length;

      let currentPage = Math.floor(scrollPosition / pageHeight);
      currentPage = Math.max(0, Math.min(currentPage, navList.length - 1));

      setActive(navList[currentPage]);
      window.history.replaceState(null, "", `#${navList[currentPage]}`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden lg:flex flex-col fixed z-40 right-0 bottom-0 lg:mb-20 mr-10">
      {navList.map((item, index) => (
        <a
          onClick={() => handleClick(item)}
          href={`#${item}`}
          key={item + index}
          className={` ${
            active === item
              ? "bg-light-accent dark:bg-dark-accent"
              : "bg-light-secondary/80 dark:bg-light-secondary hover:bg-light-secondary/50"
          } w-4 h-4 rounded-[50%] m-2 transition-colors cursor-pointer`}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
