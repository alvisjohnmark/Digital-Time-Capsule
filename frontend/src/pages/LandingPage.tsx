import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import {
  User,
  Mail,
  MemoryStick,
  PillBottle,
  PlayCircle,
  ShieldCheck,
  Share,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);
  return (
    <>
      <NavigationBar />
      <main>
        <section className="hero  min-h-screen bg-base-100 text-[#333333] flex items-center justify-center px-6">
          <div className="hero-content flex items-center lg:items-start text-center lg:text-left">
            <div className="max-w-xl">
              <h1 className="text-6xl font-bold mb-4 text-[#4e3e31] leading-tight">
                Capture <span className="text-[#ff8a65]">Memories</span>,
                Preserve <span className="text-[#ff8a65]">Moments</span>
              </h1>
              <p className="text-xl italic mb-6 text-[#4e3e31]">
                "Your digital time capsule for tomorrow."
              </p>
              <p className="text-lg mb-8">
                Safeguard your most cherished memories, from photos and videos
                to notes and dreams, and relive them whenever you choose.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                {isAuthenticated ? (
                  <NavLink
                    to="/capsules"
                    className="btn px-8 py-3 bg-[#ff8a65] text-white text-lg rounded-none hover:bg-[#e67a58]"
                  >
                    Get Started
                  </NavLink>
                ) : (
                  <NavLink
                    to="/register"
                    className="btn px-8 py-3 bg-[#ff8a65] text-white text-lg rounded-md hover:bg-[#e67a58]"
                  >
                    Get Started
                  </NavLink>
                )}

                <NavLink to="/about" className="btn px-8 py-3 bg-[#ffe0b2] text-[#4e3e31] text-lg  hover:bg-[#f4d8b0] rounded-md">
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Capsules Section */}
        <section className="bg-[#fff8dc] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-4xl font-extrabold text-[#4b5320] text-center mb-12 tracking-widest">
              Featured Capsules
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card shadow-lg hover:shadow-2xl rounded-lg overflow-hidden bg-white">
                <img
                  src="/placeholder.png"
                  alt="Memory Capsule"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4e3e31] mb-2">
                    Family Memories
                  </h3>
                  <p className="text-[#6b4e3d]">
                    Cherish your family moments with this personalized capsule.
                  </p>
                </div>
              </div>
              <div className="card shadow-lg hover:shadow-2xl rounded-lg overflow-hidden bg-white">
                <img
                  src="/placeholder.png"
                  alt="Dream Capsule"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4e3e31] mb-2">
                    Dream Journal
                  </h3>
                  <p className="text-[#6b4e3d] ">
                    Secure your dreams and aspirations for future reflection.
                  </p>
                </div>
              </div>
              <div className="card shadow-lg hover:shadow-2xl rounded-lg overflow-hidden bg-white">
                <img
                  src="/placeholder.png"
                  alt="Adventure Capsule"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#4e3e31] mb-2">
                    Adventure Logs
                  </h3>
                  <p className="text-[#6b4e3d]">
                    Preserve your travel stories and thrilling experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-[#ffeecf] py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl font-extrabold text-[#4b5320] mb-12 tracking-widest">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <PlayCircle className="text-[#ff8a65] w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-[#4e3e31] mb-2">
                  Create
                </h3>
                <p className="text-[#6b4e3d] font-semibold">
                  Start your capsule by adding photos, videos, and notes.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="text-[#ff8a65] w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-[#4e3e31] mb-2">
                  Secure
                </h3>
                <p className="text-[#6b4e3d] font-semibold">
                  Your memories are protected with end-to-end encryption.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Share className="text-[#ff8a65] w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-[#4e3e31] mb-2">
                  Share
                </h3>
                <p className="text-[#6b4e3d] font-semibold">
                  Relive moments together by sharing with loved ones.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-[#ffeecf] py-16">
            <h2 className="text-4xl font-extrabold text-[#4b5320] text-center mb-12 tracking-widest">
              Rest Assured
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-12">
              {/* Card 1 */}
              <div className="card shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 rounded-lg overflow-hidden bg-white">
                <div className="card-body p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#ff8a65] text-white rounded-full p-3">
                      <User />
                    </div>
                    <h2 className="text-2xl font-bold text-[#4e3e31]">
                      Secure Memories
                    </h2>
                  </div>
                  <p className="text-[#6b4e3d] mt-4">
                    Safeguard your photos, videos, and written memories with
                    military-grade encryption for privacy.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 rounded-lg overflow-hidden bg-white">
                <div className="card-body p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#ff8a65] text-white rounded-full p-3">
                      <Mail />
                    </div>
                    <h2 className="text-2xl font-bold text-[#4e3e31]">
                      Timed Messages
                    </h2>
                  </div>
                  <p className="text-[#6b4e3d] mt-4">
                    Deliver heartfelt messages to yourself or loved ones on
                    significant dates.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 rounded-lg overflow-hidden bg-white">
                <div className="card-body p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#ff8a65] text-white rounded-full p-3">
                      <MemoryStick />
                    </div>
                    <h2 className="text-2xl font-bold text-[#4e3e31]">
                      Share Memories
                    </h2>
                  </div>
                  <p className="text-[#6b4e3d] mt-4">
                    Create shared capsules for family and friends, preserving
                    collective memories.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="card shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-105 rounded-lg overflow-hidden bg-white">
                <div className="card-body p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#ff8a65] text-white rounded-full p-3">
                      <PillBottle />
                    </div>
                    <h2 className="text-2xl font-bold text-[#4e3e31]">
                      Capsule Themes
                    </h2>
                  </div>
                  <p className="text-[#6b4e3d] mt-4">
                    Customize your capsules with themes, designs, and tags to
                    relive your memories in style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-white py-16 h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-5xl font-bold text-[#4b5320] mb-6 tracking-wider">
              Stay Updated!
            </h2>
            <p className="text-lg text-[#6b4e3d] mb-8 leading-relaxed">
              Sign up for our newsletter and never miss out on the latest
              updates, tips, and exclusive content tailored just for you.
            </p>
            <form className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:w-auto flex-grow px-4 py-3 rounded-lg shadow-lg text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4b5320] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#ff8a65] text-white font-medium rounded-lg shadow-lg hover:bg-[#e67a58] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff8a65] focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
