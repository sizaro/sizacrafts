// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children, role }) => {
  const { user, status, checkAuth } = useData();
   useEffect(() => {
    if(!user){
      checkAuth();
    }
  
  }, []);

  console.log("user in protected route and state", user, status)

  if (status) return <div>Checking access...</div>;

  if (!user) return <Navigate to="/" replace />;

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};



export default ProtectedRoute;
