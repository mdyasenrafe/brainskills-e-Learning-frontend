import React, { useEffect } from "react";
import "./Navbar.css";
import nablog from "../../../images/navber.1.png";
import TopNavbar from "../../Shared/TopNavbar/TopNavbar";

const Navbar = () => {
  useEffect(() => {
    const button = document.querySelector("#menu-button");
    const menu = document.querySelector("#menu");

    button.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }, []);
  return (
    <div>
      <TopNavbar></TopNavbar>
      <header>
        <nav
          className="
          flex flex-wrap  items-center  justify-between  w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white h-24 container mx-auto"
        >
          <div>
            <a href="#">
              <img width="150px" src={nablog} alt="" srcSet="" />
            </a>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            className="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="/">
                  Features
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="md:p-4 py-2 block hover:text-purple-400" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400"
                  href="/aboutus"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                  href="#"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
