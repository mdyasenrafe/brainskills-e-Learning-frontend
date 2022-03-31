import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";



function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/8" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
