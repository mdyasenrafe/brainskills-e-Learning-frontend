import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' container my-10 grid grid-cols-2 gap-4'>
            <div className='m-5'>
                <img className='img-flued w-9/12' src="https://www.phitron.io/static/media/register.e58071de.png" alt="" />
            </div>
            <div class="w-full max-w-xl	py-15">
                <form class="bg-white shadow-md rounded px-8 py-16 mb-4 ">
                    <h2 className='text-3xl	font-semibold py-7' style={{ color: "#343c97" }}>Welcome Back</h2>
                    <div class="mb-4 my-4">
                        <input class="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                        <input class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="password" />
                    </div>
                    <div class="flex items-center justify-between">
                        <div className='flex items-center justify-between'>
                            <input type="checkbox" class="rounded text-pink-500 mr-3" />
                            <h1>Remember Me</h1>
                        </div>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button class=" my-3 py-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold px- rounded focus:outline-none focus:shadow-outline" type="button" style={{ background: "linear-gradient(86.89deg,#343c97 -111.91%,#31c4f3 79.41% )" }}>
                            Log in
                        </button>
                    </div>
                    <h6>Don't have any account? <Link to="/register"> Register now</Link></h6>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;