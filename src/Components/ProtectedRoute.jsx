// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ children, role }) => {
//   const { user } = useSelector((state) => state.auth);

//   if (!user) {
//     return <Navigate to="/" />; // Redirect to login if not authenticated
//   }

//   if (role && user.role !== role) {
//     return <Navigate to="/" />; // Redirect to login if role doesn't match
//   }

//   return children;
// };

// export default ProtectedRoute;