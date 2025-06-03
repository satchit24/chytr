import ThemeToggle from "../../components/Navbar/ThemeToggle";
import { signup } from "../../api/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = async (e: React.FormEvent)=> {
      e.preventDefault();
      try {
        await signup(formData);
        navigate("/login");
      } catch (error:any) {
        console.error("Signup failed:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Create Your Account</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Join Chytr to track and share your favorite books, movies, music, and more.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
