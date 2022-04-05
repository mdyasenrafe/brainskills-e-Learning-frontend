import React from 'react';

const CartDetails = () => {
    return (
        <div className="container">
            <h1 className='text-4xl	font-bold text-center py-10'>Cart</h1>
            <div className="mx-10 lg:flex space-y-5 md:space-y-0 justify-between mb-28">
                <div className='lg:w-8/12 '>
                    <table className="border-collapse border border-slate-400 w-full">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left text-base">Courses</th>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left text-base">Price</th>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left text-base"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 py-4	px-6">
                                    <div className='flex items-center'>
                                        <img className='w-20 h-11' src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg" alt="" />
                                        <h4 className='text-sm pl-2 font-medium	'>Practical Web Development: 22 Courses in 1 with practical examples</h4>
                                    </div>
                                </td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">$11.00</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">**</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 py-4	px-6">
                                    <div className='flex items-center'>
                                        <img className='w-20 h-11' src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg" alt="" />
                                        <h4 className='text-sm pl-2 font-medium	'>Lua Programming and Game Development with LOVE in 2021</h4>
                                    </div>
                                </td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">$89.00</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">**</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 py-4	px-6">
                                    <div className='flex items-center'>
                                        <img className='w-20 h-11' src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg" alt="" />
                                        <h4 className='text-sm pl-2 font-medium	'>Make a 2D Platformed Character with State Machines in Unity</h4>
                                    </div>
                                </td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">$49.00</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">**</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border-2">
                    <div className="flex">
                        <h3 className="text-xl font-medium m-7 px-6">Total</h3>
                        <h3 className="text-xl font-medium m-7 px-6">$49.00</h3>
                    </div>
                    <button className="px-9 py-3 bg-green-600 m-10">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;



