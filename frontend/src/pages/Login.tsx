import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful!", { autoClose: 1500 });
        setTimeout(() => {
          setError("")
          navigate("/capsules");
          }, 1500);
        }

    } catch (error) {
      setError("Invalid email or password");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <NavLink
        to="/"
        className="absolute top-5 left-5 flex items-center gap-2 text-[#ff8a65] font-bold text-lg hover:underline"
      >
        <MoveLeft size={28} strokeWidth={1.75} />
        <span>Back to Home</span>
      </NavLink>

      <div className="w-full max-w-md p-8 rounded-lg">
        <h2 className="text-center text-3xl font-bold text-[#ff8a65] mb-6">
          Welcome Back
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label text-[#4b5320] font-bold mb-2 text-lg">
              <span>Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className=" border-3  border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label text-[#4b5320] font-bold mb-2 text-lg">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className=" border-3 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-control">
            <button
              type="submit"
              className="btn w-full bg-[#ff8a65] cursor-pointer text-white text-lg font-semibold py-3 rounded-md shadow-lg "
            >
              Login
            </button>
            <ToastContainer />
          </div>
          {error && <div className=" text-red-600 p-2 ">{error}</div>}
        </form>

        <p className="text-center text-black mt-4 ">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-[#ff8a65]  font-bold hover:underline"
          >
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
