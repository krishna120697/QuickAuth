import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", credentials);
      const { role, username, user, token } = res.data;

      // ✅ Store token & username in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", user?.name || username || "User");

      // ✅ Redirect based on role
      if (role === "admin") {
        navigate("/admin-dashboard", { state: { username: user?.name || username } });
      } else {
        navigate("/user-dashboard", { state: { username: user?.name || username } });
      }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-600 mb-6">Login to continue to QuickAuth</p>

        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 shadow-md"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span
            className="text-indigo-600 cursor-pointer hover:underline font-medium"
            onClick={() => navigate("/signup")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

