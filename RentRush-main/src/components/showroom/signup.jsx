import React from "react";
import { Link } from "react-router-dom";

function ShowroomSignUp() {
  return (
    <div className="flex items-center justify-center background min-w-max min-h-screen py-16">
      <div className="w-screen h-fit max-w-md py-5 px-7 bg-gray-300 backdrop-blur-lg bg-white/30 border border-white/10 rounded-3xl  p-5 shadow-lg">
        <img
          src="/src/assets/logo.svg"
          className="w-[80px] -my-5 -mx-5 -mt-4"
          alt=""
        />
        <h2 className="text-3xl font-bold text-[#02073F]">Create Account</h2>
        <form className="mt-8  rounded mb-4">
          {/* Name */}
          <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="Sname"
            >
              Showroom Name
            </label>
            <input
              type="text"
              id="Sname"
              placeholder="Cars Club"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

           {/*Owner Name */}
           <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="Oname"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="Oname"
              placeholder="John Doe"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* CNIC */}
          <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="cnic"
            >
              Owner's CNIC
            </label>
            <input
              type="text"
              id="cnic"
              placeholder="12345-6789012-3"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
              title="Enter CNIC in the format 12345-6789012-3"
              required
            />
          </div>

          {/* Contact */}
          <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="contact"
            >
              Owner's Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="0300-1234567"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              pattern="[0-9]{4}-[0-9]{7}"
              title="Enter contact number in the format 0300-1234567"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="address"
            >
              Showroom Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="1234 Main St, City, Country"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="email"
            >
              Company/Owner Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              className=" text-sm block text-[#02073F] font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="********"
              className="shadow placeholder:text-xs appearance-none border rounded w-full py-2 px-3 text-[#02073F] leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Centered Sign Up Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-[#C17D3C] text-white font-bold py-2 px-4 rounded focus:outline-none w-full  focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div>
          <p className="text-xs text-[#02073F] font-bold text-center my-1">or continue with</p>
          <div className=" flex flex-row justify-center">
            <div className="px-10 rounded-full hover:cursor-pointer bg-white w-fit py-2">
              <img src="/src/assets/google.svg" alt="" className="w-5" />
            </div>
          </div>
          {/* Redirect to Login */}
          <p className="mt-4 text-center text-[#02073F] text-xs">
            Already have an account?{" "}
            <Link
              to="/showroom/login"
              className="text-[#02073F] font-bold hover:text-[#ffffff]"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ShowroomSignUp;
