import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLectures } from "../redux/slices/lectureSlice";


const InstructorDashboard = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.lectures);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(fetchLectures(user._id));
    }
  }, [dispatch, user]);

  return (
    <>
     
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Instructor Dashboard</h1>
        {loading ? (
          <div className="text-center">
            <div className="animate-spin h-10 w-10 border-t-2 border-blue-500 rounded-full"></div>
          </div>
        ) : (
          list.map((lec) => (
            <p key={lec._id} className="text-lg">
              {lec.course.name} - {lec.date}
            </p>
          ))
        )}
      </div>
    </>
  );
};

export default InstructorDashboard;
