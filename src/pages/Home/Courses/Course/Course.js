import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const Course = ({ item }) => {
    const { name, _id } = item
    return (
        <div className="shadow-md rounded-md border-b-4 hover:border-b-blue-400 border-b-blue-300 bg-slate-100 rounded-t-lg overflow-hidden">
            <div className='overflow-hidden'>
                <img className='hover:scale-105 ease-in duration-300' src="https://i.ibb.co/PxFbNX3/course-11-b10ef53de8.jpg" alt="" srcSet="" />
            </div>
            <div className="mx-3">
                <div className="flex justify-between items-center my-2">
                    <ReactStars
                        count={5}
                        size={24}
                        edit={null}
                        value={4}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <h3 className="font-semibold text-gray-500  ">12 Students</h3>
                </div>
                <h1 className="text-1xl font-semibold mt-2">Lua Programming and Game Development with LOVE in 2021</h1>
                <div className="flex justify-between my-3">
                    <h3 className="font-semibold text-gray-500"><span >Price: $</span>199 /-</h3>
                    <h3 className='text-gray-500 font-semibold' >8.5 h/r</h3>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className='font-semibold text-gray-500' > By: {name}</h3>
                    <Link to={`/${_id}`} className="bg-indigo-500 rounded-sm border-indigo-500 p-2 hover:bg-indigo-600 text-white hover:rounded-md ease-in duration-300">Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;