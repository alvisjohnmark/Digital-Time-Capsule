import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

const Profile = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
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
          setEmail(response.data.user.email);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching profile data", error);
          navigate("/login");
        }
      }
    };
    getToken();
  }, [navigate]);



  return (
   <>
    <NavigationBar/>
    
   </>
  );
};

export default Profile;
