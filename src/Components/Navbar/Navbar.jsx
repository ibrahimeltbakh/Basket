
import { Link } from "react-router";
import { GoChevronDown } from "react-icons/go";
import { LiaHandPaper } from "react-icons/lia";
import { FaUser, FaShoppingCart, FaHeart, FaBalanceScale } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
export default function Navbar() {
  const [count, setcount] = useState(0)
  const linkes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Cart',
      path: '/cart',
    },
    {
      name: 'Paymoney',
      path: '/paymoney',
    },
    {
      name: 'Checkout',
      path: '/checkout',
    },
  ]
  return (
    <header className="w-full">
      <section className="flex justify-between text-[15px]">
        <div className='w-full'>
          <div className="bg-[#35AFA0] w-[100%] flex items-center justify-center h-10 text-white ">
            <p className='my-auto'>Due to current circumstances, there may be slight delays in order processing</p>
          </div>
          <div className="flex justify-center">
            <div className="flex w-[90%] h-10 items-center justify-between">
              <div className="flex w-[30%]">
                <Link className="mr-3" to='/about'>About Us</Link>
                <Link className="mr-3" to='/about'>Compare</Link>
                <Link className="mr-3" to='/about'>Wishlist</Link>
              </div>
              <div className="flex items-center">
                <div className="xl:flex items-center hidden">
                  <LiaHandPaper />
                  <p className="mr-3">100% Secure delivery without contacting the courier</p>
                  <p className="mr-3">Need help? Call Us: <span className="text-[#35AFA0]"> + 0020 500</span></p>
                </div>
                <hr className="mr-3" />
                <div className="flex items-center justify-between w-[10%]">
                  <div className="flex items-center ">
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
          </div>
          <hr />
        </div>
      </section>


      <section className="shadow-md w-[80%] mx-auto">
        {/* 🔹 Main Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className=''>
            <img className="w-[200px] h-[170px]" src='../../../public/logo.jpg' alt="logo" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-1/2 border rounded-lg px-3 py-2 mx-3 ">
            <input
              type="text"
              placeholder="Search for Products, fruit, meat, eggs, etc..."
              className="flex-grow outline-none text-sm"
            />
            <IoSearch className="text-gray-500 text-xl cursor-pointer" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 mx-3">

            <Link to='/signup'>Sign in</Link>
            <Link to='/login'>Login up</Link>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold">$0.00</span>
              <Link to={linkes[6].path}>
                <FaShoppingCart className="text-gray-600 text-2xl cursor-pointer relative" />
              </Link>

            </div>
            <span className="absolute text-xs bg-red-500 text-white rounded-full px-2 -mt-6 ml-4">
              {count}
            </span>
          </div>
        </div>

      {/* 🔹 Menu */}
      <div className="flex items-center px-6 pb-5 justify-between">
        <button className="bg-[#35AFA0] px-4 py-2 rounded-full flex items-center space-x-2 relative text-white">
          <span className="text-lg">☰</span>
          <span className="font-semibold ">All Categories</span>
          <span className="bg-white text-[#35AFA0] text-[10px] font-bold px-2 py-1 rounded-full absolute bottom-[-12px] left-[25px]">
            TOTAL 50 PRODUCTS
          </span>
        </button>
        <nav className="ml-8 space-x-6 font-medium hidden md:flex">
          {
            linkes.map((item, index) => {
              return <Link key={index} to={item.path}>{item.name}</Link>
            })
          }

        </nav>
      </div>
    </section>
   
    </header >
  );
}
