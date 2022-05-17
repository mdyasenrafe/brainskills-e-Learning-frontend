import React, { useState } from "react";
import { useEffect } from "react";
import { getEvents } from "../../../API";
import LoadingSpiners from "../../../Componets/LoadingSpiners";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await getEvents();
    if (res.error === true) {
      setLoading(false);
    } else {
      setEvents(res.data);
      setLoading(false);
    }
  };
  return (
    <div className="">
      <div className="container  mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming Events Schedule
        </h1>
        {/* box  */}
        {loading ? (
          <LoadingSpiners loading={loading} height={"40px"} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => {
              let newDate = new Date(event.eventDate);
              return (
                <div className="border border-b-8 round p-10" key={index}>
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
                      {/* {parse date} */}
                      {event?.eventDate && newDate.toDateString()}
                    </div>
                    <div className="pl-5">
                      <div className="my-4">
                        <h1 className="text-1xl font-bold">Location</h1>
                        <h2 className="">{event.eventType}</h2>
                      </div>
                      <div>
                        <h1 className="text-1xl font-bold">Speaker</h1>
                        <h2 className="">{event?.speaker}</h2>
                      </div>
                    </div>
                  </div>
                  <a
                    href={event?.eventLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="bg-indigo-500 ... text-white p-2 flex w-full items-center justify-center text-center mx-auto rounded-md"
                    >
                      Join Now
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
