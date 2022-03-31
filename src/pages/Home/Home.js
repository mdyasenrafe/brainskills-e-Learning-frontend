import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import TopCategory from './TopCategory/TopCategory';

const Home = () => {
    return (
        <div>
            <TopCategory />
            <Reviews />
            <JoinCommunity></JoinCommunity>
        </div>
    );
};

export default Home;