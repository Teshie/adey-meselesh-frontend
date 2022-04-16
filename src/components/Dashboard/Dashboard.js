import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-start items-start h-screen">
      <div className="flex flex-start h-screen shadow-md">
        <div className="px-8 bg-gray-300 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">Dashboard</h3>

          <div className="mt-4  cursor-pointer">
            <h2 onClick={() => navigate("/list-project")}>All Projects</h2>
          </div>
          <div className="mt-4 cursor-pointer">
            <h2 onClick={() => navigate("/list-ongoing")}>Ongoing Projects</h2>
          </div>
          <div className="mt-4 cursor-pointer">
            <h2 onClick={() => navigate("/list-coming")}>Coming Projects</h2>
          </div>
          <div className="mt-4 cursor-pointer">
            <h2 onClick={() => navigate("/create-project")}>Create Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
