"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[rgba(255,251,247,0.88)] backdrop-blur-xl border-b border-[rgba(255,122,89,0.1)] h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md bg-gradient-to-br from-orange-400 to-[#ff9a7a] animate-pulse">
            🐾
          </div>
          <span className="font-extrabold text-lg text-gray-800">
            Pawsome<span className="text-orange-500">Pets</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className=" mx-auto hidden md:flex items-center gap-2 font-jakarta">
          <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition">
            Buy Pets
          </button>

          <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition">
            Sell Pets
          </button>
           <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition">
           Adopt Pet
          </button>
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition">
          Breeding Connect
          </button>
          

          {/* <button className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:bg-orange-100 hover:text-orange-500 transition">
            Dashboard
          </button> */}

          {/* <div className="w-px h-5 bg-gray-300 mx-2"></div> */}

          {/* <button className="px-5 py-2 rounded-xl border border-orange-500 text-orange-500 font-bold text-sm hover:bg-orange-100 transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-xl bg-gradient-to-br from-orange-400 to-[#ff9a7a] text-white font-bold text-sm shadow-md hover:-translate-y-[1px] active:scale-95 transition">
            Sign Up
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 p-6 flex flex-col gap-4 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button onClick={closeMenu} className="self-end text-2xl">
          ✕
        </button>

        <button className="text-left py-2 text-gray-700 font-semibold">
          Buy Pets
        </button>

        <button className="text-left py-2 text-gray-700 font-semibold">
          Sell Pets
        </button>

        <button className="text-left py-2 text-gray-700 font-semibold">
         Adopt Pet
        </button>
         <button className="text-left py-2 text-gray-700 font-semibold">
         Breeding Connect
        </button>
        

        <div className="border-t my-3"></div>

        {/* <button className="py-2 border border-orange-500 text-orange-500 rounded-lg font-semibold">
          Login
        </button>

        <button className="py-2 bg-gradient-to-br from-orange-400 to-[#ff9a7a] text-white rounded-lg font-semibold">
          Sign Up
        </button> */}
      </div>
    </>
  );
}