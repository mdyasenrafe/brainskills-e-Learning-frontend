import React from "react"

import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";

const TopNavbar = () => {
  return (
    <div className=' border-b-2 py-3'>
      <div className='container mx-auto flex justify-between px-4'>
        <div className='flex-none md:flex'>
          <h1 className='mr-3 flex items-center'><BsFillTelephoneOutboundFill className='mr-2 text-blue-500' />+(880) 172 354-7084</h1>
          <h1 className='flex items-center'><AiOutlineMail className='mr-2 text-blue-500' /> brinskils@gmail.com</h1>
        </div>
        <div className='flex-none md:flex'>
          <h1 className='mr-2 flex items-center'><AiOutlineLogin className='mr-2 text-blue-500' />Loging</h1>
          <h1 className='mr-2 flex items-center'><AiOutlineLock className='mr-2 text-blue-500' />Registration</h1>
        </div>
      </div>

    </div>

  );
};

export default TopNavbar;
