import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Link, NavLink, Outlet } from "react-router-dom";
const url = "https://www.youtube.com/watch?v=ysz5S6PUM-U"

const CourseDetails = () => {
    return (
        <div>
            <div className='container mx-auto px-4 py-5 relative '>
                <div className='lg:flex lg:justify-between'>
                    {/* video */}
                    <div className='lg:w-7/12 order-0'>
                        <div className="">
                            <ReactPlayer
                                url={url}
                                config={{
                                    youtube: {
                                        playerVars: { showinfo: 1 }
                                    },
                                    facebook: {
                                        appId: '12345'
                                    },
                                    file: {
                                        forceVideo: 'hls.js '
                                    }
                                }}
                                width={"100%"}
                                height={"50vh"}
                                onStart
                                onBuffer
                            />
                        </div>

                        <h1 className='py-5 text-xl font-semibold'>ReactPlayer v2.0 changes single player imports and adds lazy </h1>

                        {/* course  overview link  */}
                        <div>
                            <div className='flex py-5'>
                                <NavLink to="overview" className={({ isActive }) => (isActive ? 'course-overview-link-style bg-blue-600 text-white' : 'course-overview-link-style')}>
                                    Overview
                                </NavLink>
                                <NavLink to="curriculum" className={({ isActive }) => (isActive ? 'course-overview-link-style bg-blue-600 text-white' : 'course-overview-link-style')}>Curriculum</NavLink>
                                <NavLink to="instructor" className={({ isActive }) => (isActive ? 'course-overview-link-style bg-blue-600 text-white' : 'course-overview-link-style')}>Instructor</NavLink>
                                <NavLink to="reviews" className={({ isActive }) => (isActive ? 'course-overview-link-style bg-blue-600 text-white' : 'course-overview-link-style')}>Reviews</NavLink>
                            </div>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    {/* order cart */}
                    <div className='py-14 order-1 lg:w-4/12 lg:absolute  top-2 lg:right-10  '>
                        <div className='relative px-5 bg-gray-50 w-full border py-16  shadow-md mx-auto'>
                            <div className=''>
                                <h3 className='bg-white p-2 border flex justify-between font-semibold rounded-sm text-gray-800'>
                                    <span>Course Price</span>
                                    <span>$ 1,280</span>
                                </h3>
                                <div className='space-y-2 mt-5'>
                                    <h1 className='flex justify-between'>
                                        <span>Instructor</span>
                                        <span>Md Yousuf sheikh</span>
                                    </h1>
                                    <h1 className='flex justify-between'>
                                        <span>Time</span>
                                        <span>8h/r</span>
                                    </h1>
                                    <h1 className='flex justify-between'>
                                        <span>Lecture</span>
                                        <span>50+</span>
                                    </h1>
                                    <h1 className='flex justify-between'>
                                        <span>Level</span>
                                        <span>Advance</span>
                                    </h1>
                                    <h1 className='flex justify-between'>
                                        <span>Certificate</span>
                                        <span>Yes/No</span>
                                    </h1>
                                </div>
                            </div>
                            <Link to="/" className='mx-auto absolute -bottom-5 right-2 px-5 py-2  bg-blue-600 text-white shadow-sm hover:shadow-md '>Add to Cart</Link>
                        </div>
                    </div>
                </div>
                {/* course */}
                <div>

                </div>

            </div>
        </div>
    );
};

export default CourseDetails;