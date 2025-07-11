import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../assets/banner.png'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className=" top-0 z-50 bg-[#4A773C]  py-10 font-lato  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white hover:opacity-80 transition">
            FoxNutSnacks
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-base">
            <Link to="/products" className="text-white hover:text-green-950">Contact Us</Link>
            {/* Dropdown */}
            <div className="relative group z-[1000]">
              <span className="cursor-pointer text-white hover:text-green-950">About us ▾</span>

              <div className="absolute top-full left-0 mt-2 w-40 bg-[#4A773C] rounded-md shadow-2xl shadow-green-950 opacity-0 group-hover:opacity-100 transition duration-200 z-[1000]">
                <Link to="/ourValues" className="block px-4 py-2 text-white hover:bg-green-950 hover:rounded-t-md">Our Values</Link>
                <Link to="/mediaSpotlight" className="block px-4 py-2 text-white hover:bg-green-950">Media Spotlight</Link>
                <Link to="/testimonials" className="block px-4 py-2 text-white hover:bg-green-950 hover:rounded-b-md">Testimonials</Link>
              </div>
            </div>
            <div className="relative group z-[1000]">
              <span className="cursor-pointer text-white hover:text-green-950">Products ▾</span>

              <div className="absolute top-full left-0 mt-2 mr-100 w-140 bg-[#4A773C] rounded-md shadow-2xl shadow-green-950 opacity-0 group-hover:opacity-100 transition duration-200 z-[1000]">
                <img src={headerImg}></img>
              </div>
            </div>
            
            <Link to="/blogs" className="text-white hover:text-green-950">Blogs</Link>
            <Link to="/faqs" className="text-white hover:text-green-950">FAQs</Link>
          </nav>
          
          
         {/* Mobile hamburger... */}
      </div>
      <div className='flex flex-row hidden'>
            <div className='w-1/4 '> 
                    <div className='flex flex-col'>
                          <Link to="/blogs" className="text-white hover:text-green-950">periperi</Link>
                          <Link to="/faqs" className="text-white hover:text-green-950">himalayan salt</Link>
                    </div>
            </div>
            <div
                className="w-3/4 h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${headerImg})` }}
            ></div>

      </div>
    
      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#4A773C] text-white px-6 py-4 rounded-lg shadow">
           <a href="/products" className="hover:underline">Contact Us</a>
           <details className="group">
            <summary className="cursor-pointer">About us</summary>
            <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
              <Link to="/ourValues" className="hover:underline">Our Values</Link>
              <Link to="/mediaSpotlight" className="hover:underline">Media Spotlight</Link>
              <Link to="/testimonials" className="hover:underline">Testimonials</Link>
            </div>
          </details>
          <a href="/products" className="hover:underline">Products</a>
          <a href="/blogs" className="hover:underline">Blogs</a>   
          <a href="/products" className="hover:underline">FAQs</a>
         
        </div>
      )}
    </header>
  );
};

export default Header;