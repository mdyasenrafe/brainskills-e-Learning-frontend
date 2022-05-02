import React, { useEffect, useState } from "react";
import { getCourses } from "../../../API";
import LoadingSpiners from "../../../Componets/LoadingSpiners";

const DashboardCourses = ({ title }) => {
  const [courses, setCourses] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getCourses();
    if (res?.error === true) {
      setLoading(false);
    } else {
      setLoading(false);
      setCourses(res.data);
    }
  };

  return (
    <div>
      <h1 className="py-3 text-xl px-4 font-semibold text-gray-600">{title}</h1>
      <hr />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto ">
          {loading ? (
            <LoadingSpiners loading={loading} height={"50vh"} />
          ) : (
            courses?.map((course, index) => (
              <div
                className="shadow-md rounded-md border-b-4 hover:border-b-blue-400 border-b-blue-300 bg-slate-100 rounded-t-lg overflow-hidden"
                key={index}
              >
                <div className="overflow-hidden">
                  <img
                    className="hover:scale-105 ease-in duration-300"
                    src="https://i.ibb.co/PxFbNX3/course-11-b10ef53de8.jpg"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="mx-3">
                  <div className="flex justify-between items-center my-2"></div>
                  <h1 className="text-1xl font-semibold mt-2 py-2">
                    {course?.courseName}
                  </h1>

                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-500">
                      By: {course?.instructorDetail[0]?.instructorName}
                    </h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCourses;
