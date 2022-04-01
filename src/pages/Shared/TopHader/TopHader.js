import React from 'react';
import banner from "../../../images/banner-bg.jpg";
import banner1 from "../../../images/banner-img.png"

const TopHader = () => {
    return (
        <div className='' style={{ backgroundImage: `url(${banner})`, height: "100vh", backgroundSize: "cover", width: "100%" }}>


            <div className='grid md:grid-cols-2 xs:grid-cols-1'>

                <div className='grid items-center pl-3 pt-20 md:pt-0'>
                    <div>
                        <h5 className=''>FOR A BETTER FUTURE</h5>
                        <h1 className='text-5xl font-extrabold'>We Have All Kinds Of <span className='text-green-600'>Courses</span> Collection</h1>
                    </div>
                </div>


                <div >

                    <img className='mt-24 md:mt-0 h-full w-full' src={banner1} alt="" srcset="" />

                </div>
            </div>

        </div>
    );
};

export default TopHader;