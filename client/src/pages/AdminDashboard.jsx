import React from "react";
import { Link } from "react-router-dom";
import AdminSales from "../components/AdminSales";
import LineChart from "../components/LineChart";
import AdminTable from "../components/AdminTable";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <AdminSales />
      <LineChart />
      <AdminTable />
    </div>
  );
};

export default AdminDashboard;
