import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/signin`);
  };
  return (
    <div className="w-full h-[10vh]  p-4 flex justify-between items-cente ">
      <div className="text-xl hover:font-bold transition-all duration-300 cursor-pointer">
        Gemini Clone
      </div>
      <div className="flex gap-6"></div>
    </div>
  );
};

export default Navbar;
