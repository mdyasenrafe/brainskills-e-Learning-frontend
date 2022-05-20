import React, { useState } from 'react';
//import ReactStars from "react-rating-stars-component";
import { BsHeart, BsEye, BsStar } from "react-icons/bs";
const Product = ({ book }) => {
    return (
        <div className='group'>
            <div className='relative overflow-hidden'>
                <img className='w-full border rounded-r-md h-80 border-r-4 border-gray-300 max-h-90 group-hover:scale-105 duration-700 ease-in-out' src={`${book?.img}`} alt={`${book?.name}`} />
                <div className='group-hover:absolute  group-hover:flex hidden top-3/4 right-0 w-full'>
                    <div className='justify-center w-full'>
                        <div className='flex space-x-3 justify-center items-center'>
                            {/* <button className='p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white duration-200 ease-in'><BsStar /></button> */}
                            {/* <button className='p-3 rounded-full bg-gray-50 hover:bg-blue-400 hover:text-white duration-200 ease-in'><BsHeart /></button> */}
                            <button onClick={() => {
                                window.open(book?.book);
                            }} className='p-3 rounded-full bg-gray-300 hover:bg-blue-400 hover:text-white duration-200 border ease-in'><BsEye /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* About books*/}
            <div className='grid justify-center  text-center'>
                <h3 className='text-base pt-2 w-11/12 justify-center truncate line-clamp-3  '>{book?.name}</h3>
                {/* // <strong className='text-gray-700'>Free</strong> */}
                {/* <div className='mx-auto'>
                    <ReactStars
                        count={5}
                        size={20}
                        edit={null}
                        value={4}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div> */}
            </div>
        </div >
    );
};

export default Product;