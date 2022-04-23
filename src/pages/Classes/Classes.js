import React, { useState } from 'react';
import './Classes.css'
import ReactPlayer from 'react-player/lazy';
import { FiBookmark, FiAlertTriangle } from "react-icons/fi";

const course = [
    {
        id: 1,
        name: "Welcome to React",
        video: "https://youtu.be/Ke90Tje7VS0"

    },
    {
        id: 2,
        name: "React 2",
        video: "https://youtu.be/1NWBO8L81J8"

    },
    {
        id: 3,
        name: "React 3",
        video: "https://youtu.be/SccSCuHhOw0"

    },
    {
        id: 4,
        name: "React 4",
        video: "https://youtu.be/Ke90Tje7VS0"
    },
    {
        id: 5,
        name: "React 5",
        video: "https://youtu.be/Ke90Tje7VS0"

    },
    {
        id: 6,
        name: "React 6",
        video: "https://youtu.be/Ke90Tje7VS0"

    }
]



const Classes = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const videoChangeHandler = (type) => {
        switch (type) {
            case "increase":
                if (currentIndex === course.length - 1) return;
                setCurrentIndex(currentIndex + 1)
                break;

            case "decrease":
                if (currentIndex === 0) return;
                setCurrentIndex(currentIndex - 1)
                break;

            default:
                break;
        }
    }

    return (
        <div className='bg-white'>
            <div className='container mx-auto pt-5 px-4  '>
                <h1 className='text-3xl py-2'>Course Name: React Js</h1>
                <div className="lg:flex space-y-10 lg:space-y-0 lg:space-x-8  mb-0">
                    {/* recorder  */}
                    <div className="w-full h-fit lg:w-8/12 overflow-hidden rounded-md ">
                        <div className='relative'>
                            <ReactPlayer
                                className="react-player"
                                url={course[currentIndex].video}
                                config={{
                                    youtube: {
                                        playerVars: { showinfo: 1 }
                                    },
                                    facebook: {
                                        appId: '12345'
                                    },
                                    file: {
                                        forceVideo: 'hls.js'
                                    }
                                }}
                                width={"100%"}
                                height={"60vh"}
                                onStart={true}
                                onBuffer={true}
                                controls={true}
                                light={true}
                            />
                            <div className='absolute right-0 -bottom-9  py-2 px-5 bg-indigo-900 w-full text-white'>
                                <button className='flex items-center float-right'>Bookmark <FiBookmark className='ml-2' /> </button>
                            </div>
                        </div>
                        <div className='pb-4 pt-14 px-2 flex justify-between items-center'>
                            <h2 className='text-2xl '>{course[currentIndex].name}</h2>
                            <div className='space-x-4'>
                                <button onClick={() => videoChangeHandler("decrease")} className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full hover:bg-blue-600 hover:text-white ease-out duration-300'>Previous</button>
                                <button onClick={() => videoChangeHandler("increase")} className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full bg-blue-600 text-white'>Next</button>
                            </div>
                        </div>
                        <div className='px-4 pb-5'>
                            <h4 className='text-red-500 flex items-center'><FiAlertTriangle className='text-xl mr-3' />Copyright warning</h4>
                        </div>
                    </div>
                    {/* dropdown list  */}
                    <div className="lg:w-4/12" >
                        <div>
                            <div className='py-3 mb-4 px-4 bg-blue-400 border rounded-t-md '>
                                <input className='py-2 w-full outline-none rounded-sm bg-gray-50 px-3' type="text " placeholder='Search lesson' />
                            </div>
                            <div className='course-content-list rounded-lg '>
                                {
                                    course.map((item, index) => (
                                        <div key={item?.id}>
                                            <button onClick={() => setCurrentIndex(index)} className='w-full text-left p-2 py-3 mb-2 shadow-sm rounded-lg font-semibold bg-white border border-blue-100 text-gray-800 hover:shadow-md hover:border-emerald-400 ease-in-out duration-300 '>{item?.name}</button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;