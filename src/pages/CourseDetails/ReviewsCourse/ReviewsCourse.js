import React from 'react';
import ReactStars from "react-rating-stars-component";

const reviews = [
    {
        _id: 1,
        name: "Terri Buda",
        img: "https://edon-ng.envytheme.com/assets/images/review-1.jpg",
        ratting: 4,
        saying: "Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque egestas curabitur arcu erat, accumsan id imperdietet, porttitor at sem. Cras ultricies ligula seddddddd magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    },
    {
        _id: 2,
        name: "Terri Buda",
        img: "https://edon-ng.envytheme.com/assets/images/review-1.jpg",
        ratting: 4,
        saying: "Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque egestas curabitur arcu erat, accumsan id imperdietet, porttitor at sem. Cras ultricies ligula seddddddd magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    },
    {
        _id: 3,
        name: "Terri Buda",
        img: "https://edon-ng.envytheme.com/assets/images/review-1.jpg",
        ratting: 4,
        saying: "Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque egestas curabitur arcu erat, accumsan id imperdietet, porttitor at sem. Cras ultricies ligula seddddddd magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    },
    {
        _id: 4,
        name: "Terri Buda",
        img: "https://edon-ng.envytheme.com/assets/images/review-1.jpg",
        ratting: 4,
        saying: "Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque egestas curabitur arcu erat, accumsan id imperdietet, porttitor at sem. Cras ultricies ligula seddddddd magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    },
    {
        _id: 5,
        name: "Terri Buda",
        img: "https://edon-ng.envytheme.com/assets/images/review-1.jpg",
        ratting: 4,
        saying: "Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque egestas curabitur arcu erat, accumsan id imperdietet, porttitor at sem. Cras ultricies ligula seddddddd magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
    },
]

const ReviewsCourse = () => {
    return (
        <div>
            <div>
                {
                    reviews.map(item => <div key={item._id} className=" space-y-5">
                        <div className='md:flex space-x-2 py-4 px-2'>
                            <img className='h-16 w-16 md:h-20 md:w-20 border-2 rounded-full' src={item.img} alt="" />
                            <div>
                                <h4 className='font-semibold text-gray-700'>{item.name}</h4>
                                <ReactStars
                                    count={5}
                                    size={20}
                                    edit={null}
                                    value={4}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <p className='text-gray-500 text-sm md:text-base font-mono'>{item.saying}</p>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ReviewsCourse;