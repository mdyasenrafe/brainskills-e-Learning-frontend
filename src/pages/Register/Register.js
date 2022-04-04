import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-10 grid grid-cols-2 gap-4'>
            <div className='m-5'>
                <img className='img-flued w-9/12' src="https://www.phitron.io/static/media/login.60b00691.png" alt="" />
            </div>
            <div class="w-full max-w-xl	py-15">
                <form class="bg-white shadow-md rounded px-8 py-16 mb-4 ">
                    <h2 className='text-3xl	font-semibold py-7' style={{ color: "#343c97" }}>Hello There,</h2>
                    <h2 className='text-2xl	font-semibold py-7'>Register now to explore more</h2>
                    <div class="mb-4 my-4">
                        <input class="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Name" />
                    </div>
                    <div class="mb-4 my-4">
                        <input class="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Email" />
                    </div>
                    <div class="mb-4 my-4">
                        <input class="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Phone No" />
                    </div>
                    <div class="mb-6">
                        <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="password" />
                    </div>
                    <div class="">
                        <h2 className='text-1xl	font-semibold py-7'>How did you first here about us?(optional)</h2>
                        <div class="mb-4 my-4">
                            <select name="hearAboutUs" id="cars" className='py-4 rounded' style={{ border: "1px solid lightGray" }}>
                                <option value="Select an option">Select an option</option>
                                <option value="Someone Recommended Me">Someone Recommended Me</option>
                                <option value="Programming Hero Student">Programming Hero Student</option>
                                <option value="Programming Hero community fb group">Programming Hero community fb group</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button class=" my-3 py-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold px- rounded focus:outline-none focus:shadow-outline" type="button" style={{ background: "linear-gradient(86.89deg,#343c97 -111.91%,#31c4f3 79.41% )" }}>
                            Register
                        </button>
                    </div>
                    <h6 className='flex justify-center items-center'>Already have a account? <Link to="/login"> Log in </Link></h6>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;