import React from "react";
import darkLoader from "../../dist/images/loading-dark.svg";
import lightLoader from "../../dist/images/loading-light.svg";
import { useTheme } from "../../hooks/useTheme";

const Loading = () => {
  const { theme } = useTheme();
  return (
    <div>
      <img
        src={theme === "dark" ? darkLoader : lightLoader}
        alt="Loading"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
        }}
      />
    </div>
  );
};

export default Loading;
