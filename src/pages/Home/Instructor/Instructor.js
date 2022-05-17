import React, { useEffect, useState } from "react";
import { getInstructor } from "../../../API";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImFacebook2, ImWhatsapp, ImTwitter, ImRss2 } from "react-icons/im";
import "./Instructor.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Instructor = () => {
  const [instructors, setInstructors] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getInstructor();
    if (res?.error.true === "") {
    } else {
      setInstructors(res.data);
    }
  };

  return (
    <>
      <section className="container mx-auto py-24">
        <div className="mx-6 grid grid-cols-1 lg:grid-cols-2 gap-7 spac-y-4">
          {/* details section */}
          <div>
            <h1 className="text-black mb-4 font-bold text-3xl">
              These Are Our{" "}
              <span className="relative ml-2">
                Instructor
                {/* animation */}
                <div className="absolute animate-bounce -bottom-4 left-0 w-20 h-4">
                  <div className="w-16 h-1.5 flex rounded-full  bg-blue-500">
                    <div className="w-6 h-1.5  rounded-full  bg-red-500"></div>
                    <div className="w-6 h-1.5  rounded-full  bg-yellow-500"></div>
                  </div>
                </div>
              </span>
            </h1>

            <p>
              <p className="text-stone-600">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus.
              </p>
              <p className="text-stone-600 mt-4">
                Proin eget tortor risus. Sed porttitor lectus nibh. Praesent
                sapien massa, convallis a pellentesque nec, egestas non nisi.
                Mauris blandit aliquet elit, egettincidunt nibh pulvinar
                ultricies ligula sed magna dictum porta.
              </p>
            </p>
          </div>
          {/* slider section */}
          <div className="Instructor">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                // delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                },
                "@1.50": {
                  slidesPerView: 1,
                },
                "@1.75": {
                  slidesPerView: 1,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {instructors?.map((data, index) => (
                <SwiperSlide key={index} className="py-8">
                  {/* <div className="text-center group overflow-hidden">
                    <div className="relative">
                      <img

                        className="w-full rounded-sm"
                        src={data.instructorPhoto}
                        alt=""
                      />
                      <div className="absolute top-1/4 -translate-x-9  group-hover:translate-x-0 ease-in-out duration-300  left-2 space-y-3">
                        <ImFacebook2 className=" text-gray-600 hover:text-gray-900 text-xl hover:scale-105 ease-in duration-200" />
                        <ImTwitter className=" text-gray-600 hover:text-gray-900 text-xl hover:scale-105 ease-in duration-200" />
                        <ImWhatsapp className=" text-gray-600 hover:text-gray-900 text-xl hover:scale-105 ease-in duration-200" />
                        <ImRss2 className=" text-gray-600 hover:text-gray-900 text-xl hover:scale-105 ease-in duration-200" />
                      </div>
                    </div>
                    <h1>{data.instructorName}</h1>
                    <h1>{data.instructorDesignation}</h1>
                  </div> */}
                  <div class="infocardContainer">
                    <div id="main">
                      <img src={data.instructorPhoto} alt=""/>
                    </div>
                    <div id="textbois">
                      <h2 className="name">{data.instructorName}</h2>
                      <h4>Professional {data.instructorDesignation}</h4>
                      <div id="hotlinks">
                      <a className="ancorTag" href="https://codepen.io/LIMESTA">
                          <img id="codepenio" src="https://i.ibb.co/c6PmngJ/whatsapp-icon-logo-8-CA4-FB831-E-seeklogo-com.png" target="_blank" alt=""></img>
                        </a>
                        <a className="ancorTag" href="https://codepen.io/LIMESTA">
                          <img id="codepenio" src="https://i.ibb.co/61bGjqM/download-6.jpg" target="_blank" alt=""></img>
                        </a>
                        <a className="ancorTag" href="https://codepen.io/LIMESTA">
                          <img id="codepenio" src="https://i.ibb.co/9rJD66C/Facebook-Logo.png" target="_blank" alt=""></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructor;
