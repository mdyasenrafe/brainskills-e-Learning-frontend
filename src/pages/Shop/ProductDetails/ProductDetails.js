import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <div>
            <div className='container mx-auto px-4 md:px-0'>
                <div className='py-10 md:flex'>
                    <img className='w-6/12' src="https://eduman-react.vercel.app/assets/img/products/product-thumb-10.png" alt="" />
                    <div className='md:ml-10 space-y-5'>
                        <h1 className='text-3xl font-semibold pt-2'>The Almanack</h1>
                        <h3 className='text-xl text-blue-600'>$24.00</h3>
                        <p className='justify w-8/12'>Matent maecenas nec massa viverra aci ute litora aliquam habitant proin commodo bibendum rutru habitant est magnis quisque aliquet congue vesti
                            bulum suscipi erose tellus odio elite purus feugiat prim libero senes nisie gravia
                        </p>
                        <div className='flex space-x-2 mt-4'>
                            <div className='border'>
                                <button className='px-5 h-full text-lg hover:bg-blue-600 hover:text-white'>-</button>
                                <strong className='px-4 font-normal '>0</strong>
                                <button className='px-5 h-full text-lg hover:bg-blue-600 hover:text-white'>+</button>
                            </div>
                            <button className='px-5 py-3 bg-blue-600 text-white  hover:bg-white hover:border hover:text-black border '>Add to Cart</button>
                        </div>
                        {/*  */}
                        <button className='px-5 py-3 border my-2 hover:bg-blue-600 hover:text-white'>Add to Wishlist</button>
                        <div className='max-w-8/12 overflow-hidden'>
                            <div className='justify'>
                                Tag:
                                <span className='px-2 py-1.5 ml-3 bg-gray-200 rounded-md'>App</span>
                                <span className='px-2 py-1.5 ml-3 bg-gray-200 rounded-md'>App</span>
                                <span className='px-2 py-1.5 ml-3 bg-gray-200 rounded-md'>App</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* review */}
                <div className='py-5'>
                    <div className='flex space-x-3'>
                        <NavLink
                            to="description"
                            className={({ isActive }) =>
                                isActive
                                    ? ""
                                    : ""
                            }
                        >
                            Description
                        </NavLink>
                        <NavLink
                            to="productReviews"
                            className={({ isActive }) =>
                                isActive
                                    ? ""
                                    : ""
                            }
                        >
                            Reviews
                        </NavLink>
                        <div />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;