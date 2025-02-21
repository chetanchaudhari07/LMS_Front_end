import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import InstructorDashboard from '../pages/InstructorDashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/instructor" element={<InstructorDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
