import React from "react";
import EventCard from "./EventCard";

function Events() {
  return (
    <div className="w-3/4">
      <h2>Events</h2>
      <div className="flex flex-col pt-[8px] gap-[24px]">
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}

export default Events;
