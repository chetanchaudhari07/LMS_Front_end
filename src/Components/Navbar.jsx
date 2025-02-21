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
      navigate("/"); // Redirect to login page after logout
    });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {user && user.role === "admin" && <Link to="/admin">Admin</Link>}
      {user && user.role === "instructor" && <Link to="/instructor">Instructor</Link>}
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
