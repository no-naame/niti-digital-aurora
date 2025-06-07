
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
