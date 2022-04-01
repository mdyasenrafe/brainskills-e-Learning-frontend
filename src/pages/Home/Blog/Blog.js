import React from "react";
import moment from "moment";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";

const Blog = (props) => {
  const { blogTitle, blogPhoto, categroy, createAt } = props.data;

  return (
    <>
      <div className="overflow-hidden shadow-lg p-4">
        <img
          className="group-hover:scale-105 ease-in-out transition-transform delay-300"
          src={blogPhoto}
          alt=""
        />
        <div className="flex  items-center justify-between py-4">
          <div className="flex items-center justify-center pr-2">
            <AiOutlineCalendar className="mr-2 text-indigo-500" />
            <p className="hover:text-indigo-500">
              {moment(createAt).add(10, "days").calendar()}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <AiFillTags className="mr-2 text-indigo-500" />
            <p className="hover:text-indigo-500">{categroy}</p>
          </div>
        </div>
        <h3 className="p-5 font-bold hover:text-indigo-500">{blogTitle}</h3>
      </div>
    </>
  );
};

export default Blog;
