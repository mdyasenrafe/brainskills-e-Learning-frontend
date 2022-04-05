import { Route, Routes, } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";
import Failed from "../../Recived/Failed";
import Sucess from "../../Recived/Sucess";
import Process from "../../Recived/Process";

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
        <Route path="/payment/failure/:id" element={<Process />} />
        <Route path="/payment/success/:id" element={<Sucess />} />
        <Route path="/payment/processing/:id" element={<Failed />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>


    </div>
  );
}

export default App;
