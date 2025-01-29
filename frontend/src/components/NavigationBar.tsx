import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AlignJustify, X } from "lucide-react";

const NavigationBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-white text-lg font-medium transition-colors duration-300 ${
      isActive ? "border-b-2 border-white pb-1" : "hover:text-gray-200"
    }`;

  return (
    <nav className="bg-[#ff8a65] p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        Digicap: A Digital Time Capsule App
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/features" className={navLinkClass}>
          Features
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        {isAuthenticated && (
          <NavLink to="/capsules" className={navLinkClass}>
            Capsules
          </NavLink>
        )}
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-white text-[#ff8a65] px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/register"
            className="bg-white text-[#ff8a65] px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Sign in
          </NavLink>
        )}
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

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
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
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/features" className={navLinkClass}>
                Features
              </NavLink>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
              {isAuthenticated && (
                <NavLink to="/capsules" className={navLinkClass}>
                  Capsules
                </NavLink>
              )}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-center w-full text-white bg-[#ff8a65] font-semibold mt-4"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/register"
                  className="block px-4 py-2 text-center text-white bg-[#ff8a65] font-semibold mt-4"
                >
                  Sign in
                </NavLink>
              )}
              <div className="mt-6 border-t border-gray-200 pt-6 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Digicap. All rights reserved.
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
