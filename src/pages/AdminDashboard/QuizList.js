import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseDetailsApi } from "../../API";
import Details from "../../hooks/Details";
import { useForm } from "react-hook-form";

const QuizList = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  let { courseDetails } = Details(id);
  console.log(courseDetails);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div>
      <h1 className="py-3 text-xl px-4 font-semibold">
        Your Course Name :{" "}
        <span className="text-[#60A5FA]">{courseDetails?.courseName}</span>
      </h1>
      <form className="px-4  grid space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Course Name
          </label>
          <input
            readOnly
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="text"
            {...register("courseName", { required: true })}
            value={courseDetails?.courseName}
            required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Course Id</label>
          <input
            readOnly
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="text"
            {...register("courseId", { required: true })}
            value={id}
            required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Course Id</label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="text"
            {...register("quizTitle", { required: true })}
            required
          />
        </div>

        <button
          className="bg-blue-500 p-3 text-gray-50 shadow-sm rounded-md "
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuizList;
