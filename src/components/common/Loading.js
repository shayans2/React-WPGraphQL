import React from "react";
import loading from "../../dist/images/loading.svg";

const Loading = () => {
  return (
    <div>
      <img
        src={loading}
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
