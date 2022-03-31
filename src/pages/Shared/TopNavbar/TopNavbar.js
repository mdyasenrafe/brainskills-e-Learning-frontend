import React from 'react';
import "./TopNavbar.css"
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';

const TopNavbar = () => {
    return (
        <div className='xs:none md:flex justify-between px-5 h-5' style={{ borderBottom: "1px solid black", height: "60px" }}>
            <div className='flex'>
                <h1 className='mr-3 flex items-center'><BsFillTelephoneOutboundFill className='mr-2' /> +8801717918508</h1>
                <h1 className='flex items-center'><AiOutlineMail className='mr-2' /> brinskils@gmail.com</h1>

            </div>
            <div className='flex'>
                <h1 className='mr-2 flex items-center'><AiOutlineLogin className='mr-2' />Loging</h1>
                <h1 className='mr-2 flex items-center'><AiOutlineLock className='mr-2' />Registration</h1>

            </div>

        </div>

    );
};

export default TopNavbar;