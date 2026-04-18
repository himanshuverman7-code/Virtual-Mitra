import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const AdminLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || "admin" !== user?.role) {
      navigate("/");
    }
  }, []);

  return <Outlet />;
};

export default AdminLayout;
