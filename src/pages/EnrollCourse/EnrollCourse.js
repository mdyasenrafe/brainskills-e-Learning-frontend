import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardApi } from "../../API";
import LoadingSpiners from "../../Componets/LoadingSpiners";

const EnrollCourse = () => {
  const [enrollCourse, setEnrollCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getDashboardApi();
    if (res?.error.true === "") {
      setLoading(false);
    } else {
      setEnrollCourse(res.data);
      setLoading(false);
    }
  };

  let newCourse = [];

  if (enrollCourse) {
    for (const course of enrollCourse) {
      for (const singleCourse of course?.courses) {
        newCourse.push(singleCourse);
      }
    }
  }

  console.log(loading, newCourse);
  return (
    <div>
      {loading ? (
        <LoadingSpiners loading={loading} height={"50vh"} />
      ) : (
        <>
          {" "}
          <section className="container mx-auto">
            <div className="p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto ">
                {newCourse?.map((coursedata) => (
                  <>
                    <div className="shadow-md rounded-md border-b-4 hover:border-b-blue-400 border-b-blue-300 bg-slate-100 rounded-t-lg overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
                        <div className="overflow-hidden  flex justify-center item-center">
                          <img src={coursedata?.coursePhoto} alt="" srcset="" />
                        </div>
                        <div>
                          <div className="p-4 pr-0">
                            <h1 className="text-lg">
                              {coursedata?.courseName}
                            </h1>
                          </div>

                          <div className="flex justify-start px-4 p-2">
                            <Link to={`/classes/${coursedata?.courseId}`}>
                              <button className="bg-indigo-500 rounded-sm border-indigo-500 p-1.5 hover:bg-indigo-600 text-white hover:rounded-md ease-in duration-300">
                                Continue
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default EnrollCourse;
