import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import sunImage from "../../dist/images/sun.png";
import moonImage from "../../dist/images/moon.png";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const themeClassName = `${
    theme === "dark" ? "text-gray-500" : "text-gray-600"
  }`;
  return (
    <header className="mb-32">
      <div className="flex flex-row justify-between py-8 items-center">
        <Link to="/" className="text-3xl font-medium"></Link>
        <button onClick={setTheme} className="focus:outline-none">
          {theme === "light" ? (
            <img src={moonImage} className="h-8" alt="Dark Mode" />
          ) : (
            <img src={sunImage} className="h-8" alt="Light Mode" />
          )}
        </button>
      </div>
      <div className="flex flex-row justify-between border-b border-gray-400 pb-3 items-center">
        <div>
          <Link to="/" className={`${themeClassName} text-lg font-light mr-4`}>
            Home
          </Link>
          <Link
            to="/blog"
            className={`${themeClassName} text-lg font-light mr-4`}
          >
            Blog
          </Link>
          <Link
            to="/pages/about-me"
            className={`${themeClassName} text-lg font-light mr-4`}
          >
            About
          </Link>
        </div>
        <div>
          <a
            href="https://twitter.com/shayanBemanian"
            className={`${themeClassName} text-lg font-light mr-4 hidden sm:inline`}
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/shayanBemanian"
            className={`${themeClassName} text-lg font-light hidden sm:inline`}
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
