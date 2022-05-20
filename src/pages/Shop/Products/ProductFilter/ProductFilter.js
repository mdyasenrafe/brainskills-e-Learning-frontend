import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ReactStars from 'react-rating-stars-component';
const ProductFilter = () => {
    const [openCategories, setOpenCategories] = useState(false);
    const [openRatings, setOpenRatings] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);


    return (
        <div className='px-4 md:px-0'>
            {/*=====Categories===== */}
            <div className='border rounded-md w-full py-4 md:py-4 lg:py-4  px-4 '>
                <div onClick={() => { openCategories ? setOpenCategories(false) : setOpenCategories(true) }} className='flex items-center justify-between cursor-pointer'>
                    <h1 className='text-xl  text-black font-semibold'>Categories</h1>
                    <button className=''><IoIosArrowDown className={`${openCategories ? "rotate-180" : "rotate-0"} transform ease-in-out duration-200`} /></button>
                </div>
                <div className={`${openCategories ? "grid" : "hidden"} mt-5`}>
                    <form className='px-2 text-lg font-Poppins grid gap-1 '>
                        <div>
                            <input className='' type="checkbox" name="" id="01" />
                            <label className='pl-2 text-gray-800' for="01">Business</label><br />
                        </div>
                        <div>
                            <input type="checkbox" name="" id="02" />
                            <label className='pl-2 text-gray-800' for="02">Business</label><br />
                        </div>
                        <div>
                            <input type="checkbox" name="" id="03" />
                            <label className='pl-2 text-gray-800' for="03">Business</label><br />
                        </div>
                        <div>
                            <input type="checkbox" name="" id="04" />
                            <label className='pl-2 text-gray-800' for="04">Business</label><br />
                        </div>
                    </form>
                </div>
            </div>
            {/* ==========Ratings===== */}
            <div className='border rounded-md w-full py-4 md:py-4 lg:py-4  px-4 mt-5 '>
                <div onClick={() => { openRatings ? setOpenRatings(false) : setOpenRatings(true) }} className='flex items-center justify-between cursor-pointer'>
                    <h1 className='text-xl  text-black font-semibold'>Ratings</h1>
                    <button className=''><IoIosArrowDown className={`${openRatings ? "rotate-180" : "rotate-0"} transform ease-in-out duration-200`} /></button>
                </div>
                <div className={`${openRatings ? "grid" : "hidden"} mt-5`}>
                    <div className='flex items-center'>
                        <ReactStars
                            count={5}
                            size={20}
                            edit={null}
                            value={5}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <span className='pl-2 text-gray-700'>(11)</span>
                    </div>
                    <div className='flex items-center'>
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
                        <span className='pl-2 text-gray-700'>(8)</span>
                    </div>
                    <div className='flex items-center'>
                        <ReactStars
                            count={5}
                            size={20}
                            edit={null}
                            value={3}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <span className='pl-2 text-gray-700'>(5)</span>
                    </div>
                    <div className='flex items-center'>
                        <ReactStars
                            count={5}
                            size={20}
                            edit={null}
                            value={2}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <span className='pl-2 text-gray-700'>(9)</span>
                    </div>
                    <div className='flex items-center'>
                        <ReactStars
                            count={5}
                            size={20}
                            edit={null}
                            value={1}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <span className='pl-2 text-gray-700'>(12)</span>
                    </div>
                </div>
            </div>
            {/* ==========Price===== */}
            <div className='border rounded-md w-full py-4 md:py-4 lg:py-4  px-4 mt-5 '>
                <div onClick={() => { openPrice ? setOpenPrice(false) : setOpenPrice(true) }} className='flex items-center justify-between cursor-pointer'>
                    <h1 className='text-xl  text-black font-semibold'>Price</h1>
                    <button className=''><IoIosArrowDown className={`${openPrice ? "rotate-180" : "rotate-0"} transform ease-in-out duration-200`} /></button>
                </div>
                <div className={`${openPrice ? "grid" : "hidden"} mt-5`}>
                    {/* content */}
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;