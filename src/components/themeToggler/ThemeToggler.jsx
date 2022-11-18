import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { themeAtom } from "../../atoms/themeAtom";
import { setTheme } from "../../utils/getTheme";

const ThemeToggler = () => {
  const [themeState, setThemeState] = useRecoilState(themeAtom);

  const changeTheme = (themeStyle) => {
    setThemeState(themeStyle);
    setTheme(themeStyle);
  };

  return (
    <div>
      {themeState === "light" ? (
        <MoonIcon
          onClick={() => changeTheme("dark")}
          className="h-7 text-black cursor-pointer"
        />
      ) : (
        <SunIcon
          onClick={() => changeTheme("light")}
          className="h-7 text-white cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggler;
