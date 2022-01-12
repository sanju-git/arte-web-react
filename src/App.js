import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GalleryView from "./components/GallerView";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gallery" element={<GalleryView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
