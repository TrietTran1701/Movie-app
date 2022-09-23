import { useState, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Mainbar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun size={22} role="button" onClick={() => setTheme("light")} />
      );
    } else {
      return (
        <BsMoon size={22} role="button" onClick={() => setTheme("dark")} />
      );
    }
  };
  const [currentGenre, setCurrentGenre] = useState("tv");

  return (
    <div className="grow md:pt-7 text-gray-400 pt-2 pb-7 border-x md:px-[2vw] px-[4vw] border-gray-200 dark:border-gray-darken min-h-screen">
      <div className="flex justify-between md:items-end items-center">
        <div className="inline-flex gap-[40px] pb-[14px] border-b border-gray-200 dark:border-gray-darken relative dark:text-white text-gray-400">
          <button
            className={`dark:hover:text-white transition hover:text-red-500 duration-300 ${
              currentGenre === "tv" &&
              "after:absolute after:bottom-0 after:bg-red-500 after:h-[3px] after:w-[30px] after:left-[12%] text-red-500 font-semibold"
            }`}
          >
            TV Show
          </button>
          <button
            className={`dark:hover:text-white dark:text-white text-gray-darken hover:text-red-500 transition duration-300 ${
              currentGenre === "movies" &&
              "after:absolute after:bottom-0 after:bg-red-500 after:h-[3px] after:w-[30px] after:right-[6%] text-red-500 font-semibold"
            }`}
          >
            Movies
          </button>
        </div>
        <div className="flex gap-2 dark:text-white text-gray-darken">
          <div className="hidden md:block">{renderThemeChanger()}</div>
          <p className="pl-5">Anonymous</p>
          <img
            alt="avatar"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className="w-7 h-7 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mainbar;
