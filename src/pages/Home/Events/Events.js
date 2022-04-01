import React from 'react';

const Events = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-10">
                <h1 className='text-4xl font-bold text-center mb-10'>Upcoming Events Schedule</h1>
                {/* box  */}
                <div className='grid grid-cols-3 gap-4'>
                    <div className=' p-10' style={{ borderBottom: "8px solid #eee4dc", borderRadius: "20px" }}>
                        <div style={{ borderBottom: "1px dashed gray" }}>
                            <h1 className='text-2xl font-bold text-center mb-10' >JavaScript A Language</h1>
                        </div>
                        <div className='grid grid-cols-2 my-5'>
                            <div className='pr-1 flex-column items-center' style={{ borderRight: "1px dashed gray" }}>
                                <h2 className=''>01 Nov </h2>
                                <h1 className='text-1xl font-bold'>2021</h1>
                            </div>
                            <div className='pl-5'>
                                <div className='my-4'>
                                    <h1 className='text-1xl font-bold'>Location</h1>
                                    <h2 className=''>New York, New York </h2>
                                </div>
                                <div>
                                    <h1 className='text-1xl font-bold'>Speaker</h1>
                                    <h2 className=''>Darci Gutierrez</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;