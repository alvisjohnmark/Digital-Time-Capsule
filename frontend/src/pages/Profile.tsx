import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <button
        onClick={handleLogout}
        className="btn bg-[#4b5320] text-white text-lg font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-[#6a7d47]"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
