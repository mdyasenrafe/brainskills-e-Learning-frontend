import React from "react";
import ReactStars from "react-rating-stars-component";
const Courses = () => {
  return (


    <section className=" container mx-auto px-4 py-10">
      < div className="container grid grid-cols-1 md:grid-cols-2 " >
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
      </div >

      <div className="container mx-auto p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-auto ">

          <div className="shadow-md rounded-md bg-slate-100 p-1">
            {/* <div className="md:w-70 h-48 shadow-md rounded-md bg-slate-100"> */}
            <div>
              <img src="https://i.ibb.co/PxFbNX3/course-11-b10ef53de8.jpg" alt="" srcSet="" />
            </div>
            <div className="flex justify-between items-center my-2">
              <h3 >
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
              </h3>
              <h3>12 Students</h3>
            </div>
            <div>
              <h1 className="text-1xl font-bold mt-2">Lua Programming and Game Development with LOVE in 2021</h1>
            </div>
            <div className="flex justify-between my-3">

              <h3><span className="font-bold">price:</span> 199$</h3>
              <h3 >8.5 hours</h3>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 > By: Sullivan</h3>
              <button class=" bg-indigo-400 rounded-lg border-indigo-500 p-2 hover:bg-indigo-800 hover:text-white ">Add to Cart</button>
            </div>
          </div>


        </div>
      </div>
    </section >
  );
};

export default Courses;
