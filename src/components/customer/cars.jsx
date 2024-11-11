import React, { useState } from "react";
import UserCard from "./userCard";
import Navbar from "./Navbar";
import { Search } from "lucide-react";

const cars = [
  {
    name: "Toyota Camry New",
    image: "/src/assets/aboutcar.png",
    price: "40,000",
    mileage: "20 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    
  },
  {
    name: "C-Class – 2023",
    image: "/src/assets/aboutcar.png",
    price: "150,000",
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    
  },
  {
    name: "Ford Transit – 2021",
    image: "/src/assets/aboutcar.png",
    price: "22,000",
    mileage: "2500 Miles",
    fuelType: "Diesel",
    transmission: "Manual",
    
  },
  {
    name: "New GLC – 2023",
    image: "/src/assets/aboutcar.png",
    price: "95,000",
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    
  },
  {
    name: "Audi A6 3.5 – New",
    image: "/src/assets/aboutcar.png",
    price: "58,000",
    mileage: "100 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    
  },
  {
    name: "Audi A4 4.5 New",
    image: "/src/assets/aboutcar.png",
    price: "250,000",
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    
  },
  {
    name: "Ranger Black – 2021",
    image: "/src/assets/aboutcar.png",
    price: "165,000",
    mileage: "250 Miles",
    fuelType: "Petrol",
    transmission: "Manual",
    
  },
  {
    name: "Mercedes-Benz, C Class",
    image: "/src/assets/aboutcar.png",
    price: "35,000",
    mileage: "4800 Miles",
    fuelType: "Automatic",
    transmission: "Automatic",
    
  },
  {
    name: "Ranger White – 2022",
    image: "/src/assets/aboutcar.png",
    price: "25,000",
    mileage: "30,000 Miles",
    fuelType: "Diesel",
    transmission: "Automatic",
    
  },
  {
    name: "T-Cross – 2023",
    image: "/src/assets/aboutcar.png",
    price: "15,000",
    mileage: "5000 Miles",
    fuelType: "Petrol",
    transmission: "CVT",
    
  },
  {
    name: "Corolla Altis – 2023",
    image: "/src/assets/aboutcar.png",
    price: "45,000",
    mileage: "16,000 Miles",
    fuelType: "Petrol",
    transmission: "CVT",
    
  },
  {
    name: "Ford Explorer 2023",
    image: "/src/assets/aboutcar.png",
    price: "35,000",
    mileage: "10 Miles",
    fuelType: "Diesel",
    transmission: "Manual",
    
  },
];

const Cars = () => {

  return (
    <>
      <Navbar />
      <div className="mt-4 flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Search />
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center">
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl py-10 w-full justify-items-center">
          {cars.map((car, index) => (
            <UserCard key={index} car={car} />
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
