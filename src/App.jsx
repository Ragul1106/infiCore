// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Projects from "./pages/Projects";
import Colleges from "./pages/Colleges";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>

      <Footer />
    {/* </BrowserRouter> */}
    </HashRouter>
      
  );
}

export default App;