import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Toast } from "../../../Componets/Toast";
import { signUpApi, VerifyAPi } from "../../../API";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [verificationShow, setVerificationShow] = useState(false);
  const [user, setUser] = useState();
  const [code, setCode] = useState();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const res = await signUpApi(data);
    if (res?.error === false) {
      setError("");
      setUser(res.data);
      setVerificationShow(true);
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      }).then(() =>
        Toast.fire({
          icon: "success",
          title: `your verificationn code is ${res?.data?.code}`,
        })
      );
    } else {
      Toast.fire({
        icon: "error",
        title: res.message,
      });
    }
  };
  const navigate = useNavigate();

  const handleVerifaction = async (e) => {
    e.preventDefault();
    let postBody = {
      userPhoneNumber: user?.userPhoneNumber,
      userEmail: user?.userEmail,
      code: code,
    };
    if (postBody?.code) {
      const res = await VerifyAPi(postBody);
      if (!res) {
        setError("wrong code");
      }
      if (res?.error === false) {
        localStorage.setItem("access_token", res?.token);
        Toast.fire({
          icon: "success",
          title: `Your Aceount Succesfully Login`,
        });
        navigate("/home");
      } else {
        setError(res.message);
      }
    }
  };
  return (
    <div className="pt-12 container mx-auto">
      <div>
        {verificationShow == true ? (
          <>
            <div className="text-center pb-8 ">
              <h2 className="text-2xl	font-semibold py-7">
                Enter Your Verification Code
              </h2>
            </div>

            <form>
              <div className="mb-4 my-4">
                <input
                  className="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password5"
                  type="text"
                  placeholder="Verification Code"
                  required
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <button
                onClick={handleVerifaction}
                className="my-3 py-5 w-full bg-indigo-500 hover:bg-indigo-800 font-bold px- rounded focus:outline-none focus:shadow-outline text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
            <p className="text-red-500">{error}</p>
          </>
        ) : (
          <>
            {" "}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-7 spac-y-4 items-center">
              <div className="m-5 text-center">
                <img
                  className="img-flued w-9/12"
                  src="https://www.phitron.io/static/media/login.60b00691.png"
                  alt=""
                />
              </div>
              <div className="w-full max-w-xl">
                <div className="bg-white shadow-md rounded px-8 py-10 mb-4 ">
                  <div className="text-center pb-8">
                    <h2 className="text-2xl	font-semibold py-7">
                      Register now to explore more
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 my-4">
                      <input
                        className="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password5"
                        type="text"
                        placeholder="Name"
                        required
                        {...register("userName", { required: true })}
                      />
                    </div>
                    <div className="mb-4 my-4">
                      <input
                        className="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password9"
                        type="text"
                        placeholder="Email"
                        required
                        {...register("userEmail", { required: true })}
                      />
                    </div>
                    <div className="mb-4 my-4">
                      <input
                        className="py-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password2"
                        type="text"
                        placeholder="Phone No"
                        required
                        {...register("userPhoneNumber", { required: true })}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 mb-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password8"
                        type="password"
                        placeholder="password"
                        required
                        {...register("userPassword", { required: true })}
                      />
                    </div>

                    <button
                      className="my-3 py-5 w-full bg-indigo-500 hover:bg-indigo-800 font-bold px- rounded focus:outline-none focus:shadow-outline text-white"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                  <div>
                    <h6 className="flex justify-center items-center">
                      Already have a account?{" "}
                      <Link to="/login">
                        <span className="text-sky-500">Log in </span>
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
