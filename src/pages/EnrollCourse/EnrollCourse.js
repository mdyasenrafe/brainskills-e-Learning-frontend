import React from 'react';

const EnrollCourse = () => {
    return (
        <>
            <section className='container'>
                <div className="container mx-auto p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto ">

                        <div className="shadow-md rounded-md border-b-4 hover:border-b-blue-400 border-b-blue-300 bg-slate-100 rounded-t-lg overflow-hidden">

                            <div className="grid grid-cols-2 mx-auto ">


                                <div className='overflow-hidden p-1'>
                                    <img src="https://i.ibb.co/PxFbNX3/course-11-b10ef53de8.jpg" alt="" srcset="" />
                                </div>
                                <div>
                                    <div className='p-2'>
                                        <h1 className='text-xl'>Lua Programming and Game Development with LOVE in 2021</h1>
                                        <div className='my-2'>
                                            <h1>By : Sullivan</h1>
                                            <h1>Web Development</h1>
                                        </div>
                                    </div>

                                    <div className='flex justify-end m-2'>
                                        <button className="bg-indigo-500 rounded-sm border-indigo-500 p-2 hover:bg-indigo-600 text-white hover:rounded-md ease-in duration-300">Continue Course</button>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </>
    );
};

export default EnrollCourse;