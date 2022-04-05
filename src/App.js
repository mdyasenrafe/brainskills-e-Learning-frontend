import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./pages/Home/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "./pages/Shared/Footer/Footer";
import CartDetails from "./pages/Cart/CartDetails";
import Courses from "./pages/Home/Courses/Courses/Courses";
import Overview from "./pages/CourseDetails/Overview/Overview";
import Curriculum from "./pages/CourseDetails/Curriculum/Curriculum";
import Instructor from "./pages/CourseDetails/Instructor/Instructor";
import ReviewsCourse from "./pages/CourseDetails/ReviewsCourse/ReviewsCourse";
import Process from "./pages/Recipet/Process";
import Sucess from "./pages/Recipet/Sucess";
import Failed from "./pages/Recipet/Failed";


function App() {
  const location = useLocation();
  const pn = location.pathname;
  let pathName = pn?.substring(1);
  // title
  useEffect(() => {
    if (pn === "/") {
      document.title = "B-Skills";
    } else {
      document.title = pathName;
    }
  }, [location]);

  return (
    <div>
      <Navbar></Navbar>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/payment/failure/:id" element={<Process />} />
        <Route path="/payment/success/:id" element={<Sucess />} />
        <Route path="/payment/processing/:id" element={<Failed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/course" element={<Courses />}>
        </Route>
        {/* course details*/}
        <Route path="/courseId" element={<CourseDetails />}>
          <Route path="overview" element={<Overview />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="reviews" element={<ReviewsCourse />} />
          <Route path="" element={<Overview />} />
        </Route>
        {/* */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
