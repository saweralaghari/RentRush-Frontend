import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function scrollToHome() {
    const element = document.getElementById('Home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToSteps() {
    const element = document.getElementById('steps');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToRequirements() {
    const element = document.getElementById('requirements');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function scrollToDetails() {
    const element = document.getElementById('detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }function scrollToTest() {
    const element = document.getElementById('rent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4  flex justify-between items-center">
        <div className="flex items-center">
          <Link
          to="/"
          >
            <img
              src="/src/assets/logo.svg"
              alt="Logo"
              className="-my-3 h-[100px] mr-2"
            />
          </Link>
        </div>
        <div className="flex flex-row gap-3">
          <div className="hidden md:flex space-x-4 border-r border-black px-2">
            <li onClick={scrollToHome} className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]">Home</li>
            <li onClick={scrollToSteps} className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]">How it Works</li>
            <li onClick={scrollToRequirements} className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]">Requirements</li>
            <li onClick={scrollToDetails} className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]">Why Choose Us</li>
            <li className="list-none cursor-pointer text-gray-700 hover:text-[#C17D3C]" onClick={scrollToTest}>Testimonials</li>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            <Link
              to="/login"
              className="bg-[#C17D3C] py-1 text-white px-5  rounded "
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
