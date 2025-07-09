import { useState, useRef } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import AnnouncementBar from "./AnnouncementBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMega, setShowMega] = useState(false);
  const hoverTimeout = useRef(null);

  return (
    <>
      <AnnouncementBar />
      <header className="w-full border-b border-gray-200 px-4 py-2 backdrop-blur-md z-50 relative">
        <div className="max-w-screen-xl mx-auto">
          {/* Top Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left: Hamburger + Logo */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="block lg:hidden text-2xl"
              >
                {menuOpen ? <HiX /> : <HiMenu />}
              </button>
              <a href="/">
                <div className="text-2xl font-bold">
                  jA<span className="text-yellow-500">BROS</span>
                </div>
              </a>
            </div>

            {/* Search Bar */}
            <div className="flex-grow lg:flex lg:justify-center">
              <div className="w-full max-w-xl">
                <SearchBar />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <FaUser className="text-xl" />
              <FaShoppingCart className="text-xl" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex justify-between items-center mt-4 text-sm">
            <div className="flex space-x-6 font-semibold">
              {/* Shop with MegaMenu */}
              <div className="relative">
                <div
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeout.current);
                    setShowMega(true);
                  }}
                  onMouseLeave={() => {
                    hoverTimeout.current = setTimeout(() => {
                      setShowMega(false);
                    }, 150);
                  }}
                >
                  <button className="flex items-center space-x-1 text-black cursor-pointer">
                    <span>Shop</span>
                    {showMega ? (
                      <FaChevronUp className="text-xs mt-0.5" />
                    ) : (
                      <FaChevronDown className="text-xs mt-0.5" />
                    )}
                  </button>

                  <div
                    className={`absolute left-[-35px] top-full mt-3 w-[1348px] bg-white shadow-xl z-[9999] border p-6 transition-all duration-300 ease-in-out
                    ${
                      showMega
                        ? "opacity-100 translate-y-0 visible pointer-events-auto"
                        : "opacity-0 -translate-y-2 invisible pointer-events-none"
                    }`}
                  >
                    <MegaMenu />
                  </div>
                </div>
              </div>

              {/* Other nav links */}
              <a href="#">Deals</a>
              <a href="#">Wholesale</a>
              <a href="#">More</a>
              <a href="#">Notice</a>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-black">
                Delivery
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Track your Order
              </a>
              <a href="/about" className="text-gray-500 hover:text-black">
                About Us
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Contact Us
              </a>
              <button className="flex items-center border border-orange-500 text-orange-500 rounded-full px-3 py-1 hover:bg-orange-50 transition">
                <FaPhone className="mr-2" /> Call us
              </button>
            </div>
          </nav>

          {/* Mobile Drawer */}
          {menuOpen && (
            <div className="lg:hidden mt-4 space-y-4 bg-white p-4 border-t border-gray-200 shadow-md rounded-md">
              <a href="#" className="block text-black">
                Shop
              </a>
              <a href="#" className="block text-black">
                Deals
              </a>
              <a href="#" className="block text-black">
                Wholesale
              </a>
              <a href="#" className="block text-black">
                More
              </a>
              <a href="#" className="block text-black">
                Notice
              </a>
              <hr />
              <a href="#" className="block text-gray-600">
                Delivery
              </a>
              <a href="#" className="block text-gray-600">
                Track your Order
              </a>
              <a href="#" className="block text-gray-600">
                About Us
              </a>
              <a href="#" className="block text-gray-600">
                Contact Us
              </a>
              <button className="w-full flex items-center justify-center border border-orange-500 text-orange-500 rounded-full px-3 py-2 hover:bg-orange-50 transition">
                <FaPhone className="mr-2" /> Call us
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
