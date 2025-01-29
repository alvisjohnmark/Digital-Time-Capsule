import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  console.log("Auth middleware triggered");

  const authHeader = req.header("Authorization");
  if (!authHeader) {
    console.log("No Authorization header provided.");
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("No token provided.");
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Token is valid. User authenticated.");
    next();
  } catch (error) {
    console.log("Invalid token.");
    res.status(400).json({ message: "Invalid token." });
  }
};

export default authMiddleware;