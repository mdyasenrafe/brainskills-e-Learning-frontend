import React, { useEffect, useState } from 'react';
import { getDashboardApi } from '../../API';

const EnrollCourse = () => {

    const [enrollCourse, setEnrollCourse] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await getDashboardApi();
        if (res?.error.true === "") {
        } else {
            setEnrollCourse(res.data);
        }
    };

    console.log(enrollCourse)



    return (
        <div className='bg-slate-50'>
            <section className='container'>
                <div className="container mx-auto p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto ">
                        {
                            enrollCourse?.map(coursedata => <>
                                <div className="shadow-md rounded-md border-b-4 hover:border-b-blue-400 border-b-blue-300 bg-slate-100 rounded-t-lg overflow-hidden">

                                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
                                        <div className='overflow-hidden  flex justify-center item-center'>
                                            <img src={coursedata?.coursePhoto} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <div className='p-4 pr-0'>
                                                <h1 className='text-lg'>{coursedata?.courseName}</h1>

                                            </div>

                                            <div className='px-4'>
                                                <h1 className='text-sm'>By : Sullivan</h1>
                                                <h1 className='text-sm'>Web Development</h1>
                                            </div>
                                            <div className='flex justify-start px-4 p-2'>
                                                <button className="bg-indigo-500 rounded-sm border-indigo-500 p-1.5 hover:bg-indigo-600 text-white hover:rounded-md ease-in duration-300">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }




                    </div>
                </div>
            </section>
        </div>
    );
};

export default EnrollCourse;