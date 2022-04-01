import React from "react";
import ReactStars from "react-rating-stars-component";

const Reviews = ({ item }) => {

  return (
    <div className="shadow-md border bg-gray-100 p-6 rounded-md group ">
      <header className="flex justify-between">
        <span className="flex space-x-4">
          <img
            className="rounded-full shadow-sm group-hover:border-red-700 border-2 border-transparent transition delay-150 ease-in-out"
            src={`${item.userImage}`}
            alt=""
          />
          <span className="text-left">
            <h2 className="text-lg font-Poppins font-semibold">
              {item.userName}
            </h2>
            <h5 className="text-base font-Poppins text-gray-500">{item.userDesignation}</h5>
          </span>
        </span>
        <img src="./quotes.png" alt="" />
      </header>
      <h1 className="text-blue-700 font-semibold text-xl font-Poppins py-5">
        {item.userCategory} <span>!</span>
      </h1>
      <summary className="text-gray-800 font-Poppins">
        {item.userDescription}
      </summary>
      <ReactStars
        count={5}
        size={24}
        edit={null}
        value={item.userRating}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default Reviews;
