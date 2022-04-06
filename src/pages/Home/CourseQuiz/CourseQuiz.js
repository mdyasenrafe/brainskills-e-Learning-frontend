import React from 'react';

const CourseQuiz = () => {
    return (
        <div className="container ml-10">
            <h4 className="text-xl font-semibold my-8">Complete Web Development Course With BrainSkills e-Learning</h4>
            <div>
                <p className="text-lg font-medium">What is a semantic tag?</p>
                <div className='lg:w-6/12'>
                    <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Make the website tags meaningful
                        </label>
                    </div>
                    <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                        Non semantic code will throw errors
                        </label>
                    </div>
                    <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                        Every html tags are semantic
                        </label>
                    </div>
                    <div class="form-check bg-zinc-300 font-medium text-base p-3 m-4">
                        <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                        Use plain text to avoid semantic and non semantic
                        </label>
                    </div>
                </div>
                <button className='h-11 bg-green-500 w-32 rounded-3xl'>Next</button>
            </div>
        </div>
    );
};

export default CourseQuiz;