import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signinAPI } from "../../API";
import { Toast } from "../../Componets/Toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const res = await signinAPI(data);

    if (res?.error === false) {
      localStorage.setItem("access_token", res?.token);
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      window.location.href = "/home";
    } else {
      Toast.fire({
        icon: "error",
        title: res.message,
      });
    }
  };

  return (
    <div className="container mx-auto py-20">
      <div className=" grid sm:grid-cols-2 md:grid-cols-2 gap-7 spac-y-4 items-center">
        <div className="m-5">
          <img
            className="img-flued w-9/12"
            src="https://i.ibb.co/jk7gd0r/Computer-login-bro.png"
            alt=""
          />
        </div>
        <div className="w-full max-w-xl	py-15">
          <form
            className="bg-white shadow-md rounded px-8 py-16 mb-4 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2
              className="text-3xl	font-semibold py-7"
              style={{ color: "#343c97" }}
            >
              Welcome Back
            </h2>
            <div className="mb-4 my-4">
              <input
                className="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password2"
                type="text"
                placeholder="Email"
                required
                {...register("userPhoneNumber", { required: true })}
              />
            </div>
            <div className="mb-6">
              <input
                className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="password"
                required
                {...register("userPassword", { required: true })}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                className=" my-3 py-5 w-full bg-indigo-500 hover:bg-indigo-800 font-bold px- rounded focus:outline-none focus:shadow-outline text-white"
                type="submit"
              >
                Log in
              </button>
            </div>
            <h6>
              Don't have any account?
              <Link to="/register">
                <span className="text-sky-500">Register now</span>
              </Link>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
