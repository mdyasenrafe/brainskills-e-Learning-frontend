import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { getCourses } from "../../../API";
const Courses = () => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getCourses();
    if (res?.error.true === "") {
    } else {
      console.log(res);
      setCourses(res.data);
    }
  };

  console.log(courses);

  return (
    <section className=" container mx-auto px-4 py-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <h1 className=" text-start font-Roboto font-bold text-3xl lg:text-4xl ">
            <span className="text-indigo-500 "> Explore </span>
            Our All
            <span className="relative ml-2">
              Course
              <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
                <div className="w-16 h-2 animate-pulse  rounded-tr-full bg-red-500"></div>
              </div>
            </span>
          </h1>
        </div>
        <div>
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-around md:pt-0">
            <li>View All</li>
            <li>Web</li>
            <li>Photography</li>
            <li>Life Style</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto ">
          {courses?.map((course, index) => (
            <div className="shadow-md rounded-md border-b-4 hover:border-b-blue-400 border-b-blue-300 bg-slate-100 rounded-t-lg overflow-hidden">
              <div className="overflow-hidden">
                <img
                  className="hover:scale-105 ease-in duration-300"
                  src="https://i.ibb.co/PxFbNX3/course-11-b10ef53de8.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="mx-3">
                <div className="flex justify-between items-center my-2">
                  <ReactStars
                    count={5}
                    size={24}
                    edit={null}
                    value={4}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                  <h3 className="font-semibold text-gray-500  ">13 Students</h3>
                </div>
                <h1 className="text-1xl font-semibold mt-2">
                  {course?.courseName}
                </h1>
                <div className="flex justify-between my-3">
                  <h3 className="font-semibold text-gray-500">
                    <span>Price: $</span>199 /-
                  </h3>
                  <h3 className="text-gray-500 font-semibold">8.5 h/r</h3>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-500"> By: Sullivan</h3>
                  <button className="bg-indigo-500 rounded-sm border-indigo-500 p-2 hover:bg-indigo-600 text-white hover:rounded-md ease-in duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
