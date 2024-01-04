import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import BodyBg from "./ui/BodyBg";
import FinishQuiz from "./pages/FinishQuiz";

function App() {
  return (
    <BrowserRouter>
      <BodyBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finished" element={<FinishQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
