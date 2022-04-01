import moment from "moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { getEvents } from "../../../API";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await getEvents();
    if (res.error.true === "") {
    } else {
      setEvents(res.data);
      console.log(res.data);
    }
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming Events{" "}
          <span className="relative ml-2">
            Schedule
            <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
              <div className="w-16 h-2 animate-pulse  rounded-tr-full bg-red-500"></div>
            </div>
          </span>
        </h1>
        {/* box  */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7 spac-y-4">
          {events.map((event) => (
            <div
              className="border p-10 mt-8"
              style={{
                borderBottom: "8px solid #eee4dc",
                borderRadius: "20px",
              }}
            >
              <div style={{ borderBottom: "1px dashed gray" }}>
                <h1 className="text-2xl font-bold text-center mb-10">
                  {event.eventName}
                </h1>
              </div>
              <div className="grid grid-cols-2 my-5">
                <div
                  className="pr-1 flex flex-column items-center"
                  style={{ borderRight: "1px dashed gray" }}
                >
                  <h1 className="text-1xl font-bold">
                    {" "}
                    {moment(event?.eventDate).add(10, "days").calendar()}
                  </h1>
                </div>
                <div className="pl-5">
                  <div className="my-4">
                    <h1 className="text-1xl font-bold">Location</h1>
                    <h2 className="">{event.eventType}</h2>
                  </div>
                  <div>
                    <h1 className="text-1xl font-bold">Speaker</h1>
                    <h2 className="">Darci Gutierrez</h2>
                  </div>
                </div>
              </div>
              <button
                type="button"
                class="bg-indigo-500 ... text-white p-2 flex w-full items-center justify-center text-center mx-auto rounded-md"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
