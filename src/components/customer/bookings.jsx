import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { CircleGauge, Fuel, GripHorizontal } from "lucide-react";

const Bookings = () => {
  const car = {
    name: "Toyota Camry New",
    image: "/src/assets/aboutcar.png",
    price: "40,000",
    mileage: "20 Miles",
    fuelType: "Petrol",
    transmission: "Automatic",
    rentalInfo: {
      rentername: "John Doe",
      renteremail: "johndoe@example.com",
      renterphone: "+1234567890",
      renterCNIC: "12345-6789012-3",
      renteraddress: "123 Main St, City",
      rentalStartDate: "2024-11-05",
      rentalEndDate: "2024-11-11",
      rentalStartTime: "10:00 am",
      rentalEndTime: "10:00 pm",
      rentalDays: 7,
      showroomName: "Premium Showroom",
      showroomLocation: "Downtown, City",
      totalAmount: "280,000",
    },
  };

  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [rentalStarted, setRentalStarted] = useState(false);
  const [rentalEnded, setRentalEnded] = useState(false);

  const calculateProgressAndTimeLeft = () => {
    const startTime = new Date(`${car.rentalInfo.rentalStartDate} ${car.rentalInfo.rentalStartTime}`);
    const endTime = new Date(`${car.rentalInfo.rentalEndDate} ${car.rentalInfo.rentalEndTime}`);
    const currentTime = new Date();

    const totalDuration = endTime - startTime;
    const elapsedTime = currentTime - startTime;

    const progressPercentage = Math.min(100, (elapsedTime / totalDuration) * 100);

    if (currentTime >= startTime) {
      setRentalStarted(true);

      if (currentTime >= endTime) {
        setRentalEnded(true);
        setTimeLeft("Rental period has ended");
      } else {
        const timeRemaining = endTime - currentTime;

        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s left`);

        setProgress(progressPercentage >= 0 ? progressPercentage : 0);
      }
    } else {
      setRentalStarted(false);
      setTimeLeft(null);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateProgressAndTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-white flex flex-col lg:flex-row items-start lg:h-screen h-auto w-full p-6 pb-5 relative">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-auto lg:h-full object-cover rounded-lg"
          />
        </div>

        <div className="lg:w-1/2 w-full lg:pl-10 space-y-4">
          {rentalStarted && !rentalEnded && (
            <div className="top-4 right-4">
              <div className="w-64 bg-gray-300 rounded-full h-4 mt-2">
                <div
                  className="bg-primary h-4 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{timeLeft}</p>
            </div>
          )}

          <h2 className="text-3xl font-bold">{car.name}</h2>
          <p className="text-xl font-semibold">{car.price} RS / day</p>
          <div className="grid grid-cols-3 gap-4 text-sm text-black my-2">
            <div className="flex flex-col items-center">
              <CircleGauge />
              <span className="text-gray-500">{car.mileage}</span>
            </div>
            <div className="flex flex-col items-center">
              <Fuel />
              <span className="text-gray-500">{car.fuelType}</span>
            </div>
            <div className="flex flex-col items-center">
              <GripHorizontal />
              <span className="text-gray-500">{car.transmission}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-6">Rental Information</h3>
          <p><strong>Renter Name:</strong> {car.rentalInfo.rentername}</p>
          <p><strong>Email:</strong> {car.rentalInfo.renteremail}</p>
          <p><strong>Phone:</strong> {car.rentalInfo.renterphone}</p>
          <p><strong>CNIC:</strong> {car.rentalInfo.renterCNIC}</p>
          <p><strong>Address:</strong> {car.rentalInfo.renteraddress}</p>
          <p><strong>Rental Start Date:</strong> {car.rentalInfo.rentalStartDate}</p>
          <p><strong>Rental End Date:</strong> {car.rentalInfo.rentalEndDate}</p>
          <p><strong>Rental Start Time:</strong> {car.rentalInfo.rentalStartTime}</p>
          <p><strong>Rental End Time:</strong> {car.rentalInfo.rentalEndTime}</p>
          <p><strong>Rental Days:</strong> {car.rentalInfo.rentalDays}</p>

          <h3 className="text-2xl font-bold mt-6">Showroom Information</h3>
          <p><strong>Showroom Name:</strong> {car.rentalInfo.showroomName}</p>
          <p><strong>Showroom Location:</strong> {car.rentalInfo.showroomLocation}</p>

          <p className="text-xl font-semibold mt-4 pb-5">
            <strong>Total Amount:</strong> {car.rentalInfo.totalAmount}rs
          </p>

          {rentalEnded && (
            <div className="mt-4 pb-5">
              <button className="bg-primary text-white py-2 px-4 rounded">
                Return Car
              </button>
            </div>
          )}

          {!rentalStarted && (
            <div className="bottom-4 right-4 space-x-4 pb-5">
              <button className="bg-green-600 text-white py-2 px-4 rounded">
                Edit Details
              </button>
              <button className="bg-red-600 text-white py-2 px-4 rounded">
                Cancel Booking
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookings;
