import React from 'react';
import './Classes.css'
import ReactPlayer from 'react-player/lazy';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { MdPlayCircleOutline } from "react-icons/md";


const url = "https://youtu.be/Ke90Tje7VS0";
// dropdown list 
const qna = [
    {
        id: 1,
        name: "Welcome to React",
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
    },
    {
        id: 2,
        name: "Welcome to React",
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
    },
    {
        id: 3,
        name: "Welcome to React",
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
    },
    {
        id: 4,
        name: "Welcome to React",
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
]

const Classes = () => {

    return (
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;