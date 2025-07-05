import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky z-50 top-0 text-[#4A773C]  px-6 py-4 font-kara">
      <div className=" max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" id="logo" className="text-md text-white font-bold hover:scale-110 bg-[#4A773C] px-4  rounded-full shadow-lg transition">
          FoxNutSnacks
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center mt-3 gap-8 font-bold text-sm">
         <div className="relative group cursor-pointer">
            <span id="btn-mini" className="text-white bg-[#4A773C] px-3 py-2 rounded-md shadow transition hover:scale-110">
              About us ▾
            </span>

            {/* Dropdown Content */}
            <div id='drop-down' className="absolute top-full left-0 bg-[#4A773C] shadow-3xl rounded-lg mt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[180px] z-20 text-white">
              <Link to="/ourValues" className="block px-4 py-2 hover:bg-[#2c3e20] hover:rounded-t-2xl text-sm">Our Values</Link>
              <Link to="/mediaSpotlight" className="block px-4 py-2 hover:bg-[#2c3e20] text-sm">Media Spotlight</Link>
              <Link to="/testimonials" className="block px-4 py-2 hover:bg-[#2c3e20] hover:rounded-b-2xl text-sm">Testimonials</Link>
            </div>
          </div>
          <a href="/products" id="btn-mini" className="text-white transition hover:scale-110 bg-[#4A773C] px-3 py-2 rounded-md shadow">
            Products
          </a>
          <a href="/products" id="btn-mini" className="text-white transition hover:scale-110 bg-[#4A773C] px-3 py-2 rounded-md shadow">
            FAQs
          </a>
          <a href="/products" id="btn-mini" className="text-white transition hover:scale-110 bg-[#4A773C] px-3 py-2 rounded-md shadow">
            Blogs
          </a>
        </nav>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#4A773C] focus:outline-none text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#4A773C] text-white px-6 py-4 rounded-lg shadow">
          <a href="#products" className="hover:underline">Range of Products</a>
          <details className="group">
            <summary className="cursor-pointer">Who Are We </summary>
            <div className="pl-4 mt-2 flex flex-col gap-2 text-sm">
              <Link to="/ourValues" className="hover:underline">Our Values</Link>
              <Link to="/mediaSpotlight" className="hover:underline">Media Spotlight</Link>
              <Link to="/testimonials" className="hover:underline">Testimonials</Link>
            </div>
          </details>
        </div>
      )}
    </header>
  );
};

export default Header;