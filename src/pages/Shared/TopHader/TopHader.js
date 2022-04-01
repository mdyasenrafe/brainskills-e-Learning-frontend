import React from 'react';
import banner from "../../../images/banner-bg.jpg";
import banner1 from "../../../images/banner-img.png"

const TopHader = () => {
    return (
        <div className='relative max-h-full md:pb-0 pt-10' style={{ backgroundImage: `url(${banner})` }}>


            <div className='container mx-auto grid md:grid-cols-2 xs:grid-cols-1 py-0 absuolute top-1/2 left-1/2  translate-1/2'>

                <div className='grid items-center pl-3'>
                    <div>
                        <h5 className=''>FOR A BETTER FUTURE</h5>
                        <h1 className='text-4xl font-extrabold'>We Have All Kinds Of <span className='text-green-600'>Courses</span> Collection</h1>
                        <div className="mt-8">
                            <form className=" flex">
                                <input
                                    className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="search your course"
                                />
                                <button className="px-6 md:px-8 rounded-r-lg bg-indigo-500  font-bold p-2 text-white uppercase border-indigo-500 border-t border-b border-r hover:bg-indigo-800">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
                <div >
                    <img className=' ml-2 md:mt-0' src={banner1} alt="" srcset="" />
                </div>
            </div>

        </div>
    );
};

export default TopHader;