import React ,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { initializeAuth } from "./redux/slices/authSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import Login from "./pages/Login";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);


  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Login />} />

      
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
        <Route
          path="/instructor"
          element={<InstructorDashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
