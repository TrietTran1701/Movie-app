import { useState, useEffect } from "react";
import { BsMoon } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(false);
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

  return (
    <div>
      <header className="flex px-5 py-5 items-center justify-between dark:text-white">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer object-contain"
        />
        <div className="flex items-center justify-between">
          {renderThemeChanger()}
          <GiHamburgerMenu
            size={22}
            className="ml-5 cursor-pointer"
            onClick={() => setActiveSidebar(!activeSidebar)}
          />
        </div>
      </header>
      <div className="flex items-start">
        <Sidebar
          activeSidebar={activeSidebar}
          setActiveSidebar={setActiveSidebar}
        />
      </div>
    </div>
  );
};

export default Header;
