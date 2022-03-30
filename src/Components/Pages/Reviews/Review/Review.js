import React from 'react';
import ReactStars from "react-rating-stars-component";

const Reviews = () => {

    return (
        <div className='shadow-md border bg-gray-100 p-6 rounded-md group '>
            <header className='flex justify-between'>
                <span className='flex space-x-4'>
                    <img className='rounded-full shadow-sm group-hover:border-red-700 border-2 border-transparent transition delay-150 ease-in-out' src="https://themepure.net/html/eduman-prv/eduman/assets/img/testimonial/testimonial.png" alt="" />
                    <span className='text-left'>
                        <h2 className='text-lg font-Poppins font-semibold'>Richard Joseph</h2>
                        <h5 className='text-base font-Poppins text-gray-500'>Student</h5>
                    </span>
                </span>
                <img src="./quotes.png" alt="" />
            </header>
            <h1 className='text-blue-700 font-semibold text-xl font-Poppins py-5'>Helpful Instructors <span>!</span></h1>
            <summary className='text-gray-800 '>
                In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.
            </summary>
            <ReactStars
                count={5}
                size={24}
                edit={null}
                value={4.5}
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