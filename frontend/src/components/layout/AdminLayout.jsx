import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../../components/sidebars/AdminSidebar";

import AdminDashboard from "../../pages/admin/AdminDashboard.jsx";
import Products from "../../pages/admin/Products.jsx";
import Categories from "../../pages/admin/Categories.jsx";
import ProductVariants from "../../pages/admin/ProductVariants.jsx";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 md:ml-[400px] mt-[40px] md:mt-5" >
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="variants" element={<ProductVariants />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminLayout;
