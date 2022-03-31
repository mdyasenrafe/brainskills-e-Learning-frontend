import React from "react";
import Reviews from "../Home/Reviews/Reviews";
import Instructor from "./Instructor/Instructor";
import JoinCommunity from "./JoinCommunity/JoinCommunity";

const Home = () => {
  return (
    <div>
      <Reviews />
      <Instructor />
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;
