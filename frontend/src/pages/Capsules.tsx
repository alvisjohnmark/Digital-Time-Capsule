import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search } from "lucide-react";
import axios from "axios";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
      } else {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/verifyToken",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching profile data", error);
          navigate("/");
        }
      }
    };
    getToken();
  }, [navigate]);

  return (
    <>
      <NavigationBar />
      <main className="container h-screen">
        <div className="flex justify-between px-4 py-2 font-bold m-6">
          <h1 className="text-3xl">My Capsules</h1>
          <button className="flex gap-2 cursor-pointer px-4 py-2 bg-[#be441e] text-white rounded-2xl justify-center items-center">
            <p>Add Capsule</p>
            <Plus size={20} />
          </button>
        </div>

        <div className="flex gap-2 items-center px-4 py-2 rounded-xl mb-6 mx-6">
          <div className="relative flex items-center">
            <Search
              size={16}
              strokeWidth={2}
              className="absolute left-3 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search Capsules..."
              className="pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <select className="px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none">
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3    gap-6">
          <div className="border border-[#ff8a65] rounded-lg shadow-lg p-4  text-black">
            <img
              src="/placeholder.png"
              alt="Capsule"
              className="w-full h-40 object-cover rounded-md border-2 border-[#ff8a65]"
            />
            <h2 className="text-xl font-bold mt-2 t]">Capsule Title</h2>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consequatur sequi deleniti similique numquam cumque id perferendis non consequuntur dicta!
            </p>
            <p className="text-sm mt-2">
              <strong>Date Created:</strong> Jan 1, 2025
            </p>
            <p className="text-sm">
              <strong>Unlock Date:</strong> Jan 1, 2026
            </p>
            <p className="text-sm">
              <strong>Status:</strong> Locked
            </p>
            <p className="text-sm">
              <strong>Recipient:</strong> John Doe
            </p>
            <button className="w-full mt-2 bg-[#ff8a65] text-white py-2 rounded-lg cursor-pointer">
              View more
            </button>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
