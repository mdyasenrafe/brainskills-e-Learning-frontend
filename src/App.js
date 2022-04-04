import { Route, Routes, } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  // const location = useLocation();
  // const pn = location.pathname;
  // let pathName = pn?.substring(1);
  // // title
  // useEffect(() => {
  //   if (pn === "/") {
  //     document.title = "home";
  //   } else {
  //     document.title = pathName;
  //   }
  // }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
