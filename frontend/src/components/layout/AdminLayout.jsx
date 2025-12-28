import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../sidebars/AdminSidebar.jsx";

// Pages
import AdminDashboard from "../../pages/admin/AdminDashboard.jsx";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-y-auto w-full mt-18 ml-[-10px] md:ml-64 md:mt-6">
        <Routes>
          {/* Dashboard */}
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;
