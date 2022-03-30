import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Review from './Review/Review'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Reviews = () => {
    return (
        <section>
            <div className='bg-gray-50 reviews'>
                <div className='container mx-auto px-4 py-10'>
                    <h1 className='md:text-center mx-auto font-Roboto font-bold text-3xl lg:text-4xl lg:w-2/4 xl:w-2/6'>What Students Think and Say About
                        <span className='relative ml-2'>
                            Eduman
                            <div className='absolute animate-bounce -bottom-4 left-0 w-20 h-4'>
                                <div className='w-16 h-2 animate-pulse  rounded-tr-full bg-red-500'></div>
                            </div>
                        </span>
                    </h1>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
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
                        modules={[Pagination]}
                        className="mySwiper">

                        <SwiperSlide className='py-12'>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide className='py-12'>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide className='py-12'>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide className='py-12'>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide className='py-12'>
                            <Review />
                        </SwiperSlide>
                        <SwiperSlide className='py-12'>
                            <Review />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Reviews;