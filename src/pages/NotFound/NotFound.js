import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <div className='container mx-auto px-4 py-24 '>
                <div className='grid items-center'>
                    <div className='mx-auto text-center'>
                        <h1 className=' text-8xl md:text-12xl lg:text-14xl xl:text-15xl font-bold flex font-Poppins mx-auto'>4 <h5 className='transform rotate-45 px-8 text-blue-600'> 0</h5>4</h1>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8'>Page Not Found</h1>
                        <Link to="/" className='font-semibold bg-blue-500 px-7 md:px-9 py-3 md:py-4 rounded-md text-white hover:border-b-4 border-red-600 ease-in duration-100 '>GO TO HOME</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;