import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const OurAchivement = () => {


    return (
        <section className="py-2">
            <div className="container mx-auto pt-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-16 ">
                    <div className="flex flex-col justify-center items-center h-48 text-indigo-500  shadow-md rounded-md bg-slate-50">
                        <div>
                            <h1 className='mx-auto font-Roboto font-bold text-3xl lg:text-4xl my-1'>

                                <CountUp end={2500} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h1>
                        </div>
                        <div >
                            <h2>Courses & Videos</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-48 text-indigo-500  shadow-md rounded-md bg-slate-50">
                        <div>
                            <h1 className='mx-auto font-Roboto font-bold text-3xl lg:text-4xl my-1'>

                                <CountUp end={30000} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h1>
                        </div>
                        <div >
                            <h2>Students Enrolled</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-48 text-indigo-500  shadow-md rounded-md bg-slate-50">
                        <div>
                            <h1 className='mx-auto font-Roboto font-bold text-3xl lg:text-4xl my-1'>

                                <CountUp end={100} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h1>
                        </div>
                        <div >
                            <h2>Courses Instructors</h2>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center h-48 text-indigo-500  shadow-md rounded-md bg-slate-50">
                        <div>
                            <h1 className='mx-auto font-Roboto font-bold text-3xl lg:text-4xl my-1'>

                                <CountUp end={45000} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h1>
                        </div>
                        <div >
                            <h2>Satisfaction Rate</h2>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default OurAchivement;