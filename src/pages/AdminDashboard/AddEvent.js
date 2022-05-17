import React from "react";
import { useForm } from "react-hook-form";
import { addEventApi } from "../../API";
import { Toast } from "../../Componets/Toast";

const AddEvent = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const res = addEventApi(data);
    if (res?.error == true) {
      Toast.fire({
        icon: "error",
        title: res.message,
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Event added succesfully",
      });
      reset();
    }
  };
  return (
    <div data-testId="event" >
      <h1 className="py-3 text-xl px-4 font-semibold text-gray-600">
        Add New Event
      </h1>
      <hr />
      <form className="px-4  grid space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Event Name</label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="text"
            {...register("eventName", { required: true })}
          // required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Event Type</label>
          <input
            className="border  p-3 outline-none rounded-md shadow-sm"
            type="name"
            {...register("eventType", { required: true })}
          // required
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Event Link</label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            {...register("eventLink", { required: true })}
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">
            Event Speaker
          </label>
          <input
            className="border p-2 outline-none rounded-md shadow-sm"
            type="text"
            {...register("speaker", { required: true })}
          />
        </div>
        <div className="grid">
          <label className="font-semibold text-gray-600 py-2">Event Date</label>

          <input
            type="datetime-local"
            className="border p-2 outline-none rounded-md shadow-sm"
            name=""
            id=""
            {...register("eventDate", { required: true })}
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

export default AddEvent;
