// src/components/common/ProtectedRoute.jsx
import { useEffect } from "react";

// src/components/common/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useData } from "../../context/DataContext";

const ProtectedRoute = ({ children, role }) => {
  const { user, loading, checkAuth } = useData();

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Checking access...
      </div>
    );
  }

  console.log("user in protected route", user)

  // 2️⃣ Auth check finished, no user → redirect
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // 3️⃣ Role mismatch → redirect
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // 4️⃣ Authorized
  return children;
};

export default ProtectedRoute;
