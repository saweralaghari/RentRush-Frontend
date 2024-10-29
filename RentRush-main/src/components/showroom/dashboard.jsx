import React, { useState } from "react";
import ShowroomNavbar from "./showroomNavbar";
import Drawer from "./drawer";
import CarCard from "./carCard";

const cars = [
  {
    name: "Toyota Camry New",
    image: "/src/assets/aboutcar.png",
    price: "40,000",
    mileage: "20 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    availability: "Available",
  },
  {
    name: "C-Class – 2023",
    image: "/src/assets/aboutcar.png",
    price: "150,000",
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    availability: "Available",
  },
  {
    name: "Ford Transit – 2021",
    image: "/src/assets/aboutcar.png",
    price: "22,000",
    mileage: "2500 Miles",
    fuelType: "Diesel",
    transmission: "Manual",
    availability: "Available",
  },
  {
    name: "New GLC – 2023",
    image: "/src/assets/aboutcar.png",
    price: "95,000",
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    availability: "Rented Out",
  },
  {
    name: "Audi A6 3.5 – New",
    image: "/src/assets/aboutcar.png",
    price: "58,000",
    mileage: "100 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    availability: "Available",
  },
  {
    name: "Audi A4 4.5 New",
    image: "/src/assets/aboutcar.png",
    price: "250,000",
    mileage: "50 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    availability: "Available",
  },
  {
    name: "Ranger Black – 2021",
    image: "/src/assets/aboutcar.png",
    price: "165,000",
    mileage: "250 Miles",
    fuelType: "Petrol",
    transmission: "Manual",
    availability: "Rented Out",
  },
  {
    name: "Mercedes-Benz, C Class",
    image: "/src/assets/aboutcar.png",
    price: "35,000",
    mileage: "4800 Miles",
    fuelType: "Automatic",
    transmission: "Automatic",
    availability: "Available",
  },
  {
    name: "Ranger White – 2022",
    image: "/src/assets/aboutcar.png",
    price: "25,000",
    mileage: "30,000 Miles",
    fuelType: "Diesel",
    transmission: "Automatic",
    availability: "Rented Out",
  },
  {
    name: "T-Cross – 2023",
    image: "/src/assets/aboutcar.png",
    price: "15,000",
    mileage: "5000 Miles",
    fuelType: "Petrol",
    transmission: "CVT",
    availability: "Available",
  },
  {
    name: "Corolla Altis – 2023",
    image: "/src/assets/aboutcar.png",
    price: "45,000",
    mileage: "16,000 Miles",
    fuelType: "Petrol",
    transmission: "CVT",
    availability: "Available",
  },
  {
    name: "Ford Explorer 2023",
    image: "/src/assets/aboutcar.png",
    price: "35,000",
    mileage: "10 Miles",
    fuelType: "Diesel",
    transmission: "Manual",
    availability: "Available",
  },
];

const ShowroomDashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
    <ShowroomNavbar onMenuClick={toggleDrawer} />

      <div className="bg-[#2C2C2C] min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-10">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default ShowroomDashboard;
