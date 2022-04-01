import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import { getBlogs } from '../../../API';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await getBlogs();
        if (res.error.true === "") {
        } else {
            setBlogs(res.data);
            console.log(res.data);
        }
    }
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className='text-4xl font-bold text-center mb-10'>Latest From Our Blogs</h1>
            <div className='grid grid-cols-3 gap-4 '>
                {
                    blogs?.map(blog => <Blog data={blog}>

                    </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;