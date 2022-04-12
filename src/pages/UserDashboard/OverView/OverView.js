import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const chartData = [
    {
        id: 1,
        year: 2015,
        courseSell: 8000,
        userLost: 825
    },
    {
        id: 2,
        year: 2016,
        courseSell: 9000,
        userLost: 969
    },
    {
        id: 3,
        year: "jun",
        courseSell: 1100,
        userLost: 505
    },
    {
        id: 4,
        year: 2018,
        courseSell: 7500,
        userLost: 825
    },
    {
        id: 5,
        year: 2019,
        courseSell: 7000,
        userLost: 825
    },
    {
        id: 6,
        year: 2020,
        courseSell: 12000,
        userLost: 225
    },
    {
        id: 7,
        year: 2021,
        courseSell: 9000,
        userLost: 625
    },
    {
        id: 8,
        year: 2022,
        courseSell: 15000,
        userLost: 1625
    },
    {
        id: 10,
        year: 2023,
        courseSell: 18000,
        userLost: 1625
    }

]

const OverView = () => {
    const [userData, setUserData] = useState({
        labels: chartData.map((data) => data?.year),
        datasets: [{
            label: "courseSell",
            data: chartData.map((data) => data?.courseSell),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#f35",
                "#2a71d0",
                "#f35",
            ]
        },
        ],
    });
    return (
        <div className='py-3'>
            <h1 className='font-semibold text-xl px-5  text-gray-700 pb-2'>Address</h1>
            <hr />
            <div className='px-5'>
                <Bar data={userData} />
            </div>
        </div>
    );
};

export default OverView;