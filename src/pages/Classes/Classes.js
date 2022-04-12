import React from 'react';
import './Classes.css'
import ReactPlayer from 'react-player/lazy';
import { FiBookmark } from "react-icons/fi";

const url = "https://youtu.be/Ke90Tje7VS0";
// dropdown list 
const qna = [
    {
        id: 1,
        name: "Welcome to React",

    },
    {
        id: 2,
        name: "Welcome to React",

    },
    {
        id: 3,
        name: "Welcome to React",

    },
    {
        id: 4,
        name: "Welcome to React",
    },
    {
        id: 1,
        name: "Welcome to React",

    },
    {
        id: 2,
        name: "Welcome to React",

    },
    {
        id: 3,
        name: "Welcome to React",

    },
    {
        id: 4,
        name: "Welcome to React",
    },
    {
        id: 1,
        name: "Welcome to React",

    },
    {
        id: 2,
        name: "Welcome to React",

    },
    {
        id: 3,
        name: "Welcome to React",

    },
    {
        id: 4,
        name: "Welcome to React",
    },
    {
        id: 1,
        name: "Welcome to React",

    },
    {
        id: 2,
        name: "Welcome to React",

    },
    {
        id: 3,
        name: "Welcome to React",

    },
    {
        id: 4,
        name: "Welcome to React",
    },
    {
        id: 1,
        name: "Welcome to React",

    },
    {
        id: 2,
        name: "Welcome to React",

    },
    {
        id: 3,
        name: "Welcome to React",

    },
    {
        id: 4,
        name: "Welcome to React",
    },
]

const Classes = () => {

    return (
        <div className='bg-white'>
            <div className='container mx-auto py-10 px-4 '>
                <h1 className='text-3xl py-2'>Course Name: React Js</h1>
                <div className="lg:flex space-y-10 lg:space-y-0 lg:space-x-8">
                    {/* recorder  */}
                    <div className="w-full lg:w-8/12 overflow-hidden rounded-md ">
                        <div className='relative'>
                            <ReactPlayer
                                className="react-player"
                                url={url}
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
                                onStart
                                onBuffer
                            />
                            <div className='absolute right-0 -bottom-7  py-2 px-5 bg-indigo-900 w-full text-white'>
                                <button className='flex items-center float-right'>Bookmark <FiBookmark className='ml-2' /> </button>
                            </div>
                        </div>
                        <div className='pb-4 pt-10 px-2 flex justify-between	items-center'>
                            <h2 className='text-2xl '>What is react js?</h2>
                            <div className='space-x-4'>
                                <button className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full hover:bg-blue-600 hover:text-white ease-out duration-300'>Previous</button>
                                <button className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full bg-blue-600 text-white'>Next</button>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-red-500'>Copyright warning</h4>
                        </div>
                    </div>
                    {/* dropdown list  */}
                    <div className="lg:w-4/12 " >
                        <div className='py-3 mb-4 px-4 bg-blue-400 border rounded-t-md '>
                            <input className='py-2 w-full outline-none rounded-sm bg-gray-50 px-3' type="text " placeholder='Search lesson' />
                        </div>
                        <div className='w-full overflow-y-scroll h-3/6 rounded-lg overflow-hidden  '>
                            {
                                qna.map(item => (
                                    <div key={item?.id}>
                                        <button className='w-full text-left p-2 py-3 mb-2 shadow-sm rounded-lg font-semibold bg-white border border-blue-100 text-gray-800 hover:shadow-md hover:border-emerald-400 ease-in-out duration-300 '>{item.name}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;