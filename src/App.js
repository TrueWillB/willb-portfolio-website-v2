// n
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
// import MainSite from "./components/MainSite";
import Navigation from "./components/Navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="willb-portfolio-website-v2/" element={<Home />} />
        <Route path="willb-portfolio-website-v2/about" element={<About />} />
        <Route
          path="willb-portfolio-website-v2/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="willb-portfolio-website-v2/contact"
          element={<Contact />}
        />
        <Route path="willb-portfolio-website-v2/resume" element={<Resume />} />
        git pull
      </Routes>
      <footer>
        <a
          href="https://github.com/jordanolguin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/jordan-olguin-5897b7280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </footer>
    </Router>
  );
}
