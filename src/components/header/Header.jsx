import React from "react";
import ThemeToggler from "../themeToggler/ThemeToggler";

const Header = () => {
  return (
    <div className="px-10 py-4 shadow-sm border-b dark:border-[#ffffff54]">
      <div className="flex justify-end">
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
