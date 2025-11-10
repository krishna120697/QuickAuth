import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react'; // optional icon, install via `npm install lucide-react`

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg mx-auto transition transform hover:scale-[1.02]">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full">
            <Lock size={50} className="text-indigo-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-indigo-700 mb-3">
          Welcome to QuickAuth 🔐
        </h1>
        <p className="text-gray-600 mb-8">
          A modern authentication system with secure login, role-based access, and beautiful dashboards.
        </p>
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      <footer className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} QuickAuth | Secure. Simple. Smart.
      </footer>
    </div>
  );
};

export default Home;

