import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { getBlogs } from "../../../API";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await getBlogs();
    if (res.error.true === "") {
    } else {
      setBlogs(res.data);
    }
  };
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Latest From Our
        <span className="relative ml-2">
          Blogs
          <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
            <div className="w-16 h-1.5 flex rounded-full  bg-blue-500">
              <div className="w-6 h-1.5  rounded-full  bg-red-500"></div>
              <div className="w-6 h-1.5  rounded-full  bg-yellow-500"></div>
            </div>
          </div>
        </span>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 spac-y-4">
        {blogs?.map((blog, index) => (
          <Blog key={index} data={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
