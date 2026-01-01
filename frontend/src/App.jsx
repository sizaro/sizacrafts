import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

// Public
import Home from "./pages/landing/Home.jsx";
import About from "./pages/landing/About.jsx";
import ProductsPage from "./pages/landing/ProductsPage.jsx";
import CategoryPage from "./pages/products/CategoryPage.jsx";
import ProductVariantsPage from "./pages/products/ProductVariantsPage.jsx";
import ProductsAll from "./pages/products/ProductsAll.jsx";
import Contact from "./pages/landing/Contact.jsx";
import ResetPassword from "./pages/landing/ResetPassword.jsx";

// Admin
import AdminLayout from "./components/layout/AdminLayout.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import Products from "./pages/admin/Products.jsx";
import Categories from "./pages/admin/Categories.jsx";
import ProductVariants from "./pages/admin/ProductVariants.jsx";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/category/:id" element={<CategoryPage />} />
      <Route path="/products/product/:id" element={<ProductVariantsPage />} />
      <Route path="/products-all" element={<ProductsAll />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* Protected Admin */}
      <Route path="/admin" element={<ProtectedRoute role="admin" />}>
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="variants" element={<ProductVariants />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
