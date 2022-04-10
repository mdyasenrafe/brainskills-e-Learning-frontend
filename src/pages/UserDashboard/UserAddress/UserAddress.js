import React from 'react';

const UserAddress = () => {
    return (
        <div className='py-3'>
            <h1 className='font-semibold text-xl px-5  text-gray-700 pb-2'>Address</h1>
            <hr />
            <div className='px-5'>
                {/* Present  */}
                <div>
                    <h1 className='text-xl py-5 font-semibold text-blue-400 tracking-widest'>Present Address</h1>
                    <div className='text-lg'>
                        <div className='grid grid-cols-1 md:grid-cols-2 text-gray-500'>
                            <h2 className='grid pb-4'>
                                <small className='text-gray-600 pb-2 font-semibold'>Your Country</small>
                                Bangladesh
                            </h2>
                            <h2 className='grid pb-4'>
                                <small className='text-gray-600 pb-2 font-semibold'>District</small>
                                Dhaka
                            </h2>
                        </div>
                        <h2 className='grid pb-4 text-gray-500'>
                            <small className='text-gray-600 pb-2 font-semibold'>Street Address</small>
                            Gopalgonj Sadr
                        </h2>
                    </div>
                </div>
                {/* Permanent */}
                <div>
                    <h1 className='text-xl py-5 font-semibold text-blue-400 tracking-widest'>Permanent Address</h1>
                    <div className='text-lg'>
                        <div className='grid grid-cols-1 md:grid-cols-2 text-gray-500'>
                            <h2 className='grid pb-4'>
                                <small className='text-gray-600 pb-2 font-semibold'>Your Country</small>
                                Bangladesh
                            </h2>
                            <h2 className='grid pb-4'>
                                <small className='text-gray-600 pb-2 font-semibold'>District</small>
                                Dhaka
                            </h2>
                        </div>
                        <h2 className='grid pb-4 text-gray-500'>
                            <small className='text-gray-600 pb-2 font-semibold'>Street Address</small>
                            Gopalgonj Sadr
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAddress;