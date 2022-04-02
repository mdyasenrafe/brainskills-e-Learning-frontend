import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./TopCategory.css";
import { Autoplay, Navigation } from "swiper";

const courses = [
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
  {
    id: 1,
    imgs: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png",
    courseName: "Web Development",
  },
];

const TopCategory = () => {
  return (
    <section className=" py-10">
      <div className="px-4 py-10">
        <h1 className="text-center mx-auto font-Roboto font-bold text-3xl lg:text-4xl ">
          <span className="text-indigo-500 ">Explore</span> <br />
          Our Top Trendy Course
          <span className="relative ml-2">
            Category
            <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
              <div className="w-16 h-2 animate-pulse  rounded-tr-full bg-red-500"></div>
            </div>
          </span>
        </h1>
      </div>
      <div className="container mx-auto ">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },

            "@1.75": {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} className="py-12 ">
              <div className=" mx-auto w-72 h-auto  md:w-56 h-auto shadow-md rounded-md bg-slate-100">
                <div className="mx-auto py-6 w-40 h-35">
                  <img src={course.imgs} alt="" srcSet="" />
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-1xl py-4">
                    {course.courseName}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-16 "> */}

        {/* <div className="flex justify-center w-30 h-30 md:w-48 h-48 shadow-md rounded-md bg-slate-100">
                        <div>
                            <img src="" alt="" srcSet="" />
                        </div>
                        <div>
                            <h2>fghh</h2>
                        </div>
                    </div>
                    <div className="flex justify-center w-full h-30 md:w-48 h-48 shadow-md rounded-md bg-slate-100">
                        dg
                    </div>
                    <div className="flex justify-center w-30 h-30 md:w-48 h-48 shadow-md rounded-md bg-slate-100">
                        dg
                    </div>
                    <div className="flex justify-center w-30 h-30 md:w-48 h-48 shadow-md rounded-md bg-slate-100">
                        dg
                    </div>
                    <div className="flex justify-center w-30 h-30 md:w-48 h-48 shadow-md rounded-md bg-slate-100">
                        dg
                    </div> */}

        {/* </div> */}
      </div>
    </section>
  );
};

export default TopCategory;
