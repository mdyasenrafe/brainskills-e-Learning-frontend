import React from 'react';

const CartDetails = () => {
    return (
        <div className="container">
            <h1 className='text-4xl	font-bold text-center my-16'>Cart</h1>
            <div className="mx-10 grid grid-cols-1 lg:grid-cols-2 gap-7 mb-28">
                <div>
                    <table className="border-collapse border border-slate-400">
                        <thead>
                            <tr>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left text-base">Courses</th>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left text-base">Price</th>
                                <th className="border border-slate-300 font-medium py-3	px-6 text-left text-base"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">Practical Web Development: 22 Courses in 1 with practical examples</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">$11.00</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">**</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">Lua Programming and Game Development with LOVE in 2021</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">$89.00</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">**</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">Make a 2D Platformed Character with State Machines in Unity</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">$49.00</td>
                                <td className="border border-slate-300 py-4	px-6 font-medium text-sm">**</td>
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