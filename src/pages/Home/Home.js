import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import TopCategory from './TopCategory/TopCategory';
import Instructor from "./Instructor/Instructor";
import Courses from './Courses/Courses';
import Navbar from '../../Components/Navbar/Navbar';
import TopHader from '../../Components/TopHader/TopHader';
import AboutUs from '../../Components/AboutUs/AboutUs';
import { ScrollTop } from '../../Components/Scroll/Scroll';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopHader></TopHader>
            <AboutUs></AboutUs>
            <TopCategory />
            <Courses />
            <Reviews />
            <Instructor />
            <JoinCommunity />
            <ScrollTop></ScrollTop>
        </div>
    );

};

export default Home;
