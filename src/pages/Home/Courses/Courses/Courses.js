import React from "react";
import Course from "../Course/Course";

const Courses = () => {
  return (
    <section className=" container mx-auto px-4 py-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 " >
        <div>
          <h1 className=" text-start font-Roboto font-bold text-3xl lg:text-4xl ">
            <span className=""> Explore </span>
            Our All
            <span className="relative ml-2">
              Course
              {/* animation */}
              <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
                <div className="w-16 h-1.5 flex rounded-full  bg-blue-500">
                  <div className="w-6 h-1.5  rounded-full  bg-red-500">
                  </div>
                  <div className="w-6 h-1.5  rounded-full  bg-yellow-500">
                  </div>
                </div>
              </div>
            </span>
          </h1>
        </div>
        <div className="">
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-around md:pt-0">
            <p>View All</p>
            <p>Web</p>
            <p>Photography</p>
            <p>Life Style</p>
          </ul>
        </div>
      </div >
      {/*  */}
      <div className="container mx-auto p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto ">
          <Course />
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </section >
  );
};

export default Courses;
