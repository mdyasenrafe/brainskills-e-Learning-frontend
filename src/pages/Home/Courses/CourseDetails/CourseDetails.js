import React from 'react';
import Navbar from '../../Navbar/Navbar';
import ReactPlayer from 'react-player/lazy';

const CourseDetails = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto px-4 py-5 relative'>
                <div className=''>
                    <div className="order-2 w-3/4 h-5/5">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            volume
                            controls
                            playing
                            muted
                            playIcon
                            width='100%'
                        />
                        <div>
                            <div>
                                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_60,h_60/https://www.msbacademy.com/file/learn-press-profile/421/37ef3137a16740efb62778fb2b086607.jpg" alt="" />
                                <h4>Teacher</h4>
                                <h1>Nasim Haider Quordahauj</h1>
                            </div>
                            <div>
                                <h4>Categories</h4>
                                <h3>Web Development</h3>
                            </div>
                            <div>
                                
                            </div>

                        </div>
                    </div>
                    {/* Buy Card */}
                    <div className='order-1 md:absolute top-5 right-0 w-96'>
                        <div className='shadow-md text-center bg-white'>
                            <div className='bg-blue-700 py-2 rounded-t-md'>
                                <h1 className='text-3xl text-white'>$8000 <del className='text-gray-200 text-lg'>$12000</del></h1>
                            </div>
                            <div className='px-3 py-2'>
                                <button className='bg-green-600 py-3 px-6 rounded-full text-white '>BUY THIS COURSE</button>
                                <h6 className='py-2'>(100% Satisfaction Guaranteed)</h6>
                                <hr />
                                <ul>
                                    <li>adsa</li>
                                    <li>sad</li>
                                    <li>asd</li>
                                    <li>asd</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl py-2'>ReactPlayer v2.0 changes single player imports and adds lazy loading players</h1>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;