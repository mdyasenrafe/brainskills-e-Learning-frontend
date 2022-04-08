import React from 'react';
import "./Bookmark.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Bookmark = () => {
    const tags = [
        {
            name: "A utility-first CSS framework packed with classes like"
        },
        {
            name: "B utility-first CSS framework packed with classes like"
        },
        {
            name: "C utility-first CSS framework packed with classes like"
        }
    ]
    const [data, setData] = React.useState('');

    const handleChange = (event) => {
        setData(event.target.value);
    };
    return (
        <div>
            <div className='h-56 gradi p-16'>
                <h1 className='text-5xl text-center font-extrabold text-white'>Bookmark History</h1>
                <p className='text-center pb-5 text-white font-bold'>Hello You can your things here. You can use Tag, search to find any specific bookmarked video.
                    <br /> Hopefully you like it. Stay with us. We won let you go..huh We won let you go..huh You can use Tag,</p>
            </div>
            <div className="flex justify-center " style={{ marginTop: -35, zIndex: 9999999 }}>
                <div>

                    <form className=" flex">
                        <input 
                            className="icon shadow border rounded-l-md w-96 py-3 px-3 pl-3 text-gray-700 "
                            type="text"
                            placeholder="Search by tag"                          
                        /> 
                        <Box className='bg-white rounded' sx={{ width: "100px" }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label" className='text-black'>Tag</InputLabel>
                                <Select
                                    sx={{
                                        "& .Mui-selected:hover": {
                                            "& .Mui-selectedt": {
                                                border: "0",

                                            }
                                        }
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                "& .MuiMenuItem-root.Mui-selected": {
                                                    backgroundColor: "yellow"
                                                },
                                                "& .MuiMenuItem-root:hover": {
                                                    backgroundColor: "pink"
                                                },
                                                "& .MuiMenuItem-root.Mui-selected:hover": {
                                                    backgroundColor: "red"
                                                }
                                            }
                                        }
                                    }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </form>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mt-14'>
                    {
                        tags.map(tag => <div className='bg-gray-50 mb-8 mt-5 p-5 shadow-lg'>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <div>
                                        <p>{tag.name}</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className=' ml-8'>
                                        <div className='flex ml-5'>
                                            <AiOutlineDelete className='mb-7 mr-4' /> <BsChatSquareDots className='mb-7' />
                                        </div>
                                        <button className="px-1 rounded bg-indigo-400  text-white  border-indigo-500  hover:bg-indigo-800">Go Home
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>)
                    }
                </div>
            </div>
            <Stack className='items-center mt-5 mb-5' spacing={2}>
                <Pagination count={tags.length} />               
            </Stack>
            
        </div>
    );
};

export default Bookmark;