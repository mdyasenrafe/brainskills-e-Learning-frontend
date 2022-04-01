import React from "react";
import Reviews from "../Home/Reviews/Reviews";
import JoinCommunity from "./JoinCommunity/JoinCommunity";
import TopCategory from "./TopCategory/TopCategory";
import Instructor from "./Instructor/Instructor";
import Courses from "./Courses/Courses";
import Blogs from "./Blogs/Blogs";
import Events from "./Events/Events";

import Navbar from "./Navbar/Navbar";
import TopHader from "../Shared/TopHader/TopHader";
import { ScrollTop } from "../Scroll/Scroll";
import Footer from "../Shared/Footer/Footer";
import Feature from "./Feature/Feature";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TopHader></TopHader>
      <Feature />
      <TopCategory />
      <Courses />
      <Reviews />
      <Instructor />
      <Blogs />
      <Events />
      <JoinCommunity />
      <ScrollTop></ScrollTop>
      <Footer />
    </div>
  );
};

export default Home;
