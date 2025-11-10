import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "User";

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="text-center bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl max-w-md w-full">
      <h2 className="text-3xl font-bold text-green-700 mb-4">
        Welcome, {username} 👋
      </h2>
      <p className="text-gray-700 mb-6">
        You’re logged in as a regular user.
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
