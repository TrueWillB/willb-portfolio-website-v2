// n
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
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
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        git pull
      </Routes>
      <footer>
        <a
          href="https://github.com/TrueWillB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={32} />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/william-brown-0754a063/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </footer>
    </HashRouter>
  );
}
