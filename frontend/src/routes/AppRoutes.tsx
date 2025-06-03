import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Auth/LoginPage";
import Signup from "../pages/Auth/SignupPage";
import ProfilePage from "../pages/ProfilePage";
import Navbar from "../components/Navbar/Navbar";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes*/}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
      {/* {Protected Routes} */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navbar />
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Navbar />
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
