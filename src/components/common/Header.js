import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-32">
      <div className="flex flex-row justify-between my-8 items-center">
        <Link to="/" className="text-3xl font-medium"></Link>
        {/* <span>Night Mode</span> */}
      </div>
      <div className="flex flex-row justify-between border-b border-gray-400 pb-3 items-center">
        <div>
          <Link to="/" className="text-gray-600 text-lg font-light mr-4">
            Home
          </Link>
          <Link to="/blog" className="text-gray-600 text-lg font-light mr-4">
            Blog
          </Link>
          <Link
            to="/pages/about-me"
            className="text-gray-600 text-lg font-light mr-4"
          >
            About
          </Link>
        </div>
        <div>
          <a
            href="https://twitter.com/shayanBemanian"
            className="text-gray-600 text-lg font-light mr-4"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/shayanBemanian"
            className="text-gray-600 text-lg font-light"
          >
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
