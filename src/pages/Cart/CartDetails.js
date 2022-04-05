import React from 'react';

const CartDetails = () => {
    return (
        <div className=''>
            <h1 className='text-4xl	font-bold text-center my-16'>Cart</h1>
            <div className="mx-6 grid grid-cols-1 lg:grid-cols-2 gap-7 spac-y-4">
                <div>
                    <table className="border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left">Courses</th>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left">Price</th>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300">Practical Web Development: 22 Courses in 1 with practical examples</td>
                                <td className="border border-slate-300">$11.00</td>
                                <td className="border border-slate-300">**</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Lua Programming and Game Development with LOVE in 2021</td>
                                <td className="border border-slate-300">$89.00</td>
                                <td className="border border-slate-300">**</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300">Make a 2D Platformer Character with State Machines in Unity</td>
                                <td className="border border-slate-300">$49.00</td>
                                <td className="border border-slate-300">**</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default CartDetails;