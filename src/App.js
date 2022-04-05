import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./pages/Home/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "./pages/Shared/Footer/Footer";

function App() {
  const location = useLocation();
  const pn = location.pathname;
  let pathName = pn?.substring(1);
  // title
  useEffect(() => {
    if (pn === "/") {
      document.title = "home";
    } else {
      document.title = pathName;
    }
  }, [location]);

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/8" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
