import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { HiMoon, HiSun } from "react-icons/hi";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-200 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-gray-500 dark:text-gray-200 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
