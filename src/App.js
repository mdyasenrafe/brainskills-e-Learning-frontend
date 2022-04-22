import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import EnrollCourse from "./pages/EnrollCourse/EnrollCourse";
import Navbar from "./pages/Home/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "./pages/Shared/Footer/Footer";
import CartDetails from "./pages/Cart/CartDetails";
import Courses from "./pages/Home/Courses/Courses";
import Overview from "./pages/CourseDetails/Overview/Overview";
import Curriculum from "./pages/CourseDetails/Curriculum/Curriculum";
import Instructor from "./pages/CourseDetails/Instructor/Instructor";
import ReviewsCourse from "./pages/CourseDetails/ReviewsCourse/ReviewsCourse";
import Process from "./pages/Recipet/Process";
import Sucess from "./pages/Recipet/Sucess";
import Failed from "./pages/Recipet/Failed";
import Classes from './pages/Classes/Classes';
import UserDashboard from "./pages/UserDashboard/UserDashboard/UserDashboard";
import UserProfile from "./pages/UserDashboard/UserProfile/UserProfile";
import UserAddress from "./pages/UserDashboard/UserAddress/UserAddress";
import UserOrderHistory from "./pages/UserDashboard/UserOrderHistory/UserOrderHistory";
import UserCertificate from "./pages/UserDashboard/UserCertificate/UserCertificate";
import UserEducation from "./pages/UserDashboard/UserEducation/UserEducation";
import CreateAdmin from "./pages/UserDashboard/CreateAdmin/CreateAdmin";
import AddNewCourse from "./pages/UserDashboard/AddNewCourse/AddNewCourse";
import Bookmark from "./pages/Bookmark/Bookmark";
import CourseQuiz from "./pages/CourseQuiz/CourseQuiz";
import UserOverView from "./pages/UserDashboard/UserOverView/UserOverView";
import Location from "./pages/Location/Location";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/payment/failure/:id" element={<Process />} />
        <Route path="/payment/success/:id" element={<Sucess />} />
        <Route path="/payment/processing/:id" element={<Failed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/course" element={<Courses />}></Route>
        <Route path="/quiz" element={<CourseQuiz />}></Route>
        <Route>
          <Route path="/bookmark" element={<Bookmark />} />
        </Route>
        {/* course details // //*/}
        <Route path="/courseDetails/:id" element={<CourseDetails />}>
          <Route path="overview" element={<Overview />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="reviews" element={<ReviewsCourse />} />
          <Route path="" element={<Overview />} />
        </Route>
        {/* classes  */}
        <Route path="/classes" element={<Classes />} />
        {/* */}
        {/* user dashboard  */}
        <Route path="/userDashboard" element={<UserDashboard />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="address" element={<UserAddress />} />
          <Route path="overView" element={<UserOverView />} />
          <Route path="enrollcourse" element={<EnrollCourse />} />
          <Route path="education" element={<UserEducation />} />
          <Route path="orderHistory" element={<UserOrderHistory />} />
          <Route path="certificate" element={<UserCertificate />} />
          <Route path="createAdmin" element={<CreateAdmin />} />
          <Route path="addNewCourse" element={<AddNewCourse />} />
          <Route path="" element={<UserProfile />} />
        </Route>
        {/*  */}
        <Route path="/login" element={<Login />} />
        <Route path="/enrollcourse" element={<EnrollCourse />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
