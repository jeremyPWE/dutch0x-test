import React from "react";

function OverviewBox({ children, ...props }) {
  return (
    <div className="w-full rounded-lg border border-black/10 py-[12px] pl-[24px] pr-[16px] flex flex-col gap-y-[24px]">
      {props.title ? <h3 className="text-regular">{props.title}</h3> : null}
      {children}
    </div>
  );
}

export default OverviewBox;
