import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import authMiddleware from "../middlewares/middleware.js";

const router = express.Router();

// auth routes
router.post("/login", loginUser);
router.post("/register", registerUser);

// protected routes
router.get("/verifyToken", authMiddleware, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;