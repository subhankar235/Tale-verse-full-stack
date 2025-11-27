import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate=useNavigate();
  return (
    <div className="w-full flex justify-between items-center py-4 px-8 sm:px-16 bg-transparent">
      {/* Left: Logo + Name */}
      <div className="flex items-center gap-2">
        <img onClick={()=>navigate('/')} src={assets.tagged} alt="logo" className="w-12 sm:w-14 cursor-pointer" />
        <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight cursor-pointer">
          TaleVerse
        </h1>
      </div>

      {/* Right: Login Button */}
      <button onClick={()=>navigate('/user')} className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition cursor-pointer">
        Login
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  );
}

export default Navbar;
