import React from "react";
import { Link } from "react-router-dom";

function Login() 
{
  return (
    <div className="flex items-center justify-center background min-h-screen min-w-max">
      <div className="w-screen h-fit max-w-md py-5 px-7 bg-gray-300 backdrop-blur-lg bg-white/30 border border-white/10 rounded-3xl  p-5 shadow-lg">
        <img
          src="/src/assets/logo.svg"
          className="w-[80px] -my-5 -mx-5 -mt-4"
          alt=""
        />
        <h2 className="text-2xl font-bold text-[#02073F]">Login</h2>
        <form className="mt-8 rounded  mb-4 ">
          <div className="mb-3">
            <label
              className="block text-[#02073F] text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-[#02073F] text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <p className="text-xs py-2 font-bold hover:cursor-pointer hover:text-[#ffffff] text-[#02073F]">Forgot password?</p>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#C17D3C] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </div>
        </form>
        <div>
          <p className="text-xs text-center my-1 mb-3 font-bold text-[#02073F]">or continue with</p>
          <div className=" flex flex-row justify-center">
            <div className="px-10 rounded-full bg-white hover:cursor-pointer w-fit py-2">
              <img src="/src/assets/google.svg" alt="" className="w-5" />
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-[#02073F] text-xs">
          Don't have an account?&nbsp;
          <Link
            to="/signup"
            className="text-[#02073F] hover:text-[#ffffff] font-bold"
          >
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;
