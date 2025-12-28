import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

import Home from "./pages/landing/Home.jsx";
import About from "./pages/landing/About.jsx";
import ProductsPage from "./pages/landing/ProductsPage.jsx";
import CategoryPage from "./pages/products/CategoryPage.jsx";
import ProductVariantsPage from "./pages/products/ProductVariantsPage.jsx";
import ProductsAll from "./pages/Products/ProductsAll";
import Contact from "./pages/landing/Contact.jsx";
import ResetPassword from "./pages/landing/ResetPassword.jsx";

import AdminLayout from "./components/layout/AdminLayout.jsx";
import CustomerLayout from "./components/layout/CustomerLayout.jsx";

function App() {
  return (
      <Routes>
        {/* Public Landing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/category/:id" element={<CategoryPage />} />
        <Route path="/products/product/:id" element={<ProductVariantsPage />} />
        <Route path="/products-all" element={<ProductsAll />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Owner Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        />

        {/* Customer Routes */}
        <Route
          path="/customer/*"
          element={
            <ProtectedRoute role="customer">
              <CustomerLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
  );
}

export default App;
