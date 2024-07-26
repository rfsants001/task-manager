import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import img from "./assets/fantasy-bg.jpg";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex gap-6 w-screen h-screen m-0">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
