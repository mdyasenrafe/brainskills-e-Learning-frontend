import React from "react";
import Reviews from "../Reviews/Reviews";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import TopCategory from "../TopCategory/TopCategory";
import Instructor from "../Instructor/Instructor";
import Courses from "../Courses/Courses/Courses";
import Blogs from "../Blogs/Blogs";
import Events from "../Events/Events";
import Navbar from "../Navbar/Navbar";
import { ScrollTop } from "../../Scroll/Scroll";
import Footer from "../../Shared/Footer/Footer";
import Feature from "../Feature/Feature";
import OurAchivement from "../OurAchivement/OurAchivement";
import TopHeader from "../../Shared/TopHeader/TopHeader";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TopHeader />
            
            <Feature />
            <TopCategory />
            <Courses />
            <OurAchivement />
            <Instructor />
            <Events />
            <Blogs />
            <Reviews />
            <JoinCommunity />
            <ScrollTop></ScrollTop>
            <Footer />
        </div>
    );
};

export default Home;
