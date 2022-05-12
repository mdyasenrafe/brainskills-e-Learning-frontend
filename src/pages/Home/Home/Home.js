import React from "react";
import Reviews from "../Reviews/Reviews";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import TopCategory from "../TopCategory/TopCategory";
import Instructor from "../Instructor/Instructor";

import Blogs from "../Blogs/Blogs";
import Events from "../Events/Events";
import { ScrollTop } from "../../Scroll/Scroll";
import Feature from "../Feature/Feature";
import OurAchivement from "../OurAchivement/OurAchivement";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Courses from "../../Home/Courses/Courses";
// import Course2 from "../../Course2/Course2";


const Home = () => {
  return (
    <div>
      <TopHeader />
      <Feature />
      <TopCategory />
      {/* <Course2/> */}
      <Courses />
      <OurAchivement />
      <Instructor />
      <Events />
      <Blogs />
      <Reviews />
      <JoinCommunity />
      <ScrollTop></ScrollTop>
    </div>
  );
};

export default Home;
