import React, { useState } from 'react';
import './Classes.css'
import ReactPlayer from 'react-player/lazy';
import { FiBookmark, FiAlertTriangle } from "react-icons/fi";

const course = [
    {
        id: 1,
        name: "Welcome to React",
        video: "https://youtu.be/Ke90Tje7VS0"

    },
    {
        id: 2,
        name: "React 2",
        video: "https://youtu.be/1NWBO8L81J8"

    },
    {
        id: 3,
        name: "React 3",
        video: "https://youtu.be/SccSCuHhOw0"

    },
    {
        id: 4,
        name: "React 4",
        video: "https://youtu.be/Ke90Tje7VS0"
    },
    {
        id: 5,
        name: "React 5",
        video: "https://youtu.be/Ke90Tje7VS0"

    },
    {
        id: 6,
        name: "React 6",
        video: "https://youtu.be/Ke90Tje7VS0"
    }
]

const Questionbank =
    [
        {
            question: "What is html",
            AnswersText: [
                { Answers: "Is it a English language", isCorrect: false },
                { Answers: "H Markup Language,", isCorrect: true },
                { Answers: "Is it a Bangla language", isCorrect: false },
                { Answers: "Is it a Hindi language", isCorrect: false },
            ]
        },
        {
            question: "What is CSS",
            AnswersText: [
                { Answers: "Is it Coding Style and ab", isCorrect: false },
                { Answers: "Cascading Style Sheets", isCorrect: true },
                { Answers: "Coding system", isCorrect: false },
                { Answers: "Coding securty system", isCorrect: false },
            ]
        },
        {
            question: "What is React",
            AnswersText: [
                { Answers: "React is a language", isCorrect: false },
                { Answers: "React JavaScript library ", isCorrect: true },
                { Answers: "React is it nothing", isCorrect: false },
                { Answers: "React is a game", isCorrect: false },
            ]
        },
        {
            question: "3 +2",
            AnswersText: [
                { Answers: "8", isCorrect: false },
                { Answers: "5", isCorrect: true },
                { Answers: "2", isCorrect: false },
                { Answers: "7", isCorrect: false },
            ]
        },
        {
            question: "5 +5",
            AnswersText: [
                { Answers: "5", isCorrect: false },
                { Answers: "10", isCorrect: true },
                { Answers: "24", isCorrect: false },
                { Answers: "9", isCorrect: false },
            ]
        },
    ]

