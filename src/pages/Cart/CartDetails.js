import React, { useEffect, useState } from 'react';
import { getCartApi } from '../../API';

const CartDetails = () => {

    const [carts, setCarts] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await getCartApi();
        if (res?.error.true === "") {
        } else {
            setCarts(res.data);
        }
    };

    return (
        <div className="container">
            <h1 className='text-4xl	font-bold text-center py-10'>Cart</h1>
            <div className="mx-10 lg:flex space-y-5 md:space-y-0 justify-between mb-28">
                <div className='lg:w-8/12 '>
                    {carts?.map((cart) => (
                        <table className="border-collapse border-none w-full">
                            <thead>
                                <tr>
                                    <th className="border-none font-medium py-3	px-6 text-left text-base">Courses</th>
                                    <th className="border-none font-medium py-3	px-6 text-left text-base">Price</th>
                                    <th className="border-none font-medium py-3	px-6 text-left text-base"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-none py-4	px-6">
                                        <div className='flex items-center'>
                                            <img className='w-20 h-11' src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg" alt="" />
                                            <h4 className='text-sm pl-2 font-medium'>{cart.courseName}</h4>
                                        </div>
                                    </td>
                                    <td className="border-none py-4	px-6 font-medium text-sm">{cart.coursePrice}</td>
                                    <td className="border-none py-4	px-6 font-medium text-sm">**</td>
                                </tr>
                            </tbody>
                        </table>
                    ))}
                </div>
                <div>
                    <div className="flex">
                        <h3 className="text-xl font-medium m-7 px-6">Total</h3>
                        <h3 className="text-xl font-medium m-7 px-6">$00.00</h3>
                    </div>
                    <button className="px-9 py-3 bg-green-600 m-10">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;



