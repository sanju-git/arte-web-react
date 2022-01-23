import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import AboutUs from "./AboutUs";
import Courses from "./components/Courses";
import Products from "./components/Products";
import Career from "./components/Career";
import Footer from "rc-table/lib/Footer";

function App() {
  return (
    <div className="body-wrap" style={{ height: "100vh" }} draggable="false">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/contact-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
