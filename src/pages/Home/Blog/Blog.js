import React from "react";
import moment from "moment";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { blogTitle, blogPhoto, categroy, createAt, _id } = props.data;

  return (
    <section>
      <div className="overflow-hidden shadow-lg rounded-t-md group">
        <div className="h-full">
          <div className="overflow-hidden">
            <img
              className="group-hover:scale-105 ease-in-out duration-300"
              src={blogPhoto}
              alt=""
            />
          </div>
          <div className="p-5 space-y-2">
            <div className="flex  items-center justify-between">
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
            <h3 className=" font-bold hover:text-indigo-500">{blogTitle}</h3>
          </div>
        </div>
        <Link to={`blog/${_id}`}>
          <button
            type="button"
            className="bg-indigo-500 ... text-white p-2 flex w-full items-center justify-center text-center mx-auto rounded-md"
          >
            Join Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
