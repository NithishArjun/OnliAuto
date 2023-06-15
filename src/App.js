
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
