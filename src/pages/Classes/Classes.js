import React from 'react';
import './Classes.css'
import ReactPlayer from 'react-player/lazy';
<<<<<<< HEAD
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { MdPlayCircleOutline } from "react-icons/md";

=======
import { FiBookmark, FiAlertTriangle } from "react-icons/fi";
>>>>>>> 98d61419f50407da840f5636039fcd7c0b41d887

const url = "https://youtu.be/Ke90Tje7VS0";
// dropdown list 
const qna = [
    {
        id: 1,
        name: "Welcome to React",
<<<<<<< HEAD
        video: [
            {
                id: 1,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 2,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 3,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 4,
                title: "React fast videos",
                link: "/"
            }
        ]
=======

>>>>>>> 98d61419f50407da840f5636039fcd7c0b41d887
    },
    {
        id: 2,
        name: "Welcome to React",
<<<<<<< HEAD
        video: [
            {
                id: 1,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 2,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 3,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 4,
                title: "React fast videos",
                link: "/"
            }
        ]
=======

>>>>>>> 98d61419f50407da840f5636039fcd7c0b41d887
    },
    {
        id: 3,
        name: "Welcome to React",
<<<<<<< HEAD
        video: [
            {
                id: 1,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 2,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 3,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 4,
                title: "React fast videos",
                link: "/"
            }
        ]
=======

>>>>>>> 98d61419f50407da840f5636039fcd7c0b41d887
    },
    {
        id: 4,
        name: "Welcome to React",
<<<<<<< HEAD
        video: [
            {
                id: 1,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 2,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 3,
                title: "React fast videos",
                link: "/"
            },
            {
                id: 4,
                title: "React fast videos",
                link: "/"
            }
        ]
    }
=======
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
>>>>>>> 98d61419f50407da840f5636039fcd7c0b41d887
]

const Classes = () => {

    return (
<<<<<<< HEAD
        <div className='container mx-auto py-10'>
            <h1 className='text-3xl'>Course Name: React Js</h1>
            <div className="lg:flex space-y-10 lg:space-x-8 ">
                {/* recorder  */}
                <div className="w-full lg:w-8/12   rounded-lg drop-shadow-xl border-2">
                    <div className='overflow-hidden rounded-md'>
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
                    </div>
                    <div className='py-4 px-2 flex justify-between	items-center'>
                        <h2 className='text-2xl '>What is react js?</h2>
                        <div className=''>
                            <Button variant="outlined" className='' style={{ border: "2px solid rgb(129 140 248)", color: "rgb(129 140 248)", margin: "5px" }}>Previous</Button>
                            <Button variant="contained" style={{ backgroundColor: "rgb(129 140 248)", margin: "5px" }}>Next</Button>
                        </div>
                    </div>
                </div>
                {/* dropdown list  */}
                <div className="w-full lg:w-4/12 overflow-y-scroll " >
                    <div className=''>
                        {
                            qna.map(item => (
                                <Accordion key={item?.id}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item?.name}</Typography>
                                    </AccordionSummary>

                                    <AccordionDetails >
                                        <Typography>
                                            {
                                                item.video.map(list => <div className='grid space-y-2 justify-start '>
                                                    <button className='flex w-full px-2 items-center text-blue-800 text-lg'><MdPlayCircleOutline className='mr-1 text-green-700 text-xl' />{list.title}</button>                                         </div>)
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
=======
        <div className='bg-white'>
            <div className='container mx-auto pt-5 px-4  '>
                <h1 className='text-3xl py-2'>Course Name: React Js</h1>
                <div className="lg:flex space-y-10 lg:space-y-0 lg:space-x-8  mb-0">
                    {/* recorder  */}
                    <div className="w-full h-fit lg:w-8/12 overflow-hidden rounded-md ">
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
                            <h2 className='text-2xl '>What is react js?</h2>
                            <div className='space-x-4'>
                                <button className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full hover:bg-blue-600 hover:text-white ease-out duration-300'>Previous</button>
                                <button className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full bg-blue-600 text-white'>Next</button>
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
                                    qna.map(item => (
                                        <div key={item?.id}>
                                            <button className='w-full text-left p-2 py-3 mb-2 shadow-sm rounded-lg font-semibold bg-white border border-blue-100 text-gray-800 hover:shadow-md hover:border-emerald-400 ease-in-out duration-300 '>{item.name}</button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
>>>>>>> 98d61419f50407da840f5636039fcd7c0b41d887
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;