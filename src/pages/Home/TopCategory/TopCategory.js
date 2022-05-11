import React from "react";

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
    imgs: "https://i.ibb.co/XLtdwZ1/digital-markt.jpg",
    courseName: "Digital Markating",
  },
  {
    id: 2,
    imgs: "https://i.ibb.co/8Kd6LST/images-7.jpg",
    courseName: "Web English",
  },
  {
    id: 3,
    imgs: "https://i.ibb.co/y5H9zZD/images-5.jpg",
    courseName: "Web Bangla",
  },
  {
    id: 4,
    imgs: "https://i.ibb.co/LP8KmqW/download-4.jpg",
    courseName: "Web Design ",
  },
  {
    id: 5,
    imgs: "https://i.ibb.co/h9qK6vw/download-3.jpg",
    courseName: "Web Design ",
  },
  {
    id: 6,
    imgs: "https://i.ibb.co/gzTFDPw/images-6.jpg",
    courseName: "Web Design ",
  },
  {
    id: 7,
    imgs: "https://i.ibb.co/XLtdwZ1/digital-markt.jpg",
    courseName: "Web Design ",
  },
  {
    id: 8,
    imgs: "https://i.ibb.co/m8N8Mqs/images-4.jpg",
    courseName: "Web Design ",
  },
];

const TopCategory = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h1 className=" md:text-center md:w-3/5 lg:w-2/5 mx-auto font-Roboto font-bold text-3xl lg:text-4xl ">
          <span className="">Explore </span>
          Our Top Trendy Course
          <span className="relative ml-2">
            Category
            {/* animation */}
            <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
              <div className="w-16 h-1.5 flex rounded-full  bg-blue-500">
                <div className="w-6 h-1.5  rounded-full  bg-red-500"></div>
                <div className="w-6 h-1.5  rounded-full  bg-yellow-500"></div>
              </div>
            </div>
          </span>
        </h1>
      </div>
      <div className="container mx-auto ">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            "@0.50": {
              slidesPerView: 1,
            },
            "@1.00": {
              slidesPerView: 2,
            },
            "@1.25": {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            "@1.75": {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index} className="py-12 ">
              {/* <div className=" mx-auto w-72 h-auto md:w-56 shadow-md border hover:shadow-none ease-in-out duration-300 border-gray-100 rounded-lg">
                <div className="mx-auto py-6 w-40 h-35">
                  <img src={course.imgs} alt="" srcSet="" />
                </div>
                <div className="text-center">
                  <h2 className="font-bold text-1xl py-4">
                    {course.courseName}
                  </h2>
                </div>
              </div> */}
              <ul>
                <li class="booking-card" style={{ backgroundImage: `url(${course.imgs})` }}>
                  <div class="book-container">
                    <div class="content">
                      {/* <button class="btn">Add to card</button> */}
                    </div>
                  </div>
                  <div class="informations-container">
                    <h2 class="title">{course.courseName}</h2>
                  </div>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopCategory;
