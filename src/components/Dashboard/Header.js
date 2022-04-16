import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end items-end bg-blue-500 text-white p-2 space-x-10">
      <div>Home</div>
      <div onClick={() => navigate("/")}>Logout</div>
    </div>
  );
};

export default Header;
