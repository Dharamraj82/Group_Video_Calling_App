import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("");

    const handleJoin = () => {
        const trimmedId = id.trim();
        if (trimmedId) {
            navigate(`/calling/${trimmedId}`);
        } else {
            alert("Please enter a valid ID.");
        }
    };

    return (
        <div className="flex items-center h-screen w-full flex-col pt-20 gap-20">
            <h1 className="text-zinc-950 font-bold text-2xl md:text-3xl">Dharamraj Video Calling App</h1>
            <div className="h-44 w-96 bg-slate-400 p-5 rounded-lg flex justify-center items-center flex-col gap-7">
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full py-3 px-5 text-white font-semibold outline-none border-2 bg-gray-700 border-blue-500 rounded-lg"
                    type="text"
                    name="id"
                    placeholder="Enter meeting ID"
                    required
                    aria-label="Enter meeting ID"
                />
                <button
                    onClick={handleJoin}
                    className="bg-blue-400 px-5 py-3 font-semibold text-white rounded-lg hover:bg-blue-500 transition duration-200"
                >
                    Create New Meeting
                </button>
            </div>
        </div>
    );
};

export default Home;
