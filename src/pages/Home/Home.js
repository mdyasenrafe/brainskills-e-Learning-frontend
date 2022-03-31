import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import TopCategory from './TopCategory/TopCategory';
import Instructor from "./Instructor/Instructor";
const Home = () => {
    return (
        <div>
            <TopCategory />
            <Reviews />
            <Instructor />
            <JoinCommunity></JoinCommunity>
        </div>
    );

};

export default Home;
