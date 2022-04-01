import React, { useEffect, useState } from "react";
import { getInstructor } from "../../../API";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../images/swiper.jpg";
import img2 from "../../../images/swiper2.jpg";
import img3 from "../../../images/swiper3.jpg";
import img4 from "../../../images/swiper4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay,Pagination} from "swiper";

const Instructor = () => {
  const swiperdata = [
    {
      img: img,
      name: "abc",
      propesion: "developer"
    },
    {
      img: img2,
      name: "abc",
      propesion: "developer"
    },
    {
      img: img2,
      name: "abc",
      propesion: "developer"
    },
    {
      img: img2,
      name: "abc",
      propesion: "developer"
    },
    {
      img: img2,
      name: "abc",
      propesion: "developer"
    },
    {
      img: img3,
      name: "abc",
      propesion: "developer"
    }
    
  ]
  
  
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getInstructor();
    if (res?.error.true === "") {
    } else {
      console.log(res);
      setInstructors(res.data);
    }
  };

  console.log(instructors);

  return (
    <>
      <section className="container mx-auto py-24">
        <div className="mx-6 grid lg:grid-cols-2 gap-7 spac-y-4">
          <div>
            <h1 className="text-black mb-4 font-bold text-3xl">
              These Are Our{" "}
              <span className="relative ml-2">
                Instructor
                <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
                  <div className="w-16 h-2 animate-pulse  rounded-tr-full bg-red-500"></div>
                </div>
              </span>
            </h1>

            <p className="text-stone-600">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            </p>
            <p className="text-stone-600 mt-4">
              Proin eget tortor risus. Sed porttitor lectus nibh. Praesent
              sapien massa, convallis a pellentesque nec, egestas non nisi.
              Mauris blandit aliquet elit, egettincidunt nibh pulvinar ultricies
              ligula sed magna dictum porta.
            </p>
          </div>
          <div className="Instructor">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={3}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
             
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {
                instructors?.map(data => <SwiperSlide className="py-10">
                  <div style={{ width: "150px" }}>
                    <img style={{ height: "150px", width: "100%" }} src={data.instructorPhoto} alt="" srcset="" />
                  </div>
                  <h1>{data.instructorName}</h1>
                  <h1>{data.instructorDesignation}</h1>


                </SwiperSlide>)
              }

            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
