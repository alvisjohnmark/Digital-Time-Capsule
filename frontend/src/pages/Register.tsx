import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-[#ece3ca]">
      <NavLink
        to="/"
        className="absolute top-5 left-5 flex items-center gap-2 text-[#4b5320] font-bold text-lg hover:underline"
      >
        <MoveLeft size={28} strokeWidth={1.75} />
        <span>Back to Home</span>
      </NavLink>
      <div className="w-full max-w-md p-8 bg-[#ffffff] rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-bold text-[#4b5320] mb-6">
          Sign in with Digicap
        </h2>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label text-[#4b5320] font-bold text-lg">
              <span>Email</span>
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered bg-[#ffffff] border-4 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
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
              className="input input-bordered bg-[#ffffff] border-4 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
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
              className="input input-bordered bg-[#ffffff] border-4 border-[#4b5320] text-[#4b5320] text-lg px-4 py-3 rounded-md w-full"
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn w-full bg-[#4b5320] text-white text-lg font-semibold py-3 rounded-md shadow-lg hover:bg-[#6a7d47]"
            >
              Register
            </button>
          </div>
          {error && (
            <div className="bg-red-600 text-white text-center rounded-md p-2">
              <p>{error}</p>
            </div>
          )}
        </form>
        <p className="text-end text-black mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-[#939e59] font-bold hover:underline"
          >
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
}
