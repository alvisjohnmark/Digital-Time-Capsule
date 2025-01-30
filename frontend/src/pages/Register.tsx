import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const clearFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); 

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        name,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Register Successful!", { autoClose: 1500 });

        setTimeout(() => {
          setError("")
          navigate("/capsules");
        }, 1500);

        clearFields();
      } else if (response.data.message === "User already exists") {
        setError(response.data.message);
      } else {
        setError("An error occurred, please try again!");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error(error);
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
          Sign in with Digicap
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label text-[#4b5320] font-bold text-lg">
              <span>Name</span>
            </label>
            <input
              type="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className=" border-3 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
            />
          </div>
          <div className="form-control">
            <label className="label text-[#4b5320] font-bold text-lg">
              <span>Email</span>
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className=" border-3 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
            />
          </div>

          <div className="form-control">
            <label className="label text-[#4b5320] font-bold text-lg">
              <span>Password</span>
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className=" border-3 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
            />
          </div>
          <div className="form-control">
            <label className="label text-[#4b5320] font-bold text-lg">
              <span>Confirm Password</span>
            </label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className=" border-3 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn w-full bg-[#ff8a65] cursor-pointer text-white text-lg font-semibold py-3 rounded-md shadow-lg "
            >
              Register
            </button>
            <ToastContainer />
          </div>
          {error && (
            <div className=" text-red-600  p-2">
              <p>{error}</p>
            </div>
          )}
        </form>
        <p className="text-center text-black mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-[#ff8a65] font-bold hover:underline"
          >
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
}
