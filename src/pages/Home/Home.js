import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import TopCategory from './TopCategory/TopCategory';
import Instructor from "./Instructor/Instructor";
import Courses from './Courses/Courses';
import Blogs from './Blogs/Blogs';
import Events from './Events/Events';

const Home = () => {
    return (
        <div>
            <TopCategory />
            <Courses />
            <Reviews />
            <Instructor />
            <Blogs />
            <Events />
            <JoinCommunity />
        </div>
    );

};

export default Home;
