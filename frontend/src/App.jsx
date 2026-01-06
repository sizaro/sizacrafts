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
import { useData } from "./context/DataContext";

function App() {

  const { status } = useData();

  return (
    <Routes>
      {/* ---------- Public Routes ---------- */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/category/:id" element={<CategoryPage />} />
      <Route path="/products/product/:id" element={<ProductVariantsPage />} />
      <Route path="/products-all" element={<ProductsAll />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      {/* ---------- Admin Routes ---------- */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
