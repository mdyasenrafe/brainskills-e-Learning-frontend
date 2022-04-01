import React from 'react';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiFillTags } from "react-icons/ai";

const Blog = (props) => {
    const { blogTitle, blogPhoto, categroy, createAt } = props.data
    // console.log();
    return (
        <div className='group'>
            <div className='grid gap-4 shadow-lg'>
                <div className='overflow-hidden'>
                    <img className="group-hover:scale-105 ease-in-out transition-transform delay-300" src={blogPhoto} alt="" />
                </div>

                <div className='px-5 flex'>
                    <div className='pr-5 flex justify-start content-center'>
                        <AiOutlineCalendar className='mr-5 text-indigo-500' />
                        <p className='hover:text-indigo-500'>{createAt}</p>
                    </div>
                    <div className='flex content-center items-center'>
                        <AiFillTags className='mr-5 text-indigo-500' />
                        <p className='hover:text-indigo-500'>{categroy}</p>
                    </div>
                </div>
                <h3 className='p-5 font-bold hover:text-indigo-500' >{blogTitle}</h3>
            </div>
        </div>
    );
};

export default Blog;