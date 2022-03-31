import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import TopCategory from './TopCategory/TopCategory';
import Instructor from "./Instructor/Instructor";
import Courses from './Courses/Courses';
const Home = () => {
    return (
        <div>
            <TopCategory />
            <Courses />
            <Reviews />
            <Instructor />
            <JoinCommunity />
        </div>
    );

};

export default Home;
