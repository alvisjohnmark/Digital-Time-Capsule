import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Capsules from "./pages/Capsules";
import About from "./pages/About";
import Features from "./pages/Features";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/capsules" element={<Capsules />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
