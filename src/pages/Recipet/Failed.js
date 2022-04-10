import React from 'react';
import { Link } from 'react-router-dom';
import failedImg from "../../images/FailImage.png"

const Failed = () => {
    return (
        <div className='mt-56 grid justify-items-center '>
            <div className='drop-shadow-lg bg-gray-50 p-10 rounded'>
            <div className='grid justify-items-center mb-8'>
                <img width="80px" height="80px" src={failedImg} alt="" />
            </div>
            <div className=''>
                <h3>Successfully enrolled course</h3>
                <div className='flex '>
                    <Link to="/" className='mr-3 bg-blue-400 md:px-3  rounded-md text-white hover:border-b-2 border-red-600 ease-in duration-100 '>Go Home</Link>
                    <Link to="/" className=' bg-blue-400 md:px-3  rounded-md text-white hover:border-b-2 border-red-600 ease-in duration-100 '>Try Againe</Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Failed;