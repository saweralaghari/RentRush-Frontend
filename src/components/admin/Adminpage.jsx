
import { faCar,faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import Customers from './Customers.jsx'
import Showroom from './Showroom.jsx';
// import axios from 'axios'
// const Base_Url=import.meta.env.VITE_API_URL
const Adminpage = () => {
    const [Customer, setCustomer] = useState(false)
    const [showroom, setShowroom] = useState(false)
    const handleCustomer=()=>{
        setShowroom(false)
        setCustomer(true)
    }
    const handleShowroom=()=>{
        setCustomer(false)
        setShowroom(true)
    }
    return (
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className=" w-64 bg-[#02073F] p-6 text-white">
                    <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
                    <nav className="space-y-4">

                        <Link to="/" className="flex items-center space-x-2 text-lg   hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Home</span>
                        </Link>

                        <button type='button' onClick={handleCustomer} className="flex items-center space-x-2 text-lg hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Customers</span>
                        </button>

                        <button type='button' onClick={handleShowroom}  className="flex items-center space-x-2 text-lg hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faCar} />
                            <span>Showrooms</span>
                        </button>
                        <button className="flex items-center space-x-2 text-lg hover:bg-[#394A9A] p-3 rounded-lg w-full">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span>Logout</span>
                        </button>
                    </nav>
                </aside>
                {Customer&&<Customers/>}
                {showroom&&<Showroom/>}
            </div>
    );
};
export default Adminpage;
