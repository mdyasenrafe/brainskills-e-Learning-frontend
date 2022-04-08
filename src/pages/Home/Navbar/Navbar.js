import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../Shared/TopNavbar/TopNavbar";
import {
  HiOutlineShoppingCart,
  HiOutlineLogout,
  HiOutlineBookmark,
  HiOutlineViewGrid,
  HiOutlineAdjustments,
  HiOutlineX,
} from "react-icons/hi";

import GetUser from "../../../hooks/GetUser";
import { getCartApi } from "../../../API";
// links
const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Course",
    url: "/course",
  },
  {
    id: 4,
    name: "Event",
    url: "/event",
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [showUserSetting, setShowUserSetting] = useState(false);
  // handel scroll change header
  const headerChange = () => {
    if (window.scrollY > 10) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };
  window.addEventListener("scroll", headerChange);

  const { user } = GetUser();

  const logout = () => {
    localStorage.clear();
    window.location.href = "/home";
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [carts, setCarts] = useState([]);

  const fetchData = async () => {
    const res = await getCartApi();
    if (res?.error === true) {
    } else {
      setCarts(res.data);
    }
  };

  return (
    <div className="px-4">
      {!headerFixed && <TopNavbar />}
      <div
        className={`${
          headerFixed
            ? "fixed bg-gray-100 py-1 z-30  shadow-lg"
            : "z-30 bg-color py-1 "
        } w-full  transition-all delay-75 ease-in-out  `}
      >
        <div className="relative">
          {/* For large screens */}
          <div className="px-2">
            <div className="container mx-auto  flex justify-between px-4 items-center">
              {/* logo */}
              <Link to="/">
                <img
                  className="h-16 py-1 cursor-pointer"
                  src="https://i.ibb.co/0YX9h1H/download-2.png"
                  alt=""
                />
              </Link>
              {/* links */}
              <div className="hidden md:flex space-x-4 items-center">
                {links.map((link) => (
                  <Link
                    to={link.url}
                    key={link.id}
                    onClick={() => setShowMenu(false)}
                    className="cursor-pointer  transform text-black uppercase hover:scale-105 ease-in-out duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="relative">
                  <Link to="/cart">
                    <HiOutlineShoppingCart className="text-2xl text-blue-500" />
                  </Link>
                  <div className="absolute -top-2 -right-1 bg-red-500 text-xs rounded-full w-4 h-4  text-white">
                    {" "}
                    <Link to="/cart">
                      <small className="flex items-center justify-center">
                        {carts?.length}
                      </small>{" "}
                    </Link>
                  </div>
                </div>
                {/* avatar  nav */}
                {user?.photoUrl && (
                  <button
                    onClick={
                      showUserSetting
                        ? () => setShowUserSetting(false)
                        : () => setShowUserSetting(true)
                    }
                  >
                    <img className="avatar p-1" alt="" src={user?.photoUrl} />
                  </button>
                )}
              </div>
              {/* menu button  */}
              <div className="flex md:hidden items-center space-x-3">
                <div className="relative">
                  <Link to="/cartDetails">
                    <HiOutlineShoppingCart className="text-2xl text-blue-500" />
                  </Link>
                  <div className="absolute -top-2 -right-1 bg-red-500 text-xs rounded-full w-4 h-4  text-white">
                    <small className="flex items-center justify-center">
                      {carts?.length}
                    </small>
                  </div>
                </div>
                {user?.photoUrl && (
                  <button
                    onClick={
                      showUserSetting
                        ? () => setShowUserSetting(false)
                        : () => setShowUserSetting(true)
                    }
                  >
                    <img className="avatar p-1" alt="" src={user?.photoUrl} />
                  </button>
                )}
                {showMenu && (
                  <button
                    onClick={() => setShowMenu(false)}
                    aria-label="close menu"
                    className="outline-none float-right ease-in-out duration-300 rounded "
                  >
                    <svg
                      className="fill-stroke text-gray-900"
                      width={30}
                      height={30}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 4L4 12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 4L12 12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
                {!showMenu && (
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className={`${
                      !headerFixed && "text-black"
                    }  ml-3 outline-none rounded ease-in-out duration-300 focus:ring-gray-600`}
                  >
                    <svg
                      className="fill-stroke"
                      width={30}
                      height={30}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* user setting  */}
          <div
            className={`${
              showUserSetting ? "absolute" : "hidden"
            } top-16 right-4 shadow-md py-5 z-30 rounded-lg w-60  border bg-white  xl:right-28`}
          >
            <div className="">
              <div className="px-4">
                <HiOutlineX
                  onClick={() => setShowUserSetting(false)}
                  className="border text-2xl  shadow-sm text-gray-400 rounded-md cursor-pointer"
                />
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500 mx-auto"
                  src={user?.photoUrl}
                  alt=""
                />
                <h1 className="text-lg font-semibold text-center py-3">
                  {user?.userName}
                </h1>
              </div>
              <hr />
              <div onClick={() => setShowUserSetting(false)} className="pb-2">
                <Link
                  to={"/userDashboard"}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                >
                  <HiOutlineViewGrid className="mr-2" />
                  Dashboard
                </Link>
                <Link
                  to={"/bookmark"}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                >
                  <HiOutlineBookmark className="mr-2" />
                  Bookmark
                </Link>
                <Link
                  to={"/"}
                  className="flex items-center px-4 py-2 hover:bg-gray-200 text-gray-600 hover:text-gray-900"
                >
                  <HiOutlineAdjustments className="mr-2" />
                  Setting
                </Link>

                <p
                  onClick={logout}
                  className="flex items-center px-4 py-2 hover:bg-gray-200
                  text-gray-600 hover:text-gray-900"
                >
                  <HiOutlineLogout className="mr-2" />
                  LogOut
                </p>
              </div>
            </div>
          </div>

          {/*Screen  small*/}
          <div
            className={`${
              showMenu ? "flex ease-in-out duration-300 " : "hidden"
            } absolute  left-0 z-30  w-full backdrop-blur-md bg-opacity-80 bg-white h-screen`}
          >
            <div className="py-3 px-5 container mx-auto">
              <div
                data-aos="fade-down"
                className="grid justify-center justify-items-center pt-16 "
              >
                <ul className=" grid gap-5 text-lg md:text-xl  ">
                  {links.map((link) => (
                    <a
                      href={link.url}
                      key={link.id}
                      onClick={() => setShowMenu(false)}
                      className="cursor-pointer hover:text-gray-900 transform hover:translate-x-2 text-black font-semibold uppercase hover:scale-110 ease-in-out duration-300"
                    >
                      {link.name}
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
