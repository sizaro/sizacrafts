import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

import Home from "./pages/landing/Home.jsx";
import About from "./pages/landing/About.jsx";
import Products from "./pages/landing/Products.jsx";
import Contact from "./pages/landing/Contact.jsx";

import ResetPassword from "./pages/landing/ResetPassword.jsx";

import OwnerLayout from "./components/layout/OwnerLayout.jsx";
import CustomerLayout from "./components/layout/CustomerLayout.jsx";


function App() {
  return (
      <Routes>
        {/* Public Landing Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* Reset Password (public) */}
      <Route path="/reset-password/:token" element={<ResetPassword />} />
        

        {/* Owner Routes */}
        <Route
          path="/owner/*"
          element={
            <ProtectedRoute role="owner">
              <OwnerLayout />
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
