import { Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useData } from "../../context/DataContext";

const ProtectedRoute = ({ role }) => {
  const { user, status} = useData();

  console.log("user and status inside protected route", user, status)

  // ⏳ Wait until auth check is DONE
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Checking access...
      </div>
    );
  }

  // ❌ Not logged in
  if (status === "guest") {
    return <Navigate to="/" replace />;
  }

  // ❌ Logged in but wrong role
  if (role && user?.role !== role) {
    return <Navigate to="/" replace />;
  }
  

  // ✅ Authorized
  return <Outlet />;
};

export default ProtectedRoute;
