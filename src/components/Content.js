import React from "react";
import Box from "./Box";

function Content({ children }) {
  return <Box className="flex gap-x-[24px] w-full">{children}</Box>;
}

export default Content;
