import React, { useState } from "react";
import { Link } from "react-router-dom";
import TopNavbar from "../../Shared/TopNavbar/TopNavbar";
import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
// links 
const links = [
  {
    id: 1,
    name: 'Home',
    url: "/home"
  },
  {
    id: 2,
    name: 'About',
    url: "/about"
  },
  {
    id: 3,
    name: 'Course',
    url: "/course"
  },
  {
    id: 4,
    name: 'Event',
    url: "/event"
  },
  {
    id: 5,
    name: 'Blog',
    url: "/blog"
  },
  {
    id: 6,
    name: 'Contact',
    url: "/contact"
  },
]



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false)

  // handel scroll change header
  const headerChange = () => {
    if (window.scrollY > 10) {
      setHeaderFixed(true)

    } else {
      setHeaderFixed(false)
    }
  }
  window.addEventListener('scroll', headerChange);


  return (
    <div>
      {
        !headerFixed && <TopNavbar />
      }
      <div className={`${headerFixed ? 'fixed bg-gray-100 py-1 z-30  shadow-lg' : 'z-30 bg-color py-1 '} w-full  transition-all delay-75 ease-in-out  `}>
        <div className="relative">
          {/* For large screens */}
          <div className="px-2">
            <div className="container mx-auto  flex justify-between px-4 items-center">
              {/* logo */}
              <img className="h-16 py-1" src="./logo.png" alt="" />
              {/* links */}
              <div className="hidden lg:flex space-x-4">
                {
                  links.map(link => (
                    <Link to={link.url} key={link.id} onClick={() => setShowMenu(false)} className='cursor-pointer  transform text-black uppercase hover:scale-105 ease-in-out duration-300'>{link.name}</Link>
                  ))
                }
              </div>
              {/* search input and shop  */}
              <div className="hidden lg:flex items-center space-x-3">
                <div className="relative"><Link to="/cartDetails"> <HiOutlineShoppingCart className="text-2xl text-blue-500" /></Link>
                  
                  <div className="absolute -top-2 -right-1 bg-red-500 text-xs rounded-full w-4 h-4  text-white">
                    <small className="flex items-center justify-center">0</small>
                  </div>
                </div>
                <div className="relative ">
                  <input className="py-3 border px-3 focus:border-blue-500 outline-none" type="text" placeholder="Search courses..." />
                  <button className="absolute top-0 right-0 text-lg h-full px-4"><HiOutlineSearch className="text-blue-500" /></button>
                </div>
              </div>
              {/* menu button  */}
              <div className='flex lg:hidden items-center space-x-3'>
                <div className="relative">
                  <HiOutlineShoppingCart className="text-2xl text-blue-500" />
                  <div className="absolute -top-2 -right-1 bg-red-500 text-xs rounded-full w-4 h-4  text-white">
                    <small className="flex items-center justify-center">0</small>
                  </div>
                </div>
                {
                  showMenu && <button onClick={() => setShowMenu(false)} aria-label="close menu" className="outline-none float-right ease-in-out duration-300 rounded ">
                    <svg className="fill-stroke text-gray-900" width={30} height={30} viewBox="0 0 16 16" fill="none" >
                      <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                }
                {
                  !showMenu && <button aria-label="open menu" onClick={() => setShowMenu(true)} className={`${!headerFixed && 'text-black'}  ml-3 outline-none rounded ease-in-out duration-300 focus:ring-gray-600`}>
                    <svg className="fill-stroke" width={30} height={30} viewBox="0 0 24 24" fill="none" >
                      <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                }

              </div>
            </div>
          </div>
          {/*Screen  small*/}
          <div className={`${showMenu ? "flex ease-in-out duration-300 " : "translate-x-full"} absolute  left-0 z-30  w-full backdrop-blur-md bg-opacity-80 bg-white h-screen`}>
            <div className="py-3 px-5 container mx-auto">
              <div data-aos="fade-down" className='grid justify-center justify-items-center pt-16 '>

                <ul className=" grid gap-5 text-lg md:text-xl  ">
                  {
                    links.map(link => (
                      <a href={link.url} key={link.id} onClick={() => setShowMenu(false)} className='cursor-pointer hover:text-gray-900 transform hover:translate-x-2 text-black font-semibold uppercase hover:scale-110 ease-in-out duration-300'>{link.name}</a>
                    ))
                  }
                </ul>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
