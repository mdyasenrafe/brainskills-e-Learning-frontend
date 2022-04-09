import React from 'react';

const Quiz = ({ quiz }) => {
    const { question, answers } = quiz;

    return (
        <div>
            <p className="text-lg font-medium">{ question}</p>
            <div className='lg:w-6/12'>
                <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                        {answers}
                    </label>
                </div>
                <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    {answers}
                    </label>
                </div>
                <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    {answers}
                    </label>
                </div>
                <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                    <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                    {answers}
                    </label>
                </div>
            </div>
            <button className='h-11 bg-green-500 w-32 rounded-3xl'>Next</button>
        </div>
    );
};

export default Quiz;