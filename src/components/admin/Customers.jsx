import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
import axios from 'axios';
const Base_Url=import.meta.env.VITE_API_URL
const Customers = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetchdata= async()=>{
        try {
            const response=await axios.get(`${Base_Url}/api/admin/adminview`)
            console.log(response.data.clientSection)
            setdata(response.data.clientSection)
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata()
    },[])
    return (
  <>  
  {
    data.map((value)=>{
      return(
        <>
   <section className="mb-8 ml-2">
        <h2 className="text-2xl font-semibold text-[#394A9A] mb-4">Customer Accounts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <FontAwesomeIcon icon={faUser} className="text-[#394A9A] mb-2" size="2x" />            <p className="text-xl font-semibold">name{value.ownerName}</p>
      <p className="text-gray-600">Email:{value.email}</p>
        </div>
        </div>
    </section>
        </>
      )
    })
  }
   </>
    )
};
export default Customers;
