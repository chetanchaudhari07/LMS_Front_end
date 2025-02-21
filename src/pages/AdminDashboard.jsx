import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "../redux/slices/instructorSlice";
import Navbar from "../Components/Navbar";


const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.instructors);

  useEffect(() => {
    dispatch(fetchInstructors());
  }, [dispatch]);

  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        {loading ? (
          <div className="text-center">
            <div className="animate-spin h-10 w-10 border-t-2 border-blue-500 rounded-full"></div>
          </div>
        ) : (
          list.map((inst) => (
            <p key={inst._id} className="text-lg">
              {inst.name} - {inst.email}
            </p>
          ))
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
