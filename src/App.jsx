import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";
import ShowroomLogin from "./components/showroom/login.jsx"
import ShowroomSignUp from "./components/showroom/signup.jsx"
import ShowroomDashboard from "./components/showroom/dashboard.jsx";
import ShowroomInventory from "./components/showroom/inventory.jsx"

import HomePage from "./components/homepage.jsx";

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
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
