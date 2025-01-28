import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#ff8a65] shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between py-6">
        <NavLink to="/" className="text-white font-bold text-2xl">
          Digicap
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-10">
          <NavLink
            to="/"
            className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300"
          >
            Features
          </NavLink>
          <NavLink
            to="/about"
            className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-300"
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className="bg-white text-orange-500 px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign in
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AlignJustify className="cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-opacity-100 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg transition-transform transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex justify-end">
                <X
                  onClick={() => setMobileMenuOpen(false)}
                  className="cursor-pointer"
                />
              </div>
              <NavLink
                to="/"
                className="block px-4 py-2 text-black hover:bg-orange-100"
              >
                Home
              </NavLink>
              <NavLink
                to="/features"
                className="block px-4 py-2 text-black hover:bg-orange-100"
              >
                Features
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-2 text-black hover:bg-orange-100"
              >
                About
              </NavLink>
              <NavLink
                to="/login"
                className="block px-4 py-2 text-center bg-[#ffe4b5] text-orange-500 font-semibold mt-4"
              >
                Sign in
              </NavLink>
              <div className="flex justify-center items-end h-full">
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Digicap. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
