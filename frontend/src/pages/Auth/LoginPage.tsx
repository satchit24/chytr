import ThemeToggle from "../../components/Navbar/ThemeToggle";
import { loginApi } from "../../api/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await loginApi(credentials);
    login(response.data.token);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Log in to Chytr to explore and share your favorite picks.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-xl transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
