import React from "react";

function Box({ children, ...props }) {
  return <div className={`p-[24px] ${props.className}`}>{children}</div>;
}

export default Box;
