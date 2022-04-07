import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { addCartApi, getCourseDetailsApi } from "../../API";
import LoadingSpiners from "../../Componets/LoadingSpiners";
import { Toast } from "../../Componets/Toast";
import Details from "../../hooks/Details";
import GetUser from "../../hooks/GetUser";
const url = "https://www.youtube.com/watch?v=ysz5S6PUM-U";

const CourseDetails = () => {
  const [details, setDetails] = useState();

  const { id } = useParams();

  let { courseDetails } = Details(id);
  const { user } = GetUser();

  let postBody = {
    userName: user?.userName,
    userId: user?._id,
    userPhoneNumber: user?.userPhoneNumber,
    courseName: courseDetails?.courseName,
    courseId: courseDetails?._id,
    coursePrice: courseDetails?.coursePrice,
    coursePhoto: courseDetails?.CoursePhoto,
  };
  const addCart = async () => {
    if (postBody) {
      const res = await addCartApi(postBody);
      if (res?.error === false) {
        Toast.fire({
          icon: "success",
          title: "cart added succesfully",
        });
        window.location.href = "/cart";
      } else {
        Toast.fire({
          icon: "error",
          title: res.message,
        });
      }
    }
  };
  return (
    <div>
      <div className="container mx-auto px-4 py-5 relative ">
        <div className="lg:flex lg:justify-between">
          {/* video */}
          <div className="lg:w-7/12 order-0">
            <div className="">
              <ReactPlayer
                url={url}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                  facebook: {
                    appId: "12345",
                  },
                  file: {
                    forceVideo: "hls.js ",
                  },
                }}
                width={"100%"}
                height={"50vh"}
                onStart
                onBuffer
              />
            </div>

            <h1 className="py-5 text-xl font-semibold">
              {courseDetails?.courseName}
            </h1>

            {/* course  overview link  */}
            <div>
              <div className="flex py-5">
                <NavLink
                  to="overview"
                  className={({ isActive }) =>
                    isActive
                      ? "course-overview-link-style bg-blue-600 text-white"
                      : "course-overview-link-style"
                  }
                >
                  Overview
                </NavLink>
                <NavLink
                  to="curriculum"
                  className={({ isActive }) =>
                    isActive
                      ? "course-overview-link-style bg-blue-600 text-white"
                      : "course-overview-link-style"
                  }
                >
                  Curriculum
                </NavLink>
                <NavLink
                  to="instructor"
                  className={({ isActive }) =>
                    isActive
                      ? "course-overview-link-style bg-blue-600 text-white"
                      : "course-overview-link-style"
                  }
                >
                  Instructor
                </NavLink>
                <NavLink
                  to="reviews"
                  className={({ isActive }) =>
                    isActive
                      ? "course-overview-link-style bg-blue-600 text-white"
                      : "course-overview-link-style"
                  }
                >
                  Reviews
                </NavLink>
              </div>
              <div>
                <Outlet />
              </div>
            </div>
          </div>
          {/* order cart */}
          <div className="py-14 order-1 lg:w-4/12 lg:absolute  top-2 lg:right-10  ">
            <div className="relative px-5 bg-gray-50 w-full border py-16  shadow-md mx-auto">
              <div className="">
                <h3 className="bg-white p-2 border flex justify-between font-semibold rounded-sm text-gray-800">
                  <span>Course Price</span>
                  <span>{courseDetails?.coursePrice}</span>
                </h3>
                <div className="space-y-2 mt-5">
                  <h1 className="flex justify-between">
                    <span>Instructor</span>
                    <span>
                      {courseDetails?.instructorDetail[0].instructorName}
                    </span>
                  </h1>

                  <h1 className="flex justify-between">
                    <span>Level</span>
                    <span>Beginer</span>
                  </h1>
                  <h1 className="flex justify-between">
                    <span>Certificate</span>
                    <span>Yes</span>
                  </h1>
                </div>
              </div>

              <p
                onClick={addCart}
                className="mx-auto absolute -bottom-5 right-2 px-5 py-2  bg-blue-600 text-white shadow-sm hover:shadow-md cursor-pointer"
              >
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        {/* course */}
        <div></div>
      </div>
    </div>
  );
};

export default CourseDetails;
