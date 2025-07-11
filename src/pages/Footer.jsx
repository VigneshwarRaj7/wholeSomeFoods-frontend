import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-[#4A773C] text-white px-6 py-10 font-kara">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Left: Logo and Social */}
        <div className="space-y-4">
          <div className="text-2xl font-bold tracking-wide">WholeSomeFoods</div>
          <p>Follow us on social media for healthy snacking inspiration!</p>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:scale-110 transition" />
            <FaYoutube className="hover:scale-110 transition" />
            <FaInstagram className="hover:scale-110 transition" />
            <FaTwitter className="hover:scale-110 transition" />
          </div>
        </div>

        {/* Right: Links and Location */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-6 font-semibold text-sm">
            <Link to="/contact">Contact Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookies">Cookies</Link>
            <Link to="/futureplan">Our future Plan</Link>
          </div>
          
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-xs text-center border-t border-white/30 pt-4">
        © {new Date().getFullYear()} WholeSomeFoods™ — All rights reserved.
      </div>

      {/* Back to top */}
      <div className="fixed bottom-4 right-4">
        <a
          href="#top"
          className="bg-white text-[#4A773C] px-4 py-2 rounded shadow hover:scale-105 transition text-sm font-bold"
        >
          ↑ Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;