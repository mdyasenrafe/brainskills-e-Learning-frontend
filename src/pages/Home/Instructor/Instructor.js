import React, { useEffect, useState } from "react";
import { getInstructor } from "../../../API";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Instructor = () => {



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

  return (
    <>
      <section className="container mx-auto py-24">
        <div className="mx-6 grid grid-cols-1 lg:grid-cols-2 gap-7 spac-y-4">
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
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,

                },
                "@1.50": {
                  slidesPerView: 2,

                },
                "@1.75": {
                  slidesPerView: 3,

                }
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {
                instructors?.map(data => <SwiperSlide className="py-10">
                  <div className="text-center bg-gray-50 p-3 rounded-md shadow-md">
                    <img className="h-48 w-48 rounded-lg mx-auto" src={data.instructorPhoto} alt="" srcset="" />
                    <h1 className="text-lg  font-semibold">{data.instructorName}</h1>
                    <h1>{data.instructorDesignation}</h1>
                  </div>
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