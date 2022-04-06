import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const url = "https://youtu.be/NAouYzIJAjU";
// dropdown list 


const Classes = () => {

    return (
        <div className='container mx-auto py-10'>
            <h1 className='text-3xl'>Course Name: React Js</h1>
            <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                {/* recorder  */}
                <div class="col-span-2 p-5 py-12 rounded-lg drop-shadow-xl border-2 m-5">
                    <div>
                        <ReactPlayer
                            className="react-player col-span-2"
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
                    <div className='mt-5 flex justify-between	items-center'>
                        <h2 className='text-2xl '>Lorem ipsum dolor sit amet.</h2>
                        <div className=''>
                            <Button variant="outlined" className='' style={{ border: "2px solid rgb(129 140 248)", color: "rgb(129 140 248)", margin: "5px" }}>Previous</Button>
                            <Button variant="contained" style={{ backgroundColor: "rgb(129 140 248)", margin: "5px" }}>Next</Button>
                        </div>
                    </div>
                </div>
                {/* dropdown list  */}
                <div class="col-span-1" >
                    <div>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className='rounded-md'
                            >
                                <Typography>Welcome to React</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                className='rounded-md'
                            >
                                <Typography>Basic React</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                className='rounded-md'
                            >
                                <Typography>Basic React</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                className='rounded-md'
                            >
                                <Typography>Basic React</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                className='rounded-md'
                            >
                                <Typography>Basic React</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion disabled>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                                className='rounded-md'
                            >
                                <Typography>Disabled Accordion</Typography>
                            </AccordionSummary>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;