import React from "react";
import { useTheme } from "../../hooks/useTheme";

const Footer = () => {
  const { theme } = useTheme();
  const themeClassName = `${
    theme === "dark" ? "text-gray-500" : "text-gray-600"
  }`;
  return (
    <footer className="mt-40">
      <div className="md:flex md:flex-row md:justify-between md:items-center border-t border-gray-400 pt-4 pb-10">
        <span className={`${themeClassName} text-md font-light`}>
          © 2020 by Shayan. All rights reserved.
        </span>
        <span className={`${themeClassName} text-md font-light`}>
          <p>Made with love</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
