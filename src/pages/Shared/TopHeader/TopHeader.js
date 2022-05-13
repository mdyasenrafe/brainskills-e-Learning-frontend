import React from "react";
import banner from "../../../images/banner-bg.jpg";
import banner1 from "../../../images/banner-img.png";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const TopHeader = () => {
  let navigation = useNavigate();

  return (
    <div
      className="relative max-h-full md:pb-0 pt-20 bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto grid md:grid-cols-2 xs:grid-cols-1 py-0 absuolute top-1/2 left-1/2  translate-1/2">
        <div className="grid items-center pl-3">
          <div className="space-y-4">
            <h5 className="text-sm font-semibold text-blue-400">
              FOR A BETTER FUTURE
            </h5>
            <h1 className=" text-4xl lg:text-5xl xl:text-6xl font-bold mt-2">
              {" "}
              We Have All Kinds Of
              <span className="text-green-600"> Courses</span> Collection
            </h1>
            <h6 className="text-gray-500 text-base pt-2">
              The experience of our instructors benefits your career
            </h6>

            {/* search input  */}
            {/* <div className="">
              <form className=" flex">
                <input
                  className="shadow border rounded-l-md w-2/3 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Search your course"
                />
                <button
                  onClick={navigation("/course")}
                  className="px-4 text-lg rounded-r-lg bg-indigo-500  font-bold p-2 text-white uppercase border-indigo-500 border-t border-b border-r hover:bg-indigo-800"
                >
                  <HiOutlineSearch />
                </button>
              </form>
            </div> */}
            {/* popular search */}
            {/* <div className="flex items-center text-gray-600">
              <h1 className="">Popular Search:</h1>
              <ul className="space-x-3 ml-2 flex">
                <li className="border-green-400 rounded-full border px-1.5 text-sm py-0.5">
                  Design
                </li>
                <li className="border-green-400 rounded-full border px-1.5 text-sm py-0.5">
                  Design
                </li>
                <li className="border-green-400 rounded-full border px-1.5 text-sm py-0.5">
                  Design
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div>
          <img className="ml-2 pt-3 md:mt-0 " src={banner1} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
