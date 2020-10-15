import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const ScrollToTop = ({ children }) => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } h-full min-h-screen`}
    >
      <div className="mx-auto max-w-5xl px-10">{children}</div>
    </div>
  );
};

export default ScrollToTop;
