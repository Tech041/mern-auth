import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const loginSchema = z.object({
  email: z
    .string()
    .email("Not valid email")
    .min(1, { message: "Email is required" }),
  password: z.string().min(6, { message: "Password must be 6 chars min" }),
});

const Login = () => {
  const { backendUrl, setIsLoggedIn, getUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmitHandler = async (loginData) => {
    console.log(loginData);
    reset();
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        backendUrl + "/api/auth/login",
        loginData
      );
      if (data.success) {
        setIsLoggedIn(true);
        getUserData();
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen  bg-white pt-20  ">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="w-96">
            <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full  text-indigo-300 text-sm">
              <h2 className="text-3xl text-white text-center mb-3 font-semibold">
                Login
              </h2>
              <p className="text-center text-sm mb-6">Create your account</p>
              <form onSubmit={handleSubmit(onSubmitHandler)} className="">
                <div className="mb-4">
                  <div className=" flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                    <img src={assets.mail_icon} alt="mail_icon" className="" />
                    <input
                      {...register("email")}
                      type="email"
                      className=" outline-none text-white bg-inherit w-full"
                      placeholder="Email ID"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-center">
                      {errors.email.message}
                    </p>
                  )}{" "}
                </div>
                <div className="mb-4">
                  <div className=" flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
                    <img src={assets.lock_icon} alt="lock_icon" className="" />
                    <input
                      {...register("password")}
                      type="password"
                      className="bg-transparent outline-none text-white w-full"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-center">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <p
                  onClick={() => navigate("/reset-password")}
                  className="mb-4 text-indigo-500 cursor-pointer"
                >
                  Forgot password?
                </p>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium"
                >
                  Login
                </button>
              </form>

              <p className="text-gray-400 text-center text-xs mt-4">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-blue-400 cursor-pointer underline "
                >
                  Sign up here
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
