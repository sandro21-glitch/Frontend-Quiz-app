import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import BodyBg from "./ui/BodyBg";

function App() {
  return (
    <BrowserRouter>
      <BodyBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
