import React from 'react';
import { Link } from 'react-router-dom';
import sucessImg from "../../images/Sucessfull.jpg"

const Sucess = () => {
    return (
        <div className='mt-56 grid justify-items-center '>
            <div className='drop-shadow-lg bg-gray-200 p-4 rounded'>
            <div className=''>
                <img src={sucessImg} alt="" />
            </div>
            <div className=''>
                <h3>Successfully enrolled course</h3>
                <div className='flex '>
                    <Link to="/" className='mr-3 bg-blue-400 md:px-3  rounded-md text-white hover:border-b-2 border-red-600 ease-in duration-100 '>Go Home</Link>
                    <Link to="/" className=' bg-blue-400 md:px-3  rounded-md text-white hover:border-b-2 border-red-600 ease-in duration-100 '>Deshboard</Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Sucess;