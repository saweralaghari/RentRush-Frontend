import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Showroom = () => {
    const [status, setStatus] = useState('active');
    const [isRatingsOpen, setIsRatingsOpen] = useState(false);

    const handleStatusChange = (newStatus) => {
        const confirmMessage =
            newStatus === 'banned'
                ? 'Are you sure you want to ban this showroom?'
                : 'Are you sure you want to activate this showroom?';

        if (window.confirm(confirmMessage)) {
            setStatus(newStatus);
        }
    };

    const ratings = [
        { user: 'John Doe', rating: 4, feedback: 'Great service and friendly staff!' },
        { user: 'Jane Smith', rating: 5, feedback: 'Amazing experience, highly recommend!' },
        { user: 'Bob Johnson', rating: 3, feedback: 'Good, but the waiting time was long.' },
        { user: 'Alice Brown', rating: 5, feedback: 'Excellent cars and showroom experience!' },
        { user: 'Mike Lee', rating: 4, feedback: 'Friendly and quick service.' },
        { user: 'Anna Wilson', rating: 5, feedback: 'Highly satisfied, will visit again!' },
        { user: 'Tom Green', rating: 4, feedback: 'Affordable prices and good customer service.' },
    ];

    return (
        <section className="mb-8 ml-10 mr-10 w-full">
            <h2 className="text-2xl font-semibold text-[#394A9A] mb-4">Showroom Accounts</h2>
            <div className="grid grid-cols-1 gap-4 w-full">
                <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-xl hover:cursor-pointer transition sm:flex justify-between items-center w-full">
                    <div>
                        <p className="text-xl font-bold">Showroom Name</p>
                        <p className="text-gray-600">Owner Name:</p>
                        <p className="text-gray-600">Owner CNIC:</p>
                        <p className="text-gray-600">Showroom Address:</p>
                        <button
                            className="text-blue-500 underline hover:text-blue-700"
                            onClick={() => setIsRatingsOpen(true)}
                        >
                            Ratings
                        </button>
                        <p className="text-lg font-semibold">
                            Status: {status === 'active' ? 'Active' : 'Banned'}
                        </p>
                    </div>
                    <button
                        className={`ml-2 text-white px-4 sm:py-2 rounded-lg transition duration-200 ${
                            status === 'active'
                                ? 'bg-red-500 hover:bg-red-600'
                                : 'bg-green-500 hover:bg-green-600'
                        }`}
                        onClick={() =>
                            handleStatusChange(status === 'active' ? 'banned' : 'active')
                        }
                    >
                        <FontAwesomeIcon icon={status === 'active' ? faBan : faCheck} />{' '}
                        {status === 'active' ? 'Ban' : 'Activate'}
                    </button>
                </div>
            </div>

            {/* Ratings Section */}
            {isRatingsOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-full">
                        <h3 className="text-xl font-bold mb-4">Showroom Ratings & Feedback</h3>
                        <div className="max-h-60 overflow-y-auto">
                            <ul>
                                {ratings.map((rating, index) => (
                                    <li key={index} className="mb-4 border-b pb-2">
                                        <p className="font-semibold">{rating.user}</p>
                                        <p>Rating: {rating.rating} / 5</p>
                                        <p className="italic">{rating.feedback}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            className="mt-4 bg-primary text-white px-4 py-2 rounded-lg transition duration-200"
                            onClick={() => setIsRatingsOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Showroom;
