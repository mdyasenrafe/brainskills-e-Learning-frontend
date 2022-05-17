import React from "react";
import LoadingSpiners from "../../../Componets/LoadingSpiners";
import GetUser from "../../../hooks/GetUser";
import OverView from "../OverView/OverView";
const UserProfile = () => {
  const { user, loading } = GetUser();

  return loading ? (
    <LoadingSpiners loading={loading} height={"50vh"} />
  ) : user?.role === "admin" ? (
    <>
      <OverView />
    </>
  ) : (
    <>
      <div className="p-3">
        <h1 className="font-semibold text-xl  text-gray-700 pb-2">Profile</h1>
        <hr />
        <div className="py-5 md:flex  space-x-12">
          <div className="flex-row justify-center">
            {user?.photoUrl ? (
              <img
                className="w-40 h-40  rounded-full"
                src={user?.photoUrl}
                alt=""
              />
            ) : (
              <div className="w-40 h-40 animate-pulse bg-gray-300"></div>
            )}
            <button className="mx-9 bg-blue-500 my-6 px-3 py-2 text-white text-sm rounded-full ">
              Edit Profile
            </button>
          </div>
          <div className="text-lg py-10 md:py-0">
            <h2 className="grid pb-4">
              <small className="text-gray-800 pb-2 font-semibold">Role</small>
              {user?.role ? (
                ` ${user?.role}`
              ) : (
                <div className="w-full h-6 animate-pulse   bg-gray-300"></div>
              )}
            </h2>
            <h2 className="grid pb-4">
              <small className="text-gray-800 pb-2 font-semibold">
                Full name
              </small>
              {user?.userName ? (
                ` ${user?.userName}`
              ) : (
                <div className="w-full h-6 animate-pulse   bg-gray-300"></div>
              )}
            </h2>
            <h2 className="grid pb-4">
              <small className="text-gray-800 pb-2 font-semibold">
                Email Address
              </small>
              {user?.userEmail ? (
                ` ${user?.userEmail}`
              ) : (
                <div className="w-full h-6 animate-pulse   bg-gray-300"></div>
              )}
            </h2>
            <h2 className="grid pb-4">
              <small className="text-gray-800 pb-2 font-semibold">Phone</small>
              {user?.userPhoneNumber ? (
                ` ${user?.userPhoneNumber}`
              ) : (
                <div className="w-full h-6 animate-pulse   bg-gray-300"></div>
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
