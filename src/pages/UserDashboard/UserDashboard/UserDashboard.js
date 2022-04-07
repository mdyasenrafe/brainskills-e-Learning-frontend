import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import GetUser from "../../../hooks/GetUser";
import { AiOutlineUser, } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineSell, MdOutlinePlace, MdOutlineLibraryAdd, MdAddModerator } from "react-icons/md";
import { BsBook } from "react-icons/bs";
const UserDashboard = () => {
    const { user } = GetUser();
    console.log(GetUser);
    return (
        <div>
            <div className='container mx-auto py-20 px-4'>
                <div className='lg:flex gap-6 space-y-10 lg:space-y-0'>
                    {/* side slider */}
                    <div className='shadow-lg h-full border lg:w-3/12 rounded-lg  py-8'>
                        <div className='relative'>
                            <img className="h-20 w-20 mx-auto rounded-full" alt="" src={user?.photoUrl} />
                        </div>
                        <div className='grid py-8 px-4 text-gray-800 text-lg'>
                            <NavLink to="profile" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link border-b')}>
                                <AiOutlineUser className='mr-3' />   Profile
                            </NavLink>
                            <NavLink to="address" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link border-b')}>
                                <MdOutlinePlace className='mr-3' />   Address
                            </NavLink>
                            <NavLink to="education" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link border-b')}>
                                <BsBook className='mr-3' />   Education
                            </NavLink>
                            <NavLink to="orderHistory" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link border-b')}>
                                <MdOutlineSell className='mr-3' />   Order History
                            </NavLink>
                            <NavLink to="certificate" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link border-b')}>
                                <GrCertificate className='mr-3' />   Certificate
                            </NavLink>
                            {
                                user?.role === "admin" && <div>
                                    <NavLink to="createAdmin" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link border-b')}>
                                        <MdAddModerator className='mr-3' />   Create Admin
                                    </NavLink>
                                    <NavLink to="addNewCourse" className={({ isActive }) => (isActive ? 'user-dashboard-sidebar-link-active' : 'user-dashboard-sidebar-link ')}>
                                        <MdOutlineLibraryAdd className='mr-3' />   Add New Course
                                    </NavLink>
                                </div>
                            }
                        </div>
                    </div>
                    {/* document */}
                    <div className='lg:w-8/12 p-3 border shadow-lg rounded-lg'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;