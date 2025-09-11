import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import { LiaHandPaper } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Cart", path: "/cart" },
    { name: "Paymoney", path: "/paymoney" },
    { name: "Checkout", path: "/checkout" },
  ];

  return (
    <header className="w-full">
      {/* Top Green Bar */}
      <div className="bg-[#35AFA0] w-full flex items-center justify-center h-10 text-white text-center text-sm px-2">
        <p>
          Due to current circumstances, there may be slight delays in order
          processing
        </p>
      </div>

      {/* Info Row */}
      <section className="hidden lg:flex justify-center text-[15px]">
        <div className="flex w-[90%] h-10 items-center justify-between">
          <div className="flex w-[30%]">
            <Link className="mr-3" to="/about">
              About Us
            </Link>
            <Link className="mr-3" to="/compare">
              Compare
            </Link>
            <Link className="mr-3" to="/wishlist">
              Wishlist
            </Link>
          </div>
          <div className="flex items-center">
            <div className="xl:flex items-center hidden">
              <LiaHandPaper />
              <p className="mr-3">
                100% Secure delivery without contacting the courier
              </p>
              <p className="mr-3">
                Need help? Call Us:{" "}
                <span className="text-[#35AFA0]">+ 0020 500</span>
              </p>
            </div>
            <hr className="mr-3" />
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <p>English</p>
                <GoChevronDown className="text-black text-sm ml-1" />
              </div>
              <div className="flex items-center">
                <p>UCD</p>
                <GoChevronDown className="text-black text-sm ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* Main Navbar */}
      <section className="shadow-md w-[90%] mx-auto">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div>
            <img
              className="w-[120px] h-auto md:w-[160px]"
              src="/logo.jpg"
              alt="logo"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center w-1/2 border rounded-lg px-3 py-2 mx-3">
            <input
              type="text"
              placeholder="Search for Products, fruit, meat, eggs, etc..."
              className="flex-grow outline-none text-sm"
            />
            <IoSearch className="text-gray-500 text-xl cursor-pointer" />
          </div>

          {/* Auth + Cart + Burger */}
          <div className="flex items-center space-x-6 mx-3">
            <div className="hidden md:flex space-x-6">
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </div>

            {/* Cart */}
            <div className="flex items-center space-x-2 relative">
              <Link to="/cart" title="Cart">
                <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer" />
              </Link>
              {count > 0 && (
                <span className="absolute text-xs bg-red-500 text-white rounded-full px-2 -top-3 left-4">
                  {count}
                </span>
              )}
            </div>

            {/* Burger Menu (mobile) */}
            <button
              className="md:hidden text-3xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center px-6 pb-5 justify-between">
          <button className="bg-[#35AFA0] px-4 py-2 rounded-full flex items-center space-x-2 relative text-white">
            <span className="text-lg">☰</span>
            <span className="font-semibold">All Categories</span>
            <span className="bg-white text-[#35AFA0] text-[10px] font-bold px-2 py-1 rounded-full absolute bottom-[-12px] left-[25px]">
              TOTAL 50 PRODUCTS
            </span>
          </button>

          <nav className="ml-8 space-x-6 font-medium flex">
            {links.map((item, index) => (
              <Link key={index} to={item.path}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700"
              >
                {item.name}
              </Link>
            ))}
            <hr />
            <div className="flex items-center justify-between">
              <Link to="/signup" onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
            <Link  to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            </div>
          </div>
        )}
      </section>
    </header>
  );
}
