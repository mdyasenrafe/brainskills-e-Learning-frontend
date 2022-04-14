import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addInstructorApi } from "../../../API";
import { Toast } from "../../../Componets/Toast";

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);

  const handleImageSubmit = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
    e.preventDefault();
  };

  const onSubmit = (data) => {
    data["instructorPhoto"] = image;
    const res = addInstructorApi(data);
    if (res?.error == true) {
      Toast.fire({
        icon: "error",
        title: res.message,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Teacher added succesfully",
      });
      reset();
    }
  };

  return (
    <div>
      <h1 className="py-3 text-xl px-4 font-semibold text-gray-600">
        Add New Instructor
      </h1>
      <hr />
      <form className="px-4  grid space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Instructor Name
          </label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="text"
            {...register("instructorName", { required: true })}
            // required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Instructor Photo
          </label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="file"
            onChange={(e) => handleImageSubmit(e)}
            // required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Instructor Designation
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            {...register("instructorDesignation", { required: true })}
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

export default AddTeacher;