const Classes = () => {

    // 
    const [question, setQuestion] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);
    const videoChangeHandler = (type) => {
        switch (type) {
            case "increase":

                if (currentIndex === course.length - 1) return;
                setCurrentIndex(currentIndex + 1);
                break;

            case "decrease":
                if (currentIndex === 0) return;
                setCurrentIndex(currentIndex - 1)
                break;

            default:
                break;
        }
    }


    // Question code
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const persent = 100 / Questionbank.length;
    const [velue, setVelue] = useState(persent)


    const handelOnclick = (isCorrect) => {
        setVelue(velue + persent)
        if (isCorrect) {
            setScore(score + 1);
        }
        const nextQuation = currentQuestion + 1;
        if (nextQuation < Questionbank.length) {
            setCurrentQuestion(nextQuation)
        }
        else {
            setShowScore(true)
        }
    }

    const restQuiz = () => {
        setVelue(persent)
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false)
    }

    return (
        <div className='bg-white py-10'>
            <div className='container mx-auto pt-5 px-4 '>
                <h1 className='text-3xl py-2'>Course Name: React Js</h1>
                <div className="lg:flex space-y-10 lg:space-y-0 lg:space-x-8  mb-0">
                    {/* recorder  */}
                    <div className="w-full h-fit lg:w-8/12 overflow-hidden">
                        <div className='relative'>
                            {
                                !question && <div>
                                    <ReactPlayer
                                        className="react-player"
                                        url={course[currentIndex].video}
                                        config={{
                                            youtube: {
                                                playerVars: { showinfo: 1 }
                                            },
                                            facebook: {
                                                appId: '12345'
                                            },
                                            file: {
                                                forceVideo: 'hls.js'
                                            }
                                        }}
                                        width={"100%"}
                                        height={"60vh"}
                                        onStart={true}
                                        onBuffer={true}
                                        controls={true}
                                        light={true}
                                    />
                                    <div className='absolute right-0 -bottom-9  py-2 px-5 bg-indigo-900 w-full text-white'>
                                        <button className='flex items-center float-right'>Bookmark <FiBookmark className='ml-2' /> </button>
                                    </div>
                                </div>
                            }



                            {/*  */}
                            {
                                question &&
                                <div className="mx-auto px-5 py-10 bg-gray-100 shadow-3xl border rounded-2xl">
                                    <div>
                                        <div className="w-full mt-2 mb-3 bg-gray-300 rounded-full h-2">
                                            <div class="bg-green-500 h-2 rounded-full" style={{ width: `${velue}%` }}></div>
                                        </div>
                                    </div>
                                    {showScore ?
                                        <div className="text-center py-20">
                                            <div className="text-xl">
                                                <h2 className='text-5xl font-extrabold'>{score}/{Questionbank.length}</h2>
                                                <h1>Your Score {score}</h1>
                                            </div>
                                            <button className=" p-3 mt-5 text-white rounded-md items-center bg-blue-800" type="submit" onClick={restQuiz}>Try Againe</button>
                                        </div>
                                        :
                                        <div className='p-4 w-5/6 mx-auto'>

                                            <div className="py-10">
                                                <div className="font-semibold text-gray-700 pb-3  text-2xl">
                                                    {Questionbank[currentQuestion].question}
                                                </div>
                                                <div className="grid gap-4">
                                                    {Questionbank[currentQuestion].AnswersText?.map((answer) =>
                                                    (
                                                        <h1 className="py-4 rounded-md px-4 text-gray-600 bg-gray-200 hover:bg-green-600 hover:text-white ease-in-out duration-200" onClick={() => handelOnclick(answer.isCorrect)}>{answer.Answers}</h1>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    }
                                </div>
                            }

                        </div>
                        {/* title and  Next  previous button  */}
                        <div className='pb-4 pt-14 px-2 flex justify-between items-center'>
                            <h2 className='text-2xl '>{course[currentIndex].name}</h2>
                            <div className='space-x-4'>
                                <button onClick={() => { setQuestion(false); videoChangeHandler("decrease") }} className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full hover:bg-blue-600 hover:text-white ease-out duration-300'>Previous</button>
                                {
                                    !question && <>
                                        <button onClick={() => videoChangeHandler("increase")} className='py-2 px-6 md:px-10 border-blue-600 border-2 rounded-full bg-blue-600 text-white'>Next</button>
                                    </>
                                }

                            </div>
                        </div>
                        <div className='px-4 pb-5'>
                            <h4 className='text-red-500 flex items-center'><FiAlertTriangle className='text-xl mr-3' />Copyright warning</h4>
                        </div>
                    </div>

                    {/* dropdown list  */}
                    <div className="lg:w-4/12" >
                        <div>
                            <div className='py-3 mb-4 px-4 bg-blue-400 border rounded-t-md '>
                                <input className='py-2 w-full outline-none rounded-sm bg-gray-50 px-3' type="text " placeholder='Search lesson' />
                            </div>
                            <div className='course-content-list rounded-lg '>
                                {
                                    course.map((item, index) => (
                                        <div key={item?.id}>
                                            <button onClick={() => { setQuestion(false); setCurrentIndex(index) }} className={`${currentIndex === index ? "w-full text-left p-2 py-3 mb-2 shadow-sm rounded-lg font-semibold bg-gray-300 border border-blue-100 text-gray-800  ease-in-out duration-300" : "w-full text-left p-2 py-3 mb-2 shadow-sm rounded-lg font-semibold bg-white border border-blue-100 text-gray-800 hover:shadow-md hover:border-emerald-400 ease-in-out duration-300"}`}>{item?.name}</button>
                                        </div>
                                    ))
                                }
                                <button onClick={() => setQuestion(true)} className='py-3 bg-blue-500 w-full rounded-md text-white' > Question test</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Classes;