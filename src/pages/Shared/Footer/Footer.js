import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import {
  MdOutlineWatchLater,
  MdOutlinePlace,
  MdPhone,
  MdEmail,
} from "react-icons/md";
// Popular
const popularCourse = [
  {
    id: 1,
    name: "Computer Science",
    link: "/",
  },
  {
    id: 2,
    name: "Web Development",
    link: "/",
  },
  {
    id: 3,
    name: "Data Science",
    link: "/",
  },
  {
    id: 4,
    name: "Marketing",
    link: "/",
  },
  {
    id: 5,
    name: "Photography",
    link: "/",
  },
  {
    id: 6,
    name: "Business",
    link: "/",
  },
];
// company
const company = [
  {
    id: 1,
    name: "About Us",
    link: "/",
  },
  {
    id: 2,
    name: "Courses",
    link: "/",
  },
  {
    id: 3,
    name: "Instructor",
    link: "/",
  },
  {
    id: 4,
    name: "Events",
    link: "/",
  },
  {
    id: 5,
    name: "Terms & Conditions",
    link: "/",
  },
  {
    id: 6,
    name: "Privacy Policy",
    link: "/",
  },
];

const Footer = () => {
  return (
    <section className="bg-gray-900">
      <div className="container mx-auto px-4 space-y-5 py-16">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img className="w-2/4" src="./logo.png" alt="" />
            <p className="text-white">
              Vivamus suscipit tortor eget felis porttitor volutpat. Donec
              rutrum congue leo eget malesuada. Curabitu Nulla porttitor
              accumsan tincidunt.
            </p>
            {/* social Media */}
            <div className="flex space-x-2">
              <span className="p-2 bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-gray-50 transition-all hover:rounded-tr-md">
                <FaFacebookSquare />
              </span>
              <span className="p-2 bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-gray-50 transition-all hover:rounded-tr-md">
                <FaInstagramSquare />
              </span>
              <span className="p-2 bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-gray-50 transition-all hover:rounded-tr-md">
                <FaTwitterSquare />
              </span>
              <span className="p-2 bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-gray-50 transition-all hover:rounded-tr-md">
                <FaLinkedin />
              </span>
            </div>
          </div>
          {/* Popular Courses */}
          <div className="">
            <h1 className="text-white text-xl font-bold font-Roboto tracking-wider pb-5">
              Popular Courses
            </h1>
            <ul className="space-y-2">
              {popularCourse.map((item, index) => (
                <li
                  key={index}
                  className="font-Roboto cursor-pointer tracking-wider text-gray-300 hover:text-gray-500 flex items-center group"
                >
                  <div className="w-2 h-2 mr-2 group-hover:rounded-none group-hover:animate-spin group-hover:bg-blue-400 rounded-full bg-gray-50" />{" "}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h1 className="text-white text-xl font-bold font-Roboto tracking-wider pb-5">
              Company
            </h1>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li
                  key={index}
                  className="font-Roboto cursor-pointer tracking-wider text-gray-300 hover:text-blue-500 flex items-center group"
                >
                  <div className="w-2 h-2 mr-2 group-hover:rounded-none group-hover:animate-spin group-hover:bg-blue-400 rounded-full bg-gray-50" />{" "}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h1 className="text-white text-xl font-bold font-Roboto tracking-wider pb-5">
              {" "}
              Contact Info
            </h1>
            <div className="space-y-2">
              <p className="font-Roboto tracking-wider text-gray-300 hover:text-blue-500 flex items-center">
                <MdOutlinePlace className="mr-2 text-xl" />
                bc-25/2f,dhaka,Bangladesh
              </p>
              <p className="font-Roboto tracking-wider text-gray-300 hover:text-blue-500 flex items-center">
                <MdPhone className="mr-2 text-xl" />
                (+880) 17 123 47084
              </p>
              <p className="font-Roboto tracking-wider text-gray-300 hover:text-blue-500 flex items-center">
                <MdEmail className="mr-2 text-xl" />
                help@berenskill.com
              </p>
              <p className="font-Roboto tracking-wider text-gray-300 hover:text-blue-500 flex items-center">
                <MdEmail className="mr-2 text-xl" />
                support@berenskill.com
              </p>
              <p className="font-Roboto tracking-wider text-gray-300 hover:text-blue-500 flex items-center">
                <MdOutlineWatchLater className="mr-2 text-xl" />
                (8 AM - 7 PM, Monday - Friday)
              </p>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <hr />
        <section className="text-center">
          <h6 className="text-gray-300 -tracking-tight text-sm font-Roboto  ">
            Copyright @2022 BerenSkill.Designed By Tame Challenge{" "}
          </h6>
        </section>
      </div>
    </section>
  );
};

export default Footer;
