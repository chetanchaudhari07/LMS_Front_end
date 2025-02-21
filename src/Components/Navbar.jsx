import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/");
    });
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      {/* Left side - Logo */}
      <div>
        <Link to="/" className="text-xl font-bold hover:text-gray-200 transition">
          LMS
        </Link>
      </div>

      {/* Middle - Navigation Links */}
      <div className="space-x-4">
        {user && user.role === "admin" && (
          <Link to="/admin" className="hover:text-gray-200 transition">
            Admin
          </Link>
        )}
        {user && user.role === "instructor" && (
          <Link to="/instructor" className="hover:text-gray-200 transition">
            Instructor
          </Link>
        )}
      </div>

      {/* Right Side - Login/Logout */}
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
