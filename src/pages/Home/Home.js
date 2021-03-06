import React from 'react';
import Reviews from '../Home/Reviews/Reviews';
import JoinCommunity from './JoinCommunity/JoinCommunity';
import TopCategory from './TopCategory/TopCategory';
import Instructor from "./Instructor/Instructor";
import Courses from './Courses/Courses';
import Navbar from './Navbar/Navbar';
import TopHader from '../Shared/TopHader/TopHader';
import AboutUs from './AboutUs/AboutUs';
import { ScrollTop } from '../Scroll/Scroll';
import Footer from '../Shared/Footer/Footer';

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
            <Footer />
        </div>
    );

};

export default Home;
