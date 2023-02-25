import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className={`rounded-lg px-[16px] py-[8px] font-bold text-small ${props.className}`}
    >
      {children}
    </button>
  );
}

export default Button;
