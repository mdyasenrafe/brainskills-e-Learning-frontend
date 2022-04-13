import React from "react";

const AddNewCourse = () => {
  return (
    <div>
      <h1 className="py-3 text-xl px-4 font-semibold text-gray-600">
        Add New Course
      </h1>
      <hr />
      <p className="py-4 font-bold">course details</p>
      <div className="px-4  grid space-y-3">
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Course Title
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            placeholder="Course Title.."
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Instructor Name
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            placeholder="Course Title.."
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Image Link</label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            placeholder="Your Name.."
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Video Link</label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            placeholder="Your Name.."
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Descraption
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            placeholder="Your Name.."
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Descraption
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            placeholder="Your Name.."
          />
        </div>

        <button className="bg-blue-500 p-2 text-gray-50 shadow-sm rounded-md ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNewCourse;
