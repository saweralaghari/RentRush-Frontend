import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import ShowroomLogin from "./components/showroom/login.jsx"
import ShowroomSignUp from "./components/showroom/signup.jsx"
import ShowroomDashboard from "./components/showroom/dashboard.jsx";
import ShowroomInventory from "./components/showroom/inventory.jsx"
import LandingPage from "./components/landingPage.jsx";
import CarsDashboard from "./components/customer/Dashboard.jsx";
import UserProfile from "./components/customer/profile.jsx";
import Cars from  "./components/customer/cars.jsx";
import Showrooms from "./components/customer/showrooms.jsx";
import Bookings from "./components/customer/bookings.jsx";
import Adminpage from "./components/admin/Adminpage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/showroom/signup" element={<ShowroomSignUp />}></Route>
          <Route path="/showroom/login" element={<ShowroomLogin />}></Route>
          <Route path="/showroom/Dashboard" element={<ShowroomDashboard />}></Route>
          <Route path="/showroom/inventory" element={<ShowroomInventory />}></Route>
          <Route path="/customer/Dashboard" element={<CarsDashboard/>}></Route>
          <Route path="/customer/profile" element={<UserProfile />}></Route>
          <Route path="/customer/cars" element={<Cars />}></Route>
          <Route path="/customer/Showrooms" element={<Showrooms />}></Route>
          <Route path="/customer/bookings" element={<Bookings />}></Route>
          <Route path="/admin" element={<Adminpage />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
