import React from 'react';

const CreateAdmin = () => {
    return (
        <div>
            <h1 className='py-3 text-xl px-4 font-semibold text-gray-600'>Create Admin</h1>
            <hr />
            <div className='px-4 py-5 grid space-y-3'>
                <div className='grid'>
                    <label className='font-semibold text-gray-600 py-2'>Your Name</label>
                    <input className='border p-2 outline-none rounded-md shadow-sm' type="text" placeholder='Your Name..' />
                </div>
                <div className='grid'>
                    <label className='font-semibold text-gray-600 py-2'>Your Email</label>
                    <input className='border p-2 outline-none rounded-md shadow-sm' type="text" placeholder='Your Email..' />
                </div>
                <button className='bg-blue-500 p-2 text-gray-50 shadow-sm rounded-md '>Submit</button>
            </div>
        </div>
    );
};

export default CreateAdmin;