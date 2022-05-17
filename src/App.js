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
import ReviewsCourse from "./pages/CourseDetails/ReviewsCourse/ReviewsCourse";
import Process from "./pages/Recipet/Process";
import Sucess from "./pages/Recipet/Sucess";
import Failed from "./pages/Recipet/Failed";
import Classes from "./pages/Classes/Classes";
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
import GetUser from "./hooks/GetUser";
//import LoadingSpiners from "./Componets/LoadingSpiners";
import UserOverView from "./pages/UserDashboard/UserOverView/UserOverView";
import DashboardCourses from "./pages/UserDashboard/DashboardCourses/DashboardCourses";
import PrivateRoute from "./Componets/PrivateRoute";
import AddTeacher from "./pages/UserDashboard/AddTecher/AddTeacher";
//import Location from "./pages/Location/Location";
// import { v4 as uuId } from "uuid"
import ChatBody from "./pages/SocketIo/ChatBody/ChatBody";
import AddQuiz from "./pages/AdminDashboard/AddQuiz";
import QuizList from "./pages/AdminDashboard/QuizList";
import AddEvent from "./pages/AdminDashboard/AddEvent";
import Instructor from "./pages/Home/Instructor/Instructor";
// DetailsInstructor import
import DetailsInstructor from "./pages/CourseDetails/Instructor/Instructor";
import Events from "./pages/Home/Events/Events";
import AddBlog from "./pages/AdminDashboard/AddBlog";
import BlogDetail from "./pages/Home/Blog/BlogDetail";

function App() {
  const { loading } = GetUser();
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
        {/* <Route path="/location" element={<Location />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/payment/failure/:id" element={<Process />} />
        <Route path="/payment/success/:id" element={<Sucess />} />
        <Route path="/payment/processing/:id" element={<Failed />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* {events Route  */}
        <Route path="/events" element={<Events />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/course" element={<Courses />}></Route>
        {/* course details*/}
        <Route path="/quiz" element={<CourseQuiz />}></Route>
        <Route path="/chat" element={<ChatBody />}></Route>
        {/* <Route path={`/chat/${uuId()}`} element={<Room />}></Route> */}
        <Route>
          <Route
            path="/bookmark"
            element={
              <PrivateRoute>
                <Bookmark />
              </PrivateRoute>
            }
          />
        </Route>
        {/* course details*/}
        <Route
          path="/courseDetails/:id"
          element={
            <PrivateRoute>
              <CourseDetails />
            </PrivateRoute>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="instructor" element={<DetailsInstructor />} />
          <Route path="reviews" element={<ReviewsCourse />} />
          <Route path="" element={<Overview />} />
        </Route>
        {/* classes  */}
        <Route path="/classes/:id" element={<Classes />} />
        <Route path="/quiz" element={<CourseQuiz />} />
        {/* */}
        {/* user dashboard  */}
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="address"
            element={
              <PrivateRoute>
                <UserAddress />
              </PrivateRoute>
            }
          />
          <Route
            path="overView"
            element={
              <PrivateRoute>
                <UserOverView />
              </PrivateRoute>
            }
          />
          <Route
            path="education"
            element={
              <PrivateRoute>
                <UserEducation />
              </PrivateRoute>
            }
          />
          <Route
            path="orderHistory"
            element={
              <PrivateRoute>
                <UserOrderHistory />
              </PrivateRoute>
            }
          />
          <Route path="certificate" element={<UserCertificate />} />
          <Route path="createAdmin" element={<CreateAdmin />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="addNewCourse" element={<AddNewCourse />} />
          <Route path="addEvent" element={<AddEvent />} />
          <Route
            path="courses"
            element={<DashboardCourses title={"Courses"} />}
          />
          <Route path="addInstructor" element={<AddTeacher />} />
          <Route path="addQuiz" element={<AddQuiz />} />
          <Route path="addQuiz/:id" element={<QuizList />} />
          <Route path="" element={<UserProfile />} />
        </Route>
        {/* */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/myCourses"
          element={
            <PrivateRoute>
              <EnrollCourse />
            </PrivateRoute>
          }
        />
        <Route path="/classes" element={<Classes />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/location" element={<Location />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
